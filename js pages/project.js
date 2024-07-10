// Correct import of Composition API functions
const { createApp, ref, reactive, onMounted } = Vue;

// Define Vue component using Composition API
const App = {
  setup() {
    // Define a reactive variable to store the message
    const state = reactive({
      projects: [],
      status: [],
    });

    // Fetch the projects using the token
    const fetchProjects = async () => {
      const baseUrl = `https://srm-vbc7.onrender.com/api/projects`;
      const token =
        "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch(baseUrl, { headers });
      const data = await response.json();
      state.projects = data.data;
    };

    // Call the fetchProjects function on component mount
    onMounted(fetchProjects);

    // Function to delete a project
    const deleteProject = async (id) => {
      const confirmed = confirm(
        "Are you sure you want to delete this project? "
      );
      const deleteProject = document.querySelector(".deleteProject");
      const spinner = document.createElement("span");
      spinner.classList.add(
        "spinner-border",
        "spinner-border-sm",
        "ms-2",
        "d-none"
      );
      spinner.setAttribute("role", "status");
      spinner.setAttribute("aria-hidden", "true");
      deleteProject.appendChild(spinner);

      if (confirmed) {
        const baseUrl = `https://srm-vbc7.onrender.com/api/projects/${id}`;
        const token =
          "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await fetch(baseUrl, {
          method: "DELETE",
          headers,
        });
        const deletedProject = await response.json();
        console.log(deletedProject);
        const url2 = `https://srm-vbc7.onrender.com/api/projecthistories`;

        const user = localStorage.getItem("myCode");

        await fetch(url2, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              name: deletedProject.data.attributes.name,
              description: deletedProject.data.attributes.description,
              deleteby: user,
              status: deletedProject.data.attributes.status,
            },
          }),
        });

        await fetchProjects();
      }
    };

    // Function to create a new project

    const createProject = async () => {
      const modal = document.createElement("div");
      modal.classList.add("modal", "fade");
      modal.setAttribute("id", "projectNameModal");
      modal.setAttribute("tabindex", "-1");
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-labelledby", "projectNameModalLabel");
      modal.setAttribute("aria-hidden", "true");

      const dialog = document.createElement("div");
      dialog.classList.add("modal-dialog", "modal-dialog-centered");

      const content = document.createElement("div");
      content.classList.add("modal-content");

      const header = document.createElement("div");
      header.classList.add("modal-header");
      header.innerHTML = `<h5 class="modal-title" id="projectNameModalLabel">Create project</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

      const body = document.createElement("div");
      body.classList.add("modal-body");
      body.innerHTML = `<form><label class="fw-semibold" for="projectName">Name:</label><input type="text" id="projectNameInput" class="form-control" required>

        <label class="fw-semibold" for="projectDescription">Description:</label><input type="text" id="projectDescriptionInput" class="form-control" required>
        
        <label class="fw-semibold" for="projectList">Project Type:</label><select id="projectList" class="form-select ">
            <option value=""></option>
            <option value="Branch">Branch</option>
            <option value="Training Program">Training Program</option>
            <option value="System">System</option>
        </select>
      
        <button id="advancedButton" class="btn btn-outline-secondary btn-sm mt-3">Advanced Setting</button>
        

        <div class="advancedOptions d-none">
            <label class="fw-semibold" for="projectStartTime">From:</label><input type="datetime-local" id="projectStartTime" class="form-control">
            <label class="fw-semibold" for="projectEndTime">To:</label><input type="datetime-local" id="projectEndTime" class="form-control">
        </div>
    </form>`;

      const footer = document.createElement("div");
      footer.classList.add("modal-footer");
      footer.innerHTML = `<div class="d-flex justify-content-center"><div class="btn-group" role="group" aria-label="projectModalButtonGroup"> <button type="button" class="btn btn-primary" id="createButton">Create</button> </div></div>`;
      content.appendChild(header);
      content.appendChild(body);
      content.appendChild(footer);
      dialog.appendChild(content);
      modal.appendChild(dialog);

      document.body.appendChild(modal);

      const projectModal = new bootstrap.Modal(modal);
      projectModal.show();

      const user = localStorage.getItem("myCode");
      const alertMsg = document.querySelector(".alertMsg");
      const formCheck = document.querySelector(".formCheck");

      const createBtn = modal.querySelector("#createButton");
      const spinner = document.createElement("span");
      spinner.classList.add(
        "spinner-border",
        "spinner-border-sm",
        "ms-2",
        "d-none"
      );
      spinner.setAttribute("role", "status");
      spinner.setAttribute("aria-hidden", "true");
      createBtn.appendChild(spinner);

      modal
        .querySelector("#createButton")
        .addEventListener("click", async (e) => {
          e.preventDefault();
          spinner.classList.remove("d-none");

          const newName = modal.querySelector("#projectNameInput").value;
          const newDescription = modal.querySelector(
            "#projectDescriptionInput"
          ).value;
          const projectList = modal.querySelector("#projectList").value;
          console.log(projectList);
          const projectStartTime =
            modal.querySelector("#projectStartTime").value;
          const projectEndTime = modal.querySelector("#projectEndTime").value;

          projectStartTime.required = projectList === "Training Program";
          projectEndTime.required = projectList === "Training Program";

          const url = `https://srm-vbc7.onrender.com/api/projects`;
          const url2 = `https://srm-vbc7.onrender.com/api/projecthistories`;
          const token =
            "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";

          await fetch(url, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: {
                name: newName,
                description: newDescription,
                emp: user,
                status: "open",
                projectType: projectList,
                from: projectStartTime,
                to: projectEndTime,
              },
            }),
          });

          await fetch(url2, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: {
                name: newName,
                description: newDescription,
                createby: user,
                status: "open",
                projectType: projectList,
                from: projectStartTime,
                to: projectEndTime,
              },
            }),
          })
            .then((result) => {
              // Handle success
              alertMsg.classList.add("alert", "alert-success");
              alertMsg.innerHTML =
                "<strong>Success!</strong> project added successfully.";
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
            });

          await fetchProjects();
          projectModal.hide();
          spinner.classList.add("d-none");
        });

      // Function to toggle advanced options visibility
      function toggleAdvancedOptions(e) {
        e.preventDefault();
        let advancedOptions = modal.querySelector(".advancedOptions");
        if (advancedOptions.classList.contains("d-none")) {
          advancedOptions.classList.remove("d-none");
        } else {
          advancedOptions.classList.add("d-none");
        }
      }

      // Attach event listener for the button to toggle advanced options
      let advancedButton = modal.querySelector("#advancedButton");
      advancedButton.addEventListener("click", toggleAdvancedOptions);
    };

    // Function to edit a project
    const editProject = async (projectId) => {
      try {
        const url = `https://srm-vbc7.onrender.com/api/projects/${projectId}`;
        const token =
          "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";

        const data = await (
          await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
        ).json();

        const project = data.data;

        const modal = document.createElement("div");
        modal.classList.add("modal", "fade");
        modal.setAttribute("id", "projectNameModal");
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-labelledby", "projectNameModalLabel");
        modal.setAttribute("aria-hidden", "true");

        const modalDialog = document.createElement("div");
        modalDialog.classList.add("modal-dialog", "modal-dialog-centered");

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        const modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");
        modalHeader.innerHTML = `<h5 class="modal-title" id="projectNameModalLabel">Edit project</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

        const modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");
        modalBody.innerHTML = `<form>
        <label for="projectName">Project name:</label><input type="text" id="projectName" class="form-control" value="${project.attributes.name}">
        <label for="projectDescription">Project description:</label><input type="text" id="projectDescription" class="form-control" value="${project.attributes.description}">
        </form>`;

        const modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer");
        modalFooter.innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><button type="button" class="btn btn-primary" id="updateButton">Update</button>`;

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);

        document.body.appendChild(modal);

        const projectNameModal = new bootstrap.Modal(modal);
        projectNameModal.show();
        const spinner = document.createElement("span");
        spinner.classList.add(
          "spinner-border",
          "spinner-border-sm",
          "ms-2",
          "d-none"
        );
        spinner.setAttribute("role", "status");
        spinner.setAttribute("aria-hidden", "true");
        modal.querySelector("#updateButton").appendChild(spinner);

        modal
          .querySelector("#updateButton")
          .addEventListener("click", async (e) => {
            spinner.classList.remove("d-none");
            e.preventDefault();
            const newName = modal.querySelector("#projectName").value;
            const newDescription = modal.querySelector(
              "#projectDescription"
            ).value;
            if (newName === project.attributes.name) {
              return;
            }

            await fetch(url, {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                data: {
                  ...project.attributes,
                  name: newName,
                  description: newDescription,
                },
              }),
            });

            const url2 = `https://srm-vbc7.onrender.com/api/projecthistories`;
            const alertMsg = document.querySelector(".alertMsg");

            const user = localStorage.getItem("myCode");

            await fetch(url2, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                data: {
                  name: newName,
                  description: newDescription,
                  editby: user,
                },
              }),
            })
              .then((result) => {
                // Handle success
                alertMsg.classList.add("alert", "alert-success");
                alertMsg.innerHTML =
                  "<strong>Success!</strong> project updated successfully.";
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
              });

            await fetchProjects();
            modal.remove();
            projectNameModal.hide();
            spinner.classList.add("d-none");
          });
      } catch (error) {
        alert("An error occurred while editing the project.");
      }
    };

    // Function to open or close a project

    const changeStatus = async (id, status) => {
      if (status === "open") {
        status = "close";
      } else {
        status = "open";
      }
      console.log(status);
      const baseUrl = `https://srm-vbc7.onrender.com/api/projects/${id}`;
      const token =
        "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const bodyData = {
        data: {
          status,
        },
      };
      const response = await fetch(baseUrl, {
        method: "PUT",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });
      const stateProject = await response.json();
      console.log(stateProject);
      const url2 = `https://srm-vbc7.onrender.com/api/projecthistories`;

      await fetch(url2, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: stateProject.data.attributes.name,
            description: stateProject.data.attributes.description,
            editby: localStorage.getItem("myCode"),
            status,
          },
        }),
      });

      await fetchProjects();
    };

    // Function to show the project description
    const showModal = (id, description, name) => {
      console.log(description);
      const modal = document.createElement("div");
      modal.classList.add("modal", "fade");
      modal.setAttribute("id", "projectDescriptionModal");
      modal.setAttribute("tabindex", "-1");
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-labelledby", "projectDescriptionModalLabel");
      modal.setAttribute("aria-hidden", "true");
      modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="projectDescriptionModalLabel">${name}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center p-4" style="width:fit-content;">
              ${description}
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      const projectDescriptionModal = new bootstrap.Modal(modal);
      projectDescriptionModal.show();
    };

    // Return the data and functions to be used in the template
    return {
      state,
      fetchProjects,
      createProject,
      deleteProject,
      editProject,
      changeStatus,
      showModal,
    };
  },
};

// Register the component with Vue
createApp(App).mount("#app");
