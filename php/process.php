<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Enviar correo
    $to = "tucorreo@empresa.com";
    $subject = "Nuevo mensaje de $nombre";
    $body = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";

    if (mail($to, $subject, $body)) {
        echo "Mensaje enviado exitosamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
