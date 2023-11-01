<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$is_agree = $_POST['is_agree'];

$agreement = "";

if ($is_agree) {
    $agreement = "Согласен на обработку персональных данных";
} else {
    $agreement = "Не согласен на обработку персональных данных";
}

if (mail("nestwedman@gmail.com", "Заявка на сотрудничество", "Заявка на сотрудничество: " . $mail . " \r\n" . $name . " \r\n" . $mail . " \r\n" . $phone . " \r\n" . "Сообщение: " . $message . " \r\n" . $agreement . " \r\n")) {
    echo('Сообщение успешно отправлено. Вы можете вернуться к сайту');
} else {
    echo('Ошибка при отправке сообщения');
}
?>