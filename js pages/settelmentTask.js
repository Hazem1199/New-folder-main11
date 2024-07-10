var loadingDiv = document.querySelector(".loading-div");
const tableBody = document.querySelector(".tbodyTask");

// link shhet : https://docs.google.com/spreadsheets/d/1-ctOf4DgYl2m2yeXwrjU2WXV8Nc7VL_NbftWGz2tLXg/edit#gid=350245505
async function getTasks() {
  const baseUrl = `https://srm-vbc7.onrender.com/api/today-tasks`;
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
//   const baseUrl = `https://srm-vbc7.onrender.com/api/task-reports`;
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

const taskPush = [];

console.log(taskPush);

async function displayTasks() {
  change();

//   const reportedTasks = await getreportedTasks();

//   console.log(reportedTasks.data);

  const tasks = await getTasks();

  // if (!tasks || !Array.isArray(tasks)) {
  //   console.error("Invalid or undefined tasks array");
  //   return;
  // }

  tableBody.innerHTML = "";
  console.log(tableBody.childNodes);

  const Dep = localStorage.getItem("myDepartment");

  for (let i = 0; i < tasks.data.length; i++) {
    if (tasks.data[i].attributes.department === 'Fifth Settlement') {
      let task = {
        id: tasks.data[i].id,
        TaskNo: tasks.data[i].attributes.task_no,
        TaskName: `<a target="_blank" href="${tasks.data[i].attributes.task_des_link}">${tasks.data[i].attributes.task_name}</a>`,
        Department: tasks.data[i].attributes.department,
        Responsible: tasks.data[i].attributes.responsible,
        TaskDesLink: tasks.data[i].attributes.task_des_link,
        Type: tasks.data[i].attributes.type,
        Days: tasks.data[i].attributes.days,
        From: tasks.data[i].attributes.fromm,
        To: tasks.data[i].attributes.too,
        emp: tasks.data[i].attributes.emp,
        note: tasks.data[i].attributes.note,
        report: tasks.data[i].attributes.report,
        task_completion: tasks.data[i].attributes.task_completion,
      };

      if (task.emp === null) {
        task.emp = "";
      }

      if (task.note === null) {
        task.note = "";
      }

      if (task) {
        taskPush.push(task);
      }

      // console.log(typeof task.From);

      var newRow = document.createElement("tr");

      const formattedTime = new Date(task.From).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const formattedTime1 = new Date(task.To).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      // const formattedLateness = new Date(task.Lateness).toLocaleTimeString("en-US", {
      //   hour: "2-digit",
      //   minute: "2-digit",
      // });

      // const formattedEndTime = new Date(task.To).toISOString().slice(0, 19).replace('T', ' ');

      // currant = new Date();
      // const currantTime = currant.toLocaleTimeString("en-US", {
      //   hour: "2-digit",
      //   minute: "2-digit",
      // });

      const myDate = new Date().getHours() < new Date(task.To).getHours();
      if (myDate === true) {
        newRow.style.backgroundColor = "lightgreen";
      }
      // console.log( myDate)
      // console.log(currantTime.split(":")[0]);

      const timeVariance =
        new Date(task.Lateness).getHours() +
        ":" +
        new Date(task.Lateness).getMinutes();
      // console.log(new Date(task.To).getHours().valueOf());
      // const myDate = new Date(task.To).getHours().valueOf() - new Date().getHours().valueOf();
      // console.log(new Date(task.To).getHours().valueOf() + " - " + new Date().getHours().valueOf() + " = " + myDate);
      // if (myDate >= 1) {
      //   newRow.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
      // }

      // function computeTimeVariance(taskEndTime) {
      //   const currentTime = new Date();
      //   const endTime = new Date(taskEndTime);
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

      // const taskEndTime = '09:00:00'; // 9:00:00 PM
      // const timeVariance = computeTimeVariance(taskEndTime);
      // console.log(timeVariance);

      const userr = localStorage.getItem("myCode");

      newRow.innerHTML = `

        <td class="text-center align-middle d-flex align-items-center">
        <div style="font-size: 14px;" class="fw-bold mx-1">
            (${task.TaskNo})
        </div>
        <div style="direction: rtl" class="fw-bold">
            ${task.TaskName}
        </div>
      </td>
      <td class="text-center align-middle fw-bold">${task.Responsible}</td>
      <td class="text-center align-middle fw-bold" style="font-size: 10px">${task.From}</td>
      <td class="text-center align-middle fw-bold" style="font-size: 10px">${task.To}</td>
      <td class="text-center align-middle fw-bold">
        <div>
            <button id="reportBtn" type="button" data-bs-toggle="modal" data-bs-target="#reportTask" toggle="tooltip" title="Report" class="btn justify-content-center align-items-center  reportBtn">
                <iconify-icon style="font-size: 20px; color: white" class="qrIcon  iconify-icon" icon="bi:bookmark-check-fill" width="18" height="18"></iconify-icon>
                <p class="mb-0"></p>
            </button>
        </div>
  
        <div class="modal fade" id="reportTask" tabindex="-1" aria-labelledby="exampleModalLabel"
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
  
                  <div class="form-group form-floating"  style="display:none ;">
                    <input name="task_no" type="text" placeholder="Scholarship" id="ReportTaskNum"
                      class="form-control">
                    <label for="ReportTaskNum">Scholarship</label>
                  </div>

                  <div class="form-group form-floating" style="display:none ;">
                    <input name="id" type="number" placeholder="Scholarship" id="idTask" value="${task.id}"
                      class="form-control">
                    <label for="ReportTimestamp">Scholarship</label>
                  </div>

                  <div class="form-group form-floating" style="display:none ;">
                    <input name="Timestamp" type="text" placeholder="Scholarship" id="ReportTimestamp"
                      class="form-control">
                    <label for="ReportTimestamp">Scholarship</label>
                  </div>

                  
                      <div class="form-floating mt-3 selectStatusDiv" >
                        <select class="form-select" id="selectStatus" name="report" >
                          <option selected></option>
                          <option class="done" value="Done">Done</option>
                          <option class="notDone" value="Not Done">Not Done</option>
                          <option class="follow" value="Follow">Follow</option>
                        </select>
                        <label for="selectStatus">Select Report Type</label>
                      </div>

                      <div class="form-floating mt-3 " >
                        <select class="form-select" id="taskCase" name="There are Task" >
                          <option selected></option>
                          <option  value="Yes">Yes</option>
                          <option  value="No">No</option>
                        </select>
                        <label for="taskCase">There are Task ?</label>
                      </div>

  
                      <div class="form-group mt-3 form-floating">
                        <textarea name="note" class="form-control" placeholder="Nots" id="reportNote"
                          rows="10" ></textarea>
                        <label for="reportNote" class="form-label">Write Your Note</label>
                      </div>
                  

                  

                    <div class="Range" style="display:none;">
                      <label for="customRange2" class="form-label">Task completion: <span id="customRangeValue"></span></label>
                      <input name="task_completion" type="range" class="form-range" min="0" max="10" id="customRange2" oninput="document.getElementById('customRangeValue').textContent = this.value;">
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
      </td>
      <td class="text-center align-middle fw-bold">${task.note}</td>

      <td class="text-center align-middle fw-bold">${task.emp}</td>

      `;

      let reportBtn = newRow.querySelector("#reportBtn");

      const myDate2 = new Date().getHours() < new Date(task.From).getHours();
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
      let iconReport = reportBtn.childNodes[1];
      let reportSubmitBtn = newRow.querySelector(".reportSubmitBtn");

      const iconsInRow = newRow.querySelectorAll(".qrIcon");

      if (task.report === "Done") {
        reportBtn.classList.add("btn-success");
        reportBtn.disabled = true;
      } else if (task.report === "Follow") {
        reportBtn.classList.add("btn-warning");
        reportBtn.disabled = false;
      } else if (task.report === "Not Done") {
        reportBtn.classList.add("btn-danger");
        reportBtn.disabled = true;
      } else {
        reportBtn.style.backgroundColor = "gray";
        reportBtn.disabled = false;
      }

      // if (reportBtn.classList.contains("btn-warning")) {
      //   follow.classList.remove("d-block");
      //   notDone.classList.add("d-block");
      // }

      reportBtn.addEventListener("click", () => {
        const userr = localStorage.getItem("myCode");
        const empReport = document.querySelector("#EmpReport");
        const ReportTaskNum = document.querySelector("#ReportTaskNum");
        const idTask = document.querySelector("#idTask");

        if (!userr) {
          return;
        }
        // console.log(reportSubmitBtn);

        empReport.value = userr;
        ReportTaskNum.value = task.TaskNo;
        idTask.value = task.id;
      });

      // if (reportBtn.classList.contains('btn-warning')) {
      // }

      // console.log(Range);
      selectStatus.addEventListener("change", (e) => {
        if (e.target.value === "Follow") {
          console.log(e.target.value);
          Range.style.display = "block";
        } else {
          Range.style.display = "none";
          document.getElementById("customRange2").value = "10";
        }
      });

      selectStatus.addEventListener("change", (e) => {
        if (e.target.value === "Not Done") {
        } else {
          document.getElementById("customRange2").value = "10";
        }
      });

      //   reportSubmitBtn.addEventListener("click", async () => {
      //     // Simulate AJAX request success
      //     for (let i = 0; i < tableBody.childNodes.length; i++) {
      //       tableBody.childNodes[i].style.color = "green";
      //     }
      //   });

      tableBody.appendChild(newRow);
    }
  }

  document
    .querySelector("#frmTaskReport")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Gather form data
      const TaskNo = document.getElementById("ReportTaskNum").value;
      const Employee = document.getElementById("EmpReport").value;
      const Status = document.getElementById("selectStatus").value;
      const Range = document.getElementById("customRange2").value;
      const Note = document.getElementById("reportNote").value;

      const idTask = document.getElementById("idTask").value;

      console.log(Employee, Status, Range, Note, idTask);

      let requestPost = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de",
        },
        body: JSON.stringify({
          data: {
            // id: idTask,
            task_No: TaskNo,
            emp: Employee,
            task_completion: Range,
            report: Status,
            note: Note,
          },
        }),
      };

      fetch("https://srm-vbc7.onrender.com/api/task-reports", requestPost).then(
        (response) => {
          if (!response.ok) {
            throw new Error(`${response.status}`);
          }
          // console.log(response.json());
          return response.json();
        }
      );

      // Set up fetch options
      let requestOptions = {
        method: "Put",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de",
        },
        body: JSON.stringify({
          data: {
            // id: idTask,
            // task_No: TaskNo,
            emp: Employee,
            task_completion: Range,
            report: Status,
            note: Note,
          },
        }),
      };

      // Display spinner
      var spinner =
        '<div class="text-center appSpi"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      document.getElementById("spinner-container1").innerHTML = spinner;

      // Perform fetch
      console.log(`https://srm-vbc7.onrender.com/api/today-tasks/${idTask}`);

      fetch(
        `https://srm-vbc7.onrender.com/api/today-tasks/${idTask}`,
        requestOptions
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`${response.status}`);
          }
          // console.log(response.json());
          return response.json();
        })
        .then((result) => {
          // Handle success
          alertMsg.classList.add("alert", "alert-success");
          alertMsg.innerHTML =
            "<strong>Success!</strong> Report sent successfully.";
          alertMsg.style.display = "block";
          alertMsg.style.width = "25%";
          alertMsg.style.position = "fixed";
          alertMsg.style.top = "0";
          alertMsg.style.left = "38%";
          alertMsg.style.margin = "20px";
          alertMsg.style.transition = "all 0.5s ease-in-out";
          alertMsg.style.opacity = "0";
          setTimeout(function () {
            alertMsg.style.opacity = "1";
          }, 10);
          setTimeout(function () {
            window.location.reload();
            alertMsg.style.display = "none";
          }, 2000);
        })
        .catch((error) => {
          // Handle error
          alertMsg.classList.add("alert", "alert-danger");
          alertMsg.style.width = "25%";
          alertMsg.style.position = "fixed";
          alertMsg.style.top = "0";
          alertMsg.style.left = "38%";
          alertMsg.style.margin = "20px";
          alertMsg.style.transition = "all 0.5s ease-in-out";
          alertMsg.innerHTML =
            "<strong>Error!</strong> An error occurred: " +
            error.message +
            ". Please try again.";
          alertMsg.style.display = "block";
          alertMsg.style.opacity = "0";
          setTimeout(function () {
            alertMsg.style.opacity = "1";
          }, 10);
          setTimeout(function () {
            alertMsg.style.display = "none";
          }, 2000);
        })
        .finally(() => {
          // Hide spinner and close modal
          document.getElementById("spinner-container1").innerHTML = "";
          jQuery("#reportTask").modal("hide");
          $("#reportTask").on("hidden.bs.modal", function (e) {
            $(".modal-backdrop").remove();
          });
        });
    });

  // Hide the loading overlay once the requests are processed
  hide();
}

displayTasks();




window.addEventListener("load", function () {
  if (
    localStorage.getItem("myCode") === "" ||
    localStorage.getItem("myCode") === null
  ) {
    // Redirect to index.html
    window.location.href = "index.html";
  }
});
