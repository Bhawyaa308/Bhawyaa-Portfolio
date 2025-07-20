// Animate skill bars on page load and on scroll into view
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-skill');
    // Remove previous inner bar if exists
    if (bar.querySelector('.skill-bar-inner')) bar.innerHTML = '';
    const innerBar = document.createElement('div');
    innerBar.className = 'skill-bar-inner';
    innerBar.style.width = '0';
    bar.appendChild(innerBar);
    setTimeout(() => {
      innerBar.style.width = percent + '%';
    }, 100);
  });
}

// Smooth scroll navigation
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  animateSkillBars();

  // Smooth scroll for nav links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById(this.getAttribute('href').slice(1)).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Handle contact form (demo only)
  const form = document.querySelector('#contact form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
    form.reset();
  });
});
