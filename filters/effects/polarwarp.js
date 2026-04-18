export default {
  id: "polarwarp",
  name: "Polar Warp",
  apply(imageData, params) {
    const amount = (params?.amount || 0) / 100;
    const { width, height, data } = imageData;
    const output = new ImageData(width, height);
    const cx = width / 2;
    const cy = height / 2;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let dx = x - cx;
        let dy = y - cy;

        let r = Math.sqrt(dx * dx + dy * dy);
        let angle = Math.atan2(dy, dx);

        let nr = r + amount * angle * 20;

        let sx = Math.floor(cx + Math.cos(angle) * nr);
        let sy = Math.floor(cy + Math.sin(angle) * nr);

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
