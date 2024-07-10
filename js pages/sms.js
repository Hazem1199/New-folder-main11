const smsBtn = document.querySelector(".smsBtn");
const smsBtnM = document.querySelector("#smsBtnM");
const SmsSelect = document.querySelector("#SmsSelect");

SmsSelect.addEventListener("change", () => {
  const smsTextarea = document.querySelector("#smsTextarea");

  if (SmsSelect.value == "call me") {
    smsTextarea.innerHTML =
      "تم الاتصال بحضرتك ولم يتم الرد برجاء التواصل فى اقرب وقت";
  } else {
    smsTextarea.innerHTML = "";
  }
});

smsBtn.addEventListener("click", () => {
  // Get the id from session storage.
  const id = sessionStorage.getItem("idToPass");
  const userr = localStorage.getItem("myCode");
  const smsStudentNum = document.querySelector("#smsStudentNum");
  const smsEmployee = document.querySelector("#smsEmployee");

  // Check if the id is empty.
  if (!id) {
    // Return from the function to stop it from executing.
    return;
  }

  // Continue with the rest of the function code.
  const Timestamp = document.querySelector("#smsTimestamp");
  const timestamp = new Date();
  // Convert the timestamp to dd/mm/yyyy format.
  const formattedDate = timestamp.toLocaleString("en-GB");

  // Set the Timestamp1 input field to the formatted date.
  Timestamp.value = formattedDate;
  smsStudentNum.value = id;
  smsEmployee.value = userr;
});

// for Qr code btn
jQuery("#frmSms").on("submit", function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycbxfhG41f5KyJkb5jhDVI2Mym99W832uE4QJ2bMwqXa562Tr0fpBGZjQH7m8JVV1hX96/exec",
    type: "post",
    data: jQuery("#frmSms").serialize(),
    beforeSend: function () {
      var spinner =
        '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery("#spinner-container3").html(spinner);
    },

    success: function (result) {
      jQuery("#frmSms")[0].reset();
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
      jQuery("#spinner-container3").empty();
      jQuery("#exampleModal2").modal("hide");
      $("#exampleModal2").on("hidden.bs.modal", function (e) {
        $(".modal-backdrop").remove();
      });
    },
  });
});
