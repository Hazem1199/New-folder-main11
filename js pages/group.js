var loadingDiv = document.querySelector('.loading-div')
var searchButton = document.querySelector(".search-button");
const frmDiv1 = document.querySelector('.frmDiv1');
const frmDiv2 = document.querySelector('.frmDiv2');
const btnNext = document.querySelector('#btnNext');
const btnBack = document.querySelector('#btnBack');
const containerForm = document.querySelector('.containerForm');
const StudentNum = document.querySelector('#StudentNum');
const user = document.querySelector('#user');
const ActuallyDate = document.querySelector(".ActuallyDate")
const DateBySRM = document.querySelector(".DateBySRM")
const by = document.querySelector(".by")
var userr = localStorage.getItem("myCode");




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

// const baseUrl = 'https://script.google.com/macros/s/AKfycbyBpgJd3o4DNSd7korkuPXGRSGh6ryS-fPRY0N1XRivyiHDw-U7YXz65VzuUdJ3i7Bk/exec';
// let url = baseUrl;
// if (id) {
//     url += `?id=${id}`;
// }
// const response = await fetch(url);
// if (!response.ok) {
//     throw new Error(`Failed to fetch data from API: ${response.status}`);
// } else {
//     console.log("fetch Done");
//     const data = await response.json();
//     return data;
// }


async function getOnlineSending(id) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbxRtzdcG3n8fdTqLmg8qPPEWniywl4jrlhru0qadBtDUQx8lsUtgJqpOOVm_HS6ybyRKg/exec', {
    method: 'POST',
    body: JSON.stringify({ "id": id })
  })
  var data = await response.json();
  console.log(data);
  return data;
}

async function getInfoGroup(id) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbwAIsY5c7ebcjrDN58-l097iqHF-_Rd6gChIbA4rcKggLD0qgVP95fgm2oHS8FjhxM5Iw/exec', {
    method: 'POST',
    body: JSON.stringify({ "id": id })
  })
  var data = await response.json();
  console.log(data);
  return data;
}
// Initialize the counter
let k = 0;

let onlinePush = []


async function showAllGroup(id) {
  try {
    change()
    const groups = await getInfoGroup(id);
    const onlineSend = await getOnlineSending(id);
    let tableBody = document.querySelector('.divTableBody');
    tableBody.innerHTML = '';
    //let i = 0;
    // console.log("group.ID" +group.ID);
    console.log("id" + id);
    // get online sending

    for (let i = 0; i < onlineSend.length; i++) {
      if (id == onlineSend[i].ID) {
        var onlineSendObj = {
          ID: onlineSend[i].ID,
          ActuallySendingDate: onlineSend[i]["Actually Sending Date"],
          ModuleCode: onlineSend[i]["Module Code"],
          ActuallySendingDateBySRM: onlineSend[i]["Actually Sending Date by SRM"],
          Code: onlineSend[i].Code,
          User: onlineSend[i].User,
        };
      }
      onlinePush.push(onlineSendObj)
        // console.log(onlinePush);
    }







    // get all data of modules
    groups.filter(group => group.ID == id).forEach(async group => {
      // if (group.ID === id) {
      console.log(group);

      var student = {

        Group1: group[`g1`],
        Module1: group[`g1 module`],
        Date1: group[`g1 date`],
        grade1: group[`g1 grade`],
        attendance1: group[`g1 attendance`],
        Group2: group[`g2`],
        Module2: group[`g2 module`],
        Date2: group[`g2 date`],
        grade2: group[`g2 grade`],
        attendance2: group[`g2 attendance`],
        Group3: group[`g3`],
        Module3: group[`g3 module`],
        Date3: group[`g3 date`],
        grade3: group[`g3 grade`],
        attendance3: group[`g3 attendance`],
        Group4: group[`g4`],
        Module4: group[`g4 module`],
        Date4: group[`g4 date`],
        grade4: group[`g4 grade`],
        attendance4: group[`g4 attendance`],
        Group5: group[`g5`],
        Module5: group[`g5 module`],
        Date5: group[`g5 date`],
        grade5: group[`g5 grade`],
        attendance5: group[`g5 attendance`],
        Group6: group[`g6`],
        Module6: group[`g6 module`],
        Date6: group[`g6 date`],
        grade6: group[`g6 grade`],
        attendance6: group[`g6 attendance`],
        Group7: group[`g7`],
        Module7: group[`g7 module`],
        Date7: group[`g7 date`],
        grade7: group[`g7 grade`],
        attendance7: group[`g7 attendance`],
        Group8: group[`g8`],
        Module8: group[`g8 module`],
        Date8: group[`g8 date`],
        grade8: group[`g8 grade`],
        attendance8: group[`g8 attendance`],
        Group9: group[`g9`],
        Module9: group[`g9 module`],
        Date9: group[`g9 date`],
        grade9: group[`g9 grade`],
        attendance9: group[`g9 attendance`],
        Group10: group[`g10`],
        Module10: group[`g10 module`],
        Date10: group[`g10 date`],
        grade10: group[`g10 grade`],
        attendance10: group[`g10 attendance`],
        Group11: group[`g11`],
        Module11: group[`g11 module`],
        Date11: group[`g11 date`],
        grade11: group[`g11 grade`],
        attendance11: group[`g11 attendance`],
        Group12: group[`g12`],
        Module12: group[`g12 module`],
        Date12: group[`g12 date`],
        grade12: group[`g12 grade`],
        attendance12: group[`g12 attendance`]

      };

      for (var i = 1; i <= 12; i++) {
        // Create a new row
        let row = document.createElement('tr');
        row.classList.add('divTableRow');

        // Set the date and formatted date
        let dateProp = `Date${i}`;
        const date = new Date(student[dateProp]);
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        let formattedDate = date.toLocaleDateString('en-GB', options);

        let endDate = new Date(date);
        let getStudyType = sessionStorage.getItem('groupToPass');

        if (getStudyType === 'Online') {
          endDate.setDate(date.getDate() + 30);
        } else {
          endDate.setDate(date.getDate() + 42);
        }


        let formattedEndDate = endDate.toLocaleDateString('en-GB', options);


        // Get the properties for the current group
        let groupProp = `Group${i}`;
        let moduleProp = `Module${i}`;
        let gradeProp = `grade${i}`;
        let attendanceProp = `attendance${i}`;
        let group = student[groupProp];
        let module = student[moduleProp];
        let grade = student[gradeProp];
        let attendance = student[attendanceProp];
        if (onlinePush.length > 0) {
          var ActuallySendingDate = onlinePush.ActuallySendingDate;
          var ActuallySendingDateBySRM = onlinePush.ActuallySendingDateBySRM;
          var User = onlinePush.User;
          var ModuleCode = onlinePush.ModuleCode;
        }


        // Save the group and formattedDate to session storage
        sessionStorage.setItem('group', group);
        sessionStorage.setItem('formattedDate', formattedDate);
        sessionStorage.setItem('formattedEndDate', formattedEndDate);
        console.log(group);
        console.log(formattedDate);


        // Filter online push data based on module

        // Check if data exists for this module
        // Filter data and check if it exists
        const filteredData = onlinePush.filter((x) => x.ModuleCode === group);
        if (filteredData.length > 0) {
          // Do something with the filtered data
          var ActuallySendingDate = new Date(filteredData[0].ActuallySendingDate);
          var ActuallySendingDateBySRM = new Date(filteredData[0].ActuallySendingDateBySRM);

          // Format the dates
          var formattedActuallySendingDate = ActuallySendingDate.toLocaleDateString('en-GB', options);
          var formattedActuallySendingDateBySRM = isValidDate(ActuallySendingDateBySRM) ? ActuallySendingDateBySRM.toLocaleDateString('en-GB', options) : "";

          var User = filteredData[0].User;
          console.log(formattedActuallySendingDate);
        } else {
          // Optionally, set default values if no data exists
          var ActuallySendingDate = ""; // or any desired default value
          var ActuallySendingDateBySRM = "";
          var formattedActuallySendingDate = ""; // or any desired default value
          var formattedActuallySendingDateBySRM = "";
          var User = "";
        }
        //  Function to check if a date is valid
        function isValidDate(date) {
          return date instanceof Date && !isNaN(date);
        }



        // Add content to the row
        row.innerHTML = `
        <td class = "divTableCell">${group}</td>
        <td class = "divTableCell">${module}</td>
        <td class = "divTableCell">${formattedDate}</td>
        <td class = "divTableCell">${formattedEndDate}</td>
        <td class = "divTableCell" style="color: green; font-weight: bold;">${formattedActuallySendingDate}</td>
        <td class = "divTableCell">${formattedActuallySendingDateBySRM}</td>
        <td class = "divTableCell">${User}</td>
        <td class = "divTableCell">${grade}</td> 
        <td class = "divTableCell">${attendance}</td>
      `



        // Check if the row is empty
        let isEmpty = true;
        row.querySelectorAll('td').forEach(td => {
          if (td.textContent.trim() !== '') {
            isEmpty = false;
          }
        });

        // Remove the row if it is empty
        if (group == "") {
          row.remove();
        } else {
          // Append the row to the table
          document.querySelector('.divTableBody').appendChild(row);
        }

        const frmDiv1 = document.querySelector('.frmDiv1');
        // Create a new div element to store the inputs
        const inputDiv = document.createElement('div');

        const groupp = sessionStorage.getItem('group')
        const formattedDatee = sessionStorage.getItem('formattedDate')



        // Iterate over the pushObj array
        // for (const value of pushObj) {
        // Create a new input element
        const input = document.createElement('input');
        const input1 = document.createElement('input');

        // Set the value of the input element to the current value in the pushObj array
        input.value = groupp;
        input1.value = formattedDatee;


        const originalValue = input1.value;
        const originalType = input1.type;

        input1.onfocus = function () {
          this.type = 'date';
        };

        input1.onblur = function () {
          if (!this.value) {
            this.type = originalType;
            this.value = originalValue;
          }
        };

        // Set the style width of the input element & flex
        inputDiv.style.display = ('flex');
        input.style.width = '60%';
        input1.style.width = '60%';
        input.style.marginRight = '5px';
        input.style.marginLeft = '15px';
        input1.style.marginLeft = '15px';

        // Set the type of the input element to 'number'
        input.type = 'number';
        // input1.type = 'Date';


        if (grade) {
          input.style.display = 'none';
          input1.style.display = 'none';
          // input1.disabled = true;

        }


        // Append the input element to the inputDiv element
        inputDiv.appendChild(input);
        inputDiv.appendChild(input1);


        // Increment the counter
        k++;
        // Set the name attribute of the input element
        input.name = 'Group' + [k];
        input1.name = 'GroupDate' + [k];
        console.log(input.name);


        // Set the placeholder attribute of the input element
        input.placeholder = 'Amount';
        input1.placeholder = 'Due Date';

        // Set the id attribute of the input element
        input.id = 'Group';
        StudentNum.value = id;
        user.value = userr;
        // StudentNum.disabled = false;


        // Set the class attribute of the input element
        input.classList.add('form-control', 'Group', 'mb-3');
        input1.classList.add('form-control', 'Group', 'mb-3');

        // Set the required attribute of the input element
        input.required = true;
        // }  
        // Save the value of k to local storage
        localStorage.setItem('k', k);

        // Append the inputDiv element to the document body
        frmDiv1.appendChild(inputDiv);

      }
      // save group value to pass it to deadline form 



    })



    hide()
  } catch (error) {
    console.log(error);
  }
}

btnNext.onclick = function () {
  frmDiv1.style.left = "-500px";
  frmDiv2.style.left = "15px";
  frmDiv2.style.visibility = "visible";
  containerForm.style.height = "380px";
}

btnBack.onclick = function () {
  frmDiv2.style.left = "-500px";
  frmDiv1.style.left = "15px";
  frmDiv1.style.visibility = "visible";
  frmDiv2.style.visibility = "hidden";
  containerForm.style.height = "740px";
}


const alertMsg = document.querySelector('.alertMsg');

//supmit  frmGroupEdit
jQuery('#frmModuleEdit').on('submit', function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: 'https://script.google.com/macros/s/AKfycbwe6pqKwdyIsqXBIhLLUlZBwKcGacB2txW2hCIGQv5jbiqI_HpJesmnTTr2sKYYYsLSsg/exec',
    type: 'post',
    data: jQuery('#frmModuleEdit').serialize(),
    beforeSend: function () {
      var spinner = '<div class="text-center" style="margin-left: 5px;"><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div></div>';

      jQuery('#spinner-container').html(spinner);
    },
    success: function (result) {
      jQuery('#frmModuleEdit')[0].reset();
      // Display success message here
      alertMsg.classList.add('alert', 'alert-success');
      alertMsg.style.width = '25%';
      alertMsg.style.position = 'fixed';
      alertMsg.style.top = '0';
      alertMsg.style.left = '0';
      alertMsg.style.margin = '20px';
      alertMsg.style.transition = "all 0.5s ease-in-out";
      alertMsg.innerHTML = '<strong>Success!</strong> Payment edit successfully.';
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
      alertMsg.classList.add('alert', 'alert-danger');
      alertMsg.style.width = '25%';
      alertMsg.style.position = 'fixed';
      alertMsg.style.top = '0';
      alertMsg.style.left = '0';
      alertMsg.style.transition = "all 0.5s ease-in-out";
      alertMsg.innerHTML = '<strong>Error!</strong> An error occurred. Please try again.';
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
      jQuery('#spinner-container').empty();
    }
  });
});




// let row = document.createElement('div');
// row.classList.add('divTableRow');
// let dateCell = document.createElement('div');
// dateCell.classList.add('divTableCell');
// dateCell.textContent = student.Date;
// row.appendChild(dateCell);
// let groupCell = document.createElement('div');
// groupCell.classList.add('divTableCell');
// groupCell.textContent = student.Group;
// row.appendChild(groupCell);
// let moduleCell = document.createElement('div');
// moduleCell.classList.add('divTableCell');
// moduleCell.textContent = student.Module;
// row.appendChild(moduleCell);
// let gradeCell = document.createElement('div');
// gradeCell.classList.add('divTableCell');
// gradeCell.textContent = student.grade;
// row.appendChild(gradeCell);
// let attendanceCell = document.createElement('div');
// attendanceCell.classList.add('divTableCell');
// attendanceCell.textContent = student.attendance;
// row.appendChild(dateCell);
// tableBody.appendChild(row);
// // }





var paramsGroup = new URLSearchParams(window.location.search);
var id = paramsGroup.get('id');
showAllGroup(id);


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