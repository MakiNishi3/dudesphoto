export default {
  id: "labadjust",
  name: "LAB Adjust",
  apply(imageData, params) {
    const { lightness = 0, a = 0, b = 0, invertLuminosity = false } = params || {};
    const d = imageData.data;

    for (let i = 0; i < d.length; i += 4) {
      let r = d[i], g = d[i + 1], b2 = d[i + 2];

      let x = (0.4124 * r + 0.3576 * g + 0.1805 * b2) / 255;
      let y = (0.2126 * r + 0.7152 * g + 0.0722 * b2) / 255;
      let z = (0.0193 * r + 0.1192 * g + 0.9505 * b2) / 255;

      let l = Math.cbrt(y) * 100;
      let aVal = ((x - y) * 500) + a;
      let bVal = ((y - z) * 200) + b;

      l = Math.min(100, Math.max(0, l + lightness));
      if (invertLuminosity) l = 100 - l;

      let y2 = Math.pow(l / 100, 3);

      let r2 = y2 * 1.0 + aVal * 0.01;
      let g2 = y2 * 1.0 - bVal * 0.01;
      let b3 = y2 * 1.0;

      d[i] = Math.min(255, Math.max(0, r2 * 255));
      d[i + 1] = Math.min(255, Math.max(0, g2 * 255));
      d[i + 2] = Math.min(255, Math.max(0, b3 * 255));
    }
    return imageData;
  }
};
