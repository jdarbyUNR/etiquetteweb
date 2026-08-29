export function responsiveSources(stem, widths) {
  const basePath = `/web-images/responsive/${stem}`;
  const buildFormat = (extension) => widths.map((width) => ({
    src: `${basePath}-${width}.${extension}`,
    width
  }));

  return {
    avif: buildFormat("avif"),
    webp: buildFormat("webp"),
    jpeg: buildFormat("jpg")
  };
}
