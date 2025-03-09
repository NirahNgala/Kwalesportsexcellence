const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains('active');

    if (isActive) {
      answer.style.maxHeight = null;
      question.classList.remove('active');
    } else {
      faqQuestions.forEach(otherQuestion => {
         if(otherQuestion !== question){
            otherQuestion.nextElementSibling.style.maxHeight = null;
            otherQuestion.classList.remove('active');
         }
      });
      answer.style.maxHeight = answer.scrollHeight + 'px';
      question.classList.add('active');
    }
  });
});