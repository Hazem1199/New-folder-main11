var searchInput = document.getElementsByName("search");
var fName = document.querySelector(".fName");
var body = document.getElementById("body");
var infoBox = document.querySelector(".info-box");
var Email = document.querySelector(".Email");
var Phone = document.querySelector(".Phone");
var ID = document.querySelector(".ID");
var Requests = document.getElementById("Requests");
var Complaint = document.querySelector("#Complaint");
var searchButton = document.querySelector(".search-button");
var pic = document.getElementById("profile-pic");
var headName = document.querySelector(".headName");
var loadingDiv = document.querySelector(".loading-div");
const moduleCountElement = document.getElementById("moduleCount");
const numDeadline = document.querySelector(".num-deadline");
const footer3 = document.querySelector(".footer3");
const seeMore3 = document.querySelector(".seeMore3");
const seeMore4 = document.querySelector(".seeMore4");
const IdNumber = document.querySelector(".IdNumber");
const DOB = document.querySelector(".DOB");
const Grade = document.querySelector(".Grade");
const Scholarship = document.querySelector(".Scholarship");
const Receptionist = document.querySelector(".Receptionist");
const Reserver = document.querySelector(".Reserver");
const CCAgent = document.querySelector(".CCAgent");
const ReservationDate = document.querySelector(".ReservationDate");
const more = document.querySelector(".more");
const emailcrd = document.querySelector(".email-crd");
const moreBtn = document.querySelector(".more-btn");

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

// personal data
// async function getData(id) {
//   const response = await fetch(
//     "https://script.google.com/macros/s/AKfycbxsp68tbWYiuiNG5-nLZRLFhTjHMBj4bRRjVEMG0vzeGKPkvunwT7InQfCfQm8d85huVg/exec",
//     {
//       method: "POST",
//       body: JSON.stringify({ id: id }),
//     }
//   );
//   var data = await response.json();
//   console.log(data);
//   return data;
// }

// Get data from session storage if it exists
const savedData = sessionStorage.getItem("myData");
if (savedData) {
  const data = JSON.parse(savedData);
  // Use the data to render the page
  // fName.innerHTML = data.Name;
  // ID.innerHTML = data.ID;
  // Email.innerHTML = data.Email.slice(0, 20);
  // Phone.innerHTML = data.Phone;
  // headName.innerHTML = data.Name.slice(0, 50);
  // pic.src = data.img;
  change();
  display(data.ID);
  hide();
}

async function display(value) {
  change();
  var users = await getData(value);

  users.forEach((element) => {
    if (value == element.ID) {
      let user = {
        Name: element.Name,
        ID: element.ID,
        Email: element.Email,
        Phone: element.Phone,
        img: element.image,
        IdNumber: element.IdNational,
        DOB: element.DateOfBirth,
        Grade: element.Grade,
        Scholarship: element.Scholarship,
        Receptionist: element.Receptionist,
        Reserver: element.Reserver,
        CCAgent: element.CCAgent,
        ReservationDate: element.ReservationDate,
      };
      // Save the data to session storage
      sessionStorage.setItem("myData", JSON.stringify(user));
      // Use the data to render the page
      fName.innerHTML = user.Name;
      ID.innerHTML = user.ID;
      let result = user.Email.indexOf(",");
      Email.innerHTML = user.Email.slice(0, result);
      emailcrd.innerHTML = user.Email;
      Phone.innerHTML = user.Phone;
      headName.innerHTML = user.Name.slice(0, 50);
      pic.src = user.img;
      IdNumber.innerHTML = user.IdNumber;
      DOB.innerHTML = user.DOB.slice(0, 10);
      Grade.innerHTML = user.Grade;
      Scholarship.innerHTML = user.Scholarship;
      Receptionist.innerHTML = user.Receptionist;
      Reserver.innerHTML = user.Reserver;
      CCAgent.innerHTML = user.CCAgent;
      ReservationDate.innerHTML = user.ReservationDate.slice(0, 10);
    }
  });
  // more.style.display = "inline";
  hide();
}

// moreBtn.addEventListener('click', () => {
//     emailcrd.style.display = "block";
//     // emailcrd.style.display = emailcrd.style.display === 'none' ? 'block' : 'none';
// });

// invoice data

async function getInvoice(id) {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyyz_jfg3QaGwj5FtWgxTk9C0R028N1OneO1QybYz_GaiT5a2DlnIF-HIOlBv6hKR-QVg/exec",
    {
      method: "POST",
      body: JSON.stringify({ id: id }),
    }
  );
  let data = await response.json();
  console.log(data);
  return data;
}

var serialToPass;

async function showInvoice(value) {
  change();

  try {
    console.log("start");
    const Invoices = await getInvoice(value);
    const tbodyInvoice = document.querySelector(".tbody2");
    // tbodyInvoice.innerHTML = '';
    // Sort the invoices by timestamp
    Invoices.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));

    for (let i = 0; i < Invoices.length; i++) {
      if (value == Invoices[i].StudentNo) {
        var studentInvoice = {
          Amount: Invoices[i]["Amount"],
          Timestamp: Invoices[i].Timestamp,
          Notes: Invoices[i]["Notes"],
          autoSerial: Invoices[i]["autoSerial"],
          InvoiceType: Invoices[i]["InvoiceType"],
          Emp: Invoices[i]["Emp"],
        };
        console.log(studentInvoice);
        // console.log(studentInvoice.amountLetter);
        const ScholarshipToPass = sessionStorage.getItem("ScholarshipToPass");
        const ReceptionistToPass = sessionStorage.getItem("ReceptionistToPass");
        const groupToPass = sessionStorage.getItem("groupToPass");

        const newRow = document.createElement("tr");
        const timeCell = document.createElement("td");
        const AmountCell = document.createElement("td");
        const noteCell = document.createElement("td");
        const serialCell = document.createElement("td");
        const InvoiceTypeCell = document.createElement("td");
        const emplyeeCell = document.createElement("td");
        const sendBtn = document.createElement("td");
        const printBtn = document.createElement("td");
        newRow.appendChild(timeCell);
        newRow.appendChild(noteCell);
        newRow.appendChild(AmountCell);
        newRow.appendChild(serialCell);
        newRow.appendChild(InvoiceTypeCell);
        newRow.appendChild(emplyeeCell);
        newRow.appendChild(sendBtn);
        newRow.appendChild(printBtn);
        // Format the timestamp
        const options = { year: "numeric", month: "short", day: "numeric" };
        const formattedTimestamp = new Date(
          studentInvoice.Timestamp
        ).toLocaleDateString("en-US", options);

        timeCell.innerHTML = formattedTimestamp;
        noteCell.innerHTML = studentInvoice.Notes;
        noteCell.setAttribute("dir", "rtl");
        AmountCell.innerHTML = studentInvoice.Amount;
        serialCell.innerHTML = studentInvoice.autoSerial;
        InvoiceTypeCell.innerHTML = studentInvoice.InvoiceType;
        emplyeeCell.innerHTML = studentInvoice.Emp;
        serialToPass = studentInvoice.autoSerial;
        sessionStorage.setItem("serialToPass", serialToPass);

        const id = sessionStorage.getItem("idToPass");
        const userr = localStorage.getItem("myCode");
        sendBtn.classList.add("sendBtn");
        printBtn.classList.add("sendBtn");

        sendBtn.innerHTML = `
            <div class="d-flex " >
                <form method="POST" class="frmSendInvoice">
                    <input type="text" name="Serial" id="Serial" value="${Invoices[i]["autoSerial"]}" style="display:none ;">
                    <input type="text" name="Timestamp" class ="Timestamp"  style="display:none ;"> 
                    <input type="text" name="Employee" class ="Employee" value="${userr}" style="display:none ;"> 
                    <input type="number" name="Student Num" class ="StudentNum" value="${id}" style="display:none ;"> 
                        <button id="btnSend" type="submit" class="btn button btnSend mx-1">
                        <p class="mb-0">Send</p>
                        <div id="spinner-container1"></div>
                      </button>
                </form>

                <button id="printBtnn"  class="card-link btn btn-success mx-1" data-bs-toggle="modal" title="Print"
                    data-bs-target="#printModal"><i class="fa fa-print" aria-hidden="true"></i>
                </button>

                <div class="modal fade" id="printModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" style="max-width: 100%;">
                        <div class="modal-content">
                            <div class="modal-header d-flex align-items-center justify-content-between" style="padding: 10px;">
                                <img class="icon" style="width: 150px; " src="./imgs/bb_-_logo-removebg-preview.png" alt="brooklyn">
                                <h5 style="background-color: #1155CC; color: white; padding: 5px; margin: 0;">Brooklyn Business School</h5>
                            </div>
                            <div class="modal-body" >
                            <div style="border-bottom: 1px solid #ccc; padding-bottom: 10px;">
                            
                            <h4 class="InvoiceNo">Invoice Number: </h4>
                            <h4 class="TypeOfInvoice">Invoice Type: </h4>
                            </div>

                                <div class="d-flex justify-content-between pb-2 " style="margin-top: 20px;" >
                                    <div>
                                        <span class="c-grey">Student Num:</span>
                                        <span class="StudentNum">${id}</span>
                                    </div>
                                    <div>
                                        <span class="c-grey">Submitted on:</span>
                                        <span class="Submittedon">${formattedTimestamp}</span>
                                    </div>
                                    <div>
                                        <span class="c-grey">Study Type:</span>
                                        <span class="StudyType">${groupToPass}</span>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-between">
                                    <div>
                                        <span class="c-grey">Paid Amount:</span>
                                        <span class="PaidAmount">${Invoices[i]["Amount"]} </span>
                                    </div>
                                    <div>
                                        <span class="c-grey">Scholarship:</span>
                                        <span class="Scholarship">${ScholarshipToPass}</span>
                                    </div>
                                    <div>
                                        <span class="c-grey">Submitted by:</span>
                                        <span class="Submittedby">${ReceptionistToPass}</span>
                                    </div>
                                </div>

                                <h6 style="background-color: #ccc; padding: 10px; margin-top: 20px;">
                                    This receipt is only considered to be stamped <br>
                                    Or to be sent from System@brooklynacademy.net
                                </h6>

                                <p style="margin-top: 20px;"> management signature </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
                    `;

        const printModal = document.querySelector("#printModal");
        const printBtnn = newRow.querySelector("#printBtnn");

        printBtnn.addEventListener("click", () => {
          // Get the id from session storage.
          const id = sessionStorage.getItem("idToPass");
          const Submittedon = document.querySelector(".Submittedon");
          const InvoiceNo = document.querySelector(".InvoiceNo");
          const PaidAmount = document.querySelector(".PaidAmount");
          const Submittedby = document.querySelector(".Submittedby");
          const TypeOfInvoice = document.querySelector(".TypeOfInvoice");

          // Check if the id is empty.
          if (!id) {
            // Return from the function to stop it from executing.
            return;
          }

          // Continue with the rest of the function code.
          const timestamp = new Date();
          // Convert the timestamp to dd/mm/yyyy format.
          const formattedDate = timestamp.toLocaleString("en-GB");

          // Collect form data

          Submittedon.innerHTML = formattedTimestamp;
          Submittedby.innerHTML = ReceptionistToPass;
          TypeOfInvoice.innerHTML = `Type of invoice # ${Invoices[i]["InvoiceType"]}`;
          PaidAmount.innerHTML = `${Invoices[i]["Amount"]} LE`;
          InvoiceNo.innerHTML = `invoice # ${Invoices[i]["autoSerial"]}`;

          var printContent = document.getElementById("printModal").innerHTML;
          var originalContent = document.body.innerHTML;
          document.body.innerHTML = printContent;
          window.print();
          document.body.innerHTML = originalContent;
          // // Reinitialize modal after printing
          // $('#printModal').modal('show');

          // Use setTimeout to reload the page after 3 seconds (adjust the time as needed)
          setTimeout(function () {
            location.reload();
          }, 1000);
        });

        // function printPageArea(areaID) {
        //   console.log(areaID);
        //   var printContent = document.getElementById(areaID).innerHTML;
        //   var originalContent = document.body.innerHTML;
        //   document.body.innerHTML = printContent;
        //   window.print();
        //   document.body.innerHTML = originalContent;
        // }

        // Add conditional statement to change background color
        if (studentInvoice.autoSerial.includes("R")) {
          newRow.style.backgroundColor = "lightblue";
          printBtnn.style.display = "none";
        }

        // if (studentInvoice.autoSerial.includes("i")) {
        //     newRow.style.backgroundColor = "#8FBC8F";
        // }
        const btnSend = newRow.querySelector("#btnSend");

        btnSend.addEventListener("click", () => {
          // Get the id from session storage.
          const id = sessionStorage.getItem("idToPass");

          // Check if the id is empty.
          if (!id) {
            // Return from the function to stop it from executing.
            return;
          }

          // Display a confirmation message to the user.
          const confirmationMessage = `Are you sure you want to send?`;
          const confirmation = confirm(confirmationMessage);

          if (confirmation) {
            // Continue with the rest of the function code.
            const timestamp = new Date();
            // Convert the timestamp to dd/mm/yyyy format.
            const formattedDate = timestamp.toLocaleString("en-GB");
            // Collect form data
            const serial = document.querySelector("#Serial");
            const Timestamp = document.querySelector(".Timestamp");
            Timestamp.value = formattedDate;
            serial.value = Invoices[i]["autoSerial"];
          } else {
            const spinnerContainer = document.querySelector(
              "#spinner-container1"
            );
            spinnerContainer.style.display = "none";
            const alertMsg2 = document.querySelector("#alertMsg2");
            alertMsg2.style.display = "none";
          }
        });
        tbodyInvoice.appendChild(newRow);
      }
    }
  } catch (error) {
    console.log(error);
  }

  // submit form for send invoice
  jQuery(".frmSendInvoice").on("submit", function (e) {
    e.preventDefault();
    jQuery.ajax({
      url: "https://script.google.com/macros/s/AKfycbzTAKWJzyoVUQkJvN2vQLC6vEgTSIPlq2lFvnh45pIs1Avjy9aYXxXi3FtXL_08pyOVmg/exec",
      type: "post",
      data: jQuery(".frmSendInvoice").serialize(),
      beforeSend: function () {
        var spinner =
          '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
        jQuery("#spinner-container1").html(spinner);
      },
      success: function (result) {
        jQuery(".frmSendInvoice")[0].reset();
        // Display success message here
        // alertMsg.classList.add('alert', 'alert-success');
        // Check if id is empty
        const id = sessionStorage.getItem("idToPass");
        if (id === null || id === "") {
          alertMsg.classList.add("alert", "alert-danger");
          alertMsg.innerHTML =
            "<strong>Error!</strong> Please Enter Invalid Id .";
          alertMsg.style.display = "block";
        } else {
          alertMsg.classList.remove("alert", "alert-danger");
          alertMsg.classList.add("alert", "alert-success");
          alertMsg.innerHTML = "<strong>Success!</strong> Send successfully.";
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
      },
    });
  });

  hide();
}

var paramsGroup = new URLSearchParams(window.location.search);
let value = paramsGroup.get("id");
console.log("value : " + value);
showInvoice(value);
// display(value);

const payBtnInvoice = document.querySelector("#payBtnInvoice");

const alertMsg = document.querySelector(".alertMsg");

//submit from for invoice
jQuery("#frmSubmit").on("submit", function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycbytlYxtnL1itZablK2TT4B6Mm2e6EWFSn-PYrVtIb5hT43gsJR1cqa3zR-C80UpNe6sVQ/exec",
    type: "post",
    data: jQuery("#frmSubmit").serialize(),
    beforeSend: function () {
      var spinner =
        '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';
      jQuery("#spinner-container").html(spinner);
    },
    success: function (result) {
      jQuery("#frmSubmit")[0].reset();
      // Display success message here
      alertMsg.classList.add("alert", "alert-success");
      alertMsg.style.width = "25%";
      alertMsg.style.position = "fixed";
      alertMsg.style.top = "0";
      alertMsg.style.left = "0";
      alertMsg.style.margin = "20px";
      alertMsg.style.transition = "all 0.5s ease-in-out";
      alertMsg.innerHTML =
        "<strong>Success!</strong> Payment added successfully.";
      alertMsg.style.display = "block";
      alertMsg.style.opacity = "0";
      setTimeout(function () {
        alertMsg.style.opacity = "1";
      }, 10);
      setTimeout(function () {
        alertMsg.style.display = "none";
        location.reload();
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
      jQuery("#spinner-container").empty();
      jQuery("#exampleModal").modal("hide");
      $("#exampleModal").on("hidden.bs.modal", function (e) {
        $(".modal-backdrop").remove();
      });
    },
  });
});

payBtnInvoice.addEventListener("click", () => {
  //import any data
  const id = sessionStorage.getItem("idToPass");
  const ScholarshipToPass = sessionStorage.getItem("ScholarshipToPass");
  const ReceptionistToPass = sessionStorage.getItem("ReceptionistToPass");
  const groupToPass = sessionStorage.getItem("groupToPass");
  const userr = localStorage.getItem("myCode");

  console.log(id, ScholarshipToPass, ReceptionistToPass, groupToPass);

  // Get the "SelectDueDate" element.
  const StudentNUM = document.querySelector("#StudentNUM");
  const Scholarship = document.querySelector("#Scholarship");
  const Reception = document.querySelector("#Reception");
  const fresh = document.querySelector("#fresh");
  const StudyType = document.querySelector("#StudyType");
  const EmployeeInvoice = document.querySelector("#EmployeeInvoice");

  // Set the value of the "SelectDueDate" element to the due date of the student in the current row.
  StudentNUM.value = id;
  Scholarship.value = ScholarshipToPass;
  Reception.value = ReceptionistToPass;
  StudyType.value = groupToPass;
  EmployeeInvoice.value = userr;
  fresh.value = "Student";
});

// make sub cat none in some condition
const selectElement = document.querySelector('#floatingSelect[name="type"]');
const secondDiv = document.querySelector(
  '#floatingSelect[name="payment sub cat"]'
);

selectElement.addEventListener("change", (event) => {
  if (event.target.value === "Payment") {
    secondDiv.style.display = "block";
  } else {
    secondDiv.style.display = "none";
    secondDiv.removeAttribute("required");
  }
});

// const form = document.getElementById("myForm");

// form.addEventListener("submit", (event) => {
//     event.preventDefault(); // prevent default form submission behavior

//     const formData = new FormData(form); // create FormData object from form data

//     const url = "https://script.google.com/macros/s/AKfycbxuGH2guvDWHffppqiVe3CTCDLJwwaVzEenw290Lk7nvTznvfq06Sd7QH7oNYr2cikiqg/exec";

//     fetch(url, {
//         method: "POST",
//         body: formData,
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//     })
//         .then(response => {
//             if (response.ok) {
//                 // display success message to user
//                 alert("Payment added successfully!");
//             } else {
//                 throw new Error("Network response was not ok");
//             }
//         })
//         .catch(error => {
//             console.error("Error submitting form:", error);
//         });
// });

// searchButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     // sessionStorage.clear();
//     const value = searchInput[0].value;
//     if (value.trim() === "" || isNaN(value) || value.charAt(0) !== "2") {
//         // Create a Bootstrap alert message
//         const alertMessage = document.createElement("div");
//         alertMessage.classList.add("alert", "alert-danger");
//         alertMessage.textContent = "Please enter a valid Student Id";
//         alertMessage.style.width = "50%";
//         alertMessage.style.margin = "0 auto";
//         alertMessage.style.display = "flex";
//         alertMessage.style.alignItems = "center";
//         alertMessage.style.justifyContent = "center";
//         const section2 = document.querySelector(".section2");
//         section2.appendChild(alertMessage);

//         // Hide the alert message after half a second
//         setTimeout(() => {
//             alertMessage.style.display = "none";
//         }, 2000);
//         //display all boxes in this case
//         fName.innerHTML = " ";
//         ID.innerHTML = " ";
//         Email.innerHTML = " ";
//         Phone.innerHTML = " ";
//         headName.innerHTML = " ";
//         pic.src = " ";

//         // Stop all functions from another JavaScript file
//         return;
//     } else {

//         display(value);
//         // showInvoice(value);
//     }
// });

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
  //   sidebar.classList.toggle("open");
  //   menuBtnChange();
  // });

  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
};

// var user = localStorage.getItem("myUser");

window.addEventListener("load", function () {
  if (
    localStorage.getItem("myCode") === "" ||
    localStorage.getItem("myCode") === null
  ) {
    // Redirect to index.html
    window.location.href = "index.html";
  }
});
