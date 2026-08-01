const SPECK_DENSITY = 0.14; // fraction of device pixels seeded before blurring
const BLUR_PX = 0.6;
// Light specks on a near-black background read with more contrast than
// dark specks on a near-white one at the same alpha, so dark mode gets
// a lower range rather than sharing one setting with light mode.
const LIGHT_THEME_SPECK = { rgb: [38, 33, 29], minAlpha: 0.04, maxAlpha: 0.13 };
const DARK_THEME_SPECK = { rgb: [234, 246, 243], minAlpha: 0.02, maxAlpha: 0.07 };

// Occasional fiber-like dust, layered on top of the fine grain — the
// hairs/lint you'd see caught on a scanned film print, rather than
// round particles. Sparse by design (one per ~60,000 CSS px^2, so a
// handful per screen). Each is a short, gently bowed stroke (a
// quadratic curve through a randomly offset midpoint, not a straight
// line) with rounded caps and a slight blur for a soft, organic edge.
const DUST_AREA_PER_SPECK = 60000;
const DUST_MIN_LENGTH = 5;
const DUST_MAX_LENGTH = 16;
const DUST_MIN_WIDTH = 0.5;
const DUST_MAX_WIDTH = 1.1;
const DUST_MIN_ALPHA = 0.1;
const DUST_MAX_ALPHA = 0.24;
const DUST_BLUR_PX = 0.4;

function drawDust(ctx, cssWidth, cssHeight, dpr, rgb) {
  const count = Math.round((cssWidth * cssHeight) / DUST_AREA_PER_SPECK);
  ctx.save();
  ctx.filter = `blur(${DUST_BLUR_PX * dpr}px)`;
  ctx.lineCap = 'round';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * cssWidth * dpr;
    const y = Math.random() * cssHeight * dpr;
    const angle = Math.random() * Math.PI * 2;
    const length = (DUST_MIN_LENGTH + Math.random() * (DUST_MAX_LENGTH - DUST_MIN_LENGTH)) * dpr;
    const bow = (Math.random() - 0.5) * length * 0.7;
    const alpha = DUST_MIN_ALPHA + Math.random() * (DUST_MAX_ALPHA - DUST_MIN_ALPHA);

    const dx = (Math.cos(angle) * length) / 2;
    const dy = (Math.sin(angle) * length) / 2;
    const nx = -Math.sin(angle) * bow;
    const ny = Math.cos(angle) * bow;

    ctx.strokeStyle = `rgba(${rgb.join(', ')}, ${alpha})`;
    ctx.lineWidth = (DUST_MIN_WIDTH + Math.random() * (DUST_MAX_WIDTH - DUST_MIN_WIDTH)) * dpr;
    ctx.beginPath();
    ctx.moveTo(x - dx, y - dy);
    ctx.quadraticCurveTo(x + nx, y + ny, x + dx, y + dy);
    ctx.stroke();
  }
  ctx.restore();
}

export function initGrain() {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: '-1',
  });
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  const noiseCanvas = document.createElement('canvas');
  const noiseCtx = noiseCanvas.getContext('2d');

  function draw() {
    const dpr = window.devicePixelRatio || 1;
    const cssWidth = window.innerWidth;
    const cssHeight = window.innerHeight;
    const width = Math.round(cssWidth * dpr);
    const height = Math.round(cssHeight * dpr);
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;
    noiseCanvas.width = width;
    noiseCanvas.height = height;

    // Seed per-device-pixel noise onto an offscreen canvas, then
    // composite it onto the visible canvas through a small blur. Raw
    // single-pixel noise reads as flat digital static; blurring it
    // softens each seed into a small, irregularly-shaped, organically
    // clumped fleck — much closer to scanned film grain than either
    // hard pixel dots or the earlier, larger drawn circles.
    const isDark = document.documentElement.getAttribute('data-vox-theme') === 'dark';
    const { rgb, minAlpha, maxAlpha } = isDark ? DARK_THEME_SPECK : LIGHT_THEME_SPECK;
    const [r, g, b] = rgb;
    const imageData = noiseCtx.createImageData(width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      if (Math.random() < SPECK_DENSITY) {
        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
        data[i + 3] = Math.round((minAlpha + Math.random() * (maxAlpha - minAlpha)) * 255);
      }
    }
    noiseCtx.putImageData(imageData, 0, 0);

    ctx.clearRect(0, 0, width, height);
    ctx.filter = `blur(${BLUR_PX * dpr}px)`;
    ctx.drawImage(noiseCanvas, 0, 0);
    ctx.filter = 'none';

    drawDust(ctx, cssWidth, cssHeight, dpr, rgb);
  }

  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(draw, 150);
  });

  new MutationObserver(draw).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-vox-theme'],
  });
}
