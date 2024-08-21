document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.title');
  const text = ' special for u'.split('');
  const backgroundMusic = document.getElementById('backgroundMusic');

  // Mengatur musik latar agar diputar otomatis
  backgroundMusic.volume = 0.5; // Atur volume jika diperlukan
  backgroundMusic.play().catch(error => {
    console.log('Autoplay is blocked. User interaction required.');
  });

  // Mengisi elemen title dengan huruf-huruf dari teks
  text.forEach(char => {
    if (char !== ' ') {
      title.innerHTML += `<span>${char}</span>`;
    } else {
      title.innerHTML += `<span style='margin-right: 20px;'></span>`;
    }
  });

  // Menambahkan delay animasi acak pada setiap elemen span
  const textElements = document.querySelectorAll('.title span');
  textElements.forEach(element => {
    const randomDelay = Math.random() * 3; // Delay acak antara 0 hingga 3 detik
    element.style.animationDelay = `${randomDelay}s`;
  });
});
