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
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  if (lightbox && lightboxImg && closeBtn) {
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
  }

 // Weather Info for Cancun
fetch("https://api.open-meteo.com/v1/forecast?latitude=21.1619&longitude=-86.8515&current_weather=true")
  .then(response => response.json())
  .then(data => {
    const temp = data.current_weather.temperature;
    const wind = data.current_weather.windspeed;

    // Create weather info container
    const weatherInfo = document.createElement("div");
    weatherInfo.textContent = `🌤 Cancun: ${temp}°C | Wind: ${wind} km/h`;
    weatherInfo.style.fontFamily = "Caladea, serif";
    weatherInfo.style.fontSize = "14px";
    weatherInfo.style.color = "#ffffff";
    weatherInfo.style.backgroundColor = "#2323ff"; // optional for separation
    weatherInfo.style.textAlign = "right";
    weatherInfo.style.padding = "4px 12px";
    weatherInfo.style.borderTop = "1px solid #fffafa";

    // Insert as a new element AFTER the existing header
    const siteHeader = document.querySelector(".site-header");
    if (siteHeader && siteHeader.parentNode) {
      siteHeader.parentNode.insertBefore(weatherInfo, siteHeader.nextSibling);
    }
  })
  .catch(() => {
    console.log("Weather data unavailable");
  });

});
