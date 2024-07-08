let icons = [];
let selectedIcon;

export const IconService = {
  async getIcons() {
    const res = await fetch('/demo/data/icons.json', {
      headers: { 'Cache-Control': 'no-cache' },
    });
    const d = await res.json();
    return d.icons;
  },

  getIcon(id) {
    if (icons) {
      selectedIcon = icons.find((x) => x.properties?.id === id);
      return selectedIcon;
    }
  },
};
