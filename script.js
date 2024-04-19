document.addEventListener('DOMContentLoaded', function() {
    const seleccionarButton = document.getElementById('seleccionarButton');
    const modal = document.getElementById('privada-modal');
    const form = document.querySelector('form');

    seleccionarButton.addEventListener('click', function(event) {
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        // Mostrar el modal
        modal.style.display = 'block';
    });

    // Agregar un manejador de eventos para el evento 'submit' del formulario
    form.addEventListener('submit', function(event) {
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        // Puedes agregar aquí cualquier lógica adicional necesaria
        // Por ejemplo, puedes enviar los datos del formulario mediante AJAX
    });
});