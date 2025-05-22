const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeInUp');
      }
      else{
        entry.target.classList.remove('fadeInUp')
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.scrollAnim').forEach(el => observer.observe(el));
  