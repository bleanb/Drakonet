
document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.glassfaq');
    const mainfaq = document.getElementById('mainfaq');
    let activeFaq = null;

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            if (activeFaq && activeFaq !== faq) {
                activeFaq.style.height = '50px';
                activeFaq.classList.remove('expanded');
                mainfaq.style.height = '800px';
            }

            if (faq.style.height === '400px') {
                faq.style.height = '50px';
                faq.classList.remove('expanded');
                mainfaq.style.height = '800px';
                activeFaq = null;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                faq.style.height = '400px';
                faq.classList.add('expanded');
                activeFaq = faq;
                mainfaq.style.height = '1100px';
                const offset = faq.offsetTop - 50; // Ajuste de 50px hacia arriba
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
