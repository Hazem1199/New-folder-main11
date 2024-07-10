const SupportBtn = document.querySelector('.SupportBtn');

SupportBtn.addEventListener('click', () => {
  // Get the id from session storage.
  const SupportEmployee = document.querySelector('#SupportEmployee');
  const userr = localStorage.getItem("myCode");
  // const SupportLink = document.querySelector('#SupportLink');
  // const SystemName = document.querySelector('#SystemName');





  // Continue with the rest of the function code.
  const Timestamp = document.querySelector('#SupportTimestamp');
  const timestamp = new Date();
  // Convert the timestamp to dd/mm/yyyy format.
  const formattedDate = timestamp.toLocaleString('en-GB');

  // Set the Timestamp1 input field to the formatted date.
  Timestamp.value = formattedDate;
  SupportEmployee.value = userr;

})



// for Qr code btn 
jQuery('#frmSupport').on('submit', function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: 'https://script.google.com/macros/s/AKfycbyalq5VnpO5MDIDp4GTWtkzTEDRL5ycmRlC21AINK4g7xtyjOHDTGavLwldl76DBWUFeA/exec',
    type: 'post',
    data: jQuery('#frmSupport').serialize(),
    beforeSend: function () {
      var spinner = '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery('#spinner-container6').html(spinner);
    },

    success: function (result) {
      jQuery('#frmSupport')[0].reset();
      // Display success message here
      // Display success message here
      // alertMsg.classList.add('alert', 'alert-success');
      // Check if id is empty

      alertMsg.classList.remove('alert', 'alert-danger');
      alertMsg.classList.add('alert', 'alert-success');
      alertMsg.innerHTML = '<strong>Success!</strong> Send successfully.';
      alertMsg.style.display = 'block';

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
      jQuery('#spinner-container6').empty();
      jQuery('#exampleModal6').modal('hide');
    }
  });
});

