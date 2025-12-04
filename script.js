// TYPED TEXT
var typed = new Typed(".typedtext", {
  strings: ["Coder", "Web Developer", "DSA Learner", "Problem Solver"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// MOBILE MENU
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

// DARK MODE
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// SCROLL REVEAL
ScrollReveal().reveal('.featured-text', { origin:'left', distance:'40px', duration:1000 });
ScrollReveal().reveal('.featured-image', { origin:'right', distance:'40px', duration:1000 });
ScrollReveal().reveal('.timeline-item', { origin:'bottom', distance:'40px', duration:900, interval:200 });
ScrollReveal().reveal('.project-card', { origin:'bottom', distance:'40px', duration:900, interval:200 });

// CUSTOM REVEAL CLASS
function reveal() {
  let elements = document.querySelectorAll('.reveal');
  elements.forEach(el => {
    let top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', reveal);
reveal();
function sendEmail(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  window.location.href =
    `mailto:your-email@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(message + "\n\nEmail: " + email)}`;
}
