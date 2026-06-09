// BASE DE DATOS DE MOTOS CON IMÁGENES Y FICHAS TÉCNICAS
/*
const motosDB = {
    // YAMAHA
    "yamaha-ybr125": {
        nombre: "Yamaha YBR 125",
        marca: "YAMAHA",
        precio: "S/ 8,990",
        imagen: "https://cdn.solomotor.net/motos/yamaha-ybr-125-2024.jpg",
        descripcion: "La Yamaha YBR 125 es la moto ideal para la ciudad. Económica, confiable y de bajo mantenimiento. Perfecta para estudiantes y trabajadores urbanos.",
        cilindrada: "124 cc",
        potencia: "10.5 HP @ 7500 rpm",
        motor: "Monocilíndrico 4T, SOHC, refrigerado por aire",
        consumo: "160 km/galón",
        transmision: "4 velocidades",
        suspension: "Horquilla telescópica / Doble amortiguador",
        frenos: "Disco delantero / Tambor trasero",
        peso: "121 kg"
    },
    "yamaha-fz150": {
        nombre: "Yamaha FZ 150",
        marca: "YAMAHA",
        precio: "S/ 12,490",
        imagen: "https://cdn.solomotor.net/motos/yamaha-fz-150-2024.jpg",
        descripcion: "Diseño agresivo y rendimiento deportivo. La FZ 150 ofrece una experiencia de manejo única con su motor refinado y chasis de alto rendimiento.",
        cilindrada: "149 cc",
        potencia: "12.4 HP @ 7500 rpm",
        motor: "Monocilíndrico 4T, SOHC, refrigerado por aire",
        consumo: "150 km/galón",
        transmision: "5 velocidades",
        suspension: "Horquilla telescópica / Monoamortiguador",
        frenos: "Doble disco",
        peso: "128 kg"
    },
    "yamaha-crypton110": {
        nombre: "Yamaha Crypton 110",
        marca: "YAMAHA",
        precio: "S/ 6,990",
        imagen: "https://cdn.solomotor.net/motos/yamaha-crypton-110-2024.jpg",
        descripcion: "Económica, ágil y perfecta para la ciudad. La Crypton 110 es la compañera ideal para el día a día con su bajo consumo y facilidad de manejo.",
        cilindrada: "113 cc",
        potencia: "9.5 HP @ 7000 rpm",
        motor: "Monocilíndrico 4T, SOHC, refrigerado por aire",
        consumo: "170 km/galón",
        transmision: "4 velocidades semiautomática",
        suspension: "Horquilla telescópica / Doble amortiguador",
        frenos: "Tambor delantero y trasero",
        peso: "95 kg"
    },
    // BAJAJ
    "bajaj-pulsar150": {
        nombre: "Bajaj Pulsar 150",
        marca: "BAJAJ",
        precio: "S/ 9,490",
        imagen: "https://cdn.solomotor.net/motos/bajaj-pulsar-150-2024.jpg",
        descripcion: "Potencia y estilo en un solo lugar. La Pulsar 150 es líder en su segmento con su motor DTS-i y diseño agresivo.",
        cilindrada: "149.5 cc",
        potencia: "14 HP @ 8500 rpm",
        motor: "Monocilíndrico 4T, DTS-i, refrigerado por aire",
        consumo: "145 km/galón",
        transmision: "5 velocidades",
        suspension: "Horquilla telescópica / Nitrox trasero",
        frenos: "Disco delantero / Tambor trasero con ABS opcional",
        peso: "135 kg"
    },
    "bajaj-boxer150": {
        nombre: "Bajaj Boxer 150",
        marca: "BAJAJ",
        precio: "S/ 8,290",
        imagen: "https://cdn.solomotor.net/motos/bajaj-boxer-150-2024.jpg",
        descripcion: "Ideal para trabajo y delivery. La Boxer 150 es conocida por su durabilidad y bajo costo de mantenimiento.",
        cilindrada: "149.5 cc",
        potencia: "12 HP @ 8000 rpm",
        motor: "Monocilíndrico 4T, DTS-i, refrigerado por aire",
        consumo: "155 km/galón",
        transmision: "4 velocidades",
        suspension: "Horquilla telescópica / Doble amortiguador",
        frenos: "Tambor delantero y trasero",
        peso: "130 kg"
    },
    "bajaj-dominar400": {
        nombre: "Bajaj Dominar 400",
        marca: "BAJAJ",
        precio: "S/ 15,990",
        imagen: "https://cdn.solomotor.net/motos/bajaj-dominar-400-2024.jpg",
        descripcion: "Alta cilindrada para viajes y carretera. La Dominar 400 ofrece potencia y confort para largas distancias.",
        cilindrada: "373 cc",
        potencia: "39.5 HP @ 8800 rpm",
        motor: "Monocilíndrico 4T, líquido refrigerado",
        consumo: "130 km/galón",
        transmision: "6 velocidades",
        suspension: "Horquilla invertida / Monoamortiguador",
        frenos: "Doble disco con ABS",
        peso: "182 kg"
    },
    // SUZUKI
    "suzuki-gn125": {
        nombre: "Suzuki GN 125",
        marca: "SUZUKI",
        precio: "S/ 8,590",
        imagen: "https://cdn.solomotor.net/motos/suzuki-gn-125-2024.jpg",
        descripcion: "Clásica, duradera y de bajo mantenimiento. La GN125 es la favorita para trabajo y transporte diario.",
        cilindrada: "124 cc",
        potencia: "11 HP @ 8000 rpm",
        motor: "Monocilíndrico 4T, OHC, refrigerado por aire",
        consumo: "150 km/galón",
        transmision: "5 velocidades",
        suspension: "Horquilla telescópica / Doble amortiguador",
        frenos: "Disco delantero / Tambor trasero",
        peso: "112 kg"
    },
    "suzuki-gixxer150": {
        nombre: "Suzuki Gixxer 150",
        marca: "SUZUKI",
        precio: "S/ 11,990",
        imagen: "https://cdn.solomotor.net/motos/suzuki-gixxer-150-2024.jpg",
        descripcion: "Deportiva, ágil y con inyección electrónica. La Gixxer 150 ofrece lo mejor de la tecnología Suzuki.",
        cilindrada: "155 cc",
        potencia: "13.6 HP @ 8000 rpm",
        motor: "Monocilíndrico 4T, OHC, inyección electrónica",
        consumo: "155 km/galón",
        transmision: "5 velocidades",
        suspension: "Horquilla telescópica / Monoamortiguador",
        frenos: "Doble disco",
        peso: "136 kg"
    },
    "suzuki-address110": {
        nombre: "Suzuki Address 110",
        marca: "SUZUKI",
        precio: "S/ 7,490",
        imagen: "https://cdn.solomotor.net/motos/suzuki-address-110-2024.jpg",
        descripcion: "Scooter automática, práctica y económica. Perfecta para moverse en la ciudad sin complicaciones.",
        cilindrada: "112 cc",
        potencia: "8.5 HP @ 7000 rpm",
        motor: "Monocilíndrico 4T, OHC, refrigerado por aire",
        consumo: "165 km/galón",
        transmision: "Automática CVT",
        suspension: "Horquilla telescópica / Amortiguador único",
        frenos: "Tambor delantero y trasero",
        peso: "98 kg"
    }
};

// Obtener el modal y los botones
const modal = document.getElementById('modalFicha');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.modal-close');

// Función para abrir modal con la ficha técnica
function abrirFicha(motoId) {
    const moto = motosDB[motoId];
    if (!moto) return;

    modalBody.innerHTML = `
        <div class="ficha-header">
            <div class="ficha-imagen">
                <img src="${moto.imagen}" alt="${moto.nombre}" onerror="this.src='https://images.pexels.com/photos/163016/motorbike-ride-motorcycle-sunset-163016.jpeg'">
            </div>
            <div class="ficha-titulo">
                <h2>${moto.nombre}</h2>
                <span class="ficha-marca">${moto.marca}</span>
                <div class="ficha-precio">${moto.precio}</div>
                <p style="margin-top: 0.8rem;">${moto.descripcion}</p>
            </div>
        </div>
        <div class="specs-modal">
            <div class="spec-modal-item"><i class="fas fa-microchip"></i><div><strong>Cilindrada</strong><span> ${moto.cilindrada}</span></div></div>
            <div class="spec-modal-item"><i class="fas fa-horse-head"></i><div><strong>Potencia</strong><span> ${moto.potencia}</span></div></div>
            <div class="spec-modal-item"><i class="fas fa-oil-can"></i><div><strong>Motor</strong><span> ${moto.motor}</span></div></div>
            <div class="spec-modal-item"><i class="fas fa-tachometer-alt"></i><div><strong>Consumo</strong><span> ${moto.consumo}</span></div></div>
            <div class="spec-modal-item"><i class="fas fa-cogs"></i><div><strong>Transmisión</strong><span> ${moto.transmision}</span></div></div>
            <div class="spec-modal-item"><i class="fas fa-shock-absorber"></i><div><strong>Suspensión</strong><span> ${moto.suspension}</span></div></div>
            <div class="spec-modal-item"><i class="fas fa-car-side"></i><div><strong>Frenos</strong><span> ${moto.frenos}</span></div></div>
            <div class="spec-modal-item"><i class="fas fa-weight-hanging"></i><div><strong>Peso</strong><span> ${moto.peso}</span></div></div>
        </div>
        <div style="background:#FEF2E8; padding:1rem; border-radius: 20px; margin: 1rem 0;">
            <i class="fas fa-tools"></i> <strong>Incluye:</strong> Garantía 1 año · 1er mantenimiento preventivo sin costo · Financiamiento desde S/ 250 mensuales.
        </div>
        <button class="btn-cotizar" id="btnCotizarModal"><i class="fas fa-motorcycle"></i> Cotizar ${moto.nombre} ahora</button>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const btnCotizar = document.getElementById('btnCotizarModal');
    if (btnCotizar) {
        btnCotizar.addEventListener('click', () => {
            alert(`✅ En MotoPlanet S.A.C. te ofrecemos la mejor cotización para ${moto.nombre}.\n📍 Visítanos en Puerto Maldonado, o llama al 918329712. ¡Financiamiento inmediato!`);
        });
    }
}

// Cerrar modal
function cerrarModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners para todos los botones "Ver Ficha Técnica"
document.querySelectorAll('.btn-ver').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const motoId = btn.getAttribute('data-moto');
        if (motoId) {
            abrirFicha(motoId);
        }
    });
});

// Cerrar modal con la X
closeBtn.addEventListener('click', cerrarModal);

// Cerrar modal haciendo clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        cerrarModal();
    }
});

// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});*/