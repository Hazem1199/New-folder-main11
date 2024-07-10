// var searchInput = document.getElementsByName("search");
// var fName = document.querySelector(".fName");
// var body = document.getElementById("body");
// var infoBox = document.getElementsByClassName("info-box")
// var Email = document.querySelector('.Email');
// var Phone = document.querySelector('.Phone');
// var ID = document.querySelector('.ID');
// var Requests = document.getElementById('Requests');
// var Complaint = document.getElementById('Complaint');
// var searchButton = document.querySelector('.search-button');
// var pic = document.getElementById("profile-pic")
// var headName = document.querySelector('.headName')

// async function getInfoRequest() {
//     const url = `https://script.google.com/macros/s/AKfycbzoB5fiDd4YOJFeeKct55UJojNEecJJRew8gNQEwNVwexgDYP7gV7CBNHbb3fn-RowS/exec`;
//     response = await fetch(url);
//     data = await response.json();
//     // console.log(data[0].Name);
//     return data;
// }

// async function showRequest(value) {
//     var requests = await getInfoRequest();
//     // console.log(students);
//     const body = document.querySelector('body')
//     const tableBody = document.querySelector('.divTableBody');
//     // Remove all existing rows from the table
//     while (tableBody.firstChild) {
//         tableBody.removeChild(tableBody.firstChild);
//     }

//     // // Create spinner element
//     // const spinner = document.createElement('div');
//     // spinner.classList.add('spinner');
//     // document.body.appendChild(spinner);

//     requests.forEach(element => {
//         if (value == element.ID) {
//             let req = { Date: element.Date, Message: element.Message, exManager: element.exManager, status: element.status, emplyee: element.emplyee, type: element.type }
//             console.log(req);
//             const newRow = document.createElement('tr');
//             const DateCell = document.createElement('td');
//             const RequestCell = document.createElement('td');
//             const exManagertCell = document.createElement('td');
//             const statustCell = document.createElement('td');
//             const emplyeeCell = document.createElement('td');
//             newRow.appendChild(DateCell);
//             newRow.appendChild(RequestCell);
//             newRow.appendChild(exManagertCell);
//             newRow.appendChild(statustCell);
//             newRow.appendChild(emplyeeCell);
//             DateCell.innerHTML = req.Date;
//             RequestCell.innerHTML = req.Message;
//             exManagertCell.innerHTML = req.exManager;
//             statustCell.innerHTML = req.status;
//             emplyeeCell.innerHTML = req.emplyee;
//             tableBody.appendChild(newRow);
//         }
//     });

//     // Hide spinner element
//     // document.body.removeChild(spinner);
// }

// // page.addEventListener('click', (event) => {
// //     if (event.target !== searchInput) {
// //         const tableBody = document.querySelector('.divTableBody');
// //         tableBody.innerHTML = ""; // حذف جميع الصفوف في الجدول
// //     }
// // });

// searchButton.addEventListener('click', () => {
//     const value = searchInput[0].value;
//     showRequest(value);
//   });

// // popup

// var openPopupButton = document.getElementById("openPopupButton");
// var closePopupButton = document.getElementById("closePopupButton");
// var popupContainer = document.getElementById("popupContainer");

// openPopupButton.addEventListener("click", function () {
//     console.log(popupContainer)
//     popupContainer.style.display = "block";
// });

// window.onclick = function (event) {
//     if (event.target == popupContainer) {
//         popupContainer.style.display = "none";
//     }
// }

// const form = document.getElementById('myForm');
// const tableBody = document.querySelector('.divTableBody');

// function action(event) {
//     event.preventDefault(); // منع السلوك الافتراضي لنموذج الإرسال

//     // الحصول على قيمة حقل الطلب
//     const requestValue = document.getElementById('Request').value;

//     // الحصول على التاريخ الحالي
//     const today = new Date();
//     const dateValue = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

//     // إنشاء صف جديد
//     const newRowHtml = `
//     <div class="divTableRow">
//     <div class="divTableCell">${dateValue}</div>
//     <div class="divTableCell">${requestValue}</div>
//     </div>
// `;

//     // إضافة الصف الجديد إلى جسم الجدول
//     tableBody.insertAdjacentHTML('beforeend', newRowHtml);

//     // إعادة تعيين النموذج
//     form.reset();

//     // إخفاء popup
//     const popupContainer = document.getElementById("popupContainer");
//     popupContainer.style.display = "none";

// }

// form.addEventListener('submit', action);

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

async function getInfoRequest(id) {
  const baseUrl = `https://script.google.com/macros/s/AKfycbyD7EqYJQoDv6SB1TuPpqOrHGTMmsV2xX_sQWeRKvxn_Y6WTKoLeUP7vTSPZphvvBveLg/exec`;
  let url = baseUrl;
  if (id) {
    url += `?id=${id}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

async function showRequests(id) {
  change();
  const requests = await getInfoRequest(id);
  let tableBody = document.querySelector(".divTableBody");
  tableBody.innerHTML = "";
  let filteredRequests = requests.filter((request) => request.ID == id).sort((a, b) => new Date(b.Date) - new Date(a.Date));
  let requestCount = filteredRequests.length;

  // Add a div to display the number of request results
  let requestCountDiv = document.createElement("div");
  // requestCountDiv.textContent = `Number of request results: ${requestCount}`;
  requestCountDiv.classList.add("requestCount");
  tableBody.appendChild(requestCountDiv);

  filteredRequests.forEach((request) => {
    let row = document.createElement("div");
    row.classList.add("divTableRow");

    // Format the date
    let formattedDate = new Date(request.Date).toLocaleDateString('en-GB');

    let dateCell = document.createElement("div");
    dateCell.classList.add("divTableCell");
    dateCell.textContent = formattedDate;
    row.appendChild(dateCell);

    let requestCell = document.createElement("div");
    requestCell.classList.add("divTableCell");
    requestCell.textContent = request.Message;
    row.appendChild(requestCell);

    let exManagerCell = document.createElement("div");
    exManagerCell.classList.add("divTableCell");
    exManagerCell.style.direction = "rtl";
    exManagerCell.textContent = request.exManager;
    row.appendChild(exManagerCell);

    let actionCell = document.createElement("div");
    actionCell.classList.add("divTableCell");
    actionCell.textContent = request.status;
    row.appendChild(actionCell);

    let tcCell = document.createElement("div");
    tcCell.classList.add("divTableCell");
    tcCell.style.direction = "rtl";
    tcCell.textContent = request.TC;
    row.appendChild(tcCell);

    let employeeCell = document.createElement("div");
    employeeCell.classList.add("divTableCell");
    employeeCell.textContent = request.emplyee;
    row.appendChild(employeeCell);

    tableBody.appendChild(row);
  });

  hide(); // hide the loading overlay once the requests are shown
}

var paramsreq = new URLSearchParams(window.location.search);
var id = paramsreq.get("id");
showRequests(id);

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

let Home = document.querySelector(".Home");

async function research() {
  let researchUrl = `SRM.html?id=${id}`;
  Home.href = researchUrl;
  let research = await fetch(researchUrl);
  let homeData = await research.json();
  localStorage.setItem("requestData", JSON.stringify(homeData));
  window.open = researchUrl;
}

// Home.addEventListener('click', () => {
//   research(id)
// });



window.addEventListener('load', function () {
  if (localStorage.getItem("myCode") === "" || localStorage.getItem("myCode") === null) {
    // Redirect to index.html
    window.location.href = 'index.html';
  }
})