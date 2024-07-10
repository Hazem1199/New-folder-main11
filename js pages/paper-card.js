// const cardText1 = document.querySelector('.text1');
var searchInput = document.getElementsByName("search");
var fName = document.querySelector(".fName");
var body = document.getElementById("body");
var infoBox = document.getElementsByClassName("info-box");
var Email = document.querySelector(".Email");
var Phone = document.querySelector(".Phone");
var ID = document.querySelector(".ID");
var Requests = document.getElementById("Requests");
var Complaint = document.getElementById("Complaint");
var searchButton = document.querySelector(".search-button");
var pic = document.getElementById("profile-pic");
// var headName = document.querySelector('.headName')
const seeMore5 = document.querySelector(".seeMore5");
const footer5 = document.querySelector(".footer5");

async function getPaper() {
  const url = `https://script.google.com/macros/s/AKfycbxvOaxJZa4sqVK66ng6FHlsOgZO34ZwG9RuKaU6zqEW7Bx9y1cDL2mnb15s2agPEMiV0g/exec`;
  response = await fetch(url);
  data = await response.json();
  // console.log(data[0].Name);
  return data;
}

const spinner = document.getElementById("spinner");

function loadOn() {
  spinner.style.display = "block";
}

function loadOff() {
  spinner.style.display = "none";
}

// Get the result from session storage
const savedResult = sessionStorage.getItem("paperResult");
if (savedResult) {
  const result = JSON.parse(savedResult);
  // Use the result to update the UI
  // showPaper(result.id)
}

async function showPaper(id) {
  document.querySelector(".num-Papers").textContent = " ";
  // loadOn()
  const students = await getPaper(id);
  let filteredPapers = students.filter((student) => student.ID == id);
  let paperCount = filteredPapers.length;

  sessionStorage.setItem("myDataPaper", JSON.stringify(paperCount));

  let PaperInfo = {
    ID: searchInput[0].value,
    paperCount: filteredPapers.length,
  };

  // Save the data to session storage
  sessionStorage.setItem("myDataPaper", JSON.stringify(PaperInfo));
  const savedDataReq6 = sessionStorage.getItem("myDataPaper");
  const dataSto6 = JSON.parse(savedDataReq6);
  // console.log("dataSto6.ID:" + dataSto6.ID);
  // let donePaperCount = 0;
  // let paperCount = 3; // initialize paperCount with the correct value
  // filteredPapers.forEach(student => {
  //   if (filteredPapers) {
  //     // increment donePaperCount for each paper completed by the student
  //     if (student['Personal id'] == true) donePaperCount++;
  //     if (student.Certificate == true) donePaperCount++;
  //     if (student['HR Letter'] == true) donePaperCount++;
  //     if (id.trim() === "" || isNaN(id) || id.charAt(0) !== "2") {
  //       document.querySelector('.num-Papers').textContent = `0 / 0`;
  //       footer5.textContent = `No paper(s) Found`;
  //     } else {
  //       document.querySelector('.num-Papers').textContent = `${donePaperCount} / ${paperCount}`;
  //     }
  //     console.log(donePaperCount);
  //     const remainingPapers = [];
  //     if (student['Personal id'] == false) remainingPapers.push('Personal id');
  //     if (student.Certificate == false) remainingPapers.push('Certificate');
  //     if (student['HR Letter'] == false) remainingPapers.push('HR Letter');
  //     if (remainingPapers.length === 0) {
  //       footer5.textContent = `No paper(s) remaining`;
  //     } else {
  //       const remainingPapersText = remainingPapers.join(' and ');
  //       // footer5.textContent = `${remainingPapersText} paper(s) remaining`;
  //     }
  //   }
  // });

  // loadOff()

  // Save the result in session storage
  // const result = { donePaperCount, paperCount, id };
  // sessionStorage.setItem('paperResult', JSON.stringify(result));
}

async function openPaper() {
  const id = sessionStorage.getItem("idToPass");
  let paperUrl = `paper.html?id=${id}`;
  seeMore5.href = paperUrl;
  let paper = await fetch(paperUrl);
  let paperData = await paper.json();
  localStorage.setItem("paperData", JSON.stringify(paperData));
  window.open(paperUrl); // Open deadlineUrl in a new window
}

seeMore5.addEventListener("click", () => {
  const id = searchInput[0].value;
  if (id != null || id != "") {
    console.log("ifid" + id);
    openPaper(id);
  }

  // const savedDataReq = sessionStorage.getItem("myDataReq");
  //   const data = JSON.parse(savedDataReq);
  const savedDataReq2 = sessionStorage.getItem("myDataPaper");
  const dataSto2 = JSON.parse(savedDataReq2);
  console.log("dataSto2.ID:" + dataSto2.ID);
  if (dataSto2.ID != "") {
    // numRequest.innerHTML = dataSto2.requestCount;
    openPaper(dataSto2.ID);
  }
});

searchButton.addEventListener("click", async () => {
  const id = searchInput[0].value;
  showPaper(id);
});

// display the number of completed papers

// document.querySelector('.num-Papers').textContent = `${donePaperCount} / ${paperCount}`;

// // Show the number of remaining papers
// if (donePaperCount === paperCount) {
//     footer5.textContent = "No More Of paper";
// } else {
//     footer5.textContent = `${paperCount - donePaperCount} paper(s) remaining`;
// }

// async function showPaper(id) {
//     const students = await getPaper(id);

//     let donePaperCount = 0;
//     let paperCount = 0;

//     for (let i = 1; i <= students.length; i++) {
//         students.forEach(student => {
//             if (student.ID === id) {
//                 if (student['Personal id'] && student.Certificate && student['HR Letter'] && student['HR Letter'] === true) {
//                     paperCount++;
//                     console.log(paperCount);
//             }}
//         });
//     }
//     // Hide spinner element
//     // document.body.removeChild(spinner);

//     // Update the module count
//     const moduleCountElement = document.getElementById('moduleCount');
//     moduleCountElement.textContent = `${totalDoneModules} / ${moduleCount}`;

//     // Update the footer based on the next module deadline
//     const filteredModules = students.filter(student => {
//         const date = new Date(student[`g${i} date`]);
//         return date >= new Date();
//     });
//     const nextModule = filteredModules.sort((a, b) => new Date(a[`g${i} date`]) - new Date(b[`g${i} date`]))[0];
//     if (nextModule) {
//         const formattedDueDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(nextModule[`g${i} date`]));
//         footer4.textContent = `Next Module: ${formattedDueDate}`;
//     } else {
//         footer4.textContent = 'No upcoming Module';
//     }
//     let moduleUrl = `Group.html?id=${id}`;
//     seeMore4.href = moduleUrl;
//     let module = await fetch(moduleUrl);
//     let moduleData = await module.json();
//     localStorage.setItem('moduleData', JSON.stringify(moduleData));
//     window.open(moduleUrl);
// }
