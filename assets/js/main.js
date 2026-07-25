(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const year = document.querySelector('#current-year');
  const storageKey = 'valfride-site-theme';

  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem(storageKey);
  const initialTheme = savedTheme || (systemPrefersDark.matches ? 'dark' : 'light');

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (toggle) {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      toggle.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
      toggle.setAttribute('title', `Switch to ${nextTheme} theme`);
    }
  }

  applyTheme(initialTheme);

  toggle?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  });

  systemPrefersDark.addEventListener?.('change', (event) => {
    if (!localStorage.getItem(storageKey)) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  });

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
