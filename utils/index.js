/**
 * All or part of the element is visible
 */
export const isElementVisible = el => {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return !(rect.top > windowHeight || rect.bottom < 0);
};

/**
 * Get hash from window location
 */
export const getWindowHash = () => {
  if (typeof window === "undefined" || !window.location.hash) {
    return null;
  }
  return window.location.hash.substr(1);
};
