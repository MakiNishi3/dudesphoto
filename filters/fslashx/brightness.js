export default function brightness(brightness) {
  const b = brightness / 360 * 255;
  return (data) =>
    data.map(({ r, g, b: bb, a }) => ({
      r: r + b,
      g: g + b,
      b: bb + b,
      a
    }));
}
