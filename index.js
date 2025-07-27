document.addEventListener('DOMContentLoaded', () => {

  gsap.registerPlugin(ScrollTrigger);


  gsap.from('header h1', {
    opacity: 0,
    y: -20,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('nav a', {
    opacity: 0,
    y: -20,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 0.3
  });

  gsap.from('.hero-text h2', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    delay: 0.5
  });

  gsap.from('.hero-text p', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
    delay: 0.8
  });

  gsap.from('.buttons a', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 1.2
  });

  gsap.from('.hero-image img', {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: 'power3.out',
    delay: 0.7
  });


  gsap.from('.features-intro h2', {
    scrollTrigger: {
      trigger: '.features',
      start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.features-intro p', {
    scrollTrigger: {
      trigger: '.features',
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
  });

  gsap.from('.feature-card', {
    scrollTrigger: {
      trigger: '.features-grid',
      start: 'top 70%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
  });


  gsap.from('.video-promo h2', {
    scrollTrigger: {
      trigger: '.video-promo',
      start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.video-promo p', {
    scrollTrigger: {
      trigger: '.video-promo',
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
  });

  gsap.from('.video-wrapper', {
    scrollTrigger: {
      trigger: '.video-promo',
      start: 'top 70%'
    },
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: 'power3.out'
  });


  gsap.from('.reviews h2', {
    scrollTrigger: {
      trigger: '.reviews',
      start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.reviews .subtitle', {
    scrollTrigger: {
      trigger: '.reviews',
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
  });

  gsap.from('.review-card', {
    scrollTrigger: {
      trigger: '.review-grid',
      start: 'top 70%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
  });


  gsap.from('.faq-section h2', {
    scrollTrigger: {
      trigger: '.faq-section',
      start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.faq-section .subtitle', {
    scrollTrigger: {
      trigger: '.faq-section',
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
  });

  gsap.from('.faq-item', {
    scrollTrigger: {
      trigger: '.faq-container',
      start: 'top 70%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out'
  });


  gsap.from('.contact-section h2', {
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.contact-section .subtitle', {
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
  });

  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-grid',
      start: 'top 70%'
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: 'power2.out'
  });

  gsap.from('.contact-info', {
    scrollTrigger: {
      trigger: '.contact-grid',
      start: 'top 70%'
    },
    opacity: 0,
    x: 50,
    duration: 0.8,
    ease: 'power2.out'
  });


  gsap.from('.site-footer', {
    scrollTrigger: {
      trigger: '.site-footer',
      start: 'top 90%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
  });


  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });


  const form = document.getElementById('defxv-contact');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
  });
});