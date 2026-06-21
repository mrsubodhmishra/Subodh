// ========================================
// SUBODH MISHRA — NEOMORPHIC/SKEUOMORPHIC/SPATIAL PORTFOLIO JS
// ========================================

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mmLinks = document.querySelectorAll('.mm-link');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mmLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// Scroll reveal
const revealElements = document.querySelectorAll('.skill-tile, .info-pill-card, .tl-entry, .contact-card, .polaroid, .trek-card-mini');
revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// Skill dial-meter fill animation
const dialFills = document.querySelectorAll('.dial-fill');
const skillsSection = document.getElementById('skills');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      dialFills.forEach(fill => {
        const target = fill.style.getPropertyValue('--w');
        fill.style.width = target;
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

if (skillsSection) {
  dialFills.forEach(fill => { fill.style.width = '0'; });
  skillObserver.observe(skillsSection);
}

// Spatial parallax on hero portrait (mouse-follow depth)
const portraitFrame = document.querySelector('.portrait-frame');
if (portraitFrame && window.matchMedia('(hover: hover)').matches) {
  document.querySelector('.hero')?.addEventListener('mousemove', (e) => {
    const rect = portraitFrame.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    portraitFrame.style.transform = `rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg)`;
  });
  document.querySelector('.hero')?.addEventListener('mouseleave', () => {
    portraitFrame.style.transform = '';
  });
}

// Subtle blob parallax on scroll (spatial depth)
const blobs = document.querySelectorAll('.blob');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  blobs.forEach((blob, i) => {
    const speed = 0.08 + i * 0.04;
    blob.style.transform = `translateY(${y * speed}px)`;
  });
}, { passive: true });

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');
  const btnText = btn.querySelector('span');

  const originalText = btnText.textContent;
  btnText.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:subodhm256@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + email)}`;
    window.location.href = mailtoLink;

    btnText.textContent = originalText;
    btn.disabled = false;
    success.classList.add('show');
    e.target.reset();

    setTimeout(() => success.classList.remove('show'), 5000);
  }, 500);
}

// Console easter egg
console.log('%cSUBODH MISHRA — PORTFOLIO', 'font-family:sans-serif; font-size:14px; font-weight:bold; color:#B8915A;');
console.log('%cDesigned with care. Neomorphism × Skeuomorphism × Spatial UI.', 'font-family:sans-serif; font-size:12px; color:#6B6152;');


// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');
  const btnText = btn.querySelector('span');

  const originalText = btnText.textContent;
  btnText.textContent = 'SENDING...';
  btn.disabled = true;

  setTimeout(() => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:subodhm256@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + email)}`;
    window.location.href = mailtoLink;

    btnText.textContent = originalText;
    btn.disabled = false;
    success.classList.add('show');
    e.target.reset();

    setTimeout(() => success.classList.remove('show'), 5000);
  }, 500);
}

// Console easter egg
console.log('%cSUBODH MISHRA — FILE NO. 001', 'font-family:monospace; font-size:16px; font-weight:bold; background:#000; color:#fff; padding:4px 8px;');
console.log('%cBUILT NOT DESIGNED.', 'font-family:monospace; font-size:12px; color:#ff2d00;');
