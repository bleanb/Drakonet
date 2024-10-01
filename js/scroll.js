
document.getElementById('scrollToProposito').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    const target = document.getElementById('proposito');
    const offset = target.offsetTop + 400; // Ajustar el desplazamiento
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
});