const searchInput = document.getElementsByName("search");
const searchButton = document.querySelector(".search-button");
const dropdown = document.querySelector(".dropdown");
const cashOption = dropdown.querySelector(".cash");
const monthsOption = dropdown.querySelector(".months");
const semesterOption = dropdown.querySelector(".month-brefore-semester");
const frmDiv = document.querySelector(".frmDiv");
const StudentNum = document.querySelector("#StudentNum");
var userr = localStorage.getItem("myCode");
const user = document.querySelector("#user");
const alertMsg = document.querySelector(".alertMsg");

async function getInfoDeadlines(id) {
  const baseUrl = `https://script.google.com/macros/s/AKfycbxTI9S1emlI6Vls1ZVLIDRCpPlxKEXf7mRTjc8XaG7zXsXAVAGfhLeTUfoTnCfYQ2LlAQ/exec`;
  let url = baseUrl;
  if (id) {
    url += `?id=${id}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

var loadingDiv = document.querySelector(".loading-div");

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

// Initialize the counter
let k = 0;

// const k = 0

const pushObj = [];
const deadlineStatus = [];

async function showDeadlines(id) {
  change();
  const students = await getInfoDeadlines(id);
  const tableBody = document.querySelector(".tbody1");
  tableBody.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    if (id == students[i].ID) {
      let student = {
        DueDate: students[i]["Due Date"],
        Amount: students[i].Amount,
        paidAmount: students[i]["Paid amount"],
        Status: students[i].Status,
      };

      pushObj.push(students[i].Amount);
      deadlineStatus.push(students[i].Status);
      console.log(pushObj);
      const newRow = document.createElement("tr");
      console.log(student.DueDate);
      newRow.innerHTML = `
        <td>${student.DueDate}</td>
        <td>${student.Amount}</td>
        <td>${students[i]["Paid amount"]}</td>
        
        <td>
          <button id="payBtn" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Pay Now
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Please Fillfull All Inputs</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form method="POST" id="frmSubmit" >
                      <div class="form-group form-floating">
                        <input name="Amount" type="number" placeholder="Amount" id="floatingInput" class="form-control"  required>
                        <label for="floatingInput">Amount</label>
                      </div>
                      <div class="form-floating mt-3">
                        <select class="form-select" id="floatingSelect" name="Cash type" required>
                          <option selected></option>
                          <option value="cash">cash</option>
                          <option value="Vodafone cash">Vodafone cash</option>
                          <option value="Bank Account">Bank Account</option>
                          <option value="Online Payment">Online Payment</option>
                        </select>
                        <label for="floatingSelect">select cash type</label>
                      </div>
                      <div class="form-floating mt-3">
                        <select class="form-select" id="floatingSelect" name="type">
                          <option selected>Payment</option>
                        </select>
                        <label for="floatingSelect">select invoice type</label>
                      </div>
                      <div class="form-floating mt-3">
                        <select class="form-select" id="floatingSelect" name="payment sub cat">
                          <option selected>Deadline</option>
                        </select>
                        <label for="floatingSelect">select Payment Sub-categories</label>
                      </div>

                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Deadline Date" type="text" placeholder="Amount" id="SelectDueDate" class="form-control"  value =${students[i]["Due Date"]} >
                        <label for="SelectDueDate">Amount</label>
                      </div>
                      <div class="form-group form-floating mt-3" style="display:none ;">
                      <input name="Employee" type="text" id="deadlineEmployee" class="form-control">
                      <label for="deadlineEmployee">Employee</label>
                    </div>
                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Student NUM" type="text" placeholder="Amount" id="StudentNUM" class="form-control" >
                        <label for="StudentNUM">Amount</label>
                      </div>
                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Scholarship" type="text" placeholder="Scholarship" id="Scholarship" class="form-control" >
                        <label for="Scholarship">Scholarship</label>
                      </div>
                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Reception" type="text" placeholder="Scholarship" id="Reception" class="form-control" >
                        <label for="Reception">Scholarship</label>
                      </div>
                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Fesh/St" type="text" placeholder="Scholarship" id="fresh" class="form-control" >
                        <label for="fresh">Scholarship</label>
                      </div>
                      <div class="form-group form-floating" style="display:none ;">
                        <input name="Study type" type="text" placeholder="Scholarship" id="StudyType" class="form-control" >
                        <label for="StudyType">Scholarship</label>
                      </div>

                      

                      <div class="form-group mt-3 form-floating">
                        <textarea name="Note" class="form-control" placeholder="Nots" id="Textarea" rows="5"></textarea>
                        <label for="Textarea" class="form-label">Note</label>
                      </div>
                      <div class="my-3">
                        <div class="error-message"></div>
                        <div dir="ltr" class="sent-message text-center alert alert-success d-none" id="success-msg">We will
                          connect to you , Thank's</div>
                        
                      </div>
                      <div class="d-flex justify-content-center ">
                        <button class="btn btn-primary scrollto btn-info text-light d-flex" id="btnSubmit"
                          type="submit">submit<div id="spinner-container1"></div></button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </td>
      `;

      const floatingInput = document.querySelector("#floatingInput");

      const payBtn = newRow.querySelector("#payBtn");
      const remainingAmount = student.Amount - student.paidAmount;
      console.log(remainingAmount);
      // const btndanger = newRow.querySelector('.btn-danger');
      // const btnoutlinesuccess = newRow.querySelector('.btn-outline-success');
      if (student.Status === "paid") {
        payBtn.innerText = "Paid";
        payBtn.disabled = true;
        payBtn.classList.add("btn-success");
      } else if (student.Status === "Portion Paid") {
        payBtn.innerText = "Portion Paid";
        payBtn.classList.add("btn-warning");
        // Check if floatingInput exists before setting its value
        if (floatingInput) {
          floatingInput.value = remainingAmount;
        }
      } else {
        payBtn.classList.add("btn-danger");
      }

      // Add a click event listener to the button.
      payBtn.addEventListener("click", () => {
        //import any data
        const id = sessionStorage.getItem("idToPass");
        const ScholarshipToPass = sessionStorage.getItem("ScholarshipToPass");
        const ReceptionistToPass = sessionStorage.getItem("ReceptionistToPass");
        const groupToPass = sessionStorage.getItem("groupToPass");
        const user = localStorage.getItem("myCode");
        const first = tableBody.firstElementChild === newRow;
        console.log(first);

        // Get the "SelectDueDate" element.
        const selectDueDate = document.querySelector("#SelectDueDate");
        const floatingInput = document.querySelector("#floatingInput");
        const StudentNUM = document.querySelector("#StudentNUM");
        const Scholarship = document.querySelector("#Scholarship");
        const Reception = document.querySelector("#Reception");
        const deadlineEmployee = document.querySelector("#deadlineEmployee");
        const fresh = document.querySelector("#fresh");
        const StudyType = document.querySelector("#StudyType");

        // Set the value of the "SelectDueDate" element to the due date of the student in the current row.
        selectDueDate.value = students[i]["Due Date"];
        floatingInput.value = students[i].Amount;
        StudentNUM.value = id;
        deadlineEmployee.value = user;
        Scholarship.value = ScholarshipToPass;
        Reception.value = ReceptionistToPass;
        StudyType.value = groupToPass;
        if (student.Status === "Portion Paid") {
          floatingInput.value = remainingAmount;
        }

        if (first) {
          fresh.value = "Fresh";
        } else {
          fresh.value = "Student";
        }
      });

      tableBody.appendChild(newRow);

      // Create a new div element to store the inputs
      const inputDiv = document.createElement("div");

      // Iterate over the pushObj array
      // for (const value of pushObj) {
      // Create a new input element
      const input = document.createElement("input");
      const input1 = document.createElement("input");

      // Set the value of the input element to the current value in the pushObj array
      input.value = students[i].Amount;
      input1.value = student.DueDate;
      document.querySelector("#StudentNum").value = id;
      document.querySelector("#user").value = userr;

      // Set the style width of the input element & flex
      inputDiv.style.display = "flex";
      inputDiv.classList.add("unitDiv");
      input.style.width = "50%";
      input1.style.width = "50%";
      input.style.marginRight = "5px";
      input1.style.marginLeft = "5px";

      // Set the type of the input element to 'number'
      input.type = "number";

      const originalValue = input1.value;
      const originalType = input1.type;

      input1.onfocus = function () {
        this.type = "date";
      };

      input1.onblur = function () {
        if (!this.value) {
          this.type = originalType;
          this.value = originalValue;
        }
      };

      if (student.Status === "paid") {
        input.style.display = "none";
        input1.style.display = "none";
        // input1.disabled = true;
      }

      const SelectDueDate1 = document.querySelector("#SelectDueDate1");
      // document.querySelector('#StudentNum').value = id

      //handle cash option
      cashOption.addEventListener("click", () => {
        // Hide all input fields.
        const inputs = document.querySelectorAll("input");
        for (const input of inputs) {
          input.style.display = "none";
          SelectDueDate1.disabled = false;
          // input1.style.display = 'none';
          StudentNum.style.display = "none";
          StudentNum.disabled = false;
          user.style.display = "none";
          user.disabled = false;

          input.disabled = true;
          // input1.disabled = true;
          // break;
        }
        // Enable the new input and input1 fields.
        input.disabled = false;
        input1.disabled = false;

        input1.type = "Date";

        input.style.display = "block";
        input1.style.display = "block";

        input.value = "";
        input1.value = "";

        input.name = "Deadline1";
        input1.name = "Date1";
      });

      // Append the input element to the inputDiv element
      inputDiv.appendChild(input);
      inputDiv.appendChild(input1);

      // Increment the counter
      k++;
      // Set the name attribute of the input element
      input.name = "Deadline" + [k];
      input1.name = "Date" + [k];
      console.log(input.name);

      // Set the placeholder attribute of the input element
      input.placeholder = "Amount";
      input1.placeholder = "Due Date";

      // Set the id attribute of the input element
      input.id = "Deadline1";

      // Set the class attribute of the input element
      input.classList.add("form-control", "Deadline", "mb-3");
      input1.classList.add("form-control", "Deadline", "mb-3");

      // Set the required attribute of the input element
      // input.required = true;
      // }
      // Save the value of k to local storage
      localStorage.setItem("k", k);

      // Append the inputDiv element to the document body
      frmDiv.appendChild(inputDiv);

      //handle dropdown
    }
  }

  //handle months option
  semesterOption.addEventListener("click", () => {
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
      input.style.display = "none";
      SelectDueDate1.disabled = false;
      StudentNum.style.display = "none";
      StudentNum.disabled = false;
      user.style.display = "none";
      user.disabled = false;

      input.disabled = true;
    }

    // Create a container for the input fields.
    const container = document.createElement("div");
    container.classList.add("input-container");

    // Create 4 input fields.
    for (let i = 0; i < 4; i++) {
      const unitDiv = document.createElement("div");
      unitDiv.classList.add("d-flex");

      const input = document.createElement("input");
      input.type = "text";
      input.name = `Deadline${i + 1}`;
      input.classList.add("form-control", "Deadline", "mb-3");
      input.placeholder = "Amount";
      unitDiv.appendChild(input);
      console.log(input.name);

      const input1 = document.createElement("input");
      input1.type = "date";
      input1.name = `Date${i + 1}`;
      input1.classList.add("form-control", "Deadline", "mb-3");
      unitDiv.appendChild(input1);

      input.style.marginRight = "5px";
      input1.style.marginLeft = "5px";

      container.appendChild(unitDiv);
    }

    // Append the container to the DOM.
    frmDiv.appendChild(container);

    // Enable the input fields.
    for (const input of container.querySelectorAll("input")) {
      input.disabled = false;
    }
  });

  //handle semesterOption
  monthsOption.addEventListener("click", () => {
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
      SelectDueDate1.disabled = false;
      StudentNum.style.display = "none";
      StudentNum.disabled = false;
      user.style.display = "none";
      user.disabled = false;
      input.style.display = "none";
      input.disabled = true;
    }

    // Create a container for the input fields.
    const container = document.createElement("div");
    container.classList.add("input-container");

    // Create 4 input fields.
    for (let i = 0; i < 5; i++) {
      const unitDiv = document.createElement("div");
      unitDiv.classList.add("d-flex");

      const input = document.createElement("input");
      input.type = "text";
      input.name = `Deadline${i + 1}`;
      input.classList.add("form-control", "Deadline", "mb-3");
      input.placeholder = "Amount";
      unitDiv.appendChild(input);
      console.log(input.name);

      const input1 = document.createElement("input");
      input1.type = "date";
      input1.name = `Date${i + 1}`;
      input1.classList.add("form-control", "Deadline", "mb-3");
      unitDiv.appendChild(input1);

      input.style.marginRight = "5px";
      input1.style.marginLeft = "5px";

      container.appendChild(unitDiv);
    }

    // Append the container to the DOM.
    frmDiv.appendChild(container);

    // Enable the input fields.
    for (const input of container.querySelectorAll("input")) {
      input.disabled = false;
    }
  });

  console.log(pushObj.values());
  console.log(deadlineStatus);

  //supmit  frmDeadlineEdit
  jQuery("#frmDeadlineEdit").on("submit", function (e) {
    e.preventDefault();

    jQuery.ajax({
      url: "https://script.google.com/macros/s/AKfycbyfXOwzmRZqfNg2IdrWjRRf0olXlQaUTDn2CVZ1-O1lOBFrC5KyX2epevu5DwUb9j-4ig/exec",
      type: "post",
      data: jQuery("#frmDeadlineEdit").serialize(),
      beforeSend: function () {
        var spinner =
          '<div class="text-center" style="margin-left: 5px;"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div></div>';
        jQuery("#spinner-container").html(spinner);
      },
      success: function (result) {
        jQuery("#frmDeadlineEdit")[0].reset();
        // Display success message here
        alertMsg.classList.add("alert", "alert-success");
        alertMsg.style.width = "25%";
        alertMsg.style.position = "fixed";
        alertMsg.style.top = "0";
        alertMsg.style.left = "0";
        alertMsg.style.margin = "20px";
        alertMsg.style.transition = "all 0.5s ease-in-out";
        alertMsg.innerHTML =
          "<strong>Success!</strong> Payment edit successfully.";
        alertMsg.style.display = "block";
        alertMsg.style.opacity = "0";
        setTimeout(function () {
          alertMsg.style.opacity = "1";
        }, 10);
        setTimeout(function () {
          alertMsg.style.display = "none";
          location.reload();
        }, 5000);
      },
      error: function () {
        // Display error message here
        alertMsg.classList.add("alert", "alert-danger");
        alertMsg.style.width = "25%";
        alertMsg.style.position = "fixed";
        alertMsg.style.top = "0";
        alertMsg.style.left = "0";
        alertMsg.style.transition = "all 0.5s ease-in-out";
        alertMsg.innerHTML =
          "<strong>Error!</strong> An error occurred. Please try again.";
        alertMsg.style.display = "block";
        alertMsg.style.opacity = "0";
        setTimeout(function () {
          alertMsg.style.opacity = "1";
        }, 10);
        setTimeout(function () {
          alertMsg.style.display = "none";
        }, 2000);
      },
      complete: function () {
        jQuery("#spinner-container").empty();
        jQuery("#exampleModal1").modal("hide");
        $("#exampleModal1").on("hidden.bs.modal", function (e) {
          $(".modal-backdrop").remove();
        });
      },
    });
  });

  jQuery("#frmSubmit").on("submit", function (e) {
    e.preventDefault();
    jQuery.ajax({
      url: "https://script.google.com/macros/s/AKfycbytlYxtnL1itZablK2TT4B6Mm2e6EWFSn-PYrVtIb5hT43gsJR1cqa3zR-C80UpNe6sVQ/exec",
      type: "post",
      data: jQuery("#frmSubmit").serialize(),
      beforeSend: function () {
        var spinner =
          '<div class="text-center" style="margin-left: 5px;"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div></div>';
        jQuery("#spinner-container1").html(spinner);
      },
      success: function (result) {
        const id = sessionStorage.getItem("idToPass");
        if (id === null || id === "") {
          alertMsg.classList.add("alert", "alert-danger");
          alertMsg.innerHTML =
            "<strong>Error!</strong> Please Enter Invalid Id .";
          alertMsg.style.display = "block";
        } else {
          alertMsg.classList.remove("alert", "alert-danger");
          alertMsg.classList.add("alert", "alert-success");
          alertMsg.innerHTML =
            "<strong>Success!</strong> Payment added successfully.";
          alertMsg.style.display = "block";
        }
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
      },
      error: function () {
        // Display error message here
        alertMsg.classList.add("alert", "alert-danger");
        alertMsg.style.width = "25%";
        alertMsg.style.position = "fixed";
        alertMsg.style.top = "0";
        alertMsg.style.left = "0";
        alertMsg.style.transition = "all 0.5s ease-in-out";
        alertMsg.innerHTML =
          "<strong>Error!</strong> An error occurred. Please try again.";
        alertMsg.style.display = "block";
        alertMsg.style.opacity = "0";
        setTimeout(function () {
          alertMsg.style.opacity = "1";
        }, 10);
        setTimeout(function () {
          alertMsg.style.display = "none";
        }, 2000);
      },
      complete: function () {
        jQuery("#spinner-container1").empty();
        jQuery("#exampleModal").modal("hide");
        $("#exampleModal").on("hidden.bs.modal", function (e) {
          $(".modal-backdrop").remove();
        });
      },
    });
  });

  hide(); // hide the loading overlay once the requests are shown
}

var paramsDead = new URLSearchParams(window.location.search);
var id = paramsDead.get("id");
showDeadlines(id);

// add an event listener to the window object to run the `change()` function when a new window is opened
window.addEventListener("open", change);

window.onload = function () {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");
  const searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    menuBtnChange();
  });

  // searchBtn.addEventListener("click", function () {
  //   sidebar.classList.toggle("open")
  //   menuBtnChange()
  // })

  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
};

// <td>
//           <img src="${student.Status === "paid" ? "../imgs/correct.png" : "./imgs/png-transparent-computer-icons-ok-miscellaneous-trademark-cross.png"}" alt="${student.Status}" style="width: 7%">
//         </td>

window.addEventListener("load", function () {
  if (
    localStorage.getItem("myCode") === "" ||
    localStorage.getItem("myCode") === null
  ) {
    // Redirect to index.html
    window.location.href = "index.html";
  }
});
