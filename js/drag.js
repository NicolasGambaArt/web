/* ============================================================
   drag.js — Sistema drag & drop reutilizable
   Soporta mouse y touch
   ============================================================ */

(function () {
  'use strict';

  let globalZ = 20;

  function initDraggable(el) {
    let isDragging = false;
    let startX, startY, origLeft, origTop;

    // Llevar al frente al hacer click
    function bringToFront() {
      globalZ++;
      el.style.zIndex = globalZ;
    }

    /* ── MOUSE ─────────────────────────────────────────────── */
    el.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;         // solo botón izquierdo
      e.preventDefault();

      isDragging = true;
      el.classList.add('dragging');
      bringToFront();

      const rect = el.getBoundingClientRect();
      
      // Bloquear dimensiones exactas para evitar reflows al cambiar left/top
      el.style.width = rect.width + 'px';
      el.style.height = rect.height + 'px';

      startX   = e.clientX;
      startY   = e.clientY;
      origLeft = rect.left;
      origTop  = rect.top;

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup',   onMouseUp);
    });

    function onMouseMove(e) {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      el.style.left   = (origLeft + dx) + 'px';
      el.style.top    = (origTop  + dy) + 'px';
      el.style.right  = 'auto';
      el.style.bottom = 'auto';
    }

    function onMouseUp() {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove('dragging');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup',   onMouseUp);
    }

    /* ── TOUCH ─────────────────────────────────────────────── */
    el.addEventListener('touchstart', function (e) {
      e.preventDefault();
      const touch = e.touches[0];

      isDragging = true;
      el.classList.add('dragging');
      bringToFront();

      const rect = el.getBoundingClientRect();
      
      // Bloquear dimensiones en touch
      el.style.width = rect.width + 'px';
      el.style.height = rect.height + 'px';

      startX   = touch.clientX;
      startY   = touch.clientY;
      origLeft = rect.left;
      origTop  = rect.top;

      document.addEventListener('touchmove', onTouchMove, { passive: false });
      document.addEventListener('touchend',  onTouchEnd);
    }, { passive: false });

    function onTouchMove(e) {
      e.preventDefault();
      if (!isDragging) return;
      const touch = e.touches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      el.style.left   = (origLeft + dx) + 'px';
      el.style.top    = (origTop  + dy) + 'px';
      el.style.right  = 'auto';
      el.style.bottom = 'auto';
    }

    function onTouchEnd() {
      isDragging = false;
      el.classList.remove('dragging');
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend',  onTouchEnd);
    }
  }

  /* ── INIT: aplicar a todos los .obra-flotante ─────────────── */
  function initAll() {
    document.querySelectorAll('.obra-flotante').forEach(function (el) {
      initDraggable(el);
    });
  }

  // Esperar DOM listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  // Exponer por si se necesita reinicializar dinámicamente
  window.DragSystem = { init: initDraggable, initAll: initAll };
})();
