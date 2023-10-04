<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Заявка с сайта";

$c = true;

$jsonText = $_POST['Товары'];
$formFullprice = $_POST['Цена'];
$myArray = json_decode($jsonText, true);

$prod = '';
$formPrice = '';

$formPrice .= "
        <tr>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$formFullprice</b></td>
        </tr>
        ";

foreach ($myArray as $key => $value) {
    $cat = $value["category"];
        $title = $value["title"];
        $fullPrc = $value["fullPrc"];
        $price = $value["price"];
        $summ = $value["summ"];
        $prod .= "
        <tr>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$title</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$price</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$summ</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Итого: $fullPrc</b></td>
        </tr>
        
        ";
}

foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "Товары" && $key != "Цена" ) {
        $body .= "
        " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$value</b></td>
        </tr>
        ";
    }
}

$body = "<table style='width: 100%;'>$body . $prod . $formPrice</table>";

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;

    $mail->Host = 'smtp.gmail.com';
    $mail->Username = 'agapovladimir89@gmail.com';
    $mail->Password = 'bgcq hffm fmhj mxkt';
    $mail->Port = 587;

    $mail->setFrom('agapovladimir89@gmail.com', 'Заявка с сайта');

    $mail->addAddress('agapovladimir89@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    $mail->send();

} catch (Exception $e) {
    $status = "Сообщение не было отправленно. Причина ошибки: {$mail->ErrorInfo}";
}