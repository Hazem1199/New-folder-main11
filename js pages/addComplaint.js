


const addComBtn = document.querySelector('.addComBtn');
const alertMsg = document.querySelector('.alertMessage');
// if (userRole === "System") {
//   digitalIdBtn.style.display = "none";
// }


addComBtn.addEventListener('click', () => {
  // Get the id from session storage.
  const ComId = document.querySelector('#ComId');
  const EmpCom = document.querySelector('#EmpCom');
  const id = sessionStorage.getItem('idToPass');
  const userr = localStorage.getItem("myCode");
  const groupToPass = sessionStorage.getItem("groupToPass");
  const StudyType = document.querySelector('#StudyType');





  // Check if the id is empty.
  if (!id) {
    // Return from the function to stop it from executing.
    return;
  }


  const Timestamp = document.querySelector('#ComTimestamp');
  const timestamp = new Date();
  // Convert the timestamp to dd/mm/yyyy format.
  const formattedDate = timestamp.toLocaleString('en-GB');

  // Set the Timestamp1 input field to the formatted date.
  Timestamp.value = formattedDate;
  ComId.value = id;
  EmpCom.value = userr;
  StudyType.value = groupToPass;
})




// for Qr code btn 
jQuery('#frmAddCom').on('submit', function (e) {
  e.preventDefault();
  jQuery.ajax({
    url: 'https://script.google.com/macros/s/AKfycbxj3qiY6X68acmVLRpSk0tMIfSSWeF7hIUaT7zwl-5RSy5n2zyim7VAS0n2ZoWChk-TGw/exec',
    type: 'post',
    data: jQuery('#frmAddCom').serialize(),
    beforeSend: function () {
      var spinner = '<div class="text-center appSpi" ><div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden"></span></div></div>';
      jQuery('#spinner-container7').html(spinner);
    },

    success: function (result) {
      jQuery('#frmAddCom')[0].reset();
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
        alertMsg.innerHTML = '<strong>Success!</strong> Added successfully.';
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
      jQuery('#spinner-container7').empty();
      jQuery('#exampleModal').modal('hide');
      // jQuery('.modal-backdrop').hide();
    }
  });
});