export default function grayscale(amount) {
  return (data) =>
    data.map(({ r, g, b, a }) => {
      const gray = 0.3 * r + 0.59 * g + 0.11 * b;
      return {
        r: r * (1 - amount) + gray * amount,
        g: g * (1 - amount) + gray * amount,
        b: b * (1 - amount) + gray * amount,
        a
      };
    });
}
