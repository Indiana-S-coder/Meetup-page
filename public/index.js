// Get all the FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event listener to each question button
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Toggle the visibility of the answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});