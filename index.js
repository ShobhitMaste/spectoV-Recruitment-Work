
document.addEventListener('DOMContentLoaded', () => {
  const reviewCards = document.querySelectorAll('.review-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }, index * 150);
      }
    });
  }, { threshold: 0.1 });

  reviewCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
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
  

  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach((group, index) => {
    group.style.opacity = 0;
    group.style.transform = 'translateY(20px)';
    group.style.transition = `all 0.5s ease ${index * 0.1}s`;
    
    setTimeout(() => {
      group.style.opacity = 1;
      group.style.transform = 'translateY(0)';
    }, 500 + (index * 100));
  });


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    alert('Thank you! Your message has been sent.');
    form.reset();
    

    document.querySelectorAll('.form-group label').forEach(label => {
      label.style.top = '10px';
      label.style.fontSize = '1rem';
      label.style.color = '#aaa';
    });
  });
});