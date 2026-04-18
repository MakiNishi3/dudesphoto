export default {
  id: "rotate",
  name: "Rotation",
  apply(imageData, params) {
    const angle = ((params?.amount || 0) * Math.PI) / 180;
    const { width, height, data } = imageData;
    const output = new ImageData(width, height);
    const cx = width / 2;
    const cy = height / 2;

    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let dx = x - cx;
        let dy = y - cy;

        let sx = Math.floor(cx + dx * cos - dy * sin);
        let sy = Math.floor(cy + dx * sin + dy * cos);

        let i = (y * width + x) * 4;
        if (sx >= 0 && sx < width && sy >= 0 && sy < height) {
          let si = (sy * width + sx) * 4;
          output.data[i] = data[si];
          output.data[i + 1] = data[si + 1];
          output.data[i + 2] = data[si + 2];
          output.data[i + 3] = data[si + 3];
        }
      }
    }
    return output;
  }
};
