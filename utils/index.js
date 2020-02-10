/**
 * All or part of the element is visible
 */
export const isElementVisible = el => {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return !(rect.top > windowHeight || rect.bottom < 0);
};
