export default function hue(hue) {
  return (data) => {
    const h = hue / 360;
    return data.map(({ r, g, b, a }) => {
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h0 = 0, s = 0, l = (max + min) / 2 / 255;
      const d = max - min;
      if (d) {
        s = d / (1 - Math.abs(2 * l - 1));
        switch (max) {
          case r: h0 = ((g - b) / d + (g < b ? 6 : 0)); break;
          case g: h0 = ((b - r) / d + 2); break;
          case b: h0 = ((r - g) / d + 4); break;
        }
        h0 /= 6;
      }
      h0 = (h0 + h) % 1;
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs((h0 * 6) % 2 - 1));
      const m = l - c / 2;
      let rr = 0, gg = 0, bb = 0;
      const i = Math.floor(h0 * 6);
      if (i === 0) [rr, gg, bb] = [c, x, 0];
      else if (i === 1) [rr, gg, bb] = [x, c, 0];
      else if (i === 2) [rr, gg, bb] = [0, c, x];
      else if (i === 3) [rr, gg, bb] = [0, x, c];
      else if (i === 4) [rr, gg, bb] = [x, 0, c];
      else [rr, gg, bb] = [c, 0, x];
      return { r: (rr + m) * 255, g: (gg + m) * 255, b: (bb + m) * 255, a };
    });
  };
        }
