window.addEventListener('load', function() {
  const eventDate = new Date('2026-04-19T05:36:00');
  const countdownContainer = document.getElementById('countdown');

  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    if (timeRemaining <= 0) {
      countdownContainer.innerHTML = `<h2>🌙 رَمَضَان مُبَارَك 🌙</h2>`;
      return;
    }

    const totalSeconds = Math.floor(timeRemaining / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    countdownContainer.innerHTML = `
      <div class="countdown-box">
        <div class="countdown-number">${days}</div>
        <div class="countdown-label">يوماً</div>
      </div>
      <div class="countdown-box">
        <div class="countdown-number">${hours}</div>
        <div class="countdown-label">ساعةً</div>
      </div>
      <div class="countdown-box">
        <div class="countdown-number">${minutes}</div>
        <div class="countdown-label">دقيقةً</div>
      </div>
      <div class="countdown-box">
        <div class="countdown-number">${seconds}</div>
        <div class="countdown-label">ثانيةً</div>
      </div>
    `;

    setTimeout(updateCountdown, 1000);
  }

  updateCountdown();
});
