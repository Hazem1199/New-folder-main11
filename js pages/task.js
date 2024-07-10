const submitTaskBtn = document.querySelector(".submitTaskBtn");
var loadingDiv = document.querySelector(".loading-div");


// submitTaskBtn.addEventListener("click", () => {
//   // Get the id from session storage.
//   const userr = localStorage.getItem("myCode");
//   const taskEmployee = document.querySelector("#taskEmployee");

//   // Check if the id is empty.
//   if (!userr) {
//     // Return from the function to stop it from executing.
//     return;
//   }

//   // Continue with the rest of the function code.
//   const Timestamp = document.querySelector("#taskTimestamp");
//   const timestamp = new Date();
//   // Convert the timestamp to dd/mm/yyyy format.
//   const formattedDate = timestamp.toLocaleString("en-GB");

//   // Set the Timestamp1 input field to the formatted date.
//   Timestamp.value = formattedDate;
//   taskEmployee.value = userr;
// });



submitTaskBtn.addEventListener("click", () => {
  // Get the id from session storage.
  const userr = localStorage.getItem("myCode");
  const taskEmployee = document.querySelector("#taskEmployee");

  // Check if the id is empty.
  if (!userr) {
    // Return from the function to stop it from executing.
    return;
  }

  // Continue with the rest of the function code.
  const Timestamp = document.querySelector("#taskTimestamp");
  const timestamp = new Date();
  // Convert the timestamp to dd/mm/yyyy format.
  const formattedDate = timestamp.toLocaleString("en-GB");

  // Set the Timestamp1 input field to the formatted date.
  Timestamp.value = formattedDate;
  taskEmployee.value = userr;

  // Get the form inputs
  const formInputs = document.querySelectorAll(".form-input");

  // Create a new table row
  const newRow = document.createElement("tr");

  // Loop through the form inputs and create table cells for each input
  formInputs.forEach((input) => {
    const newCell = document.createElement("td");
    newCell.textContent = input.value;
    console.log(newCell.textContent);
    newRow.appendChild(newCell);
  });

  // Get the table body
  const tableBody = document.querySelector(".tbodyTask");

  // Append the new row to the table body
  tableBody.appendChild(newRow);
});



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

// let newRowCounter = 0;
let freshCount = 0; // initialize the counter
let StudentCount = 0;

var groupIdToPass;

const alertMsg = document.querySelector(".alertMsg");

jQuery("#frmAddTask").on("submit", function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycbw8z1zLeLYNzWElOt2PdyZ-NbE567NrflcGzL5tCABd9VhkT0ma0l7RQPWWObC4rVKa/exec",
    type: "post",
    data: jQuery("#frmAddTask").serialize(),
    beforeSend: function () {
      var spinner =
        '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery("#spinner-container").html(spinner);
    },

    success: function (result) {
      jQuery("#frmAddTask")[0].reset();
      // Display success message here
      // Display success message here
      // alertMsg.classList.add('alert', 'alert-success');
      // Check if id is empty

      alertMsg.classList.add("alert", "alert-success");
      alertMsg.innerHTML = "<strong>Success!</strong> Send successfully.";
      alertMsg.style.display = "block";
      alertMsg.style.width = "25%";
      alertMsg.style.position = "fixed";
      alertMsg.style.top = "0";
      alertMsg.style.left = "38%";
      alertMsg.style.margin = "20px";
      alertMsg.style.transition = "all 0.5s ease-in-out";
      // alertMsg.innerHTML = '<strong>Success!</strong> QR Code Send successfully.';
      // alertMsg.style.display = "block";
      alertMsg.style.opacity = "0";
      setTimeout(function () {
        alertMsg.style.opacity = "1";
      }, 10);
      setTimeout(function () {
        alertMsg.style.display = "none";
      }, 3000);
    },
    error: function () {
      // Display error message here
      alertMsg.classList.add("alert", "alert-danger");
      alertMsg.style.width = "25%";
      alertMsg.style.position = "fixed";
      alertMsg.style.top = "0";
      alertMsg.style.left = "38%";
      alertMsg.style.margin = "20px";
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
      jQuery("#addTask").modal("hide");
      $("#addTask").on("hidden.bs.modal", function (e) {
        $(".modal-backdrop").remove();
      });
    },
  });
});

window.addEventListener("load", function () {
  if (
    localStorage.getItem("myCode") === "" ||
    localStorage.getItem("myCode") === null
  ) {
    // Redirect to index.html
    window.location.href = "index.html";
  }
});

const chBoxes = document.querySelectorAll(
  '.dropdown-menu input[type="checkbox"]'
);
const dpBtn = document.getElementById("multiSelectDropdown");
let mySelectedListItems = [];

function handleCB() {
  mySelectedListItems = [];
  let mySelectedListItemsText = "";

  chBoxes.forEach((checkbox) => {
    if (checkbox.checked) {
      mySelectedListItems.push(checkbox.value);
      mySelectedListItemsText += checkbox.value + ", ";
    }
  });

  const DayOfTask = document.getElementById("DayOfTask");
  DayOfTask.value = mySelectedListItemsText.slice(0, -2);

  dpBtn.innerText =
    mySelectedListItems.length > 0
      ? mySelectedListItemsText.slice(0, -2)
      : "Select";
}
everydayCheckbox.addEventListener("change", function () {
  chBoxes.forEach((checkbox) => {
    checkbox.disabled = everydayCheckbox.checked;
  });
  handleCB();
});

chBoxes.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCB);
});
