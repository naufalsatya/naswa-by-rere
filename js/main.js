window.onload = () => {
  // Remove the "not-loaded" class after 1 second
  const timeoutId = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Split the title into characters
    const titles = ' nasywaaa'.split('');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const titleElement = document.querySelector('.title');

    let index = 0;

    // Function to append characters to the title element
    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += `<span>${titles[index]}</span>`;
        index++;
        setTimeout(appendTitle, 300); // 300ms delay between characters
      }
    }

    // Start appending the title
    appendTitle();

    // Handle music playback
    if (backgroundMusic) {
      // Check if music was previously started
      const musicStarted = localStorage.getItem('musicStarted') === 'true';

      if (!musicStarted) {
        // Try to play the audio and catch any errors
        backgroundMusic.play().catch(error => {
          console.error('Failed to play audio:', error);
        });
        // Set musicStarted to true so it doesn't play again
        localStorage.setItem('musicStarted', 'true');
      }
    }

    clearTimeout(timeoutId);
  }, 1000);
};

// Additional code to handle play button for testing
document.addEventListener('DOMContentLoaded', () => {
  const backgroundMusic = document.getElementById('backgroundMusic');
  
  // Create a play button for testing
  const playButton = document.createElement('button');
  playButton.textContent = 'Play Music';
  playButton.style.position = 'fixed';
  playButton.style.bottom = '10px';
  playButton.style.right = '10px';
  document.body.appendChild(playButton);

  playButton.addEventListener('click', () => {
    backgroundMusic.play().catch(error => {
      console.error('Failed to play audio:', error);
    });
  });
});
