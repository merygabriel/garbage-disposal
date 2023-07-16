<?php
include ("db.php");
$date = $_POST['datetime'];
$timeMin = strtotime($date)-1200;
$timeMax = strtotime($date)+1200;
//print_r($time);
//die;
if (isset($_POST['username'])
){
$userName = $_POST["username"];
$userSurName = $_POST["usersurname"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$address = $_POST["address"];
$weight = $_POST["weight"];
$sort = $_POST["sort"];
$dateTime = $_POST["datetime"];

$checking = true;

$sql2 = "select * from `order` ";
$ressult2 = mysqli_query($conn,$sql2);
foreach ($ressult2 as $val){
    $data2 = mysqli_fetch_assoc($ressult2);

    $chackdate = strtotime($data2['datetime']);
    if($chackdate > $timeMin && $chackdate < $timeMax){
        $checking = false;
    }

}
if(!$checking){
    session_start();
    $_SESSION["msg"]=[
        'success'=>"Ընտռված ժամը զբաղված է "
    ];
    header('location:cap.php');
    die;
}



$SQL = "INSERT INTO `order` VALUES(null,'$userName','$userSurName','$email','$phone','$address','$weight','$sort','$dateTime')";
$ressult = mysqli_query($conn,$SQL);
if ($ressult == TRUE){
    session_start();
    $_SESSION["msg"]=[
      'success'=>"Շնորհակալություն,ձեր օնլայն գրանցումն ստացված է"
    ];
    header('location:cap.php');
}else{
    session_start();
    $_SESSION["msg"]=[
        'error'=>"գրանցումն չի ստացվել"
    ];
    header('location:cap.php');
}
}
?>