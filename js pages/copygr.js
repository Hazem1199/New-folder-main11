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
const seeMore4 = document.querySelector('.seeMore4');




async function getInfoGroup(id) {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwAIsY5c7ebcjrDN58-l097iqHF-_Rd6gChIbA4rcKggLD0qgVP95fgm2oHS8FjhxM5Iw/exec', {
        method: 'POST',
        body: JSON.stringify({ "id": id })
    })
    var data = await response.json();
    console.log(data);
    return data;
}




async function showGroup(id) {
    const students = await getInfoGroup(id);
    const body = document.querySelector('body')
    const tableBody = document.querySelector('.tbody2');

    // Remove all existing rows from the table
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    // Create spinner element
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    document.body.appendChild(spinner);

    let moduleCount = 0;

    for (let i = 1; i <= 12; i++) {
        students.forEach(async element => {
            if (id == element.ID) {
                const student = {
                    Group: element[`g${i}`],
                    Module: element[`g${i} module`],
                    Date: element[`g${i} date`]
                };
                const date = new Date(student.Date);
                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                const formattedDate = date.toLocaleDateString(undefined, options);
                const newRow = document.createElement('tr');
                const moduleCell = document.createElement('td');
                const groupCell = document.createElement('td');
                const dateCell = document.createElement('td');
                newRow.appendChild(groupCell);
                newRow.appendChild(moduleCell);
                newRow.appendChild(dateCell);
                moduleCell.textContent = student.Module;
                groupCell.textContent = student.Group;
                dateCell.textContent = formattedDate;
                tableBody.appendChild(newRow);
                let groupUrl = `Group.html?id=${id}`;
                seeMore4.href = groupUrl;
                let group = await fetch(groupUrl);
                let groupData = await group.json();
                localStorage.setItem('groupData', JSON.stringify(groupData));
                window.open = groupData;
                moduleCount++;
            }
        });
    }

    // Hide spinner element
    document.body.removeChild(spinner);

    // Show the module count
    const countElement = document.createElement('p');
    countElement.textContent = `Total modules: ${moduleCount}`;
    body.appendChild(countElement);
}





// const page = document.querySelector('body');


// page.addEventListener('click', (event) => {
//     if (event.target !== searchInput) {
//         const tableBody = document.querySelector('.divTableBody');
//         tableBody.innerHTML = ""; // حذف جميع الصفوف في الجدول
//     }
// });

searchButton.addEventListener('click', () => {
    const id = searchInput[0].value;
    showGroup(id);
});
