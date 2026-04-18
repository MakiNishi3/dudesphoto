export default function invert() {
  return (data) =>
    data.map(({ r, g, b, a }) => ({
      r: 255 - r,
      g: 255 - g,
      b: 255 - b,
      a
    }));
}
