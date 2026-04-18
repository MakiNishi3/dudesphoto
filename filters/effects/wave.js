export default {
  id: "wave",
  name: "Wave",
  apply(imageData, params) {
    const amount = (params?.amount || 0) / 50;
    const freq = (params?.frequency || 1) / 50;
    const { width, height, data } = imageData;
    const output = new ImageData(width, height);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let offsetX = Math.sin(y * freq) * amount * 10;
        let offsetY = Math.cos(x * freq) * amount * 10;

        let sx = Math.floor(x + offsetX);
        let sy = Math.floor(y + offsetY);

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
