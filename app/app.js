document.addEventListener("DOMContentLoaded", function() {
    // Obtiene todas las imágenes con la clase "ocultar"
    const imagenesOcultas = document.querySelectorAll(".ocultar");
    let index = 0;

    // Función para mostrar la imagen actual y programar la siguiente
    function mostrarImagen() {
        if (index < imagenesOcultas.length) {
            imagenesOcultas[index].classList.remove("ocultar");
            index++;
            setTimeout(mostrarImagen, 5000); // Espera 1 segundo antes de mostrar la siguiente imagen
        }
    }

    // Inicia la animación después de 1 segundo
    setTimeout(mostrarImagen, 5000);
});