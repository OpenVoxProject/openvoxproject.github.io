const STORAGE_KEY = 'vox-theme';
const media = window.matchMedia('(prefers-color-scheme: dark)');

function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-vox-theme', theme);
  document.querySelectorAll('[data-theme-toggle]').forEach((toggle) => {
    const isDark = theme === 'dark';
    toggle.setAttribute('aria-checked', String(isDark));
    const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);
  });
}

function setTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

// Sync toggle button state with whichever theme the inline head script
// already applied (from storage, falling back to system preference).
applyTheme(getStoredTheme() ?? (media.matches ? 'dark' : 'light'));

// Live-follow the OS preference, but only while the visitor hasn't made
// an explicit choice via the toggle.
media.addEventListener('change', (event) => {
  if (!getStoredTheme()) {
    applyTheme(event.matches ? 'dark' : 'light');
  }
});

document.querySelectorAll('[data-theme-toggle]').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-vox-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
  });
});
