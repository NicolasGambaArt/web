/* ============================================================
   drag.js — Sistema drag & drop reutilizable
   Soporta mouse y touch.
   En móvil: tap muestra/oculta overlay de info; tap sobre
   el texto (con overlay visible) abre el modal de detalle.
   ============================================================ */

(function () {
  'use strict';

  let globalZ = 20;

  function initDraggable(el) {
    let isDragging = false;
    let startX, startY, origLeft, origTop;
    let touchStartX = 0, touchStartY = 0;
    let tapTarget = null;

    function bringToFront() {
      globalZ++;
      el.style.zIndex = globalZ;
    }

    /* ── MOUSE ─────────────────────────────────────────────── */
    el.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      e.preventDefault();

      isDragging = true;
      el.classList.add('dragging');
      bringToFront();

      const rect = el.getBoundingClientRect();
      el.style.width  = rect.width  + 'px';
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

      tapTarget = e.target;         // guardar objetivo del toque
      isDragging = true;
      el.classList.add('dragging');
      bringToFront();

      const rect = el.getBoundingClientRect();
      el.style.width  = rect.width  + 'px';
      el.style.height = rect.height + 'px';

      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      startX      = touch.clientX;
      startY      = touch.clientY;
      origLeft    = rect.left;
      origTop     = rect.top;

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

    function onTouchEnd(e) {
      const touch = e.changedTouches[0];
      const dx    = touch.clientX - touchStartX;
      const dy    = touch.clientY - touchStartY;
      const dist  = Math.sqrt(dx * dx + dy * dy);

      isDragging = false;
      el.classList.remove('dragging');
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend',  onTouchEnd);

      const isTap    = dist < 10;
      const isInfoArea = tapTarget && tapTarget.closest('.obra-info') !== null;

      if (isTap && el.classList.contains('touch-active') && isInfoArea) {
        // Tap sobre texto visible → abrir modal
        if (typeof abrirModal === 'function') {
          abrirModal(el.id);
        }
      } else {
        // Cualquier interacción (tap o drag) → activar la carta
        document.querySelectorAll('.obra-flotante.touch-active').forEach(function (other) {
          if (other !== el) other.classList.remove('touch-active');
        });
        el.classList.add('touch-active');
      }
    }
  }

  /* ── INIT ─────────────────────────────────────────────────── */
  function initAll() {
    document.querySelectorAll('.obra-flotante').forEach(function (el) {
      initDraggable(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  window.DragSystem = { init: initDraggable, initAll: initAll };
})();
