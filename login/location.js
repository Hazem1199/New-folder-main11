const loginbtn = document.querySelector(".loginbtn");
const LocationSelect = document.querySelector("#LocationSelect");

LocationSelect.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  console.log(selectedValue);
  loginbtn.style.display = "block";
});

loginbtn.addEventListener("click", () => {
  const EmployeeLogin = document.querySelector("#EmployeeLogin");
  const username = document.querySelector("#username");
  const Timestamp = document.querySelector("#loginTimestamp");
  const timestamp = new Date();
  const formattedDate = timestamp.toLocaleString("en-GB");
  Timestamp.value = formattedDate;
  if (username) {
    EmployeeLogin.value = username.value;
  }
});

const alertMsg = document.querySelector("#alertMsg");

jQuery("#frmLogin").on("submit", function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycbynJc5-n_o7XFgxq1FdrrJXyxjH3RRp3Qn-NZBAutqOBGrOcKLdOLsZy_QQPYx51i01nw/exec",
    type: "post",
    data: jQuery("#frmLogin").serialize(),
    beforeSend: function () {
      var spinner =
        '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery("#spinner-container").html(spinner);
    },
    success: function (result) {
      jQuery("#frmLogin")[0].reset();
    },
    error: function () {
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
      jQuery("#spinner-container").empty();
    },
  });
});

window.onload = function () {
  localStorage.clear();
  if (window.innerWidth < 1024) {
    $("#popupModal").modal("show");
  }
};
