// ============================================
// SISTEMA DE RESERVAS - HOTEL DUBAI
// ============================================

// === CONFIGURACIÓN ===
const ROOM_PRICES = {
    sencilla: 40,
    doble: 60,
    familiar: 90
};

const ROOM_NAMES = {
    sencilla: 'Habitación Sencilla',
    doble: 'Habitación Doble',
    familiar: 'Habitación Familiar'
};

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', function () {
    initReservationForm();
    loadRoomFromURL();
    setupDateValidation();
    setupPriceCalculation();
});

// === CARGAR HABITACIÓN DESDE URL ===
function loadRoomFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const roomType = urlParams.get('room');

    if (roomType && ROOM_PRICES[roomType]) {
        const roomSelect = document.getElementById('roomType');
        if (roomSelect) {
            roomSelect.value = roomType;
            calculatePrice();
        }
    }
}

// === VALIDACIÓN DE FECHAS ===
function setupDateValidation() {
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');

    if (!checkinInput || !checkoutInput) return;

    // Establecer fecha mínima como hoy
    const today = new Date().toISOString().split('T')[0];
    checkinInput.min = today;
    checkoutInput.min = today;

    // Validar que checkout sea después de checkin
    checkinInput.addEventListener('change', function () {
        const checkinDate = new Date(this.value);
        const checkoutDate = new Date(checkoutInput.value);

        // Establecer checkout mínimo como un día después de checkin
        const minCheckout = new Date(checkinDate);
        minCheckout.setDate(minCheckout.getDate() + 1);
        checkoutInput.min = minCheckout.toISOString().split('T')[0];

        // Si checkout es antes de checkin, limpiar
        if (checkoutDate <= checkinDate) {
            checkoutInput.value = '';
        }

        calculatePrice();
    });

    checkoutInput.addEventListener('change', function () {
        calculatePrice();
    });
}

// === CÁLCULO DE PRECIO ===
function setupPriceCalculation() {
    const roomSelect = document.getElementById('roomType');
    const guestsInput = document.getElementById('guests');

    if (roomSelect) {
        roomSelect.addEventListener('change', calculatePrice);
    }

    if (guestsInput) {
        guestsInput.addEventListener('change', calculatePrice);
    }
}

function calculatePrice() {
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    const roomSelect = document.getElementById('roomType');
    const priceDisplay = document.getElementById('totalPrice');
    const nightsDisplay = document.getElementById('nights');
    const priceBreakdown = document.getElementById('priceBreakdown');

    if (!checkinInput || !checkoutInput || !roomSelect || !priceDisplay) return;

    const checkin = new Date(checkinInput.value);
    const checkout = new Date(checkoutInput.value);
    const roomType = roomSelect.value;

    if (!checkinInput.value || !checkoutInput.value || !roomType) {
        priceDisplay.textContent = 'S/ 0';
        if (nightsDisplay) nightsDisplay.textContent = '0';
        if (priceBreakdown) priceBreakdown.style.display = 'none';
        return;
    }

    // Calcular número de noches
    const diffTime = checkout - checkin;
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (nights <= 0) {
        priceDisplay.textContent = 'S/ 0';
        if (nightsDisplay) nightsDisplay.textContent = '0';
        if (priceBreakdown) priceBreakdown.style.display = 'none';
        return;
    }

    // Calcular precio total
    const pricePerNight = ROOM_PRICES[roomType];
    const total = pricePerNight * nights;

    // Mostrar resultados
    priceDisplay.textContent = `S/ ${total}`;
    if (nightsDisplay) nightsDisplay.textContent = nights;

    // Mostrar desglose
    if (priceBreakdown) {
        priceBreakdown.style.display = 'block';
        priceBreakdown.innerHTML = `
      <div style="padding: 1rem; background: var(--gray-100); border-radius: var(--radius); margin-top: 1rem;">
        <h4 style="margin-bottom: 0.5rem; color: var(--primary);">Desglose de Precio</h4>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span>${ROOM_NAMES[roomType]}</span>
          <span>S/ ${pricePerNight} / noche</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span>Número de noches</span>
          <span>${nights}</span>
        </div>
        <div style="border-top: 2px solid var(--gray-300); padding-top: 0.5rem; margin-top: 0.5rem;">
          <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1.25rem; color: var(--secondary);">
            <span>Total</span>
            <span>S/ ${total}</span>
          </div>
        </div>
      </div>
    `;
    }
}

// === INICIALIZAR FORMULARIO ===
function initReservationForm() {
    const form = document.getElementById('reservationForm');
    if (!form) return;

    form.addEventListener('submit', handleReservationSubmit);
}

// === MANEJAR ENVÍO DE RESERVA ===
async function handleReservationSubmit(e) {
    e.preventDefault();

    // Validar formulario
    if (!window.hotelDubai.validateForm(e.target)) {
        window.hotelDubai.showNotification('Por favor completa todos los campos requeridos', 'error');
        return;
    }

    // Obtener datos del formulario
    const formData = new FormData(e.target);
    const reservationData = {
        id: Date.now(),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        roomType: formData.get('roomType'),
        checkin: formData.get('checkin'),
        checkout: formData.get('checkout'),
        guests: formData.get('guests'),
        requests: formData.get('requests'),
        status: 'pending',
        createdAt: new Date().toISOString()
    };

    // Calcular precio
    const checkin = new Date(reservationData.checkin);
    const checkout = new Date(reservationData.checkout);
    const nights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
    const total = ROOM_PRICES[reservationData.roomType] * nights;

    reservationData.nights = nights;
    reservationData.total = total;

    // Guardar en localStorage
    saveReservation(reservationData);

    // Mostrar modal de confirmación
    showConfirmationModal(reservationData);

    // Limpiar formulario
    e.target.reset();
    calculatePrice();

    // Enviar email (simulado)
    sendReservationEmail(reservationData);
}

// === GUARDAR RESERVA ===
function saveReservation(data) {
    let reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservations.push(data);
    localStorage.setItem('reservations', JSON.stringify(reservations));
}

// === MODAL DE CONFIRMACIÓN ===
function showConfirmationModal(data) {
    const content = `
    <div style="text-align: center;">
      <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
      <h2 style="color: var(--success); margin-bottom: 1rem;">¡Reserva Recibida!</h2>
      <p style="color: var(--gray-600); margin-bottom: 2rem;">
        Hemos recibido tu solicitud de reserva. Te contactaremos pronto para confirmar tu reserva.
      </p>
      
      <div style="background: var(--gray-100); padding: 1.5rem; border-radius: var(--radius-lg); text-align: left; margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; color: var(--primary);">Detalles de tu Reserva</h3>
        <div style="display: grid; gap: 0.5rem;">
          <div><strong>Nombre:</strong> ${data.name}</div>
          <div><strong>Email:</strong> ${data.email}</div>
          <div><strong>Teléfono:</strong> ${data.phone}</div>
          <div><strong>Habitación:</strong> ${ROOM_NAMES[data.roomType]}</div>
          <div><strong>Check-in:</strong> ${formatDate(data.checkin)}</div>
          <div><strong>Check-out:</strong> ${formatDate(data.checkout)}</div>
          <div><strong>Huéspedes:</strong> ${data.guests}</div>
          <div><strong>Noches:</strong> ${data.nights}</div>
          <div style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 2px solid var(--gray-300);">
            <strong style="font-size: 1.25rem; color: var(--secondary);">Total: S/ ${data.total}</strong>
          </div>
        </div>
      </div>
      
      <div style="background: var(--info-light); color: white; padding: 1rem; border-radius: var(--radius); margin-bottom: 1.5rem;">
        <strong>📧 Confirmación enviada a tu email</strong><br>
        <small>Revisa tu bandeja de entrada y spam</small>
      </div>
      
      <p style="color: var(--gray-600); font-size: 0.9rem;">
        <strong>Número de Reserva:</strong> #${data.id}<br>
        Guarda este número para futuras consultas
      </p>
      
      <a href="index.html" class="btn btn-primary" style="margin-top: 1rem;">
        Volver al Inicio
      </a>
    </div>
  `;

    window.hotelDubai.createModal(content);
}

// === ENVIAR EMAIL (SIMULADO) ===
function sendReservationEmail(data) {
    // En producción, aquí se integraría con EmailJS o un servicio similar
    console.log('Enviando email de confirmación...', data);

    // Simulación de envío
    setTimeout(() => {
        console.log('Email enviado exitosamente');
    }, 1000);
}

// === UTILIDADES ===
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-PE', options);
}

// === EXPORTAR FUNCIONES ===
window.reservationSystem = {
    calculatePrice,
    saveReservation,
    ROOM_PRICES,
    ROOM_NAMES
};
