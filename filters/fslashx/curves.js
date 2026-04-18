export default function curves(point, channel) {
  const p = Math.max(1, Math.min(20, point));
  const k = p / 10;
  return (data) =>
    data.map((px) => {
      const out = { ...px };
      const apply = (v) => Math.pow(v / 255, k) * 255;
      if (channel.includes("r")) out.r = apply(px.r);
      if (channel.includes("g")) out.g = apply(px.g);
      if (channel.includes("b")) out.b = apply(px.b);
      if (channel.includes("a")) out.a = apply(px.a);
      return out;
    });
}
