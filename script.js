const languageButtons = document.querySelectorAll('.language-btn');
const promptText = document.getElementById('promptText');
const listenButton = document.getElementById('listenButton');

const languageMessages = {
  Hindi: '“Namaste! Aapke liye kaun sa scheme sahi hai, main aapko help kar sakta hoon?”',
  English: '“Hello! I can help you find the right scheme and understand the next steps.”',
  Marathi: '“नमस्कार! कोणती योजना तुमच्यासाठी योग्य आहे हे मला सांगितल्यास मी मदत करतो.”',
  Tamil: '“வணக்கம்! உங்களுக்கான திட்டத்தை கண்டுபிடிப்பதில் நான் உதவ முடியும்.”'
};

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    languageButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    const language = button.dataset.language;
    promptText.textContent = languageMessages[language] || languageMessages.Hindi;
  });
});

listenButton.addEventListener('click', () => {
  const isActive = listenButton.classList.toggle('is-active');
  listenButton.querySelector('span:last-child').textContent = isActive ? 'Listening…' : 'Listen now';
});
