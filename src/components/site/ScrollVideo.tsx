import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

/**
 * A video that plays automatically once it scrolls into view and pauses the
 * moment it scrolls out again — resuming from the same spot when it comes
 * back into view. Muted + inline so mobile browsers allow the autoplay;
 * native controls stay on so people can unmute or scrub if they want to.
 */
export function ScrollVideo({
  src,
  poster,
  className,
  aspectClassName,
  maxHeightClassName,
}: {
  src: string;
  poster?: string;
  className?: string;
  aspectClassName: string;
  /** A definite height class (e.g. "h-[65vh]") for tall/portrait clips, so
   * they never grow taller than the screen. Must be a real height, not just
   * max-height — the video sizes itself with h-full, which needs its
   * parent's height to be definite to resolve against. The video keeps its
   * native aspect ratio (no cropping, no distortion) and centers itself. */
  maxHeightClassName?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (maxHeightClassName) {
    return (
      <div className={cn("mx-auto flex w-full justify-center overflow-hidden", maxHeightClassName)}>
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          playsInline
          controls
          preload="metadata"
          className={cn("h-full w-auto max-w-full object-contain", className)}
        />
      </div>
    );
  }

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      playsInline
      controls
      preload="metadata"
      className={cn(aspectClassName, "w-full object-cover", className)}
    />
  );
}
