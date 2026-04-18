export default function contrast(contrast) {
  const c = (contrast / 360) + 1;
  const f = (255 / 2) * (1 - c);
  return (data) =>
    data.map(({ r, g, b, a }) => ({
      r: r * c + f,
      g: g * c + f,
      b: b * c + f,
      a
    }));
}
