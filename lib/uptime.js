import colors from "../styles/colors";

export const getUptimeState = uptime => {
  const { red, orange, green } = colors;
  let color = red; // Red

  if (uptime >= 98) {
    color = green; // Green
  } else if (uptime >= 90) {
    color = orange; // Orange
  }

  return color;
};
