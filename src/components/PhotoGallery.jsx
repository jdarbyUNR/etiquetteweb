import { useEffect, useRef, useState } from "react";

function photoDetails(photo) {
  return [photo.caption, photo.venue, photo.date].filter(Boolean).join(" — ");
}

export function PhotoGallery({ photos, label, variant = "filmstrip" }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);
  const touchStartXRef = useRef(null);
  const isOpen = activeIndex !== null;

  const activePhoto = isOpen ? photos[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const dialog = dialogRef.current;
    if (!dialog) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    if (!dialog.open) {
      dialog.showModal();
    }
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      if (dialog.open) {
        dialog.close();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || photos.length < 2) {
      return;
    }

    const adjacentIndexes = [
      (activeIndex - 1 + photos.length) % photos.length,
      (activeIndex + 1) % photos.length
    ];

    adjacentIndexes.forEach((index) => {
      const preloadImage = new Image();
      preloadImage.src = photos[index].fullSrc || photos[index].src;
    });
  }, [activeIndex, isOpen, photos]);

  function openLightbox(index, trigger) {
    triggerRef.current = trigger;
    setImageLoaded(false);
    setImageError(false);
    setActiveIndex(index);
  }

  function closeLightbox() {
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    setActiveIndex(null);
    setImageLoaded(false);
    setImageError(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  function movePhoto(direction) {
    setImageLoaded(false);
    setImageError(false);
    setActiveIndex((currentIndex) => (
      (currentIndex + direction + photos.length) % photos.length
    ));
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      movePhoto(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      movePhoto(1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
    }
  }

  function handleTouchStart(event) {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0]?.clientX;
    if (touchStartXRef.current === null || touchEndX === undefined) {
      return;
    }

    const distance = touchEndX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (Math.abs(distance) < 50) {
      return;
    }

    movePhoto(distance > 0 ? -1 : 1);
  }

  const galleryClassName = variant === "press"
    ? "photo-gallery press-photo-grid"
    : "photo-gallery filmstrip-grid";
  const cardClassName = variant === "press"
    ? "photo-card press-photo-card"
    : "photo-card filmstrip-card";

  return (
    <>
      <div className={galleryClassName} aria-label={label}>
        {photos.map((photo, index) => (
          <figure className={cardClassName} key={photo.id}>
            <button
              className="photo-trigger"
              type="button"
              aria-label={`Open photo ${index + 1} of ${photos.length}: ${photo.alt}`}
              aria-haspopup="dialog"
              onClick={(event) => openLightbox(index, event.currentTarget)}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </button>
            {variant === "press" && (photoDetails(photo) || photo.photographer) && (
              <figcaption className="photo-caption">
                {photoDetails(photo) && <span>{photoDetails(photo)}</span>}
                {photo.photographer && <span>Photo: {photo.photographer}</span>}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <dialog
        className="lightbox-dialog"
        ref={dialogRef}
        aria-label={activePhoto ? `Photo viewer: ${activePhoto.alt}` : "Photo viewer"}
        onCancel={(event) => {
          event.preventDefault();
          closeLightbox();
        }}
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeLightbox();
          }
        }}
        onKeyDown={handleKeyDown}
      >
        {activePhoto && (
          <div
            className="lightbox-shell"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="lightbox-toolbar">
              <p aria-live="polite">{activeIndex + 1} / {photos.length}</p>
              <button
                className="lightbox-close"
                type="button"
                ref={closeButtonRef}
                onClick={closeLightbox}
                aria-label="Close photo viewer"
              >Close</button>
            </div>

            <div className="lightbox-stage">
              {photos.length > 1 && (
                <button
                  className="lightbox-control lightbox-previous"
                  type="button"
                  onClick={() => movePhoto(-1)}
                  aria-label="Previous photo"
                >←</button>
              )}

              <figure className="lightbox-figure">
                {!imageLoaded && !imageError && (
                  <p className="lightbox-loading" role="status">Loading image…</p>
                )}
                {imageError && (
                  <p className="lightbox-loading" role="alert">Image could not be loaded.</p>
                )}
                <img
                  key={activePhoto.id}
                  src={activePhoto.fullSrc || activePhoto.src}
                  alt={activePhoto.alt}
                  decoding="async"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
                {(photoDetails(activePhoto) || activePhoto.photographer) && (
                  <figcaption className="lightbox-caption">
                    {photoDetails(activePhoto) && <span>{photoDetails(activePhoto)}</span>}
                    {activePhoto.photographer && <span>Photo: {activePhoto.photographer}</span>}
                  </figcaption>
                )}
              </figure>

              {photos.length > 1 && (
                <button
                  className="lightbox-control lightbox-next"
                  type="button"
                  onClick={() => movePhoto(1)}
                  aria-label="Next photo"
                >→</button>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
