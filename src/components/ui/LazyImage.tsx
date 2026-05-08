import React, { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: LazyImageProps): React.ReactElement {
  const [hasError, setHasError] = useState(false);

  const baseClass = 'object-cover';
  const combinedClassName = className ? `${baseClass} ${className}` : baseClass;

  const loadingProps = priority
    ? ({ fetchpriority: 'high' } as React.ImgHTMLAttributes<HTMLImageElement>)
    : { loading: 'lazy' as const, decoding: 'async' as const };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={combinedClassName}
      style={hasError ? { backgroundColor: '#27272a' } : undefined}
      onError={() => setHasError(true)}
      {...loadingProps}
    />
  );
}
