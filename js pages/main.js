// const getResponse = response => response.json();
// const processJSON = data => {const data = JSON}

var searchInput = document.getElementsByName("search");
var fName = document.querySelector(".fName");
var body = document.getElementById("body");
var infoBox = document.querySelector(".info-box");
var Email = document.querySelector(".Email");
var Phone = document.querySelector(".Phone");
var ID = document.querySelector(".ID");
var Career = document.querySelector(".Career");
var StudyType = document.querySelector(".StudyType");
var Requests = document.getElementById("Requests");
var Complaint = document.querySelector("#Complaint");
var searchButton = document.querySelector(".search-button");
var pic = document.getElementById("profile-pic");
const headName = document.querySelector(".headName");
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
const invoiceBtn = document.querySelector(".invoiceBtn");
const Schadule = document.querySelector(".Schadule");
const Payments = document.querySelector(".Payments");
const Papers = document.querySelector(".Papers");
const Requestss = document.querySelector(".Requestss");
const Complaintss = document.querySelector(".Complaintss");
const Employee = document.querySelector("#Employee");
const StudentNum = document.querySelector("#StudentNum");
const shareSubmit = document.querySelector(".shareSubmit");
const EndShareDate = document.querySelector("#EndShareDate");
const ShareEnd = document.querySelector(".ShareEnd");
const CancelDate = document.querySelector(".CancelDate");
const CancelReason = document.querySelector(".CancelReason");
const CancelDateDiv = document.querySelector(".CancelDateDiv");
const CancelReasonDiv = document.querySelector(".CancelReasonDiv");

// const back = history.back();
const user = document.querySelector("#user");

const userRole = localStorage.getItem("myUserRole");
console.log(userRole);
const progressBar = document.getElementById("progress-bar");
const level = document.getElementById("level");

const welcome = document.querySelector(".Welcome");
const userr = localStorage.getItem("myCode");
console.log(userr);
welcome.innerHTML = `Welcome ${userr}!`;

// loading card

// const spinner3 = document.getElementById('spinner3');

// function loadOn3() {
//   spinner3.style.display = 'block';
// }

// function loadOff3() {
//   spinner3.style.display = 'none';
// }

const spinner4 = document.getElementById("spinner4");

function loadOn4() {
  spinner4.style.display = "block";
}

function loadOff4() {
  spinner4.style.display = "none";
}
//end

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

// async function getData(id) {
//   const response = await fetch('https://script.google.com/macros/s/AKfycbymvGsPp4SI9ISw_44dT20HpWZ1RXOlqdHyoRzKiNrxKOBWOscAFYnDBeWU3c5n6i_hmA/exec', {
//     method: 'POST',
//     body: JSON.stringify({ "id": id })
//   })
//   var data = await response.json();
//   console.log("data" + data);
//   return data;
// }ئ

// async function getData(id) {
//   const response = await fetch(
//     "https://script.google.com/macros/s/AKfycbyL9kF0Y3YkOKxbq67QhMs3CoOBTkunhpqxDwJVJQ6MCdhVG9nu-TJj3LLzhlnB06Gy7Q/exec",
//     {
//       method: "POST",
//       body: JSON.stringify({ id: id }),
//     }
//   );

//   // Check if the response is successful (status code 200)
//   if (response.ok) {
//     try {
//       const data = await response.json();
//       console.log("data", data);
//       return data;
//     } catch (error) {
//       console.error("Error parsing JSON:", error);
//       return null; // Return null in case of JSON parsing error
//     }
//   } else {
//     console.error("Error fetching data. Status:", response.status);
//     return null; // Return null in case of non-successful response
//   }
// }

async function getDataById(id) {
  console.log(id);
  const baseUrl = `https://srm-vbc7.onrender.com/api/basics/${id}`;
  const token =
    "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(baseUrl, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getData() {
  const baseUrl = `https://srm-vbc7.onrender.com/api/basics/`;
  const token =
    "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(baseUrl, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// fetch data for online share
async function getOnlineShare() {
  const url = `https://script.google.com/macros/s/AKfycbzqynDvb0be4pYbRhejKj3OZMzBp_ks37fxgRqZ9CmWCIr0g2r-JyqFqpqF8rBUIgzv/exec`;
  response = await fetch(url);
  moduledata = await response.json();
  // console.log(moduledata);
  return moduledata;
}

// Get data from session storage if it exists
const savedData = sessionStorage.getItem("myAllData");
if (savedData) {
  const data = JSON.parse(savedData);
  // Use the data to render the page

  fName.innerHTML = data.Name;
  ID.innerHTML = data.ID;
  let result = data.Email.indexOf(",");
  Email.innerHTML = data.Email.slice(0, result);
  emailcrd.innerHTML = data.Email;
  Career.innerHTML = data.CareerType;
  StudyType.innerHTML = data.StudyType;
  Phone.innerHTML = data.Phone;
  headName.innerHTML = data.Name.slice(0, 50);
  pic.src = data.img;
  IdNumber.innerHTML = data.IdNumber;
  DOB.innerHTML = data.DOB.slice(0, 10);
  Grade.innerHTML = data.Grade;
  console.log(data.cancelDate);
  if (data.cancelDate == "") {
    CancelDateDiv.style.display = "none";
    CancelReasonDiv.style.display = "none";
    // data.name.style.color = "black";
  } else {
    CancelDate.style.color = "red";
    CancelDate.innerHTML = data.cancelDate;
    CancelReason.style.color = "red";
    CancelReason.innerHTML = data.cancelReason;
    headName.innerHTML = data.Name.slice(0, 50);
    headName.style.color = "red";
  }
  Scholarship.innerHTML = data.Scholarship;
  Receptionist.innerHTML = data.Receptionist;
  Reserver.innerHTML = data.Reserver;
  CCAgent.innerHTML = data.CCAgent;
  ReservationDate.innerHTML = data.ReservationDate.slice(0, 10);
  Schadule.innerHTML = data.Schadule;
  Payments.innerHTML = data.Payments;
  Papers.innerHTML = data.Papers;
  Requestss.innerHTML = data.Requestss;
  Complaintss.innerHTML = data.Complaintss;
  updateButtonState();
  // const Level = sessionStorage.getItem("Level");
  // progressBar.innerHTML = data
  // level.innerHTML = Level.indexOf("level");
  // change();
  // display(data.ID);
  // hide()F
}

//save data if by phone or email
const savedData1 = sessionStorage.getItem("myAllData1");
console.log("savedData1 : " + savedData1);
if (savedData1) {
  const data = JSON.parse(savedData1);
  console.log(data);
  // Use the data to render the page

  fName.innerHTML = data.name;
  ID.innerHTML = data.studentnum;
  let result = data.email.indexOf(",");
  Email.innerHTML = data.email.slice(0, result);
  emailcrd.innerHTML = data.email;
  Career.innerHTML = data.careertype;
  StudyType.innerHTML = data.study_type;
  Phone.innerHTML = data.phone;
  headName.innerHTML = data.name.slice(0, 50);
  pic.src = data.image;
  if (data.cancel_Date == "") {
    CancelDateDiv.style.display = "none";
    CancelReasonDiv.style.display = "none";
    // data.name.style.color = "black";
  } else {
    CancelDate.style.color = "red";
    CancelDate.innerHTML = data.cancel_Date;
    CancelReason.style.color = "red";
    CancelReason.innerHTML = data.cancel_Reason;
    // headName.innerHTML = data.Name.slice(0, 50);
    headName.style.color = "red";
  }
  IdNumber.innerHTML = data.national_id;
  DOB.innerHTML = data.birth_date.slice(0, 10);
  Grade.innerHTML = data.grade;
  Scholarship.innerHTML = data.scholarship;
  Receptionist.innerHTML = data.recp;
  Reserver.innerHTML = data.reserver;
  CCAgent.innerHTML = data.called_by;
  ReservationDate.innerHTML = data.reservation_case.slice(0, 10);
  Schadule.innerHTML = data.schadule;
  Payments.innerHTML = data.payments;
  Papers.innerHTML = data.papers;
  Requestss.innerHTML = data.requests;
  Complaintss.innerHTML = data.complaints;
  updateButtonState();
}
// const savedDataPlan = sessionStorage.getItem("myDataPlan");
// if (savedDataPlan) {
//   const data = JSON.parse(savedDataPlan);
//   // Use the data to render the page
//   change();
//   // displayPlanCard(data.value)
//   hide()
// }

// const savedDataDead = sessionStorage.getItem("myDataDead");
// if (savedDataDead) {
//   const data = JSON.parse(savedDataDead);
//   // Use the data to render the page
//   change();
//   // displayDeadCard(data.value)
//   hide()
// }
// var GlobalObject = {
//   userID: 0
// };
// console.log(GlobalObject);
// sessionStorage.setItem("GlobalObject", JSON.stringify(GlobalObject));

// Add a new variable to store the ID of the user to be passed to the other page
var idToPass = 0;
var ScholarshipToPass;
var ReceptionistToPass;
var groupToPass;
var emailToPass;
var schaduleToPass;
// var progressBar ;
// var level ;

async function display(value) {
  change();
  // console.trace();

  const users = await getDataById(value);

  if (users == "" || users == null) {
    console.log("ID not found or there was an error.");
    const alertMessage = document.createElement("div");
    alertMessage.classList.add("alert", "alert-danger");
    alertMessage.textContent = "Please enter a valid Student Id";
    alertMessage.style.width = "50%";
    alertMessage.style.margin = "0 auto";
    alertMessage.style.display = "flex";
    alertMessage.style.alignItems = "center";
    alertMessage.style.justifyContent = "center";
    const section2 = document.querySelector(".section2");
    section2.appendChild(alertMessage);

    // Hide the alert message after half a second
    setTimeout(() => {
      alertMessage.style.display = "none";
    }, 2000);
    fName.innerHTML = "";
    ID.innerHTML = "";
    Email.innerHTML = "";
    emailcrd.innerHTML = "";
    Career.innerHTML = "";
    StudyType.innerHTML = "";
    Phone.innerHTML = "";
    headName.innerHTML = "";
    IdNumber.innerHTML = "";
    DOB.innerHTML = "";
    CancelDate.innerHTML = "";
    CancelReason.innerHTML = "";
    Grade.innerHTML = "";
    Scholarship.innerHTML = "";
    Receptionist.innerHTML = "";
    Reserver.innerHTML = "";
    CCAgent.innerHTML = "";
    ReservationDate.innerHTML = "";
    Schadule.innerHTML = 0;
    Payments.innerHTML = 0;
    Papers.innerHTML = 0;
    Requestss.innerHTML = 0;
    Complaintss.innerHTML = 0;
    hide();
  } else {
    // Process the data when it is not null
    console.log("Data:", users);
  }

  // users.forEach((element) => {}
  // // Initialize the variable `user`
  if (users.data) {
    var user = {
      Name: users.data.attributes.name,
      ID: users.data.attributes.studentnum,
      Email: users.data.attributes.email,
      Phone: users.data.attributes.phone,
      img: users.data.attributes.image,
      CareerType: users.data.attributes.careertype,
      IdNumber: users.data.attributes.national_id,
      cancelDate: users.data.attributes.cancel_Date,
      cancelReason: users.data.attributes.cancel_Reason,
      DOB: users.data.attributes.birth_date,
      StudyType: users.data.attributes.study_type,
      Grade: users.data.attributes.grade,
      Scholarship: users.data.attributes.scholarship,
      Receptionist: users.data.attributes.recp,
      Reserver: users.data.attributes.reserver,
      CCAgent: users.data.attributes.called_by,
      ReservationDate: users.data.attributes.reservation_date,
      Schadule: users.data.attributes.schadule,
      Payments: users.data.attributes.payments,
      Papers: users.data.attributes.papers,
      Requestss: users.data.attributes.requests,
      Complaintss: users.data.attributes.complaints,
    };
  } else {
    // Handle the case where users.data is null or undefined
    console.error("Error: users.data is null or undefined");
    const alertMessage = document.createElement("div");
    alertMessage.classList.add("alert", "alert-danger");
    alertMessage.textContent = "Please enter a valid Student ID";
    alertMessage.style.width = "50%";
    alertMessage.style.margin = "0 auto";
    alertMessage.style.display = "flex";
    alertMessage.style.alignItems = "center";
    alertMessage.style.justifyContent = "center";
    const section2 = document.querySelector(".section2");
    section2.appendChild(alertMessage);

    // Hide the alert message after half a second
    setTimeout(() => {
      alertMessage.style.display = "none";
    }, 2000);
    //display all boxes in this case
    fName.innerHTML = "";
    ID.innerHTML = "";
    Email.innerHTML = "";
    emailcrd.innerHTML = "";
    Career.innerHTML = "";
    StudyType.innerHTML = "";
    Phone.innerHTML = "";
    headName.innerHTML = "";
    IdNumber.innerHTML = "";
    CancelDate.innerHTML = "";
    CancelReason.innerHTML = "";
    DOB.innerHTML = "";
    Grade.innerHTML = "";
    Scholarship.innerHTML = "";
    Receptionist.innerHTML = "";
    Reserver.innerHTML = "";
    CCAgent.innerHTML = "";
    ReservationDate.innerHTML = "";
    Schadule.innerHTML = 0;
    Payments.innerHTML = 0;
    Papers.innerHTML = 0;
    Requestss.innerHTML = 0;
    Complaintss.innerHTML = 0;
    hide();
    updateButtonDisabledState();
  }

  // console.log("myAllData : " + user.cancelReason);

  if (user.cancelDate == "") {
    CancelDateDiv.style.display = "none";
    CancelReasonDiv.style.display = "none";
    headName.style.color = "black";
  } else {
    CancelDateDiv.style.display = "block";
    CancelReasonDiv.style.display = "block";
    CancelDate.style.color = "red";
    CancelReason.style.color = "red";
    headName.style.color = "red";
  }

  // Save the data to session storage
  sessionStorage.setItem("myAllData", JSON.stringify(user));

  console.log("myAllData : " + sessionStorage.getItem("myAllData"));

  // Split email until the first comma
  let emailParts = users.data.attributes.email.split(",");
  let firstEmail = emailParts[0].trim(); // Trim removes any leading or trailing whitespace

  // Use the data to render the page
  fName.innerHTML = users.data.attributes.name;
  ID.innerHTML = users.data.attributes.studentnum;
  Email.innerHTML = firstEmail; // Uncomment if you want to display the full email
  emailcrd.innerHTML = users.data.attributes.email; // Uncomment if you want to display the full email
  Phone.innerHTML = users.data.attributes.phone;
  headName.innerHTML = users.data.attributes.name.slice(0, 50);
  pic.src = users.data.attributes.image;
  Career.innerHTML = users.data.attributes.careertype;
  StudyType.innerHTML = users.data.attributes.study_type;
  IdNumber.innerHTML = users.data.attributes.national_id;
  DOB.innerHTML = users.data.attributes.birth_date.slice(0, 10);
  Grade.innerHTML = users.data.attributes.grade;
  Scholarship.innerHTML = users.data.attributes.scholarship;
  Receptionist.innerHTML = users.data.attributes.recp;
  Reserver.innerHTML = users.data.attributes.reserver;
  CCAgent.innerHTML = users.data.attributes.called_by; // Assuming CCAgent is equivalent to called_by
  ReservationDate.innerHTML = users.data.attributes.reservation_date.slice(
    0,
    10
  );
  Schadule.innerHTML = users.data.attributes.schadule;
  Payments.innerHTML = users.data.attributes.payments;
  Papers.innerHTML = users.data.attributes.papers;
  Requestss.innerHTML = users.data.attributes.requests;
  Complaintss.innerHTML = users.data.attributes.complaints;
  CancelDate.innerHTML = users.data.attributes.cancel_Date;
  CancelReason.innerHTML = users.data.attributes.cancel_Reason;

  // CancelDate.innerHTML = users.data.attributes.cancel_Date;
  // CancelReason.innerHTML = users.data.attributes.cancel_Reason;

  // Assigning values to variables and storing them in sessionStorage if needed
  let idToPass = users.data.attributes.studentnum;
  sessionStorage.setItem("idToPass", idToPass);

  let scholarshipToPass = users.data.attributes.scholarship;
  sessionStorage.setItem("ScholarshipToPass", scholarshipToPass);

  let receptionistToPass = users.data.attributes.recp;
  sessionStorage.setItem("ReceptionistToPass", receptionistToPass);

  let schaduleToPass = users.data.attributes.schadule;
  sessionStorage.setItem("schaduleToPass", schaduleToPass);

  let emailToPass = users.data.attributes.email;
  sessionStorage.setItem("emailToPass", emailToPass);

  let groupToPass = users.data.attributes.study_type;
  sessionStorage.setItem("groupToPass", groupToPass);

  // progress-bar

  console.log("schaduleToPass : " + schaduleToPass);

  if (schaduleToPass) {
    const numerator = parseInt(schaduleToPass.split("/")[0]);
    const denominator = parseInt(schaduleToPass.split("/")[1]);
    const decimal = numerator / denominator;
    console.log("decimal : " + decimal);
    const width = decimal * 100;
    const widthh = Math.round(width);
    // console.log(Math.round(width));
    level.innerHTML = `${widthh}%`;
    progressBar.style.width = `${widthh}%`;
    sessionStorage.setItem("progressBar", progressBar.style.width);
    sessionStorage.setItem("level", level.innerHTML);
  }

  console.log("email : " + emailToPass);
  console.log("StudyType : " + groupToPass);

  await selectEmail();
  await selectModule();

  // Get the current date
  const currentDate = new Date();

  // Add 30 days to the current date
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 30);

  // Convert the future date to dd/mm/yyyy format
  const formattedFutureDate = futureDate.toLocaleDateString("en-GB");

  // Display the result
  ShareEnd.innerHTML = "share End : " + formattedFutureDate;
  EndShareDate.value = formattedFutureDate;

  // Push the user ID to the anotherGlobalObject object
  hide();
}

//display by phone

async function displayByPhone(value) {
  change();

  try {
    const users = await getData();
    const user = users.data.find((user) =>
      user.attributes.phone.includes(value)
    );
    console.log(user);

    if (!user) {
      const alertMessage = document.createElement("div");
      alertMessage.classList.add("alert", "alert-danger");
      alertMessage.textContent = "Please enter a valid Student Phone Number";
      alertMessage.style.width = "50%";
      alertMessage.style.margin = "0 auto";
      alertMessage.style.display = "flex";
      alertMessage.style.alignItems = "center";
      alertMessage.style.justifyContent = "center";
      const section2 = document.querySelector(".section2");
      section2.appendChild(alertMessage);
      // Hide the alert message after half a second
      setTimeout(() => {
        alertMessage.style.display = "none";
      }, 2000);
      fName.innerHTML = "";
      ID.innerHTML = "";
      Email.innerHTML = "";
      emailcrd.innerHTML = "";
      Phone.innerHTML = "";
      headName.innerHTML = "";
      IdNumber.innerHTML = "";
      DOB.innerHTML = "";
      Career.innerHTML = "";
      StudyType.innerHTML = "";
      Grade.innerHTML = "";
      CancelDate.innerHTML = "";
      CancelReason.innerHTML = "";
      Scholarship.innerHTML = "";
      Receptionist.innerHTML = "";
      Reserver.innerHTML = "";
      CCAgent.innerHTML = "";
      ReservationDate.innerHTML = "";
      Schadule.innerHTML = 0;
      Payments.innerHTML = 0;
      Papers.innerHTML = 0;
      Requestss.innerHTML = 0;
      Complaintss.innerHTML = 0;
      updateButtonDisabledState();
      hide();
      return;
    }

    if (user.attributes.cancel_Date == "") {
      CancelDateDiv.style.display = "none";
      CancelReasonDiv.style.display = "none";
      headName.style.color = "black";
    } else {
      CancelDateDiv.style.display = "block";
      CancelReasonDiv.style.display = "block";
      CancelDate.style.color = "red";
      CancelReason.style.color = "red";
      headName.style.color = "red";
    }

    if (user) {
      // Split email until the first comma
      let emailParts = user.attributes.email.split(",");
      let firstEmail = emailParts[0].trim(); // Trim removes any leading or trailing whitespace

      // Use the data to render the page
      fName.innerHTML = user.attributes.name;
      ID.innerHTML = user.attributes.studentnum;
      Email.innerHTML = firstEmail; // Uncomment if you want to display the full email
      emailcrd.innerHTML = user.attributes.email; // Uncomment if you want to display the full email
      Phone.innerHTML = user.attributes.phone;
      headName.innerHTML = user.attributes.name.slice(0, 50);
      pic.src = user.attributes.image;
      Career.innerHTML = user.attributes.careertype;
      StudyType.innerHTML = user.attributes.study_type;
      CancelDate.innerHTML = user.attributes.cancel_Date;
      CancelReason.innerHTML = user.attributes.cancel_Reason;
      IdNumber.innerHTML = user.attributes.national_id;
      DOB.innerHTML = user.attributes.birth_date.slice(0, 10);
      Grade.innerHTML = user.attributes.grade;
      Scholarship.innerHTML = user.attributes.scholarship;
      Receptionist.innerHTML = user.attributes.recp;
      Reserver.innerHTML = user.attributes.reserver;
      CCAgent.innerHTML = user.attributes.called_by; // Assuming CCAgent is equivalent to called_by
      ReservationDate.innerHTML = user.attributes.reservation_date.slice(0, 10);
      Schadule.innerHTML = user.attributes.schadule;
      Payments.innerHTML = user.attributes.payments;
      Papers.innerHTML = user.attributes.papers;
      Requestss.innerHTML = user.attributes.requests;
      Complaintss.innerHTML = user.attributes.complaints;

      // Assigning values to variables and storing them in sessionStorage if needed
      let idToPass = user.attributes.studentnum;
      sessionStorage.setItem("idToPass", idToPass);

      let scholarshipToPass = user.attributes.scholarship;
      sessionStorage.setItem("ScholarshipToPass", scholarshipToPass);

      let receptionistToPass = user.attributes.recp;
      sessionStorage.setItem("ReceptionistToPass", receptionistToPass);

      let schaduleToPass = user.attributes.schadule;
      sessionStorage.setItem("schaduleToPass", schaduleToPass);

      let emailToPass = user.attributes.email;
      sessionStorage.setItem("emailToPass", emailToPass);

      let groupToPass = user.attributes.study_type;
      sessionStorage.setItem("groupToPass", groupToPass);

      // progress-bar

      console.log("schaduleToPass : " + schaduleToPass);

      if (schaduleToPass) {
        const numerator = parseInt(schaduleToPass.split("/")[0]);
        const denominator = parseInt(schaduleToPass.split("/")[1]);
        const decimal = numerator / denominator;
        console.log("decimal : " + decimal);
        const width = decimal * 100;
        const widthh = Math.round(width);
        // console.log(Math.round(width));
        level.innerHTML = `${widthh}%`;
        progressBar.style.width = `${widthh}%`;
        sessionStorage.setItem("progressBar", progressBar.style.width);
        sessionStorage.setItem("level", level.innerHTML);
      }

      // Save the data to session storage
      sessionStorage.setItem("myAllData1", JSON.stringify(user.attributes));

      console.log("email : " + emailToPass);
      console.log("StudyType : " + groupToPass);

      await selectEmail();
      await selectModule();

      // Get the current date
      const currentDate = new Date();

      // Add 30 days to the current date
      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + 30);

      // Convert the future date to dd/mm/yyyy format
      const formattedFutureDate = futureDate.toLocaleDateString("en-GB");

      // Display the result
      ShareEnd.innerHTML = "share End : " + formattedFutureDate;
      EndShareDate.value = formattedFutureDate;

      // Push the user ID to the anotherGlobalObject object
      hide();
    } else {
      console.log("Phone number not found");
      const alertMessage = document.createElement("div");
      alertMessage.classList.add("alert", "alert-danger");
      alertMessage.textContent = "Please enter a valid Student Phone";
      alertMessage.style.width = "50%";
      alertMessage.style.margin = "0 auto";
      alertMessage.style.display = "flex";
      alertMessage.style.alignItems = "center";
      alertMessage.style.justifyContent = "center";
      const section2 = document.querySelector(".section2");
      section2.appendChild(alertMessage);

      // Hide the alert message after half a second
      setTimeout(() => {
        alertMessage.style.display = "none";
      }, 2000);
      //display all boxes in this case
      fName.innerHTML = "";
      ID.innerHTML = "";
      Email.innerHTML = "";
      emailcrd.innerHTML = "";
      Phone.innerHTML = "";
      headName.innerHTML = "";
      IdNumber.innerHTML = "";
      Career.innerHTML = "";
      StudyType.innerHTML = "";
      DOB.innerHTML = "";
      Grade.innerHTML = "";
      CancelDate.innerHTML = "";
      CancelReason.innerHTML = "";
      Scholarship.innerHTML = "";
      Receptionist.innerHTML = "";
      Reserver.innerHTML = "";
      CCAgent.innerHTML = "";
      ReservationDate.innerHTML = "";
      Schadule.innerHTML = 0;
      Payments.innerHTML = 0;
      Papers.innerHTML = 0;
      Requestss.innerHTML = 0;
      Complaintss.innerHTML = 0;
      hide();
      updateButtonDisabledState();
      // Handle the case when the user is not found
      // For example, display an error message
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    // For example, display an error message to the user
  }
}

//diplay email

async function displayByEmail(value) {
  change();

  try {
    const users = await getData();
    const user = users.data.find((user) =>
      user.attributes.email.includes(value)
    );
    console.log(user);

    if (!user) {
      const alertMessage = document.createElement("div");
      alertMessage.classList.add("alert", "alert-danger");
      alertMessage.textContent = "Please enter a valid Student Email";
      alertMessage.style.width = "50%";
      alertMessage.style.margin = "0 auto";
      alertMessage.style.display = "flex";
      alertMessage.style.alignItems = "center";
      alertMessage.style.justifyContent = "center";
      const section2 = document.querySelector(".section2");
      section2.appendChild(alertMessage);
      // Hide the alert message after half a second
      setTimeout(() => {
        alertMessage.style.display = "none";
      }, 2000);
      fName.innerHTML = "";
      ID.innerHTML = "";
      Email.innerHTML = "";
      emailcrd.innerHTML = "";
      Phone.innerHTML = "";
      headName.innerHTML = "";
      IdNumber.innerHTML = "";
      DOB.innerHTML = "";
      Career.innerHTML = "";
      StudyType.innerHTML = "";
      Grade.innerHTML = "";
      CancelDate.innerHTML = "";
      CancelReason.innerHTML = "";
      Scholarship.innerHTML = "";
      Receptionist.innerHTML = "";
      Reserver.innerHTML = "";
      CCAgent.innerHTML = "";
      ReservationDate.innerHTML = "";
      Schadule.innerHTML = 0;
      Payments.innerHTML = 0;
      Papers.innerHTML = 0;
      Requestss.innerHTML = 0;
      Complaintss.innerHTML = 0;
      updateButtonDisabledState();
      hide();
      return;
    }

    if (user.attributes.cancel_Date == "") {
      CancelDateDiv.style.display = "none";
      CancelReasonDiv.style.display = "none";
      headName.style.color = "black";
    } else {
      CancelDateDiv.style.display = "block";
      CancelReasonDiv.style.display = "block";
      CancelDate.style.color = "red";
      CancelReason.style.color = "red";
      headName.style.color = "red";
    }

    if (user) {
      // Split email until the first comma
      let emailParts = user.attributes.email.split(",");
      let firstEmail = emailParts[0].trim(); // Trim removes any leading or trailing whitespace

      // Use the data to render the page
      fName.innerHTML = user.attributes.name;
      ID.innerHTML = user.attributes.studentnum;
      Email.innerHTML = firstEmail; // Uncomment if you want to display the full email
      emailcrd.innerHTML = user.attributes.email; // Uncomment if you want to display the full email
      Phone.innerHTML = user.attributes.phone;
      headName.innerHTML = user.attributes.name.slice(0, 50);
      pic.src = user.attributes.image;
      Career.innerHTML = user.attributes.careertype;
      StudyType.innerHTML = user.attributes.study_type;
      IdNumber.innerHTML = user.attributes.national_id;
      CancelDate.innerHTML = user.attributes.cancel_Date;
      CancelReason.innerHTML = user.attributes.cancel_Reason;
      DOB.innerHTML = user.attributes.birth_date.slice(0, 10);
      Grade.innerHTML = user.attributes.grade;
      Scholarship.innerHTML = user.attributes.scholarship;
      Receptionist.innerHTML = user.attributes.recp;
      Reserver.innerHTML = user.attributes.reserver;
      CCAgent.innerHTML = user.attributes.called_by; // Assuming CCAgent is equivalent to called_by
      ReservationDate.innerHTML = user.attributes.reservation_date.slice(0, 10);
      Schadule.innerHTML = user.attributes.schadule;
      Payments.innerHTML = user.attributes.payments;
      Papers.innerHTML = user.attributes.papers;
      Requestss.innerHTML = user.attributes.requests;
      Complaintss.innerHTML = user.attributes.complaints;

      // Assigning values to variables and storing them in sessionStorage if needed
      let idToPass = user.attributes.studentnum;
      sessionStorage.setItem("idToPass", idToPass);

      let scholarshipToPass = user.attributes.scholarship;
      sessionStorage.setItem("ScholarshipToPass", scholarshipToPass);

      let receptionistToPass = user.attributes.recp;
      sessionStorage.setItem("ReceptionistToPass", receptionistToPass);

      let schaduleToPass = user.attributes.schadule;
      sessionStorage.setItem("schaduleToPass", schaduleToPass);

      let emailToPass = user.attributes.email;
      sessionStorage.setItem("emailToPass", emailToPass);

      let groupToPass = user.attributes.study_type;
      sessionStorage.setItem("groupToPass", groupToPass);

      // progress-bar

      console.log("schaduleToPass : " + schaduleToPass);

      if (schaduleToPass) {
        const numerator = parseInt(schaduleToPass.split("/")[0]);
        const denominator = parseInt(schaduleToPass.split("/")[1]);
        const decimal = numerator / denominator;
        console.log("decimal : " + decimal);
        const width = decimal * 100;
        const widthh = Math.round(width);
        // console.log(Math.round(width));
        level.innerHTML = `${widthh}%`;
        progressBar.style.width = `${widthh}%`;
        sessionStorage.setItem("progressBar", progressBar.style.width);
        sessionStorage.setItem("level", level.innerHTML);
      }

      // Save the data to session storage
      sessionStorage.setItem("myAllData1", JSON.stringify(user.attributes));

      console.log("email : " + emailToPass);
      console.log("StudyType : " + groupToPass);

      await selectEmail();
      await selectModule();

      // Get the current date
      const currentDate = new Date();

      // Add 30 days to the current date
      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + 30);

      // Convert the future date to dd/mm/yyyy format
      const formattedFutureDate = futureDate.toLocaleDateString("en-GB");

      // Display the result
      ShareEnd.innerHTML = "share End : " + formattedFutureDate;
      EndShareDate.value = formattedFutureDate;

      // Push the user ID to the anotherGlobalObject object
      hide();
    } else {
      console.log("Phone number not found");
      const alertMessage = document.createElement("div");
      alertMessage.classList.add("alert", "alert-danger");
      alertMessage.textContent = "Please enter a valid Student Email";
      alertMessage.style.width = "50%";
      alertMessage.style.margin = "0 auto";
      alertMessage.style.display = "flex";
      alertMessage.style.alignItems = "center";
      alertMessage.style.justifyContent = "center";
      const section2 = document.querySelector(".section2");
      section2.appendChild(alertMessage);

      // Hide the alert message after half a second
      setTimeout(() => {
        alertMessage.style.display = "none";
      }, 2000);
      //display all boxes in this case
      fName.innerHTML = "";
      ID.innerHTML = "";
      Email.innerHTML = "";
      emailcrd.innerHTML = "";
      Phone.innerHTML = "";
      headName.innerHTML = "";
      IdNumber.innerHTML = "";
      DOB.innerHTML = "";
      Career.innerHTML = "";
      StudyType.innerHTML = "";
      Grade.innerHTML = "";
      CancelDate.innerHTML = "";
      CancelReason.innerHTML = "";
      Scholarship.innerHTML = "";
      Receptionist.innerHTML = "";
      Reserver.innerHTML = "";
      CCAgent.innerHTML = "";
      ReservationDate.innerHTML = "";
      Schadule.innerHTML = 0;
      Payments.innerHTML = 0;
      Papers.innerHTML = 0;
      Requestss.innerHTML = 0;
      Complaintss.innerHTML = 0;
      hide();
      updateButtonDisabledState();
      // Handle the case when the user is not found
      // For example, display an error message
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    // For example, display an error message to the user
  }
}

// Rest of your code here

// Retrieve values from localStorage on page load
window.addEventListener("load", function () {
  const savedProgressBarWidth = sessionStorage.getItem("progressBar");
  const savedLevel = sessionStorage.getItem("level");

  if (savedProgressBarWidth) {
    progressBar.style.width = savedProgressBarWidth;
  }

  if (savedLevel) {
    level.innerHTML = savedLevel;
  }
});

function moreEmail() {
  more.style.display = "inline";
}

let setMore = sessionStorage.setItem("moreEmail", JSON.stringify(moreEmail()));
window.open(sessionStorage.getItem("moreEmail"));

moreBtn.addEventListener("click", () => {
  emailcrd.style.display = "block";
  // emailcrd.style.display = emailcrd.style.display === 'none' ? 'block' : 'none';
});

// select email function for online share
async function selectEmail() {
  const emailSelect = document.querySelector("#emailSelect");
  let getEmail = sessionStorage.getItem("emailToPass");
  console.log("getEmail : " + getEmail);
  // Clear existing options
  emailSelect.innerHTML = "";
  // Split multiple email addresses and push them into an array
  const emailArray = getEmail.split(",").map((email) => email.trim());

  // console.log("Email Array:", emailArray);

  emailArray.forEach((email) => {
    const option = document.createElement("option");
    option.text = email;
    option.value = email;
    emailSelect.appendChild(option);
  });
}

window.addEventListener("load", () => {
  selectEmail();
  selectModule();
  ShareEnd.innerHTML = sessionStorage.getItem("ShareEnd");
});

// window.addEventListener('DOMContentLoaded', () => {
//   updateButtonState();
// })

const ModuleSelect = document.querySelector("#ModuleSelect");
const ModuleCodeSelect = document.querySelector("#ModuleCodeSelect");
async function selectModule() {
  let getModule = await getOnlineShare();
  // console.log("getModule : " + getModule);

  getModule.forEach((element) => {
    var modules = {
      Module: element.Module,
      ModuleCode: element["Module Code"],
    };
    const option = document.createElement("option");
    option.text = modules.Module.toLowerCase(); // Assuming you want module names in lowercase
    option.value = modules.Module;
    ModuleSelect.appendChild(option);
  });

  // Add a single event listener outside the loop
  ModuleSelect.addEventListener("change", () => {
    let selectedModuleCode = getModule.find(
      (element) => element.Module === ModuleSelect.value
    )["Module Code"];
    ModuleCodeSelect.value = selectedModuleCode;
    console.log("ModuleCodeSelect : " + ModuleCodeSelect.value);
    sessionStorage.setItem("ModuleCodeSelect", ModuleCodeSelect.value);
  });
}

// console.log("userID1 : "+element.ID);
// console.log("userID1 : " + GlobalObject.userID);

const savedDataReq2 = sessionStorage.getItem("GlobalObject");
const dataSto88 = JSON.parse(savedDataReq2);
// console.log("dataSto88.gID:" + dataSto88.gID);

async function openInvoice() {
  const id = sessionStorage.getItem("idToPass");
  // Get the ID from the `idToPass` variable
  // const id = idToPass;
  let invoiceUrl = `invoice.html?id=${id}`;
  invoiceBtn.href = invoiceUrl;
  let invoice = await fetch(invoiceUrl);
  let invoiceData = await invoice.json();
  localStorage.setItem("invoiceData", JSON.stringify(invoiceData));
  window.open(invoiceUrl); // Open moduleUrl in a new window
}

invoiceBtn.addEventListener("click", () => {
  // Get the ID from the search input field
  const id = idToPass;

  // If the ID is not empty, open the other page with the ID passed in the URL
  if (id != null || id != "") {
    openInvoice(id);
  }

  // Otherwise, get the ID from the GlobalObject object and open the other page with that ID passed in the URL
  else {
    const savedDataReq2 = sessionStorage.getItem("GlobalObject");
    const dataSto2 = JSON.parse(savedDataReq2);
    openInvoice(dataSto2.userID);
  }
});

// plan function

// async function displayPlanCard(value) {
//   loadOn4()
//   moduleCountElement.textContent = " ";
//   const cards = await getAllCards(value);

//   cards.forEach(card => {
//     if (value == card.ID) {
//       let planInfo = { value: card.ID, paln: card.Schadule, payment: card.Payments, paper: card.Papers, request: card.Requests, complaint: card.Complaints };
//       // Save the data to session storage
//       sessionStorage.setItem("myDataPlan", JSON.stringify(planInfo));
//       // Use the data to render the page
//       // traning plan
//       moduleCountElement.textContent = planInfo.paln;
//     }
//   });
//   loadOff4()

//   // module location
//   let moduleUrl = `Group.html?id=${value}`;
//   seeMore4.href = moduleUrl;
//   let module = await fetch(moduleUrl);
//   let moduleData = await module.json();
//   sessionStorage.setItem('moduleData', JSON.stringify(moduleData));
//   window.open(moduleUrl); // Open moduleUrl in a new window

// }

// dead function
// async function displayDeadCard(value) {
//   loadOn3()
//   numDeadline.textContent = " ";
//   const cards = await getAllCards(value);

//   cards.forEach(card => {
//     if (value == card.ID) {
//       let DeadInfo = { value: card.ID, paln: card.Schadule, payment: card.Payments, paper: card.Papers, request: card.Requests, complaint: card.Complaints };

//       // Save the data to session storage
//       sessionStorage.setItem("myDataDead", JSON.stringify(DeadInfo));
//       // Use the data to render the page

//       // deadLine
//       numDeadline.textContent = DeadInfo.payment;
//     }
//   });
//   loadOff3()
//   // deadline location
//   let deadlineUrl = `Deadlines.html?id=${value}`;
//   seeMore3.href = deadlineUrl;
//   let deadline = await fetch(deadlineUrl);
//   let deadlineData = await deadline.json();
//   sessionStorage.setItem('deadlineData', JSON.stringify(deadlineData));
//   window.open(deadlineUrl); // Open deadlineUrl in a new window

// }

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("searchBtn", e.target.classList[0]);
  console.log("searchBtn : " + localStorage.getItem("searchBtn"));
  // sessionStorage.clear();
  const value = searchInput[0].value;
  console.log("value :" + value);
  if (value === "" || value == null) {
    // Create a Bootstrap alert message
    const alertMessage = document.createElement("div");
    alertMessage.classList.add("alert", "alert-danger");
    alertMessage.textContent = "Please enter a valid Student Id";
    alertMessage.style.width = "50%";
    alertMessage.style.margin = "0 auto";
    alertMessage.style.display = "flex";
    alertMessage.style.alignItems = "center";
    alertMessage.style.justifyContent = "center";
    const section2 = document.querySelector(".section2");
    section2.appendChild(alertMessage);

    // Hide the alert message after half a second
    setTimeout(() => {
      alertMessage.style.display = "none";
    }, 2000);
    //display all boxes in this case
    fName.innerHTML = "";
    ID.innerHTML = "";
    Email.innerHTML = "";
    emailcrd.innerHTML = "";
    Phone.innerHTML = "";
    headName.innerHTML = "";
    IdNumber.innerHTML = "";
    DOB.innerHTML = "";
    Grade.innerHTML = "";
    Scholarship.innerHTML = "";
    Receptionist.innerHTML = "";
    Reserver.innerHTML = "";
    CCAgent.innerHTML = "";
    ReservationDate.innerHTML = "";
    Schadule.innerHTML = 0;
    Payments.innerHTML = 0;
    Papers.innerHTML = 0;
    Requestss.innerHTML = 0;
    Complaintss.innerHTML = 0;
    // footer3.textContent = "No deadlines found";

    // Stop all functions from another JavaScript file
    return;
  }

  if (value.includes("@")) {
    sessionStorage.clear();
    displayByEmail(value);
    moreEmail();
    updateButtonState();
  } else if (value.length > 5) {
    sessionStorage.clear();
    displayByPhone(value);
    moreEmail();
    updateButtonState();
  } else {
    sessionStorage.clear();
    display(value);
    moreEmail();
    updateButtonState();
  }
});

// searchButton.addEventListener("click", async (event) => {
//   event.preventDefault();
//   const searchValue = searchInput.value;
//   if (!searchValue) {
//     alert("Please enter a search value");
//     return;
//   }
//   // Check if the search value contains "@" to determine if it's an email
//   if (searchValue.length > 5) {
//     sessionStorage.clear();
//     // Assuming phone number should have more than 5 digits
//     await displayByPhone(searchValue);
//     moreEmail();
//     updateButtonState();
//   } else {
//     sessionStorage.clear();
//     await display(searchValue);
//     moreEmail();
//     updateButtonState();
//   }
// });

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

const logOut = document.querySelector(".log_out");
logOut.addEventListener("click", () => {
  sessionStorage.clear();
  localStorage.clear();
  window.location.href = "/index.html";
});

//for pervent back btn of browser
function preventBack() {
  window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function () {
  null;
};

// for Qr code btn
jQuery("#digitalId").on("submit", function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycby44o-bMq1bUH1Gw8gBlb39RrOkHJXtHqQVkADmeP1uIh_udRVs1YP6Re4YuoVqJgkyvA/exec",
    type: "post",
    data: jQuery("#digitalId").serialize(),
    beforeSend: function () {
      var spinner =
        '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery("#spinner-container5").html(spinner);
    },

    success: function (result) {
      jQuery("#digitalId")[0].reset();
      // Display success message here
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

const alertMsg = document.querySelector(".alertMsg");

shareSubmit.addEventListener("click", () => {
  // Get the id from session storage.
  const id = sessionStorage.getItem("idToPass");
  const Employee = document.querySelector("#Employeeshare");
  const StudentNum = document.querySelector("#StudentNum");
  const userr = localStorage.getItem("myCode");
  const EndShareDate = document.querySelector("#EndShareDate");

  // Check if the id is empty.
  if (!id) {
    // Return from the function to stop it from executing.
    return;
  }

  // Continue with the rest of the function code.
  const Timestamp = document.querySelector("#Timestamp3");
  const timestamp = new Date();
  // Convert the timestamp to dd/mm/yyyy format.
  const formattedDate = timestamp.toLocaleString("en-GB");

  // Set the Timestamp1 input field to the formatted date.
  Timestamp.value = formattedDate;
  StudentNum.value = id;
  Employee.value = userr;
});

// condetion for user role
if (userRole === "Coordinator") {
  const Resrevation = document.querySelector("#Resrevation");
  const project = document.querySelector("#project");
  const HR = document.querySelector("#HR");
  const Settings = document.querySelector("#Settings");
  user.style.display = "none";
  Resrevation.style.display = "none";
  HR.style.display = "none";
  project.style.display = "none";
}

const digitalIdBtn = document.querySelector(".digitalIdBtn");

digitalIdBtn.addEventListener("click", () => {
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

  // Check if the user confirmed the action.
  if (confirmation) {
    // Continue with the rest of the function code.
    const qrCodeId = document.querySelector("#qrCodeId");
    const Emp = document.querySelector("#Emp");
    const Timestamp = document.querySelector("#Timestamp");
    const timestamp = new Date();
    // Convert the timestamp to dd/mm/yyyy format.
    const formattedDate = timestamp.toLocaleString("en-GB");

    // Set the Timestamp1 input field to the formatted date.
    Timestamp.value = formattedDate;
    qrCodeId.value = id;
    Emp.value = userr;
  } else {
    const spinnerContainer = document.querySelector("#spinner-container5");
    spinnerContainer.style.display = "none";
    const alertMsg = document.querySelector("#alertMsg");

    alertMsg.style.display = "none";
  }
});

// for App btn
jQuery("#App").on("submit", function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycbzH2q6PplOKtYWlnApCJDX0x_oSqTBLB52EpXrB_8S9TmIA1nFfGk2UgtTHd66OlqwMxw/exec",
    type: "post",
    data: jQuery("#App").serialize(),
    beforeSend: function () {
      var spinner =
        '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery("#spinner-container1").html(spinner);
    },
    success: function (result) {
      jQuery("#App")[0].reset();
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
      jQuery("#spinner-container1").empty();
    },
  });
});

// for frmOnlineShare btn
jQuery("#frmOnlineShare").on("submit", function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycby6GwNH9BYUTScFsXIu88OnvkP-dHztg_BvzT0aZfTAxFG4dGFU-MBogBwTRr0dsh3P/exec",
    type: "post",
    data: jQuery("#frmOnlineShare").serialize(),
    beforeSend: function () {
      var spinner =
        '<div class="text-center appSpi ml-2" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery("#spinner-container2").html(spinner);
    },
    success: function (result) {
      jQuery("#frmOnlineShare")[0].reset();
      // const ModuleCodeSelect = document.querySelector("#ModuleCodeSelect");
      console.log(ModuleCodeSelect.value);

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
      jQuery("#spinner-container2").empty();
      jQuery("#exampleModal1").modal("hide");
      $("#exampleModal1").on("hidden.bs.modal", function (e) {
        $(".modal-backdrop").remove();
      });
    },
  });
});

// access for role
const appBtn = document.querySelector(".appBtn");
console.log(userRole);
// if (userRole === "System") {
//   appBtn.style.display = "none";
// }

const onlineShareBtn = document.querySelector("#onlineShareBtn");

// Function to update the disabled state of the button based on the id
function updateButtonState() {
  const appBtn = document.querySelector(".appBtn");
  const digitalIdBtn = document.querySelector(".digitalIdBtn");
  const invoiceBtn = document.querySelector(".invoiceBtn");
  const cancelBtn = document.querySelector("#cancel");
  const smsBtnM = document.querySelector("#smsBtnM");
  const emailBtnM = document.querySelector("#emailBtnM");
  const onlineShareBtn = document.querySelector("#onlineShareBtn");

  appBtn.disabled = false; // Enable the button if id is present
  digitalIdBtn.disabled = false; // Enable the button if id is present
  invoiceBtn.disabled = false; // Enable the button if id is present
  cancelBtn.disabled = false; // Enable the button if id is present
  smsBtnM.disabled = false; // Enable the button if id is present
  emailBtnM.disabled = false; // Enable the button if id is present
  onlineShareBtn.disabled = false; // Enable the button if id is present

  // Save the result in session storage
  // sessionStorage.setItem('buttonDisabled', appBtn.disabled);
}

function updateButtonDisabledState() {
  const appBtn = document.querySelector(".appBtn");
  const digitalIdBtn = document.querySelector(".digitalIdBtn");
  const invoiceBtn = document.querySelector(".invoiceBtn");
  const cancelBtn = document.querySelector("#cancel");
  const smsBtnM = document.querySelector("#smsBtnM");
  const emailBtnM = document.querySelector("#emailBtnM");
  const onlineShareBtn = document.querySelector("#onlineShareBtn");

  appBtn.disabled = true; // Enable the button if id is present
  digitalIdBtn.disabled = true; // Enable the button if id is present
  invoiceBtn.disabled = true; // Enable the button if id is present
  cancelBtn.disabled = true; // Enable the button if id is present
  smsBtnM.disabled = true; // Enable the button if id is present
  emailBtnM.disabled = true; // Enable the button if id is present
  onlineShareBtn.disabled = true; // Enable the button if id is present

  // Save the result in session storage
  // sessionStorage.setItem('buttonDisabled', appBtn.disabled);
}

appBtn.addEventListener("click", () => {
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
    const appId = document.querySelector("#appId");
    const Emp1 = document.querySelector("#Emp1");
    const Timestamp1 = document.querySelector("#Timestamp1");
    const timestamp = new Date();

    // Convert the timestamp to dd/mm/yyyy format.
    const formattedDate = timestamp.toLocaleString("en-GB");

    // Set the Timestamp1 input field to the formatted date.
    Timestamp1.value = formattedDate;
    appId.value = id;
    Emp1.value = userr;
  } else {
    const spinnerContainer = document.querySelector("#spinner-container1");
    spinnerContainer.style.display = "none";
    const alertMsg = document.querySelector("#alertMsg");

    alertMsg.style.display = "none";
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

// const id = sessionStorage.getItem('idToPass');

// function checkIdAndDisableButton() {
//   if (id) {
//     appBtn.disabled = false;
//   } else {
//     appBtn.disabled = true;
//   }
// }

// window.addEventListener('DOMContentLoaded', checkIdAndDisableButton);

// window.addEventListener('storage', function (e) {
//   if (e.key === id) {
//     id = e.newValue;
//     checkIdAndDisableButton();
//   }
// });

// window.addEventListener("popstate", function(event) {
//   sessionStorage.clear();
//   localStorage.clear();
// });

// let params = {};
// let regex = /([^&=]+)=([^&]*)/g, m;
// while (m = regex.exec(location.href)){
//   params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
// }

// if (Object.keys(params).length > 0) {
//   localStorage.setItem('authInfo', JSON.stringify(params));
// }

// // hide the access token
// if (window.history && window.history.pushState) {
//   window.history.pushState({}, document.title, "/SRM.html");
// } else {
//   window.location.replace("/SRM.html");
// }

// let info = JSON.parse(localStorage.getItem('authInfo'));
// console.log(JSON.parse(localStorage.getItem('authInfo')));
// console.log(info['access_token']);
// console.log(info['expires_in']);

// console.log(user);

// const trace = document.createElement("h1");

// trace.classList.add("success" , "alert");
// trace.style.width = "25%";

// trace.style.zIndex = "1";

// const storage = sessionStorage.getItem("searchBtn");

// console.log(storage)

// trace.innerHTML = storage;

// document.body.appendChild(trace);
