// Smooth scroll for navbar links
document.querySelectorAll('nav a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // offset for navbar height
        behavior: 'smooth',
      });
    }
  });
});
