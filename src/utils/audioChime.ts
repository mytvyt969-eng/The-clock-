/**
 * Web Audio API chime synthesizer for Azan / Prayer Reminder alerts
 */
export function playNotificationChime() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // Harmonic pleasant soft oriental bell chime
    const frequencies = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const startTime = ctx.currentTime;

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime + idx * 0.15);

      gain.gain.setValueAtTime(0, startTime + idx * 0.15);
      gain.gain.linearRampToValueAtTime(0.15, startTime + idx * 0.15 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + idx * 0.15 + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime + idx * 0.15);
      osc.stop(startTime + idx * 0.15 + 1.3);
    });
  } catch (e) {
    console.warn('Audio chime error:', e);
  }
}
