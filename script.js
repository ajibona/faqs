const faqBtn = document.querySelectorAll('.faq-btn');

faqBtn.forEach(faq =>{
  faq.addEventListener('click', () =>{
    faq.classList.toggle('active');
  })
})