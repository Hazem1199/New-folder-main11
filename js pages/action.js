var loadingDiv = document.querySelector('.loading-div')
var searchButton = document.querySelector(".search-button");

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


async function actionInfoGroup(id) {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwAIsY5c7ebcjrDN58-l097iqHF-_Rd6gChIbA4rcKggLD0qgVP95fgm2oHS8FjhxM5Iw/exec', {
        method: 'POST',
        body: JSON.stringify({ "id": id })
    })
    var data = await response.json();
    console.log(data);
    return data;
}



async function actionGroup(id) {
    try {
        change()
        const groups = await actionInfoGroup(id);
        let planTable = document.querySelector('.planTable');
        planTable.innerHTML = '';
        //let i = 0;
        // console.log("group.ID" +group.ID);
        console.log("id" + id);

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
                Module6: group[`g1 module`],
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
                let row = document.createElement('tr')
                row.classList.add('divTableRow');

                // Set the date to i days after the original date
                let dateProp = `Date${i}`;
                const date = new Date(student[dateProp]);
                // date.setDate(date.getDate() - 1);
                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                const formattedDate = date.toLocaleDateString(undefined, options);
                // let newDate = new Date(student[dateProp]);
                // newDate.setDate(newDate.getDate() + i);

                // Get the properties for the current group
                let groupProp = `Group${i}`;
                let moduleProp = `Module${i}`;
                let gradeProp = `grade${i}`;
                let attendanceProp = `attendance${i}`;
                let group = student[groupProp];
                let module = student[moduleProp];
                let grade = student[gradeProp];
                let attendance = student[attendanceProp];



                row.innerHTML = `
                <td>${formattedDate}</td>
                <td>${group}</td>
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
            }
            // save group value to pass it to deadline form 


        })
        hide()
    } catch (error) {
        console.log(error);
    }
}

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
// actionGroup(id);


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