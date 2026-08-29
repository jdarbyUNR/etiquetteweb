export function getResponsiveSrcSet(image, format) {
  return image.sources?.[format]
    ?.map(({ src, width }) => `${src} ${width}w`)
    .join(", ");
}

export function ResponsiveImage({
  image,
  sizes,
  fallbackSrc,
  alt = image.alt,
  ...imageProps
}) {
  const avifSrcSet = getResponsiveSrcSet(image, "avif");
  const webpSrcSet = getResponsiveSrcSet(image, "webp");
  const jpegSrcSet = getResponsiveSrcSet(image, "jpeg");

  return (
    <picture className="responsive-picture">
      {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />}
      {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
      <img
        src={fallbackSrc || image.src}
        srcSet={jpegSrcSet}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={alt}
        decoding="async"
        {...imageProps}
      />
    </picture>
  );
}
