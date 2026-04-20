onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.querySelector('.hearts').style.opacity = '1';
    clearTimeout(c);
  }, 1000);

  // Randomize heart positions
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach(heart => {
    heart.style.top = Math.random() * 80 + '%'; // Random top 0-80%
    heart.style.left = Math.random() * 90 + '%'; // Random left 0-90%
    heart.style.animationDelay = Math.random() * 5 + 's'; // Random delay 0-5s
  });

  // Show letter button after 30 seconds
  setTimeout(() => {
    document.getElementById('letterButton').style.display = 'block';
  }, 30000);

  // Button click to show letter
  document.getElementById('letterButton').addEventListener('click', () => {
    document.getElementById('letter').style.display = 'flex';
  });
};

function closeLetter() {
  document.getElementById('letter').style.display = 'none';
}
