function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        // Fecha todos os detalhes antes de abrir o novo
        document.querySelectorAll('.details').forEach(detail => {
            detail.style.display = 'none';
        });
        element.style.display = 'block';
    }
}

function openWhats() {
    // Link para o Google Maps (substitua pelas coordenadas ou endereço real)
    window.open('https://wa.me/+55838889-6745', '_blank');
}

function openMaps() {
    // Link para o Google Maps (substitua pelas coordenadas ou endereço real)
    window.open('https://maps.app.goo.gl/HAWjjnukrjYZwHkx7', '_blank');
}
