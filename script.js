
// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    const formData = {
        Nombre: nombre,
        Apellido: apellido,
        FechaDeNacimiento: fechaNacimiento
    };

    enviarDatosAlServidor(formData);
}

// Función para enviar datos al servidor
function enviarDatosAlServidor(formData) {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Aquí puedes mostrar la respuesta del servidor en tu página o tomar otras acciones
    })
    .catch(error => console.error('Error:', error));
}

// Agregar un evento al formulario para manejar el envío
document.getElementById('registroForm').addEventListener('submit', handleSubmit);