<?php
$mail = $_POST['mail-send'];

if (mail("nestwedman@gmail.com", "Подписка на новости", "Подписка на новости: " . $mail . " \r\n")) {
    echo('Сообщение успешно отправлено. Вы можете вернуться к сайту');
} else {
    echo('Ошибка при отправке сообщения');
}
?>