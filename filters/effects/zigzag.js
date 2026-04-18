export default {
  id: "zigzag",
  name: "ZigZag",
  apply(imageData, params) {
    const amount = (params?.amount || 0) / 50;
    const { width, height, data } = imageData;
    const output = new ImageData(width, height);

    for (let y = 0; y < height; y++) {
      let offset = Math.sin(y * 0.1) * amount;
      for (let x = 0; x < width; x++) {
        let sx = Math.floor(x + offset * 10);
        let sy = y;

        let i = (y * width + x) * 4;
        if (sx >= 0 && sx < width) {
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
