
const smsBtn = document.querySelector('.smsBtn');
const smsBtnG = document.querySelector('#smsBtnG');
const SmsSelect = document.querySelector('#SmsSelect');

SmsSelect.addEventListener('change', () => {
  const smsTextarea = document.querySelector('#smsTextarea');

  if (SmsSelect.value == "call me") {
    
    smsTextarea.innerHTML = "تم الاتصال بحضرتك ولم يتم الرد برجاء التواصل فى اقرب وقت";
  }else{
    smsTextarea.innerHTML = "";
  }

});




smsBtn.addEventListener('click', () => {
  // Get the id from session storage.
  const groupId = sessionStorage.getItem('groupId');
  const userr = localStorage.getItem("myCode");
  const smsGroupNum = document.querySelector('#smsGroupNum');
  const smsEmployee = document.querySelector('#smsEmployee');


  // Check if the id is empty.
  if (!groupId) {
    // Return from the function to stop it from executing.
    return;
  }

  // Continue with the rest of the function code.
  const Timestamp = document.querySelector('#smsTimestamp');
  const timestamp = new Date();
  // Convert the timestamp to dd/mm/yyyy format.
  const formattedDate = timestamp.toLocaleString('en-GB');

  // Set the Timestamp1 input field to the formatted date.
  Timestamp.value = formattedDate;
  smsGroupNum.value = groupId;
  smsEmployee.value = userr;
})

const alertMsg = document.querySelector('.alertMsg');

// for Qr code btn 
jQuery('#frmSmsGroup').on('submit', function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: 'https://script.google.com/macros/s/AKfycbyDxv-mfaxeP9Lx3aB1k9yyyr4RmRPwuZ88j-BRAlBYECSj5s-OTKkROjrOfe4eQV5A/exec',
    type: 'post',
    data: jQuery('#frmSmsGroup').serialize(),
    beforeSend: function () {
      var spinner = '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery('#spinner-container').html(spinner);
    },

    success: function (result) {
      jQuery('#frmSmsGroup')[0].reset();
      // Display success message here
      // Display success message here
      // alertMsg.classList.add('alert', 'alert-success');
      // Check if id is empty
      const groupId = sessionStorage.getItem("groupId");
      if (groupId === null || groupId === '') {
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
      jQuery('#spinner-container').empty();
      jQuery('#groupsms').modal('hide');
      $('#groupsms').on('hidden.bs.modal', function (e) {
        $('.modal-backdrop').remove();
    });
    }
  });
});