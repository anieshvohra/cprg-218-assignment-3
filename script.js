

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('site-nav');
    toggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  
  
  
  // Image Lightbox Handler
  document.querySelectorAll('.lightbox-trigger').forEach(el => {
    el.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      const img = document.createElement('img');
      img.src = el.src;
      overlay.appendChild(img);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => overlay.remove());
    });
  });

 // Lightbox Logic
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("lightbox-close");
  
    document.querySelectorAll(".lightbox-trigger").forEach(item => {
      item.addEventListener("click", () => {
        lightboxImg.src = item.getAttribute("data-src");
        lightbox.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        lightboxImg.src = "";
      }
    });
  });
  });
