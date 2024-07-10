var loadingDiv = document.querySelector(".loading-div");
const tableBody = document.querySelector(".tbodyTask");

// link shhet : https://docs.google.com/spreadsheets/d/1-ctOf4DgYl2m2yeXwrjU2WXV8Nc7VL_NbftWGz2tLXg/edit#gid=350245505
async function getTasks() {
  const baseUrl = `https://srm-vbc7.onrender.com/api/projects`;
  const token =
    "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(baseUrl, { headers });
    const data = await response.json();
    console.log(data.data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// async function getreportedTasks() {
//   const baseUrl = `https://srm-vbc7.onrender.com/api/project-reports`;
//   const token =
//     "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };
//   try {
//     const response = await fetch(baseUrl, { headers });
//     const data = await response.json();
//     console.log(data.data[0].attributes);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

var overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.display = "none";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
overlay.style.backdropFilter = "blur(5px)";
overlay.style.zIndex = "1";
document.body.appendChild(overlay);

function change() {
  loadingDiv.style.display = "block";
  overlay.style.display = "block";
}

function hide() {
  overlay.style.display = "none";
  loadingDiv.style.display = "none";
}

const projectPush = [];

console.log(projectPush);

async function displayProjects() {
  change();

  //   const reportedTasks = await getreportedTasks();

  //   console.log(reportedTasks.data);

  const projects = await getTasks();

  // if (!projects || !Array.isArray(projects)) {
  //   console.error("Invalid or undefined projects array");
  //   return;
  // }

  tableBody.innerHTML = "";
  console.log(tableBody.childNodes);

  const Dep = localStorage.getItem("myDepartment");

  for (let i = 0; i < projects.data.length; i++) {
    // if (projects.data[i].attributes.department === Dep) {
    // }
    let project = {
      id: projects.data[i].id,
      projectName: projects.data[i].attributes.name,
      projectDescription: projects.data[i].attributes.description,
      emp: projects.data[i].attributes.emp,
    };

    if (project.emp === null) {
      project.emp = "";
    }

    if (project.note === null) {
      project.note = "";
    }

    if (project) {
      projectPush.push(project);
    }

    // console.log(typeof project.From);

    var newRow = document.createElement("tr");

    const formattedTime = new Date(project.From).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const formattedTime1 = new Date(project.To).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // const formattedLateness = new Date(project.Lateness).toLocaleTimeString("en-US", {
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });

    // const formattedEndTime = new Date(project.To).toISOString().slice(0, 19).replace('T', ' ');

    // currant = new Date();
    // const currantTime = currant.toLocaleTimeString("en-US", {
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });

    const myDate = new Date().getHours() < new Date(project.To).getHours();
    if (myDate === true) {
      newRow.style.backgroundColor = "lightgreen";
    }
    // console.log( myDate)
    // console.log(currantTime.split(":")[0]);

    const timeVariance =
      new Date(project.Lateness).getHours() +
      ":" +
      new Date(project.Lateness).getMinutes();
    // console.log(new Date(project.To).getHours().valueOf());
    // const myDate = new Date(project.To).getHours().valueOf() - new Date().getHours().valueOf();
    // console.log(new Date(project.To).getHours().valueOf() + " - " + new Date().getHours().valueOf() + " = " + myDate);
    // if (myDate >= 1) {
    //   newRow.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    // }

    // function computeTimeVariance(projectEndTime) {
    //   const currentTime = new Date();
    //   const endTime = new Date(projectEndTime);
    //   let timeDifference = new Date(endTime - currentTime);

    //   let sign = '';
    //   if (timeDifference < 0) {
    //     sign = '-';
    //     timeDifference.setSeconds(timeDifference.getSeconds() * -1);
    //   }

    //   let hours = timeDifference.getUTCHours() % 12 || 12;
    //   const minutes = timeDifference.getUTCMinutes().toString().padStart(2, '0');
    //   const seconds = timeDifference.getUTCSeconds().toString().padStart(2, '0');

    //   hours = hours.toString().padStart(2, '0');

    //   return `${sign}${hours}:${minutes}:${seconds} `;
    // }

    // const projectEndTime = '09:00:00'; // 9:00:00 PM
    // const timeVariance = computeTimeVariance(projectEndTime);
    // console.log(timeVariance);

    const userr = localStorage.getItem("myCode");

    newRow.innerHTML = `
    

      <td class="text-center align-middle fw-bold">${project.projectName}</td>
      <td class="text-center align-middle fw-bold ">${project.projectDescription}</td>
      <td class="text-center align-middle fw-bold">${project.emp}</td>
      <td class="text-center align-middle fw-bold">
      <div class="d-flex justify-content-center align-items-center">
        <div>
            <button id="editProjectBtn" type="button" data-bs-toggle="modal" data-bs-target="#editProject" data-toggle="tooltip" title="Edit" class="btn btn-primary justify-content-center align-items-center  editBtn mx-2">
                <i class="fas fa-pen-to-square"></i>
            </button>

        </div>
  
        <div class="modal fade" id="editProject" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Please Write Your Note
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
  
              <form method="POST" id="frmTaskReport">
                  <div class="form-group form-floating mb-3 frmDivreport ">
                    <div class="form-group form-floating mt-3" style="display:none ;">
                      <input name="emp" type="text" id="EmpReport" class="form-control">
                      <label for="EmpReport">Employee</label>
                    </div>
                  </div>

                  <div class="form-group form-floating" style="display:none ;">
                    <input name="id" type="number" placeholder="Scholarship" id="idProject" value="${project.id}"
                      class="form-control">
                    <label for="idProject">Scholarship</label>
                  </div>
  
                  <div class="form-group form-floating mt-3" style="display:none ;">
                            <input name="Employee" type="text" id="editProjectEmployee" class="form-control">
                            <label for="editProjectEmployee">Employee</label>
                          </div>


                          <div class="form-group form-floating mt-3">
                            <input name="task Name" type="text" placeholder="Student Num" id="projectName" value="${project.projectName}"
                              class="form-control">
                            <label for="projectName">Project Name</label>
                          </div>

                          <div class="form-group form-floating mt-3">
                            <input name="projectDescription" type="text" id="projectDescription" class="form-control" value="${project.projectDescription}">
                            <label for="projectDescription">Description</label>
                          </div>

                  
  
                  <div class="my-3">
                    <div class="error-message"></div>
                    <div dir="ltr" class="sent-message text-center alert alert-success d-none"></div>
                  </div>
                  
                  <div class="d-flex justify-content-center mx-auto mt-3" style="width: fit-content;">
                    <button class="btn btn-primary scrollto btn-info text-light d-flex reportSubmitBtn" type="submit">
                      Submit
                      <div id="spinner-container1"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      <div method="POST" class="frmSendInvoice">
                    <input type="text" name="Serial" id="Serial" style="display:none ;">
                    <input type="text" name="Timestamp" class ="Timestamp"  style="display:none ;"> 
                    <input type="text" name="Employee" class ="Employee" value="" style="display:none ;"> 
                    <input type="number" name="Student Num" class ="StudentNum" value="" style="display:none ;"> 
                        <button id="deleteProjectBtn" type="submit" class="btn btn-danger justify-content-center align-items-center mx-2" data-toggle="tooltip" title="Delete">
                <i class="fas fa-trash-alt fa-lg"></i>
            </button>
                </div>

        </div>
      </td>
      `;

    let reportBtn = newRow.querySelector("#reportBtn");

    const myDate2 = new Date().getHours() < new Date(project.From).getHours();
    if (myDate2 === true) {
      reportBtn.style.display = "none";
    }

    let follow = newRow.querySelector(".follow");
    let notDone = newRow.querySelector(".notDone");
    let done = newRow.querySelector(".done");
    // console.log(follow);

    let frmTaskReport = document.querySelector("#frmTaskReport");
    // console.log(frmTaskReport);

    let selectStatus = newRow.querySelector("#selectStatus");
    let Range = newRow.querySelector(".Range");

    // console.log(reportBtn.childNodes[1]);
    // let iconReport = editProjectBtn.childNodes[1];
    let reportSubmitBtn = newRow.querySelector(".reportSubmitBtn");

    const iconsInRow = newRow.querySelectorAll(".qrIcon");

    // if (project.report === "Done") {
    //   reportBtn.classList.add("btn-success");
    //   reportBtn.disabled = true;
    // } else if (project.report === "Follow") {
    //   reportBtn.classList.add("btn-warning");
    //   reportBtn.disabled = false;
    // } else if (project.report === "Not Done") {
    //   reportBtn.classList.add("btn-danger");
    //   reportBtn.disabled = true;
    // } else {
    //   reportBtn.style.backgroundColor = "gray";
    //   reportBtn.disabled = false;
    // }

    // if (reportBtn.classList.contains("btn-warning")) {
    //   follow.classList.remove("d-block");
    //   notDone.classList.add("d-block");
    // }

    const editProjectBtn = newRow.querySelector("#editProjectBtn");
    // console.log(editProjectBtn);

    editProjectBtn.addEventListener("click", () => {
      const userr = localStorage.getItem("myCode");
      const projectDescription = document.querySelector("#projectDescription");
      const projectName = document.querySelector("#projectName");
      const idProject = document.querySelector("#idProject").value;
      console.log(project.id);

      if (!userr) {
        return;
      }
      // console.log(reportSubmitBtn);

      if (project) {
        // console.log(project[i].id);
        projectDescription.value = project.projectDescription;
        projectName.value = project.projectName;
      }
    });

    // for update data
    // // Set up fetch options
    // let requestOptions = {
    //   method: "Put",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization:
    //       "Bearer f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de",
    //   },
    //   body: JSON.stringify({
    //     data: {
    //       id: idTask,
    //     },
    //   }),
    // };

    // // Perform fetch
    // console.log(`https://srm-vbc7.onrender.com/api/today-tasks/${idTask}`);

    // fetch(
    //   `https://srm-vbc7.onrender.com/api/today-tasks/${idTask}`,
    //   requestOptions
    // )
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`${response.status}`);
    //     }
    //     // console.log(response.json());
    //     return response.json();
    //   })
    //   .then((result) => {
    //     // Handle success
    //     alertMsg.classList.add("alert", "alert-success");
    //     alertMsg.innerHTML =
    //       "<strong>Success!</strong> project added successfully.";
    //     alertMsg.style.display = "block";
    //     alertMsg.style.width = "25%";
    //     alertMsg.style.position = "fixed";
    //     alertMsg.style.top = "0";
    //     alertMsg.style.left = "38%";
    //     alertMsg.style.margin = "20px";
    //     alertMsg.style.transition = "all 0.5s ease-in-out";0
    //     alertMsg.style.opacity = "0";
    //     setTimeout(function () {
    //       alertMsg.style.opacity = "1";
    //     }, 10);
    //     setTimeout(function () {
    //       window.location.reload();
    //       alertMsg.style.display = "none";
    //     }, 2000);
    //   })
    //   .catch((error) => {
    //     // Handle error
    //     alertMsg.classList.add("alert", "alert-danger");
    //     alertMsg.style.width = "25%";
    //     alertMsg.style.position = "fixed";
    //     alertMsg.style.top = "0";
    //     alertMsg.style.left = "38%";
    //     alertMsg.style.margin = "20px";
    //     alertMsg.style.transition = "all 0.5s ease-in-out";
    //     alertMsg.innerHTML =
    //       "<strong>Error!</strong> An error occurred: " +
    //       error.message +
    //       ". Please try again.";
    //     alertMsg.style.display = "block";
    //     alertMsg.style.opacity = "0";
    //     setTimeout(function () {
    //       alertMsg.style.opacity = "1";
    //     }, 10);
    //     setTimeout(function () {
    //       alertMsg.style.display = "none";
    //     }, 2000);
    //   })
    //   .finally(() => {
    //     // Hide spinner and close modal
    //     document.getElementById("spinner-container1").innerHTML = "";
    //     jQuery("#addProject").modal("hide");
    //     $("#addProject").on("hidden.bs.modal", function (e) {
    //       $(".modal-backdrop").remove();
    //     });
    //   });

    // if (reportBtn.classList.contains('btn-warning')) {
    // }

    // console.log(Range);
    // selectStatus.addEventListener("change", (e) => {
    //   if (e.target.value === "Follow") {
    //     console.log(e.target.value);
    //     Range.style.display = "block";
    //   } else {
    //     Range.style.display = "none";
    //     document.getElementById("customRange2").value = "10";
    //   }
    // });

    // selectStatus.addEventListener("change", (e) => {
    //   if (e.target.value === "Not Done") {
    //   } else {
    //     document.getElementById("customRange2").value = "10";
    //   }
    // });

    //   reportSubmitBtn.addEventListener("click", async () => {
    //     // Simulate AJAX request success
    //     for (let i = 0; i < tableBody.childNodes.length; i++) {
    //       tableBody.childNodes[i].style.color = "green";
    //     }
    //   });

    tableBody.appendChild(newRow);
  }

  // document
  //   .querySelector("#frmTaskReport")
  //   .addEventListener("submit", function (e) {
  //     e.preventDefault();

  //     // Gather form data
  //     const TaskNo = document.getElementById("ReportTaskNum").value;
  //     const Employee = document.getElementById("EmpReport").value;
  //     const Status = document.getElementById("selectStatus").value;
  //     const Range = document.getElementById("customRange2").value;
  //     const Note = document.getElementById("reportNote").value;
  //     const projectFound = document.getElementById("projectCase").value;

  //     const idTask = document.getElementById("idTask").value;

  //     console.log(Employee, Status, Range, Note, idTask);

  //     let requestPost = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "Bearer f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de",
  //       },
  //       body: JSON.stringify({
  //         data: {
  //           // id: idTask,
  //           project_No: TaskNo,
  //           emp: Employee,
  //           project_completion: Range,
  //           report: Status,
  //           note: Note,
  //           project_found: projectFound,
  //         },
  //       }),
  //     };

  //     fetch(
  //       "https://srm-vbc7.onrender.com/api/project-reports",
  //       requestPost
  //     ).then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`${response.status}`);
  //       }
  //       // console.log(response.json());
  //       return response.json();
  //     });

  //     // Set up fetch options
  //     let requestOptions = {
  //       method: "Put",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "Bearer f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de",
  //       },
  //       body: JSON.stringify({
  //         data: {
  //           // id: idTask,
  //           // project_No: TaskNo,
  //           emp: Employee,
  //           project_completion: Range,
  //           report: Status,
  //           note: Note,
  //           project_found: projectFound,
  //         },
  //       }),
  //     };

  //     // Display spinner
  //     var spinner =
  //       '<div class="text-center appSpi"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
  //     document.getElementById("spinner-container1").innerHTML = spinner;

  //     // Perform fetch
  //     console.log(`https://srm-vbc7.onrender.com/api/today-projects/${idTask}`);

  //     fetch(
  //       `https://srm-vbc7.onrender.com/api/today-projects/${idTask}`,
  //       requestOptions
  //     )
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`${response.status}`);
  //         }
  //         // console.log(response.json());
  //         return response.json();
  //       })
  //       .then((result) => {
  //         // Handle success
  //         alertMsg.classList.add("alert", "alert-success");
  //         alertMsg.innerHTML =
  //           "<strong>Success!</strong> Report sent successfully.";
  //         alertMsg.style.display = "block";
  //         alertMsg.style.width = "25%";
  //         alertMsg.style.position = "fixed";
  //         alertMsg.style.top = "0";
  //         alertMsg.style.left = "38%";
  //         alertMsg.style.margin = "20px";
  //         alertMsg.style.transition = "all 0.5s ease-in-out";
  //         alertMsg.style.opacity = "0";
  //         setTimeout(function () {
  //           alertMsg.style.opacity = "1";
  //         }, 10);
  //         setTimeout(function () {
  //           window.location.reload();
  //           alertMsg.style.display = "none";
  //         }, 2000);
  //       })
  //       .catch((error) => {
  //         // Handle error
  //         alertMsg.classList.add("alert", "alert-danger");
  //         alertMsg.style.width = "25%";
  //         alertMsg.style.position = "fixed";
  //         alertMsg.style.top = "0";
  //         alertMsg.style.left = "38%";
  //         alertMsg.style.margin = "20px";
  //         alertMsg.style.transition = "all 0.5s ease-in-out";
  //         alertMsg.innerHTML =
  //           "<strong>Error!</strong> An error occurred: " +
  //           error.message +
  //           ". Please try again.";
  //         alertMsg.style.display = "block";
  //         alertMsg.style.opacity = "0";
  //         setTimeout(function () {
  //           alertMsg.style.opacity = "1";
  //         }, 10);
  //         setTimeout(function () {
  //           alertMsg.style.display = "none";
  //         }, 2000);
  //       })
  //       .finally(() => {
  //         // Hide spinner and close modal
  //         document.getElementById("spinner-container1").innerHTML = "";
  //         jQuery("#reportTask").modal("hide");
  //         $("#reportTask").on("hidden.bs.modal", function (e) {
  //           $(".modal-backdrop").remove();
  //         });
  //       });
  //   });

  // Hide the loading overlay once the requests are processed
  hide();
}

displayProjects();

window.addEventListener("load", function () {
  if (
    localStorage.getItem("myCode") === "" ||
    localStorage.getItem("myCode") === null
  ) {
    // Redirect to index.html
    window.location.href = "index.html";
  }
});
