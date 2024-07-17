// Efeito de escrita
document.addEventListener('DOMContentLoaded', function() {
    let i = 0;
    const txt = 'Mahalo restaurant&bar';
    const speed = 100;
    
    function typeWriter() {
        if (i < txt.length) {
            document.querySelector('#restaurant-name').innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                document.querySelector('#restaurant-name').innerHTML = '';
                i = 0;
                typeWriter();
            }, 5000); // Pausa antes de reiniciar
        }
    }
    
    typeWriter();
});

// Scroll suave ao clicar nos links da navbar
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carregar PDF ao clicar no card do menu
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        let pdfUrl = this.getAttribute('hx-get');
        if (pdfUrl) {
            window.open(pdfUrl, '_blank');
        }
    });
});
