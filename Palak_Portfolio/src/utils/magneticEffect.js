export const magneticEffect = (e) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();

  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
};

export const resetMagnet = (e) => {
  e.currentTarget.style.transform = "translate(0px, 0px)";
};