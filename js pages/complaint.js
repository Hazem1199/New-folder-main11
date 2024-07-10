
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




// async function getInfoComplaint() {
//     const url = `https://script.google.com/macros/s/AKfycbwO4ZvcLywR7K06KqYbDNau2VuVENY_3IAaJHvLlixq1W2ANSQNYnMpB_sdFEphHjMg/exec`;
//     response = await fetch(url);
//     data = await response.json();
//     console.log(data[0]);
//     return data;
// }




// async function showComplaint(value) {
//     var Complaint = await getInfoComplaint();
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


//     Complaint.forEach(element => {
//         if (value == element.ID) {
//             let comp = { Date: element.Date, Message: element.Message, exManager: element.exManager, status: element.status, emplyee: element.emplyee , type : element.type }
//             console.log(comp);
//             const newRow = document.createElement('tr');
//             const DateCell = document.createElement('td');
//             const ComplaintCell = document.createElement('td');
//             const exManagertCell = document.createElement('td');
//             const statustCell = document.createElement('td');
//             const emplyeeCell = document.createElement('td');
//             newRow.appendChild(DateCell);
//             newRow.appendChild(ComplaintCell);
//             newRow.appendChild(exManagertCell);
//             newRow.appendChild(statustCell);
//             newRow.appendChild(emplyeeCell);
//             DateCell.innerHTML = comp.Date;
//             ComplaintCell.innerHTML = comp.Message;
//             exManagertCell.innerHTML = comp.exManager;
//             statustCell.innerHTML = comp.status;
//             emplyeeCell.innerHTML = comp.emplyee;
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

// // searchButton.addEventListener('click', () => {
// //     tableBody.remove();
// //     if (searchInput.value != "") {
// //         show(searchInput.value);
// //     }
// // });


// //popup 


// // var openPopupButton = document.getElementById("openPopupButton");
// // var closePopupButton = document.getElementById("closePopupButton");
// // var popupContainer = document.getElementById("popupContainer");

// // openPopupButton.addEventListener("click", function() {
// //   console.log(popupContainer)
// //   popupContainer.style.display = "block";
// // });

// // window.onclick = function(event) {
// //   if (event.target == popupContainer) {
// //     popupContainer.style.display = "none";
// //   }
// // }



// // const form = document.getElementById('myForm');
// // const tableBody = document.querySelector('.divTableBody');

// // function action(event) {
// //   event.preventDefault(); // منع السلوك الافتراضي لنموذج الإرسال

// //   // الحصول على قيمة حقل الطلب
// //   const requestValue = document.getElementById('Request').value;

// //   // الحصول على التاريخ الحالي
// //   const today = new Date();
// //   const dateValue = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

// //   // إنشاء صف جديد
// //   const newRowHtml = `
// //     <div class="divTableRow">
// //       <div class="divTableCell">${dateValue}</div>
// //       <div class="divTableCell">${requestValue}</div>
// //     </div>
// //   `;

// //   // إضافة الصف الجديد إلى جسم الجدول
// //   tableBody.insertAdjacentHTML('beforeend', newRowHtml);

// //    // إعادة تعيين النموذج
// //    form.reset();

// //    // إخفاء popup
// //    const popupContainer = document.getElementById("popupContainer");
// //    popupContainer.style.display = "none";

// // }

// // form.addEventListener('submit', action);

var loadingDiv = document.querySelector('.loading-div');

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

async function getInfoComplaint(id) {
  const baseUrl = `https://script.google.com/macros/s/AKfycbwO4ZvcLywR7K06KqYbDNau2VuVENY_3IAaJHvLlixq1W2ANSQNYnMpB_sdFEphHjMg/exec`;
  let url = baseUrl;
  if (id) {
    url += `?id=${id}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  console.log("id" + data);
  return data;
}

// async function getInfoComplaint(id) {
//   const baseUrl = `https://script.google.com/macros/s/AKfycbwO4ZvcLywR7K06KqYbDNau2VuVENY_3IAaJHvLlixq1W2ANSQNYnMpB_sdFEphHjMg/exec`;
//   let url = baseUrl;
//   if (id.length > 6) {
//     const response = await fetch(url);
//     const data = await response.json();
//     id = data.ID;
//     url += `?id=${id}`;
//   } else {
//     url += `?id=${id}`;
//   }
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

async function showComplaint(id) {
  change();
  const complaints = await getInfoComplaint(id);
  let tableBody = document.querySelector('.divTableBody');
  tableBody.innerHTML = '';
  complaints.filter(complaint => complaint.ID == id).sort ((a, b) => new Date(b.Date) - new Date(a.Date)).forEach(complaint => {
    let row = document.createElement('div');
    row.classList.add('divTableRow');

    let formattedDate = new Date(complaint.Date).toLocaleDateString();

    let dateCell = document.createElement('div');
    dateCell.classList.add('divTableCell');
    dateCell.textContent = formattedDate;
    row.appendChild(dateCell);
    let requestCell = document.createElement('div');
    requestCell.classList.add('divTableCell');
    requestCell.textContent = complaint.Message;
    row.appendChild(requestCell);
    let exManagerCell = document.createElement('div');
    exManagerCell.classList.add('divTableCell');
    exManagerCell.textContent = complaint.exManager;
    exManagerCell.style.direction = "rtl";
    row.appendChild(exManagerCell);
    let actionCell = document.createElement('div');
    actionCell.classList.add('divTableCell');
    actionCell.textContent = complaint.status;
    row.appendChild(actionCell);
    let employeeCell = document.createElement('div');
    employeeCell.classList.add('divTableCell');
    employeeCell.textContent = complaint.emplyee;
    row.appendChild(employeeCell);
    tableBody.appendChild(row);
  });
  hide();
}

var paramsComp = new URLSearchParams(window.location.search);
var id = paramsComp.get('id');
showComplaint(id);

// add an event listener to the window object to run the `change()` function when a new window is opened
window.addEventListener('open', change);

window.onload = function () {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector("#btn");
  const searchBtn = document.querySelector(".bx-search")

  closeBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open")
    menuBtnChange()
  })

  // searchBtn.addEventListener("click", function () {
  //   sidebar.classList.toggle("open")
  //   menuBtnChange()
  // })

  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right")
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu")
    }
  }
}


window.addEventListener('load', function () {
  if (localStorage.getItem("myCode") === "" || localStorage.getItem("myCode") === null) {
    // Redirect to index.html
    window.location.href = 'index.html';
  }
})