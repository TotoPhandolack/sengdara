// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Billing toggle (Monthly / Yearly) - purely visual state
const billingToggle = document.getElementById('billingToggle');
if (billingToggle) {
  billingToggle.querySelectorAll('.toggle__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      billingToggle.querySelectorAll('.toggle__btn').forEach((b) => b.classList.remove('toggle__btn--active'));
      btn.classList.add('toggle__btn--active');
    });
  });
}

// Reviews carousel
const reviewsTrack = document.getElementById('reviewsTrack');
const reviewPrev = document.getElementById('reviewPrev');
const reviewNext = document.getElementById('reviewNext');
if (reviewsTrack && reviewPrev && reviewNext) {
  const scrollByCard = (direction) => {
    const card = reviewsTrack.querySelector('.review-card');
    if (!card) return;
    const distance = card.getBoundingClientRect().width + 24;
    reviewsTrack.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };
  reviewPrev.addEventListener('click', () => scrollByCard(-1));
  reviewNext.addEventListener('click', () => scrollByCard(1));
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.hero__links a');
if (sections.length && navAnchors.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach((a) => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );
  sections.forEach((s) => observer.observe(s));
}
