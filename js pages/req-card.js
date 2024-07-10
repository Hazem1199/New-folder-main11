const cardText1 = document.querySelector(".text1");
const cardFooter1 = document.querySelector(".footer1");
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
// var headName = document.querySelector(".headName");
const seeMore1 = document.querySelector(".seeMore1");

async function getInfoRequest() {
  const url = `https://script.google.com/macros/s/AKfycbzoB5fiDd4YOJFeeKct55UJojNEecJJRew8gNQEwNVwexgDYP7gV7CBNHbb3fn-RowS/exec`;
  response = await fetch(url);
  data = await response.json();
  // console.log(data[0].Name);
  return data;
}

// async function showLastRequest(id) {
//   var requests = await getInfoRequest();
// let lastRequest;
// let latestDate;
// for (let i = requests.length - 1; i >= 0; i--) {
//   if (requests[i].ID == id) {
//     if (!lastRequest) {
//       lastRequest = requests[i];
//       latestDate = lastRequest.Date;
//     } else if (requests[i].Date > latestDate) {
//       lastRequest = requests[i];
//       latestDate = lastRequest.Date;
//     }
//   }
// }
// if (lastRequest) {
//   let req = { Message: lastRequest.Message , Date: lastRequest.Date}
//   cardText1.textContent = req.Message;
//   let date = new Date(latestDate);
//   let options = { year: 'numeric', month: 'short', day: 'numeric' };
//   let formattedDate = date.toLocaleDateString(undefined, options);
//   let formattedTime = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' });
//   cardFooter1.textContent = "last request : " + formattedDate + " at " + formattedTime;
//   let requestUrl = `Request.html?id=${id}`;
//   seeMore1.href = requestUrl;
//   let request = await fetch(requestUrl);
//   let requestData = await request.json();
//   localStorage.setItem('requestData', JSON.stringify(requestData));
//   window.open = requestUrl;
// } else {
//   cardText1.textContent = "No request found with ID " + id;
// }
// }

async function getInfoRequest(id) {
  const baseUrl = `https://script.google.com/macros/s/AKfycbzoB5fiDd4YOJFeeKct55UJojNEecJJRew8gNQEwNVwexgDYP7gV7CBNHbb3fn-RowS/exec`;
  let url = baseUrl;
  if (id) {
    url += `?id=${id}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const spinner2 = document.getElementById("spinner2");

function loadOn2() {
  spinner2.style.display = "block";
}

function loadOff2() {
  spinner2.style.display = "none";
}

const numRequest = document.querySelector(".num-request");
// const savedDataReq = sessionStorage.getItem("myDataReq");
// if (savedDataReq) {
//   const dataSto = JSON.parse(savedDataReq);
//   numRequest.innerHTML = dataSto.requestCount;
//   // console.log("dataStoID"+dataSto.ID);
//   // showRequests(data.ID)
// }

async function showRequests(id) {
  console.log("showRequests:");

  numRequest.textContent = " ";
  // loadOn2()
  const requests = await getInfoRequest(id);
  // let tableBody = document.querySelector('.divTableBody');
  // tableBody.innerHTML = '';
  let filteredRequests = requests.filter((request) => request.ID == id);
  let requestCount = filteredRequests.length;
  console.log(requestCount);
  // numRequest.textContent = requestCount;
  sessionStorage.setItem("myDataReq", JSON.stringify(requestCount));
  let lastRequest;
  // let latestDate;
  // for (let i = requests.length - 1; i >= 0; i--) {
  //   if (requests[i].ID == id) {
  //     if (!lastRequest) {
  //       lastRequest = requests[i];
  //       latestDate = lastRequest.Date;
  //     } else if (requests[i].Date > latestDate) {
  //       lastRequest = requests[i];
  //       latestDate = lastRequest.Date;
  //     }
  //   }
  // }
  // loadOff2()
  console.log("lastRequest:" + lastRequest);
  let req = {
    ID: searchInput[0].value,
    // Message: lastRequest.Message,
    // Date: lastRequest.Date,
    // cardFooter1: lastRequest.cardFooter1,
    requestCount: filteredRequests.length,
  };
  // cardText1.textContent = req.Message;
  sessionStorage.setItem("myDataReq", JSON.stringify(req));
  const savedDataReq3 = sessionStorage.getItem("myDataReq");
  const dataSto3 = JSON.parse(savedDataReq3);
  console.log("dataSto3.ID:" + dataSto3.ID);
  // let date = new Date(latestDate);
  // let options = { year: "numeric", month: "short", day: "numeric" };
  // let formattedDate = date.toLocaleDateString(undefined, options);
  // let formattedTime = date.toLocaleTimeString(undefined, {
  //   hour: "numeric",
  //   minute: "numeric",
  // });
  // cardFooter1.textContent =
  //   "last request : " + formattedDate + " at " + formattedTime;
  // let requestUrl = `Request.html?id=${id}`;
  // seeMore1.href = requestUrl;
  // let request = await fetch(requestUrl);
  // let requestData = await request.json();
  // localStorage.setItem("requestData", JSON.stringify(requestData));
  // window.open = requestUrl;
}
// get data from local storage

async function openRequest() {
  const id = sessionStorage.getItem("idToPass");
  let requestUrl = `Request.html?id=${id}`;
  seeMore1.href = requestUrl;
  let request = await fetch(requestUrl);
  let requestData = await request.json();
  localStorage.setItem("requestData", JSON.stringify(requestData));
  window.open = requestUrl;
}

seeMore1.addEventListener("click", () => {
  const id = searchInput[0].value;
  if (id != null || id != "") {
    console.log("ifid" + id);
    openRequest(id);
  }
  // const savedDataReq = sessionStorage.getItem("myDataReq");
  //   const data = JSON.parse(savedDataReq);
  const savedDataReq2 = sessionStorage.getItem("myDataReq");
  const dataSto2 = JSON.parse(savedDataReq2);
  console.log("dataSto2.ID:" + dataSto2.ID);
  if (dataSto2.ID != "") {
    // numRequest.innerHTML = dataSto2.requestCount;
    openRequest(dataSto2.ID);
  }
});
