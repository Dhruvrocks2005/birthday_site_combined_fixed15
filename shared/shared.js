async function loadBirthdayConfig() {
  try {
    const res = await fetch('../config/customize.json', { cache: 'no-store' });
    const cfg = await res.json();
    window.BDAY_CONFIG = cfg;
    return cfg;
  } catch (e) {
    console.warn('Could not load config', e);
    window.BDAY_CONFIG = {};
    return {};
  }
}

function addNav(){ /* navigation disabled (using per-page buttons) */ }