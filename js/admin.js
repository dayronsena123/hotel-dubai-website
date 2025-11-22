// ============================================
// PANEL ADMINISTRATIVO - HOTEL DUBAI
// ============================================

// === CONFIGURACIÓN ===
const ADMIN_CREDENTIALS = {
    email: 'hoteldubai2019@gmail.com',
    password: 'hoteldubai2019'
};

// === VERIFICAR AUTENTICACIÓN ===
function checkAuth() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    const currentPage = window.location.pathname;

    if (!isLoggedIn && !currentPage.includes('login.html')) {
        window.location.href = 'login.html';
        return false;
    }

    if (isLoggedIn && currentPage.includes('login.html')) {
        window.location.href = 'dashboard.html';
        return false;
    }

    return isLoggedIn;
}

// === CERRAR SESIÓN ===
function logout() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('adminEmail');
        localStorage.removeItem('adminLoginTime');
        window.location.href = 'login.html';
    }
}

// === OBTENER RESERVAS ===
function getReservations() {
    return JSON.parse(localStorage.getItem('reservations') || '[]');
}

// === OBTENER MENSAJES DE CONTACTO ===
function getContactMessages() {
    return JSON.parse(localStorage.getItem('contactMessages') || '[]');
}

// === ACTUALIZAR ESTADO DE RESERVA ===
function updateReservationStatus(id, newStatus) {
    let reservations = getReservations();
    const index = reservations.findIndex(r => r.id === id);

    if (index !== -1) {
        reservations[index].status = newStatus;
        reservations[index].updatedAt = new Date().toISOString();
        localStorage.setItem('reservations', JSON.stringify(reservations));
        return true;
    }

    return false;
}

// === ELIMINAR RESERVA ===
function deleteReservation(id) {
    if (!confirm('¿Estás seguro de que deseas eliminar esta reserva?')) {
        return false;
    }

    let reservations = getReservations();
    reservations = reservations.filter(r => r.id !== id);
    localStorage.setItem('reservations', JSON.stringify(reservations));
    return true;
}

// === ACTUALIZAR ESTADO DE MENSAJE ===
function updateMessageStatus(id, newStatus) {
    let messages = getContactMessages();
    const index = messages.findIndex(m => m.id === id);

    if (index !== -1) {
        messages[index].status = newStatus;
        messages[index].updatedAt = new Date().toISOString();
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        return true;
    }

    return false;
}

// === ELIMINAR MENSAJE ===
function deleteMessage(id) {
    if (!confirm('¿Estás seguro de que deseas eliminar este mensaje?')) {
        return false;
    }

    let messages = getContactMessages();
    messages = messages.filter(m => m.id !== id);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    return true;
}

// === ESTADÍSTICAS ===
function getStats() {
    const reservations = getReservations();
    const messages = getContactMessages();

    // Reservas por estado
    const pendingReservations = reservations.filter(r => r.status === 'pending').length;
    const confirmedReservations = reservations.filter(r => r.status === 'confirmed').length;
    const cancelledReservations = reservations.filter(r => r.status === 'cancelled').length;

    // Mensajes por estado
    const newMessages = messages.filter(m => m.status === 'new').length;
    const readMessages = messages.filter(m => m.status === 'read').length;

    // Ingresos totales (solo reservas confirmadas)
    const totalRevenue = reservations
        .filter(r => r.status === 'confirmed')
        .reduce((sum, r) => sum + (r.total || 0), 0);

    // Reservas del mes actual
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const monthlyReservations = reservations.filter(r => {
        const date = new Date(r.createdAt);
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    }).length;

    return {
        totalReservations: reservations.length,
        pendingReservations,
        confirmedReservations,
        cancelledReservations,
        totalMessages: messages.length,
        newMessages,
        readMessages,
        totalRevenue,
        monthlyReservations
    };
}

// === FORMATEAR FECHA ===
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('es-PE', options);
}

// === FORMATEAR FECHA CORTA ===
function formatDateShort(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('es-PE', options);
}

// === BADGE DE ESTADO ===
function getStatusBadge(status) {
    const badges = {
        pending: '<span class="badge badge-warning">Pendiente</span>',
        confirmed: '<span class="badge badge-success">Confirmada</span>',
        cancelled: '<span class="badge badge-danger">Cancelada</span>',
        completed: '<span class="badge badge-info">Completada</span>',
        new: '<span class="badge badge-primary">Nuevo</span>',
        read: '<span class="badge badge-info">Leído</span>',
        responded: '<span class="badge badge-success">Respondido</span>'
    };

    return badges[status] || `<span class="badge">${status}</span>`;
}

// === EXPORTAR A CSV ===
function exportToCSV(data, filename) {
    if (data.length === 0) {
        alert('No hay datos para exportar');
        return;
    }

    // Obtener headers
    const headers = Object.keys(data[0]);

    // Crear CSV
    let csv = headers.join(',') + '\n';

    data.forEach(row => {
        const values = headers.map(header => {
            const value = row[header];
            // Escapar comillas y comas
            return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value;
        });
        csv += values.join(',') + '\n';
    });

    // Descargar archivo
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// === MOSTRAR NOTIFICACIÓN ===
function showAdminNotification(message, type = 'success') {
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

// === INICIALIZAR SIDEBAR ===
function initSidebar() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.admin-nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// === EXPORTAR FUNCIONES ===
window.adminPanel = {
    checkAuth,
    logout,
    getReservations,
    getContactMessages,
    updateReservationStatus,
    deleteReservation,
    updateMessageStatus,
    deleteMessage,
    getStats,
    formatDate,
    formatDateShort,
    getStatusBadge,
    exportToCSV,
    showAdminNotification,
    initSidebar
};

// Verificar autenticación al cargar
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('/admin/') && !window.location.pathname.includes('login.html')) {
        checkAuth();
        initSidebar();
    }
});
