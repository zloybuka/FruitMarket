<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "borodin-vladislav2@yandex.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name 
    Фамилия: $surname 
    Телефон: $phone 
    Почта: $email 
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

?>
<a href="index.html"><img src="img/31.png" style="margin-left: 90%;"></a>
<p>Заказ оформлен</p>
