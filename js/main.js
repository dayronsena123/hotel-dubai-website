// ============================================
// HOTEL DUBAI - JAVASCRIPT PRINCIPAL
// Funcionalidades modernas y efectos
// ============================================

// === VARIABLES GLOBALES ===
let lastScrollTop = 0;
const header = document.querySelector('.site-header');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
    initHeaderScroll();
    initMobileMenu();
    initSmoothScroll();
    initLazyLoading();
    initScrollReveal();
});

// === HEADER SCROLL ===
function initHeaderScroll() {
    if (!header) return;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Agregar clase 'scrolled' cuando se hace scroll
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });
}

// === MENÚ MÓVIL ===
function initMobileMenu() {
    if (!menuToggle || !mainNav) return;

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function (e) {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// === SMOOTH SCROLL ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-fadeInUp, .animate-fadeInDown, .animate-slideInLeft, .animate-slideInRight');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
    });

    setTimeout(() => {
        animatedElements.forEach(el => {
            el.style.opacity = '1';
        });
    }, 100);
}

// === SCROLL REVEAL ===
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    if (revealElements.length === 0) return;

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    };

    // Revelar elementos visibles al cargar
    revealOnScroll();

    // Revelar elementos al hacer scroll
    window.addEventListener('scroll', revealOnScroll);
}

// === LAZY LOADING DE IMÁGENES ===
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback para navegadores antiguos
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// === VALIDACIÓN DE FORMULARIOS ===
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            showError(input, 'Este campo es obligatorio');
        } else {
            clearError(input);

            // Validaciones específicas
            if (input.type === 'email' && !isValidEmail(input.value)) {
                isValid = false;
                showError(input, 'Por favor ingresa un email válido');
            }

            if (input.type === 'tel' && !isValidPhone(input.value)) {
                isValid = false;
                showError(input, 'Por favor ingresa un teléfono válido');
            }
        }
    });

    return isValid;
}

function showError(input, message) {
    clearError(input);

    input.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'var(--danger)';
    errorDiv.style.fontSize = 'var(--text-sm)';
    errorDiv.style.marginTop = 'var(--space-1)';
    errorDiv.textContent = message;

    input.parentNode.appendChild(errorDiv);
}

function clearError(input) {
    input.classList.remove('error');
    const errorMessage = input.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[0-9]{9,}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// === NOTIFICACIONES ===
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--info)'};
    color: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    max-width: 300px;
  `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// === MODAL ===
function createModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--z-modal);
    animation: fadeIn 0.3s ease;
  `;

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.cssText = `
    background: white;
    padding: 2rem;
    border-radius: var(--radius-xl);
    max-width: 600px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: scaleIn 0.3s ease;
  `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--gray-600);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-full);
    transition: all 0.3s ease;
  `;
    closeBtn.onmouseover = () => {
        closeBtn.style.background = 'var(--gray-200)';
        closeBtn.style.color = 'var(--dark)';
    };
    closeBtn.onmouseout = () => {
        closeBtn.style.background = 'none';
        closeBtn.style.color = 'var(--gray-600)';
    };

    closeBtn.onclick = () => {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => modal.remove(), 300);
    };

    modalContent.appendChild(closeBtn);
    modalContent.innerHTML += content;
    modal.appendChild(modalContent);

    // Cerrar al hacer clic fuera
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => modal.remove(), 300);
        }
    };

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Restaurar scroll al cerrar
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.removedNodes.forEach((node) => {
                if (node === modal) {
                    document.body.style.overflow = '';
                    observer.disconnect();
                }
            });
        });
    });

    observer.observe(document.body, { childList: true });

    return modal;
}

// === CONTADOR ANIMADO ===
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// === UTILIDADES ===
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// === EXPORTAR FUNCIONES ===
window.hotelDubai = {
    validateForm,
    showNotification,
    createModal,
    animateCounter,
    debounce,
    throttle
};
