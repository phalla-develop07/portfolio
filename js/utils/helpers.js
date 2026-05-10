// Scroll to top button
export const addScrollToTopButton = () => {
    const button = document.createElement('button');
    button.id = 'scrollToTop';
    button.innerHTML = '⬆️';
    button.className = 'scroll-to-top';
    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

// Add active state to nav links
export const addNavHighlight = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
};

// View CV Button
export const addCVButton = () => {
    const cvBtn = document.createElement('a');
    cvBtn.innerHTML = '📄 View My CV';
    cvBtn.className = 'cv-btn';
    cvBtn.href = '../../assets/cvcl/cv.pdf';
    cvBtn.target = '_blank';
    cvBtn.style.display = 'inline-block';
    cvBtn.style.textDecoration = 'none';

    const hero = document.querySelector('.hero-section');
    if (hero) {
        hero.appendChild(cvBtn);
    }
};

