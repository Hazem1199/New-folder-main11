const searchInput = document.getElementsByName("search");
const searchButton = document.querySelector('.search-button');


// async function getInfoPaper() {
//     const url = `https://script.google.com/macros/s/AKfycbxvOaxJZa4sqVK66ng6FHlsOgZO34ZwG9RuKaU6zqEW7Bx9y1cDL2mnb15s2agPEMiV0g/exec`;
//     response = await fetch(url);
//     data = await response.json();
//     console.log("paperData"+data);
//     return data;
// }

async function getInfoDeadlines(id) {
    const baseUrl = `https://script.google.com/macros/s/AKfycbxvOaxJZa4sqVK66ng6FHlsOgZO34ZwG9RuKaU6zqEW7Bx9y1cDL2mnb15s2agPEMiV0g/exec`;
    let url = baseUrl;
    if (id) {
        url += `?id=${id}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

var loadingDiv = document.querySelector('.loading-div')

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


async function showPapers(id) {
    change();
    const students = await getInfoDeadlines(id);
    const tableBody = document.querySelector('.tbodyPaper');
    // Remove all existing rows from the table
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    students.forEach(element => {
        if (id == element.ID) {
            // console.log("id" + element.ID);
            const student = { personalId: element['Personal id'], Certificate: element.Certificate, hrLetter: element['HR Letter'] };
            console.log("stuObject" + student);
            const newRow = document.createElement('tr');
            const personalIdCell = document.createElement('td');
            const CertificateCell = document.createElement('td');
            const hrLetterCell = document.createElement('td');
            newRow.appendChild(personalIdCell);
            newRow.appendChild(CertificateCell);
            newRow.appendChild(hrLetterCell);
            // personalIdCell.innerHTML = student.personalId;
            // CertificateCell.innerHTML = student.Certificate;
            // hrLetterCell.innerHTML = student.hrLetter;
            if (student.personalId) {
                const img = document.createElement('img');
                img.src = '../imgs/correct.png';
                img.style.width = "10%";
                personalIdCell.appendChild(img);
            }else{
                const img = document.createElement('img');
                img.style.width = "10%";
                img.src = '../imgs/png-transparent-computer-icons-ok-miscellaneous-trademark-cross.png';
                personalIdCell.appendChild(img);
            }

            if (student.Certificate) {
                const img = document.createElement('img');
                img.src = '../imgs/correct.png';
                img.style.width = "10%";
                CertificateCell.appendChild(img);
            }else{
                const img = document.createElement('img');
                img.src = '../imgs/png-transparent-computer-icons-ok-miscellaneous-trademark-cross.png';
                img.style.width = "10%";
                CertificateCell.appendChild(img);
            }

            if (student.hrLetter) {
                const img = document.createElement('img');
                img.src = '../imgs/correct.png';
                img.style.width = "10%";
                hrLetterCell.appendChild(img);
            }else{
                const img = document.createElement('img');
                img.src = '../imgs/png-transparent-computer-icons-ok-miscellaneous-trademark-cross.png';
                img.style.width = "10%";
                hrLetterCell.appendChild(img);
            }
    
            tableBody.appendChild(newRow);
        }
    });
    hide(); // hide the loading overlay once the requests are shown
}



var paramsPaper = new URLSearchParams(window.location.search);
var id = paramsPaper.get('id');
showPapers(id);

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