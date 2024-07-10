const emailBtn = document.querySelector(".emailBtn");
const emailBtnG = document.querySelector("#emailBtnG");
const EmailSelectG = document.querySelector("#EmailSelectG");

EmailSelectG.addEventListener("change", () => {
  const EmailTextarea = document.querySelector("#EmailTextarea");

  if (EmailSelectG.value == "call me") {
    EmailTextarea.innerHTML =
      "تم الاتصال بحضرتك ولم يتم الرد برجاء التواصل فى اقرب وقت";
  } else {
    EmailTextarea.innerHTML = "";
  }
});

emailBtn.addEventListener("click", () => {
  // Get the id from session storage.
  const groupId = sessionStorage.getItem("groupId");
  const userr = localStorage.getItem("myCode");
  const emailGroupNum = document.querySelector("#emailGroupNum");
  const emailEmployee = document.querySelector("#emailEmployee");

  // Check if the id is empty.
  if (!groupId) {
    // Return from the function to stop it from executing.
    return;
  }

  // Continue with the rest of the function code.
  const Timestamp = document.querySelector("#emailTimestamp");
  const timestamp = new Date();
  // Convert the timestamp to dd/mm/yyyy format.
  const formattedDate = timestamp.toLocaleString("en-GB");

  // Set the Timestamp1 input field to the formatted date.
  Timestamp.value = formattedDate;
  emailGroupNum.value = groupId;
  emailEmployee.value = userr;
});

// for Qr code btn
jQuery("#frmEmailGroup").on("submit", function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycbwOrlnd4zLGQeU4zKG4BoSD56CGnbLgvpuQUnF2mYslWJuMhPHVYM0Of_eQoOdvJ7CE/exec",
    type: "post",
    data: jQuery("#frmEmailGroup").serialize(),
    beforeSend: function () {
      var spinner =
        '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery("#spinner-emmailG").html(spinner);
    },

    success: function (result) {
      jQuery("#frmEmailGroup")[0].reset();
      const alertMsg = document.querySelector(".alertMsg");

      // Display success message here
      // Display success message here
      // alertMsg.classList.add('alert', 'alert-success');
      // Check if id is empty
      const groupId = sessionStorage.getItem("groupId");
      if (groupId === null || groupId === "") {
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
      jQuery("#spinner-emmailG").empty();
      jQuery("#groupEmail").modal("hide");
      $('#groupEmail').on('hidden.bs.modal', function (e) {
        $('.modal-backdrop').remove();
    });
    },
  });
});
