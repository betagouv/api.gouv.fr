/**
 * All or part of the element is visible
 */
export const isElementVisible = (el, offsetTop = 0) => {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return !(rect.top > windowHeight - offsetTop || rect.bottom < 0 + offsetTop);
};

/**
 * Get hash from window location
 */
export const getWindowHash = () => {
  if (typeof window === 'undefined' || !window.location.hash) {
    return null;
  }
  return window.location.hash.substr(1);
};
