 function toggleMenu() {
      const hamburger = document.querySelector('.hamburger');
      const mobileMenu = document.getElementById('mobileMenu');
      const overlay = document.getElementById('overlay');
      
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      overlay.classList.toggle('active');
      
      // Toggle body overflow when menu is open
      if (mobileMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger = document.querySelector('.hamburger');
      const overlay = document.getElementById('overlay');
      
      if (mobileMenu.classList.contains('open') && 
          !mobileMenu.contains(event.target) && 
          !hamburger.contains(event.target)) {
        toggleMenu();
      }
    });


// =============================================================
// FITUR UTAMA: ANIMASI SLIDE UP 1X PADA SECTION (SCROLL & KLIK)
// =============================================================
document.addEventListener("DOMContentLoaded", () => {
  // Ambil semua elemen section yang ingin dianimasikan
  const sections = document.querySelectorAll("section");

  // Siapkan opsi untuk observer
  const observerOptions = {
    root: null,             // Relatif terhadap viewport browser
    rootMargin: "-8% 0px",  // Triger jalan sedikit sebelum section menyentuh batas atas/bawah layar
    threshold: 0.12         // Minimal 12% bagian dari section harus terlihat di layar
  };

  // Inisialisasi Intersection Observer
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Tambahkan class penanda bahwa section sudah aktif
        entry.target.classList.add("reveal-section");
        
        // CRITICAL: Hentikan pengawasan (unobserve) agar animasi HANYA JALAN 1X saja
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Mulai mengawasi setiap section
  sections.forEach(section => {
    // Berikan class dasar (.hidden-section) secara dinamis via JS agar HTML lu tetep bersih
    section.classList.add("hidden-section");
    sectionObserver.observe(section);
  });
});