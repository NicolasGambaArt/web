/* ============================================================
   main.js — Comportamientos globales + i18n
   ============================================================ */

'use strict';

/* ─── TRADUCCIONES ────────────────────────────────────────── */
const i18n = {
  es: {
    /* — Nav / Logo — */
    statement:     'ARTISTA EN MEDIOS EXPANDIDOS & GESTOR CULTURAL',
    logo_sub:      'Artista en medios expandidos y gestor cultural',
    nav_yo:        'YO',
    nav_proyectos: 'PROYECTOS',
    nav_obra:      'OBRA (PRÓXIMAMENTE)',
    nav_contacto:  'CONTACTO',
    footer:        '© Nicolás Gamba · Bogotá',

    /* — Página YO — header — */
    yo_header_top: 'Bogotá, Colombia — Artista',
    yo_role_1:     'Artista en medios expandidos',
    yo_role_2:     'Gestor cultural',
    yo_role_3:     'Realizador audiovisual y multimedia',

    /* — Página YO — section labels — */
    yo_sec_perfil:     'Perfil',
    yo_sec_educacion:  'Educación',
    yo_sec_exp_ind:    'Exposiciones individuales',
    yo_sec_exp_col:    'Exposiciones colectivas',
    yo_sec_premios:    'Premios y distinciones',
    yo_sec_exp:        'Experiencia',
    yo_sec_habilidades:'Habilidades',
    yo_sec_software:   'Software',
    yo_sec_idiomas:    'Idiomas',

    /* — Página YO — educación — */
    yo_edu_1_title: 'Maestro en Arte con énfasis en medios electrónicos y artes del tiempo',
    yo_edu_2_title: 'Opción en Cine, Video y Animación',

    /* — Página YO — premios — */
    yo_award_1_title: 'Tesis Meritoria',

    /* — Página YO — experiencia (roles) — */
    yo_job_idartes_role:     'Artista Visual, Modelador 3D',
    yo_job_ebra_role:        'Productor, Director Creativo',
    yo_job_sigit_role:       'Investigador, Realizador Audiovisual',
    yo_job_filarmonica_role: 'VJ, Artista Visual, Animador',
    yo_job_portal_role:      'Director Creativo, Editor',
    yo_job_timbo_role:       'Editor, Animador',

    /* — Página YO — habilidades — */
    yo_skill_1: 'Dirección creativa',
    yo_skill_2: 'Gestión cultural con enfoque comunitario',
    yo_skill_3: 'Dirección y producción audiovisual',
    yo_skill_4: 'Postproducción',
    yo_skill_5: 'Video mapping',
    yo_skill_6: 'Animación 3D',
    yo_skill_7: 'Diseño generativo',
    yo_skill_8: 'Performance en tiempo real',

    /* — Página YO — idiomas — */
    yo_lang_1_name:  'Español',
    yo_lang_1_level: 'Nativo',
    yo_lang_2_name:  'Inglés',
    yo_lang_2_level: 'Profesional',

    /* — Página YO — CV — */
    yo_cv_link: 'Descargar CV completo →',

    /* — Página PROYECTOS — */
    proy_cta:  'VER PROYECTO →',
    proy_hint: '↑ SCROLL PARA NAVEGAR ↓',

    /* — Página CONTACTO — */
    contacto_eyebrow: 'Contacto',

    /* — Modal — etiquetas estáticas — */
    modal_desc_label:  'Descripción',
    modal_ficha_label: 'Ficha Técnica',
    modal_scroll_hint: 'Desplazar',
  },

  en: {
    /* — Nav / Logo — */
    statement:     'VISUAL ARTIST, FILMMAKER & CULTURAL MANAGER',
    logo_sub:      'Artist in expanded media and cultural manager',
    nav_yo:        'ABOUT',
    nav_proyectos: 'PROJECTS',
    nav_obra:      'WORK (COMING SOON)',
    nav_contacto:  'CONTACT',
    footer:        '© Nicolás Gamba · Bogotá',

    /* — Página YO — header — */
    yo_header_top: 'Bogotá, Colombia — Artist',
    yo_role_1:     'Artist in expanded media',
    yo_role_2:     'Cultural manager',
    yo_role_3:     'Audiovisual and multimedia filmmaker',

    /* — Página YO — section labels — */
    yo_sec_perfil:     'Profile',
    yo_sec_educacion:  'Education',
    yo_sec_exp_ind:    'Solo exhibitions',
    yo_sec_exp_col:    'Group exhibitions',
    yo_sec_premios:    'Awards & distinctions',
    yo_sec_exp:        'Experience',
    yo_sec_habilidades:'Skills',
    yo_sec_software:   'Software',
    yo_sec_idiomas:    'Languages',

    /* — Página YO — educación — */
    yo_edu_1_title: 'Master in Fine Arts with emphasis on electronic media and time-based arts',
    yo_edu_2_title: 'Minor in Film, Video and Animation',

    /* — Página YO — premios — */
    yo_award_1_title: 'Thesis with Distinction',

    /* — Página YO — experiencia (roles) — */
    yo_job_idartes_role:     'Visual Artist, 3D Modeler',
    yo_job_ebra_role:        'Producer, Creative Director',
    yo_job_sigit_role:       'Researcher, Audiovisual Filmmaker',
    yo_job_filarmonica_role: 'VJ, Visual Artist, Animator',
    yo_job_portal_role:      'Creative Director, Editor',
    yo_job_timbo_role:       'Editor, Animator',

    /* — Página YO — habilidades — */
    yo_skill_1: 'Creative direction',
    yo_skill_2: 'Cultural management with community focus',
    yo_skill_3: 'Audiovisual direction and production',
    yo_skill_4: 'Post-production',
    yo_skill_5: 'Video mapping',
    yo_skill_6: '3D animation',
    yo_skill_7: 'Generative design',
    yo_skill_8: 'Live performance',

    /* — Página YO — idiomas — */
    yo_lang_1_name:  'Spanish',
    yo_lang_1_level: 'Native',
    yo_lang_2_name:  'English',
    yo_lang_2_level: 'Professional',

    /* — Página YO — CV — */
    yo_cv_link: 'Download full CV →',

    /* — Página PROYECTOS — */
    proy_cta:  'SEE PROJECT →',
    proy_hint: '↑ SCROLL TO NAVIGATE ↓',

    /* — Página CONTACTO — */
    contacto_eyebrow: 'Contact',

    /* — Modal — etiquetas estáticas — */
    modal_desc_label:  'Description',
    modal_ficha_label: 'Technical Sheet',
    modal_scroll_hint: 'Scroll',
  }
};

/* ─── IDIOMA ACTIVO ───────────────────────────────────────── */
let currentLang = localStorage.getItem('ng-lang') || 'es';

function setLang(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('ng-lang', lang);
  document.documentElement.lang = lang;

  // Actualizar elementos con data-i18n (contenido corto)
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) {
      el.textContent = i18n[lang][key];
    }
  });

  // Actualizar elementos con data-es / data-en (contenido largo inline)
  document.querySelectorAll('[data-es]').forEach(function (el) {
    const text = lang === 'en' ? (el.dataset.en || el.dataset.es) : el.dataset.es;
    if (text !== undefined) el.textContent = text;
  });

  // Actualizar botones de idioma
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Disparar evento para que otros módulos (modal, proyectos) reaccionen
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
}

/* ─── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  // Aplicar idioma guardado
  setLang(currentLang);

  // Botones de idioma
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  // Marcar nav activo según página
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link[data-page]').forEach(function (link) {
    const page = link.getAttribute('data-page');
    if (path.includes(page) || (page === 'index' && (path === '/' || path.endsWith('index.html')))) {
      link.classList.add('active');
    }
  });

  // Transición de salida al hacer clic en links de nav
  document.querySelectorAll('.nav-link[href]').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('http')) return;
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const wrapper = document.getElementById('page-wrapper');
      if (wrapper) {
        wrapper.style.transition = 'opacity 0.3s ease';
        wrapper.style.opacity = '0';
        setTimeout(function () {
          window.location.href = href;
        }, 320);
      } else {
        window.location.href = href;
      }
    });
  });

  /* ─── DINÁMICA DE PROPORCIONES DE IMAGEN Y VIDEO ──────────────────── */
  document.querySelectorAll('.obra-flotante img, .obra-flotante video').forEach(function(media) {
    function setLayoutClass() {
      let ratio = 1;
      if (media.tagName.toLowerCase() === 'video') {
        ratio = media.videoWidth / media.videoHeight;
      } else {
        ratio = media.naturalWidth / media.naturalHeight;
      }

      const article = media.closest('.obra-flotante');



      if (ratio < 0.85) {
        article.classList.add('layout-portrait');
      } else if (ratio > 1.15) {
        article.classList.add('layout-landscape');
      } else {
        article.classList.add('layout-square');
      }
    }

    if (media.tagName.toLowerCase() === 'video') {
      if (media.readyState >= 1) {
        setLayoutClass();
      } else {
        media.addEventListener('loadedmetadata', setLayoutClass);
      }
    } else {
      if (media.complete) {
        setLayoutClass();
      } else {
        media.addEventListener('load', setLayoutClass);
      }
    }
  });

});
