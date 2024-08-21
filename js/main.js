window.onload = () => {
  // Set a timeout to simulate a delay before removing the "not-loaded" class
  const timeoutId = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Split the title into characters
    const titles = ' nasywaaa'.split('');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const titleElement = document.querySelector('.title'); // Ensure this class is correct

    let index = 0;

    // Function to append characters to the title element
    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += `<span>${titles[index]}</span>`; // Wrap each character in a span for potential styling
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
        // If music hasn't been started, play it and store the state
        backgroundMusic.play().catch(error => {
          console.error('Failed to play audio:', error);
        });
        localStorage.setItem('musicStarted', 'true');
      }
    }

    clearTimeout(timeoutId); // Clear timeout to prevent memory leaks
  }, 1000);
};
