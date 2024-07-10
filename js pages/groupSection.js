const searchGroupBtn = document.querySelector(".searchGroupBtn");
const searchGroup = document.querySelector("#searchGroup");
var loadingDiv = document.querySelector(".loading-div");
const GroupCount = document.querySelector("#GroupCount");
const GroupTime = document.querySelector("#GroupTime");
const GroupModuleName = document.querySelector("#GroupModuleName");
const GroupStartDate = document.querySelector("#GroupStartDate");
const tableBody = document.querySelector(".tbodyGroup");
const copyIcon = document.querySelector(".copyIcon");

async function getInfoOfGroups(groupId) {
  const baseUrl = `https://script.google.com/macros/s/AKfycbzq0888ifBcsd1JIc6so3lRIOIOvTJv9aayX4T-xNqHRSrCChxL6DeVWajnmPKzQoLuFQ/exec`;
  const url = groupId
    ? `${baseUrl}?groupId=${groupId}`
    : showAlert("Please insert groupId");
  console.log("groupsection?groupId=" + groupId);
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    showAlert("Error fetching data. Please try again later.");
    throw error;
  }
}

// function showAlert(message) {
//   // Create and display a Bootstrap alert
//   const alertContainer = document.createElement("div");
//   alertContainer.classList.add("alert", "alert-danger", "mt-3");
//   alertContainer.setAttribute("role", "alert");
//   alertContainer.innerHTML = `<strong>Error:</strong> ${message}`;

//   document.body.appendChild(alertContainer);

//   // Automatically close the alert after a few seconds (adjust the timeout as needed)
//   setTimeout(() => {
//     alertContainer.remove();
//   }, 5000);
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

// let newRowCounter = 0;
let freshCount = 0; // initialize the counter
let StudentCount = 0;

var groupIdToPass;

async function diplayGroups(groupId) {
  change();
  copyIcon.setAttribute("icon", "bi:copy");

  freshCount = 0;
  const groups = await getInfoOfGroups(groupId);
  tableBody.innerHTML = "";

  for (let i = 0; i < groups.length; i++) {
    if (groupId == groups[i]["Code Group"]) {
      var group = {
        StudentNo: groups[i]["Student No"],
        Name: groups[i].Name,
        Count: groups[i]["Count of GR Students"],
        Email: groups[i].Email,
        phone: groups[i]["Phone "],
        Grade: groups[i].Grade,
        StudyType: groups[i]["Student Type"],
        startDate: groups[i]["GR Start Date"],
        GroupTime: groups[i]["Group Time"],
        ModuleName: groups[i]["GR Module Name"],
      };

      const formatteddate = new Date(group.startDate).toLocaleDateString(
        "en-GB"
      );
      // Use trim() to handle empty or whitespace-only StudyType

      // pushObj.push(students[i].Amount)
      // deadlineStatus.push(students[i].Status)
      // console.log(pushObj);
      const newRow = document.createElement("tr");
      // console.log(student.DueDate);
      newRow.innerHTML = `
            <td class="text-center">${group.StudentNo}</td>
            <td>${group.Name}</td>
            <td>${group.phone}</td>
            <td>${group.StudyType}</td>
            <td>${group.Grade}</td>
        `;

      groupIdToPass = groupId;
      sessionStorage.setItem("groupId", groupIdToPass);

      let newRowCounter = 0; // declare the counter variable outside the loop

      // initialize the counter

      for (let i = 0; i < groups.length; i++) {
        if (groupId == groups[i]["Code Group"]) {
          // ... existing code ...

          newRowCounter++;
          // const newRow = document.createElement("tr");
          // ... existing code ...

          // tableBody.appendChild(newRow); // increment the counter each time a new row is added
        }
      }

      if (groups[i]["Student Type"] == "Fresh") {
        console.log("Fresh Count:", freshCount);
        freshCount++; // exit the loop if the counter reaches 20
      } else {
        StudentCount++;
      }

      // console.log("Number of new rows created:", newRowCounter); // display the count in the console

      tableBody.appendChild(newRow);
      GroupCount.innerHTML = `${newRowCounter} / (${freshCount} Fresh)`;
      GroupTime.innerHTML = group.GroupTime;
      GroupModuleName.innerHTML = group.ModuleName;
      GroupStartDate.innerHTML = formatteddate;
    }
  }

  // Send the request to the server
  hide(); // hide the loading overlay once the requests are shown
}

searchGroupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!searchGroup.value) {
    // Create and display a Bootstrap alert
    const content = document.querySelector(".content");
    const alertContainer = document.createElement("div");
    alertContainer.classList.add("alert", "alert-danger", "mt-3");
    alertContainer.style.width = "25%";
    alertContainer.style.position = "fixed";
    alertContainer.style.top = "0";
    alertContainer.style.left = "38%";
    alertContainer.style.margin = "20px";
    alertContainer.style.transition = "all 0.5s ease-in-out";
    alertContainer.setAttribute("role", "alert");
    alertContainer.innerHTML = `<strong>Error:</strong> Please enter a group ID.`;

    content.appendChild(alertContainer);

    // Automatically close the alert after a few seconds (adjust the timeout as needed)
    setTimeout(() => {
      alertContainer.remove();
    }, 2000);
  } else {
    const allCard = document.querySelector(".allCard");
    const groupId = searchGroup.value;
    diplayGroups(groupId);
    allCard.style.display = "flex";
    // allCard.classList.remove("alert", "alert-danger", "mt-3");
  }
});

// copy link of group

// const textToCopy = document.querySelector("#textToCopy");

// textToCopy.value = window.location.href;

copyIcon.addEventListener("click", () => {
  if (!searchGroup.value) {
    return;
  }
  const groupId = searchGroup.value;

  const text = window.location.href + "?id=" + groupId;
  // const link = textToCopy.getAttribute("data-link");
  navigator.clipboard.writeText(text);
  copyIcon.setAttribute("icon", "bi:check");

  // alert(te);
});

jQuery("#printG").on("submit", function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycbyiU2EOOhxwojQmxpUAu_prsNgwJJdnyOWjqEaVXKvnJvy-DA7qlHBW1IxJPm6yLI_u/exec",
    type: "post",
    data: jQuery("#printG").serialize(),
    beforeSend: function () {
      var spinner =
        '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery("#spinner-container5").html(spinner);
    },

    success: function (result) {
      jQuery("#printG")[0].reset();
      // Display success message here
      // Display success message here
      // alertMsg.classList.add('alert', 'alert-success');
      // Check if id is empty
      const groupId = searchGroup.value;
      if (groupId === null || groupId === "") {
        alertMsg.classList.add("alert", "alert-danger");
        alertMsg.innerHTML =
          "<strong>Error!</strong> Please Enter Invalid groupId .";
        alertMsg.style.display = "block";
      } else {
        alertMsg.classList.remove("alert", "alert-danger");
        alertMsg.classList.add("alert", "alert-success");
        alertMsg.innerHTML =
          "<strong>Success!</strong> Within 2 minutes, you will receive an email..";
        alertMsg.style.display = "block";
      }
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
      jQuery("#spinner-container5").empty();
    },
  });
});

const printGBtn = document.querySelector(".printGBtn");
// if (userRole === "System") {
//   digitalIdBtn.style.display = "none";
// }

printGBtn.addEventListener("click", () => {
  // Get the id from session storage.
  const groupId = searchGroup.value;

  // Check if the id is empty.
  if (!groupId) {
    // Return from the function to stop it from executing.
    return;
  }

  // Display a confirmation message to the user.
  const confirmationMessage = `Are you sure you want to Print Group?`;
  const confirmation = confirm(confirmationMessage);

  // Check if the user confirmed the action.
  if (confirmation) {
    // Continue with the rest of the function code.
    const qrCodeId = document.querySelector("#qrCodeId");
    const Emp = document.querySelector("#Emp");
    const user = localStorage.getItem("username");
    console.log(user);
    const Timestamp = document.querySelector("#Timestamp");
    const timestamp = new Date();
    // Convert the timestamp to dd/mm/yyyy format.
    const formattedDate = timestamp.toLocaleString("en-GB");

    // Set the Timestamp1 input field to the formatted date.
    Timestamp.value = formattedDate;
    qrCodeId.value = groupId;
    Emp.value = user;
  }
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
