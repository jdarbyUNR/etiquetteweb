import { useEffect, useRef, useState } from "react";

export function DeferredEmbed({
  src,
  title,
  service,
  actionLabel,
  description,
  variant,
  height,
  allow,
  allowFullScreen = false,
  referrerPolicy
}) {
  const [isActive, setIsActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      iframeRef.current?.focus();
    }
  }, [isLoaded]);

  return (
    <div
      className={`deferred-embed deferred-embed-${variant}`}
      aria-busy={isActive && !isLoaded}
    >
      {!isActive ? (
        <button
          className="deferred-embed-trigger"
          type="button"
          onClick={() => setIsActive(true)}
          aria-label={`${actionLabel}. ${description}`}
        >
          <span className="deferred-embed-service">{service}</span>
          <span className="deferred-embed-action">{actionLabel}</span>
          <span className="deferred-embed-detail">{description}</span>
        </button>
      ) : (
        <>
          {!isLoaded && (
            <p className="deferred-embed-loading" role="status">
              Loading {service}…
            </p>
          )}
          <iframe
            ref={iframeRef}
            src={src}
            title={title}
            width="100%"
            height={height}
            frameBorder="0"
            allow={allow}
            allowFullScreen={allowFullScreen}
            referrerPolicy={referrerPolicy}
            loading="lazy"
            tabIndex="0"
            onLoad={() => setIsLoaded(true)}
          />
        </>
      )}
    </div>
  );
}
