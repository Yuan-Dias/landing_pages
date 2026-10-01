import { ReactNode } from "react";

export function MockupImage({
  src,
  alt,
  fallback,
}: {
  src: string | null;
  alt: string;
  fallback: ReactNode;
}) {
  return src ? (
    <img src={src} alt={alt} className="w-full rounded-lg" loading="lazy" decoding="async" />
  ) : (
    <div role="img" aria-label={alt}>
      {fallback}
    </div>
  );
}
