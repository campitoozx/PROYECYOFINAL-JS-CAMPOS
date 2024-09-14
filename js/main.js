//  function verificarEdad() {
//      const edad = prompt("Por favor, ingrese su edad:");
//      if (edad !== null && parseInt(edad) >= 18) {
//          document.getElementById('content').style.display = 'block';
//      } else {
//         alert("Lo siento, debes ser mayor de edad para acceder a esta herramienta.");
//         document.body.innerHTML = "<h1>Acceso Denegado</h1>";
//      }
//  }
window.onload = function() {

    document.getElementById('ageModal').style.display = 'flex';
    document.getElementById('content').classList.add('blurred');
    document.body.classList.add('modal-active'); 


    document.getElementById('ageForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const edad = parseInt(document.getElementById('ageInput').value);
        if (edad >= 18) {
            mostrarBienvenida();
        } else {
            document.getElementById('error-message').style.display = 'block';
            document.getElementById('ageModal').style.display = 'none';
            document.body.classList.remove('modal-active'); 
        }
    });
}

function mostrarBienvenida() {
    
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.style.display = 'block';


    document.getElementById('ageModal').style.display = 'none';
    document.getElementById('content').classList.remove('blurred');
    document.body.classList.remove('modal-active'); 


    setTimeout(function() {
        welcomeMessage.style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.querySelector('.container2').style.display = 'block'; 
    }, 3000);
}

function limpiarArray(arr) {
    return arr.filter(item => item !== null && item !== undefined && item !== 0);
}

/*function concatenarArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error("Los arrays deben tener el mismo tamaño");
    }
    
    return arr1.map((item, index) => item + " " + arr2[index]);
}*/
function calcularRed() {

    const pcs = parseInt(document.getElementById('pcs').value) || 0;
    const servers = parseInt(document.getElementById('servers').value) || 0;
    const phones = parseInt(document.getElementById('phones').value) || 0;
    const wifi = parseInt(document.getElementById('wifi').value) || 0;


    const pcsPerSwitch = 24;
    const maxWifiDevicesPerAP = 50;
    const totalDevices = pcs + servers;
    const switches = Math.ceil(totalDevices / pcsPerSwitch);
    const accessPoints = Math.ceil(wifi / maxWifiDevicesPerAP);
    const routers = 1;


    const articulos = [
        { nombre: 'Switches', cantidad: switches },
        { nombre: 'Puntos de Acceso WiFi', cantidad: accessPoints },
        { nombre: 'Routers', cantidad: routers }
    ];


    const cuerpoTabla = document.getElementById('carrito-body');


    cuerpoTabla.innerHTML = '';


    articulos.forEach(articulo => {
        const fila = document.createElement('tr');

        const columnaNombre = document.createElement('td');
        columnaNombre.textContent = articulo.nombre;
        fila.appendChild(columnaNombre);

        const columnaCantidad = document.createElement('td');
        columnaCantidad.textContent = articulo.cantidad;
        fila.appendChild(columnaCantidad);

        cuerpoTabla.appendChild(fila);
    });

    const leyenda = document.getElementById('leyenda');
    leyenda.textContent = "Cables: Considerar cables UTP cat6 para una red eficiente, con conexiones DE VELOCIDAD Y ESTABLES";


    const modal = document.getElementById('modalCart');
    modal.style.display = 'flex';  
    setTimeout(() => {
        modal.classList.add('show'); 
    }, 10);
}

function cerrarModal() {
    const modal = document.getElementById('modalCart');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 1000);
}

