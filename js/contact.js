// ============================================
// FORMULARIO DE CONTACTO - HOTEL DUBAI
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    initContactForm();
});

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', handleContactSubmit);
}

async function handleContactSubmit(e) {
    e.preventDefault();

    // Validar formulario
    if (!window.hotelDubai.validateForm(e.target)) {
        window.hotelDubai.showNotification('Por favor completa todos los campos requeridos', 'error');
        return;
    }

    // Obtener datos del formulario
    const formData = new FormData(e.target);
    const contactData = {
        id: Date.now(),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone') || 'No proporcionado',
        subject: formData.get('subject'),
        message: formData.get('message'),
        status: 'new',
        createdAt: new Date().toISOString()
    };

    // Guardar en localStorage
    saveContactMessage(contactData);

    // Mostrar confirmación
    showContactConfirmation(contactData);

    // Limpiar formulario
    e.target.reset();

    // Enviar email (simulado)
    sendContactEmail(contactData);
}

function saveContactMessage(data) {
    let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push(data);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
}

function showContactConfirmation(data) {
    const content = `
    <div style="text-align: center;">
      <div style="font-size: 4rem; margin-bottom: 1rem;">✉️</div>
      <h2 style="color: var(--success); margin-bottom: 1rem;">¡Mensaje Enviado!</h2>
      <p style="color: var(--gray-600); margin-bottom: 2rem;">
        Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.
      </p>
      
      <div style="background: var(--gray-100); padding: 1.5rem; border-radius: var(--radius-lg); text-align: left; margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--primary);">Resumen de tu Mensaje</h3>
        <div style="display: grid; gap: 0.5rem;">
          <div><strong>Nombre:</strong> ${data.name}</div>
          <div><strong>Email:</strong> ${data.email}</div>
          <div><strong>Asunto:</strong> ${getSubjectName(data.subject)}</div>
          <div><strong>Mensaje:</strong><br>${data.message}</div>
        </div>
      </div>
      
      <div style="background: var(--info-light); color: white; padding: 1rem; border-radius: var(--radius); margin-bottom: 1.5rem;">
        <strong>📧 Te responderemos pronto</strong><br>
        <small>Nuestro tiempo de respuesta es de 24 horas</small>
      </div>
      
      <p style="color: var(--gray-600); font-size: 0.9rem; margin-bottom: 1.5rem;">
        <strong>Número de Ticket:</strong> #${data.id}<br>
        Guarda este número para futuras referencias
      </p>
      
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="index.html" class="btn btn-primary">
          Volver al Inicio
        </a>
        <a href="tel:963728301" class="btn btn-secondary">
          Llamar Ahora
        </a>
      </div>
    </div>
  `;

    window.hotelDubai.createModal(content);
}

function sendContactEmail(data) {
    // En producción, aquí se integraría con EmailJS o un servicio similar
    console.log('Enviando email de contacto...', data);

    // Simulación de envío
    setTimeout(() => {
        console.log('Email enviado exitosamente');
    }, 1000);
}

function getSubjectName(subject) {
    const subjects = {
        'reserva': 'Consulta sobre Reserva',
        'habitacion': 'Información de Habitaciones',
        'precio': 'Consulta de Precios',
        'servicio': 'Servicios del Hotel',
        'otro': 'Otro'
    };
    return subjects[subject] || subject;
}
