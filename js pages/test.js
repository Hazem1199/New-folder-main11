// $(document).ready(function () {
//     // const id = $('#studentID').val(); // Get the ID from the HTML element with the ID 'studentID'

//     $.ajax({
//         url: 'api-basic-data.php', // Replace with the actual PHP file path
//         method: 'GET',
//         // data: { id: id }, // Send the ID as a parameter
//         success: function (response) {
//             const name = response[0].name; // Get the name from the response data
//             $('#Name').html(name); // Update the HTML element with the name
//         },
//         error: function (error) {
//             console.error(error);
//         }   
//     });
// });
const Name = document.querySelector('#Name');

fetch('../api-basic-data.php')
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        console.log(data);
    });



// function updateHTML(response) {
//     const studentData = response[response.length - 1]; // Get the last element of the response array

//     // Update the HTML elements using the student data
//     Name.innerHTML = studentData.name;

// }

