document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var dropdownInstances = M.Dropdown.init(elems, { hover: false });

    
    dropdownInstances.forEach(function (dropdownInstance) {
        if (dropdownInstance) {
            dropdownInstance.el.addEventListener('click', function () {
                console.log('Dropdown clickeado');
                
                // Ajustar el dropdown cada vez que se haga clic
                setTimeout(function() {
                    var dropdown = dropdownInstance.el.nextElementSibling; // Obtiene el dropdown correspondiente
                    if (dropdown) {
                        dropdown.style.top = '70px'; // Mover el dropdown a 50px desde la parte superior
                        console.log('Dropdown abierto, ajustando posición');
                    } else {
                        console.error('Dropdown no encontrado');
                    }
                }, 0); // Usar un timeout para permitir que se abra antes de ajustar la posición
            });
        } else {
            console.error('Instancia de dropdown no válida');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
});

const sidenavLinks = document.querySelectorAll('.sidenav a'); // Seleccionamos todos los enlaces dentro del sidenav
const closeDelay = 300; // Retardo en milisegundos

// Función para cerrar el sidenav con retardo
const closeSidenav = () => {
    const sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
    setTimeout(() => {
        sidenavInstance.close();
    }, closeDelay); // Se cierra después del retardo
};

// Agregamos un evento de clic a cada enlace
sidenavLinks.forEach(link => {
    link.addEventListener('click', closeSidenav);
});

// Función para cerrar el sidenav al hacer clic fuera de él
const closeSidenavOnClickOutside = (event) => {
    const sidenav = document.querySelector('.sidenav');
    if (!sidenav.contains(event.target) && sidenav.classList.contains('open')) {
        closeSidenav();
    }
};

// Agregar evento de clic al documento
document.addEventListener('click', closeSidenavOnClickOutside);

// Variable para almacenar si está haciendo scroll
let isScrolling = false;

// Función para manejar el scroll
window.onscroll = function () {
    // Obtener todos los elementos
    const header = document.querySelector('header');
    const ul = document.getElementById('nav-wrapper-ul');
    const logo = document.getElementById('logo-nav');
    const titulo = document.getElementById('text1');
    const titulo2 = document.getElementById('text2');
    const idiomas = document.getElementById('contenedor-idiomas');
    const colorBoxes = document.querySelectorAll('.colorBox'); // Selecciona todos los colorBox
    const headerinmain = document.getElementById('headerinmain');

    // Obtener el porcentaje de desplazamiento
    const scrollPosition = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;

    // Si el usuario ha hecho scroll, cambiar clases de estilos
    if (scrollPosition > 0) {
        header.classList.add('header-scrolled');
        header.classList.remove('header-original');
        ul.classList.add('ul-scrolled');
        logo.classList.add('ul-scrolled');
        idiomas.classList.add('idiomas-scrolled');
        logo.classList.add('logo-header-scrolled');
        titulo.classList.add('text1-scrolled');
        titulo2.classList.add('text2-scrolled');
        headerinmain.classList.add('conteiner-headerinmain-scrolled');

        // Cambiar el estilo de hover de colorBox
        colorBoxes.forEach(box => {
            box.onmouseover = function () {
                this.style.background = '#1d1d1d'; // Cambia el color al hacer hover
            };
            box.onmouseout = function () {
                this.style.background = '#1d1d1d'; // Mantiene el color al salir del hover
            };
        });
    } else {
        // Si está en la parte superior de la página
        header.classList.add('header-original');
        header.classList.remove('header-scrolled');
        idiomas.classList.remove('idiomas-scrolled');
        ul.classList.remove('ul-scrolled');
        logo.classList.remove('ul-scrolled');
        logo.classList.remove('logo-header-scrolled');
        titulo.classList.remove('text1-scrolled');
        titulo2.classList.remove('text2-scrolled');
        headerinmain.classList.remove('conteiner-headerinmain-scrolled');

        // Restaurar el comportamiento original de hover de colorBox
        colorBoxes.forEach(box => {
            box.onmouseover = function () {
                this.style.background = '#00bfff'; // Cambia el color al hacer hover
            };
            box.onmouseout = function () {
                this.style.background = '#1d1d1d'; // Mantiene el color al salir del hover
            };
        });
    }

    // Si el scroll ha superado el 1% de la página, agregar la clase .scrolledout
    if (scrollPercent > 30) {
        headerinmain.classList.add('scrolledout');
    } else {
        headerinmain.classList.remove('scrolledout');
    }
};
