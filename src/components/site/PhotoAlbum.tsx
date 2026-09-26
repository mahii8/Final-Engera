import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type PhotoAlbumProps = {
  images: { src: string; alt: string }[];
  /** Milliseconds between switches. */
  interval?: number;
  className?: string;
};

/**
 * A small set of photos that cross-fades between images on a timer.
 * Used on the homepage "What we do" cards so each one shows more than
 * a single static image without needing a full carousel/gallery.
 */
export function PhotoAlbum({ images, interval = 3200, className }: PhotoAlbumProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={cn("group relative aspect-[4/3] w-full overflow-hidden rounded-md bg-secondary", className)}>
      {images.map((image, i) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-1000 ease-in-out group-hover:scale-105",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      {images.length > 1 ? (
        <div className="absolute bottom-2 right-2 flex gap-1">
          {images.map((image, i) => (
            <span
              key={image.src}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                i === index ? "bg-white" : "bg-white/40",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
