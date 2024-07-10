<?php
$con = mysqli_connect("67.20.113.236", "aoiproje_Ahmed", "Brooklyn@2024", "aoiproje_srm");
$response = array();

if ($con) {
  // Receive the ID from the GET request
  $id = $_GET['id'];

  // Construct the SQL query based on the received ID
  $sql = "SELECT * FROM `SRM_Basic Data` WHERE iD = $id";

  $result = mysqli_query($con, $sql);

  if ($result) {
    header("Content-Type: JSON");
    $i = 0;

    while ($row = mysqli_fetch_assoc($result)) {
      $response[$i]['student_NUM'] = $row['student_NUM'];
      $response[$i]['name'] = $row['name'];
      $response[$i]['scholarship'] = $row['scholarship'];
      $response[$i]['phone'] = $row['phone'];
      $response[$i]['email'] = $row['email'];
      $response[$i]['career_Type'] = $row['career_Type'];
      $response[$i]['iD'] = $row['iD'];
      $response[$i]['g_Grade'] = $row['g_Grade'];
      $response[$i]['reservation_case'] = $row['reservation_case'];
      $response[$i]['reservation_date'] = $row['reservation_date'];
      $response[$i]['study_Type'] = $row['study_Type'];
      $response[$i]['called_By'] = $row['called_By'];
      $response[$i]['recp'] = $row['recp'];
      $response[$i]['reserver'] = $row['reserver'];
      $response[$i]['date_Of_Birth'] = $row['date_Of_Birth'];
      $response[$i]['image'] = $row['image'];
      $response[$i]['schadule'] = $row['schadule'];
      $response[$i]['payments'] = $row['payments'];
      $response[$i]['papers'] = $row['papers'];
      $response[$i]['requests'] = $row['requests'];
      $response[$i]['complaints'] = $row['complaints'];
      $i++;
    }

    echo json_encode($response, JSON_PRETTY_PRINT);
  }
} else {
  echo "DataBase Connection failed";
}
?>




