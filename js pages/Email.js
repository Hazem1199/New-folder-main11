
const emailBtn = document.querySelector('.emailBtn');
const emailBtnM = document.querySelector('#emailBtnM');
const EmailSelect = document.querySelector('#EmailSelect');

EmailSelect.addEventListener('change', () => {
  const EmailTextarea = document.querySelector('#EmailTextarea');

  if (EmailSelect.value == "call me") {
    
    EmailTextarea.innerHTML = "تم الاتصال بحضرتك ولم يتم الرد برجاء التواصل فى اقرب وقت";
  }else{
    EmailTextarea.innerHTML = "";
  }

});






emailBtn.addEventListener('click', () => {
  // Get the id from session storage.
  const id = sessionStorage.getItem('idToPass');
  const userr = localStorage.getItem("myCode");
  const emailStudentNum = document.querySelector('#emailStudentNum');
  const emailEmployee = document.querySelector('#emailEmployee');


  // Check if the id is empty.
  if (!id) {
    // Return from the function to stop it from executing.
    return;
  }

  // Continue with the rest of the function code.
  const Timestamp = document.querySelector('#emailTimestamp');
  const timestamp = new Date();
  // Convert the timestamp to dd/mm/yyyy format.
  const formattedDate = timestamp.toLocaleString('en-GB');

  // Set the Timestamp1 input field to the formatted date.
  Timestamp.value = formattedDate;
  emailStudentNum.value = id;
  emailEmployee.value = userr;
})



// for Qr code btn 
jQuery('#frmEmail').on('submit', function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: 'https://script.google.com/macros/s/AKfycbzG8VoHWJmkbzaT3IZTm-KZEFjWI7qNks_1XddwEVbzIgmx3QL7yTnBS3vT-eB0fljw/exec',
    type: 'post',
    data: jQuery('#frmEmail').serialize(),
    beforeSend: function () {
      var spinner = '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery('#spinner-container4').html(spinner);
    },

    success: function (result) {
      jQuery('#frmEmail')[0].reset();
      // Display success message here
      // Display success message here
      // alertMsg.classList.add('alert', 'alert-success');
      // Check if id is empty
      const id = sessionStorage.getItem("idToPass");
      if (id === null || id === '') {
        alertMsg.classList.add('alert', 'alert-danger');
        alertMsg.innerHTML = '<strong>Error!</strong> Please Enter Invalid Id .';
        alertMsg.style.display = 'block';
      } else {
        alertMsg.classList.remove('alert', 'alert-danger');
        alertMsg.classList.add('alert', 'alert-success');
        alertMsg.innerHTML = '<strong>Success!</strong> Send successfully.';
        alertMsg.style.display = 'block';
      }
      alertMsg.style.width = '25%';
      alertMsg.style.position = 'fixed';
      alertMsg.style.top = '0';
      alertMsg.style.left = '38%';
      alertMsg.style.margin = '20px';
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
      alertMsg.classList.add('alert', 'alert-danger');
      alertMsg.style.width = '25%';
      alertMsg.style.position = 'fixed';
      alertMsg.style.top = '0';
      alertMsg.style.left = '38%';
      alertMsg.style.margin = '20px';
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
      jQuery('#spinner-container4').empty();
      jQuery('#exampleModal4').modal('hide');
      $("#exampleModal4").on("hidden.bs.modal", function (e) {
        $(".modal-backdrop").remove();
      });
    }
  });
});