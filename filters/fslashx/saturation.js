export default function saturation(saturation) {
  const s = saturation / 360;
  return (data) =>
    data.map(({ r, g, b, a }) => {
      const l = 0.3 * r + 0.59 * g + 0.11 * b;
      return {
        r: l + (r - l) * (1 + s),
        g: l + (g - l) * (1 + s),
        b: l + (b - l) * (1 + s),
        a
      };
    });
}
