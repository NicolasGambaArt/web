/* ============================================================
   proyectos.js — Carrusel de proyectos
   Desktop: arco circular (scroll / click rotan el arco)
   Mobile ≤768px: tira lineal en la parte inferior
                  (swipe horizontal / tap en miniatura)
   ============================================================ */

(function () {
  'use strict';

  /* ─── DESCRIPCIONES CORTAS — ESPAÑOL ──────────────────────── */
  var DESC_CORTA = {
    'obra-inquebrantables':  'Obra interdisciplinar multimedia creada por el colectivo Metanoia junto con la Filarmónica Joven de Colombia. Acompañó en vivo la Sinfonía N.° 2 de Rachmaninov en los principales teatros del país.',
    'obra-ascii':            'Meditación experimental en formato Fulldome que explora los estados de conciencia descritos en el Libro Tibetano de los Muertos. Tránsito sensorial por los 6 Bardos del Budismo Tibetano.',
    'obra-zarigueya':        'Propuesta visual para la presentación de Zarigüeya en el Festival Estéreo Picnic. Traduce visualmente la fusión de músicas campesinas y sonidos de cantautora a través de dibujo digital en vivo.',
    'obra-muerte-viva':      'Exposición que cuestiona la mirada colonial y la inmovilización del objeto cultural en los museos occidentales. Dibujos de escucha activa y pieza audiovisual que restituye la mirada a los objetos etnográficos.',
    'obra-pimpina':          'Performance sobre la construcción de un canal de comunicación audiovisual alternativo como respuesta a las dinámicas elitistas y coloniales en que se concibe el arte en Colombia.',
    'obra-sigit':            'Línea de investigación interdisciplinaria de la Facultad de Medicina de la Universidad de los Andes enfocada en salud pública y estrategias comunitarias a partir de la exploración artística.',
    'obra-monolito':         'Instalación audiovisual que explora la dimensión espiritual de los rituales indígenas en el territorio colombiano y el uso de plantas sagradas como vehículos de conexión con lo divino.',
    'obra-severo':           'Performance que utiliza la creación de un emprendimiento de pastelería como medio para reflexionar sobre las dinámicas capitalistas en el arte contemporáneo colombiano.',
    'obra-ebra':             'Colectivo de gestión cultural enfocado en la creación de espacios de encuentro, exposición y diálogo que fortalezcan las relaciones interculturales del territorio bogotano.',
    'obra-abrazo':           'Línea conceptual de Ebra dedicada a la creación de diálogos interculturales y la divulgación del pensamiento indígena en contextos urbanos a través de la música de Abya Yala.',
    'obra-el-nudo':          'Colectivo de investigación, creación y experimentación sonora en torno a músicas tradicionales de Colombia y Latinoamérica. Propone un diálogo intercultural desde el sonido.',
    'obra-era-sonera':       'Artista invitado para el diseño y ejecución de visuales interactivos en el homenaje EraSonera. Sistema de visuales generativas reactivas al sonido que dialogan con el legado de Teto Ocampo.',
    'obra-mundos-digitales': 'Plataforma interactiva de IDARTES que explora la relación entre arte, tecnología y creación digital. Niñas, niños y jóvenes construyen sus propios universos digitales.',
    'obra-mascara':          'Cortometraje que explora las tensiones entre el cine y el videoarte. La máscara como signo para reflexionar sobre la identidad variable del artista. Tesis Meritoria Uniandes. Premio Otto de Greiff.',
    'obra-canal':            'Ejercicio surrealista en el que una sombra acecha la psique de la protagonista desde el ruido blanco de las pantallas. Escrito y dirigido por Nicolás Gamba e Isabella Londoño.',
    'obra-homun':            'Cortometraje animado en stop motion que narra la emancipación de un homúnculo híbrido mitad robótico mitad biológico. Ensayo visual sobre la desobediencia y la autodeterminación.',
    'obra-confinamiento':    'El encierro doméstico se cuestiona al encontrar la infinidad simulada en la virtualidad. Una casa genérica en 3D oculta dimensiones sonoras que contrastan el aislamiento del COVID-19.',
    'obra-espiritu-balanta': 'Corto documental y videoclip que captura la vida cultural y cotidiana de Timbiquí. Presentado en el Teatro Colón de Bogotá. Colaboración con Jugamusic y Nidia Góngora.',
    'obra-postporno':        'Identidad visual e ilustración para la 4ta. Muestra de Cine Erótico y Posporno de Bogotá. Explora tecnología, deseo y nuevas narrativas del cuerpo bajo un enfoque de género crítico.',
    'obra-zihita':           'Diseño de identidad visual para el EP Aurora del productor Zihita. Traduce geometría sagrada y budismo en una estética de psicodelia cotidiana y naturaleza fractal de la experiencia urbana.',
    'obra-jacana':           'Un ejercicio de performance y videoarte a partir de un poema escrito por Nicolás Gamba al despertar de un sueño. En el escenario natural del Páramo de Chingaza, la obra explora la transmutación del ser a través de la figura de la Jacana africana, utilizando la máscara y el cuerpo como herramientas para confrontar la identidad y el silencio.',
    'obra-juana-briela':     'Producción visual para la presentación de Juana Aguirre y Briela Ojeda.',
    'obra-soul-room':        'Proyecto de performance multimedia. Imagen de referencia temporal — video disponible próximamente.',
    'obra-thaissa':          'Propuesta de video mapping e identidad visual para el lanzamiento musical de Thaissa en el Teatro Libre de Bogotá.',
  };

  /* ─── DESCRIPCIONES CORTAS — ENGLISH ──────────────────────── */
  var DESC_CORTA_EN = {
    'obra-inquebrantables':  'An interdisciplinary multimedia work created by the Metanoia collective with the Filarmónica Joven de Colombia. It accompanied live Rachmaninov\'s Symphony No. 2 at the country\'s leading theaters.',
    'obra-ascii':            'Experimental Fulldome meditation exploring the states of consciousness described in the Tibetan Book of the Dead. A sensory transit through the 6 Bardos of Tibetan Buddhism.',
    'obra-zarigueya':        'Visual proposal for Zarigüeya\'s performance at the Estéreo Picnic Festival. Visually translates the fusion of folk music and singer-songwriter sounds through live digital drawing.',
    'obra-muerte-viva':      'Exhibition that questions the colonial gaze and the immobilization of the cultural object in Western museums. Active-listening drawings and an audiovisual piece that restores agency to ethnographic objects.',
    'obra-pimpina':          'Performance about building an alternative audiovisual communication channel as a response to the elitist and colonial dynamics through which art is conceived in Colombia.',
    'obra-sigit':            'Interdisciplinary research unit at the Faculty of Medicine of the Universidad de los Andes focused on public health and community strategies through artistic exploration.',
    'obra-monolito':         'Audiovisual installation exploring the spiritual dimension of indigenous rituals in Colombian territory and the use of sacred plants as vehicles of connection with the divine.',
    'obra-severo':           'Performance that uses the creation of a bakery business as a means to reflect on capitalist dynamics in contemporary Colombian art.',
    'obra-ebra':             'Cultural management collective focused on creating spaces for encounter, exhibition, and dialogue that strengthen intercultural relations across Bogotá\'s territory.',
    'obra-abrazo':           'Ebra\'s conceptual line dedicated to creating intercultural dialogues and disseminating indigenous thought in urban contexts through the music of Abya Yala.',
    'obra-el-nudo':          'Collective of research, creation, and sonic experimentation around traditional music of Colombia and Latin America. Proposes an intercultural dialogue through sound.',
    'obra-era-sonera':       'Guest artist for the design and execution of interactive visuals for the EraSonera tribute. System of sound-reactive generative visuals that dialogue with Teto Ocampo\'s paleofuturist legacy.',
    'obra-mundos-digitales': 'Interactive platform by IDARTES exploring the relationship between art, technology, and digital creation. Children and youth build their own digital universes.',
    'obra-mascara':          'Short film exploring the tensions between cinema and video art. The mask as a sign to reflect on the artist\'s variable identity. Thesis with Distinction, Uniandes. Otto de Greiff Award.',
    'obra-canal':            'Surrealist exercise in which a shadow haunts the protagonist\'s psyche from the white noise of screens. Written and directed by Nicolás Gamba and Isabella Londoño.',
    'obra-homun':            'Stop motion animated short film narrating the emancipation of a hybrid homunculus, half robotic, half biological. A visual essay on disobedience and self-determination.',
    'obra-confinamiento':    'Domestic confinement is questioned upon encountering simulated infinity in virtuality. A generic 3D-modeled house hides sonic and visual dimensions that contrast with COVID-19 isolation.',
    'obra-espiritu-balanta': 'Documentary short and music video capturing the cultural and everyday life of Timbiquí. Presented at the Teatro Colón de Bogotá. Collaboration with Jugamusic and Nidia Góngora.',
    'obra-postporno':        'Visual identity and illustration for the 4th Bogotá Erotic and Post-Porn Film Festival. Explores technology, desire, and new body narratives through a critical gender approach.',
    'obra-zihita':           'Visual identity design for the EP Aurora by producer Zihita. Translates sacred geometry and Buddhism into an aesthetic of everyday psychedelia and the fractal nature of urban experience.',
    'obra-jacana':           'A performance and video art piece drawn from a poem by Nicolás Gamba written upon waking from a dream. Set in the natural landscape of Páramo de Chingaza, the work explores the transmutation of the self through the figure of the African Jacana bird, using the mask and the body as tools to confront identity and silence.',
    'obra-juana-briela':     'Visual production for the performance of Juana Aguirre and Briela Ojeda.',
    'obra-soul-room':        'Multimedia performance project. Video coming soon.',
    'obra-thaissa':          'Video mapping and visual identity proposal for the musical launch of Thaissa at the Teatro Libre de Bogotá.',
  };

  /* ─── ORDEN DEL CARRUSEL ────────────────────────────────────── */
  var ORDEN = [
    'obra-sigit',           'obra-inquebrantables',  'obra-ascii',
    'obra-zarigueya',       'obra-muerte-viva',      'obra-pimpina',
    'obra-monolito',        'obra-severo',           'obra-ebra',
    'obra-abrazo',          'obra-el-nudo',          'obra-era-sonera',
    'obra-mundos-digitales','obra-mascara',          'obra-canal',
    'obra-homun',           'obra-confinamiento',    'obra-espiritu-balanta',
    'obra-postporno',       'obra-zihita',           'obra-jacana',
    'obra-juana-briela',    'obra-soul-room',        'obra-thaissa',
  ];

  var N = ORDEN.length; // 24

  /* ─── ESTADO ──────────────────────────────────────────────── */
  var rotationAngle  = 0;
  var targetRotation = 0;
  var activeIndex    = -1;
  var wheelAcc       = 0;
  var isMobile       = window.innerWidth <= 768;

  /* ─── REFERENCIAS DOM ─────────────────────────────────────── */
  var thumbEls = [];
  var bgImgA, bgImgB, activeBg = 'a';
  var numEl, titleEl, medioEl, descEl, hint;

  /* ─── HELPERS ─────────────────────────────────────────────── */
  function getLang() {
    return localStorage.getItem('ng-lang') || 'es';
  }

  function getDescCorta(id) {
    return getLang() === 'en'
      ? (DESC_CORTA_EN[id] || DESC_CORTA[id] || '')
      : (DESC_CORTA[id] || '');
  }

  function getImgSrc(id) {
    var data = PROYECTOS[id];
    if (!data) return '';
    if (data.tipo === 'img') return data.imagen;
    var imgs = (data.imagenes || []).filter(function (m) { return m.tipo === 'img'; });
    return imgs.length ? imgs[0].src : '';
  }

  function getMedioAnio(id) {
    var data = PROYECTOS[id];
    if (!data || !data.ficha) return '';
    var lang  = getLang();
    var ficha = (lang === 'en' && data.ficha_en) ? data.ficha_en : data.ficha;
    var medio = '', anio = '';
    ficha.forEach(function (f) {
      if (f[0] === 'Medio' || f[0] === 'Medium') medio = f[1];
      if (f[0] === 'Año'   || f[0] === 'Year')   anio  = f[1];
    });
    return medio + (anio ? ' · ' + anio : '');
  }

  function normalizeAngle(a) {
    while (a >  Math.PI) a -= 2 * Math.PI;
    while (a < -Math.PI) a += 2 * Math.PI;
    return a;
  }

  function displayAngle(i) {
    return (2 * Math.PI / N) * i - Math.PI / 2 + rotationAngle;
  }

  function getHintText() {
    if (isMobile) {
      return getLang() === 'en' ? '← SWIPE TO NAVIGATE →' : '← DESLIZA PARA NAVEGAR →';
    }
    return getLang() === 'en' ? '↑ SCROLL TO NAVIGATE ↓' : '↑ SCROLL PARA NAVEGAR ↓';
  }

  /* ─── POSICIONAMIENTO ARC (desktop) ──────────────────────── */
  function placeThumbArc() {
    var CX = window.innerWidth  / 2;
    var CY = window.innerHeight / 2;
    var R  = Math.min(window.innerWidth, window.innerHeight) * 0.43;

    for (var i = 0; i < N; i++) {
      var ang  = displayAngle(i);
      var x    = CX + R * Math.cos(ang);
      var y    = CY + R * Math.sin(ang);

      var dist    = Math.abs(normalizeAngle(ang + Math.PI / 2));
      var scale   = 0.60 + 0.80 * (1 - dist / Math.PI);
      var opacity = 0.45 + 0.55 * (1 - dist / Math.PI);

      var el = thumbEls[i];
      el.style.left      = x + 'px';
      el.style.top       = y + 'px';
      el.style.transform = 'translate(-50%, -50%) scale(' + scale.toFixed(4) + ')';
      el.style.opacity   = opacity.toFixed(4);
      el.style.zIndex    = Math.round(scale * 100);
    }
  }

  /* ─── POSICIONAMIENTO LINEAL (mobile) ────────────────────── */
  function placeThumbLinear() {
    var THUMB_W = 44, GAP = 10;
    var STEP    = THUMB_W + GAP;
    var CX      = window.innerWidth / 2;
    var y       = window.innerHeight - 72;  // tira en la parte inferior

    for (var i = 0; i < N; i++) {
      // Diferencia respecto al índice activo (circular)
      var diff = i - activeIndex;
      if (diff >  N / 2) diff -= N;
      if (diff < -N / 2) diff += N;

      var x    = CX + diff * STEP;
      var absDiff = Math.abs(diff);
      var scale   = Math.max(0.45, 1 - absDiff * 0.055);
      var opacity = Math.max(0.18, 1 - absDiff * 0.11);

      var el = thumbEls[i];
      el.style.left      = x + 'px';
      el.style.top       = y + 'px';
      el.style.transform = 'translate(-50%, -50%) scale(' + scale.toFixed(4) + ')';
      el.style.opacity   = opacity.toFixed(4);
      el.style.zIndex    = Math.round(scale * 100);
    }
  }

  function placeThumb() {
    if (isMobile) {
      placeThumbLinear();
    } else {
      placeThumbArc();
    }
  }

  /* ─── ÍNDICE ACTIVO ──────────────────────────────────────── */
  function computeActiveIndex() {
    var best = 0, bestDist = Infinity;
    for (var i = 0; i < N; i++) {
      var dist = Math.abs(normalizeAngle(displayAngle(i) + Math.PI / 2));
      if (dist < bestDist) { bestDist = dist; best = i; }
    }
    return best;
  }

  /* ─── ACTUALIZAR CONTENIDO CENTRAL ───────────────────────── */
  function updateActive(idx) {
    if (idx === activeIndex) return;
    activeIndex = idx;

    var id   = ORDEN[idx];
    var data = PROYECTOS[id];

    numEl.textContent   = '';
    titleEl.textContent = data.titulo;
    medioEl.textContent = getMedioAnio(id);
    descEl.textContent  = getDescCorta(id);

    var src = getImgSrc(id);
    if (activeBg === 'a') {
      bgImgB.src           = src;
      bgImgB.style.opacity = '1';
      bgImgA.style.opacity = '0';
      activeBg = 'b';
    } else {
      bgImgA.src           = src;
      bgImgA.style.opacity = '1';
      bgImgB.style.opacity = '0';
      activeBg = 'a';
    }

    thumbEls.forEach(function (el, i) {
      el.classList.toggle('proy-thumb--active', i === idx);
    });
  }

  function refreshText() {
    if (activeIndex < 0) return;
    var id = ORDEN[activeIndex];
    medioEl.textContent = getMedioAnio(id);
    descEl.textContent  = getDescCorta(id);
  }

  /* ─── ROTACIÓN ────────────────────────────────────────────── */
  function rotateBy(steps) {
    targetRotation -= steps * (2 * Math.PI / N);
  }

  function rotateTo(idx) {
    var curr = computeActiveIndex();
    var diff = ((idx - curr) % N + N) % N;
    if (diff > N / 2) diff -= N;
    targetRotation += -diff * (2 * Math.PI / N);
  }

  /* ─── LOOP DE ANIMACIÓN ───────────────────────────────────── */
  function animate() {
    var delta = targetRotation - rotationAngle;
    if (Math.abs(delta) > 0.0005) {
      rotationAngle += delta * 0.09;
    } else {
      rotationAngle = targetRotation;
    }

    placeThumb();

    var newActive = computeActiveIndex();
    if (newActive !== activeIndex) {
      updateActive(newActive);
    }

    requestAnimationFrame(animate);
  }

  /* ─── EVENTOS ─────────────────────────────────────────────── */
  function bindEvents() {

    // ── Rueda del ratón / trackpad (desktop) ───────────────
    window.addEventListener('wheel', function (e) {
      var overlay = document.getElementById('modal-overlay');
      if (overlay && overlay.classList.contains('is-open')) return;
      e.preventDefault();
      wheelAcc += e.deltaY;
      if (Math.abs(wheelAcc) >= 60) {
        rotateBy(wheelAcc > 0 ? 1 : -1);
        wheelAcc = 0;
      }
    }, { passive: false });

    // ── Click en miniatura ─────────────────────────────────
    thumbEls.forEach(function (el, i) {
      el.addEventListener('click', function () {
        if (i === computeActiveIndex()) {
          if (typeof abrirModal === 'function') abrirModal(ORDEN[i]);
        } else {
          rotateTo(i);
        }
      });
    });

    // ── Click / Enter en info central → modal ──────────────
    var infoEl = document.getElementById('center-info');

    infoEl.addEventListener('click', function () {
      if (typeof abrirModal === 'function') {
        abrirModal(ORDEN[activeIndex]);
      }
    });

    infoEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (typeof abrirModal === 'function') {
          abrirModal(ORDEN[activeIndex]);
        }
      }
    });

    // ── Swipe táctil ──────────────────────────────────────
    // Desktop: vertical · Mobile: horizontal continuo
    var touchStartX = 0, touchStartY = 0;
    var swipeStartRotation = 0;
    var isSwiping = false;
    var SWIPE_PX = 54; // píxeles por paso de item (thumb 44 + gap 10)

    window.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      swipeStartRotation = rotationAngle;
      isSwiping = false;
    }, { passive: true });

    window.addEventListener('touchmove', function (e) {
      if (!isMobile) return;
      var modal = document.getElementById('modal-overlay');
      if (modal && modal.classList.contains('is-open')) return;

      var dx = e.touches[0].clientX - touchStartX;
      var dy = e.touches[0].clientY - touchStartY;

      // Determinar dirección dominante al arrancar
      if (!isSwiping) {
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        if (Math.abs(dx) >= Math.abs(dy)) {
          isSwiping = true;
        } else {
          return; // swipe vertical: ignorar
        }
      }

      // Mover el carrusel directamente según el dedo
      var delta = -(dx / SWIPE_PX) * (2 * Math.PI / N);
      rotationAngle  = swipeStartRotation + delta;
      targetRotation = rotationAngle; // sin lerp mientras se arrastra
    }, { passive: true });

    window.addEventListener('touchend', function (e) {
      if (isMobile) {
        if (isSwiping) {
          // Snap suave al item más cercano
          targetRotation = rotationAngle;
          rotateTo(computeActiveIndex());
        } else {
          // Swipe muy corto (tap) → avanzar un paso si hubo algo de movimiento
          var dx = e.changedTouches[0].clientX - touchStartX;
          if (Math.abs(dx) > 20) rotateBy(dx < 0 ? 1 : -1);
        }
        isSwiping = false;
        return;
      }
      // Desktop: swipe vertical
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dy) > 35) rotateBy(dy < 0 ? 1 : -1);
    }, { passive: true });

    // ── Resize ─────────────────────────────────────────────
    window.addEventListener('resize', function () {
      isMobile = window.innerWidth <= 768;
      placeThumb();
      if (hint) hint.textContent = getHintText();
    });

    // ── Ocultar hint al primer gesto ───────────────────────
    function hideHint() {
      if (hint) hint.style.opacity = '0';
    }
    window.addEventListener('wheel',    hideHint, { once: true });
    window.addEventListener('touchend', hideHint, { once: true, passive: true });
    thumbEls[0] && thumbEls[0].addEventListener('click', hideHint, { once: true });

    // ── Cambio de idioma ───────────────────────────────────
    document.addEventListener('langchange', function () {
      refreshText();
      if (hint) hint.textContent = getHintText();
    });
  }

  /* ─── INICIALIZACIÓN ──────────────────────────────────────── */
  function init() {
    if (typeof PROYECTOS === 'undefined') {
      console.error('proyectos.js: PROYECTOS no está definido. ¿Cargaste modal.js primero?');
      return;
    }

    bgImgA  = document.getElementById('bg-img-a');
    bgImgB  = document.getElementById('bg-img-b');
    numEl   = document.getElementById('proy-numero');
    titleEl = document.getElementById('proy-titulo');
    medioEl = document.getElementById('proy-medio');
    descEl  = document.getElementById('proy-desc');
    hint    = document.getElementById('proy-scroll-hint');

    var arc = document.getElementById('arc-container');

    // Crear miniaturas
    ORDEN.forEach(function (id, i) {
      var el = document.createElement('div');
      el.className   = 'proy-thumb';
      el.dataset.idx = i;
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', PROYECTOS[id] ? PROYECTOS[id].titulo : id);

      var img = document.createElement('img');
      img.src       = getImgSrc(id);
      img.alt       = PROYECTOS[id] ? PROYECTOS[id].titulo : '';
      img.draggable = false;

      el.appendChild(img);
      arc.appendChild(el);
      thumbEls.push(el);
    });

    // Estado inicial
    bgImgA.src           = getImgSrc(ORDEN[0]);
    bgImgA.style.opacity = '1';
    bgImgB.style.opacity = '0';

    placeThumb();
    activeIndex = -1;
    updateActive(0);

    // Hint adaptado a plataforma
    if (hint) hint.textContent = getHintText();

    bindEvents();
    requestAnimationFrame(animate);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
