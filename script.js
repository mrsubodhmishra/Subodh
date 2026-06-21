// ========================================
// SUBODH MISHRA — BRUTALIST PORTFOLIO JS
// ========================================

// Navbar stays sticky by default (no scroll-trigger styling needed)

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
const revealElements = document.querySelectorAll('.skill-box, .log-row, .strip-photo, .exp-row, .stamp-box');
revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// Skill meter fill animation
const skillFills = document.querySelectorAll('.skill-meter-fill');
const skillsSection = document.getElementById('skills');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillFills.forEach(fill => {
        const target = fill.style.getPropertyValue('--w');
        fill.style.width = target;
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

if (skillsSection) {
  skillFills.forEach(fill => { fill.style.width = '0'; });
  skillObserver.observe(skillsSection);
}

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
