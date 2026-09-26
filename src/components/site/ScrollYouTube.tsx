import { useEffect, useId, useRef } from "react";

import { cn } from "@/lib/utils";

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement | string,
        options: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: () => void;
          };
        },
      ) => {
        playVideo: () => void;
        pauseVideo: () => void;
        destroy: () => void;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;

/** Loads the YouTube IFrame API script once, however many players ask for it. */
function loadYouTubeApi(): Promise<void> {
  if (window.YT) return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  });
  return apiPromise;
}

/**
 * A YouTube embed that starts playing (muted) once it scrolls into view and
 * pauses when it scrolls out — resuming from the same point when it comes
 * back into view.
 */
export function ScrollYouTube({
  videoId,
  title,
  className,
}: {
  videoId: string;
  title: string;
  className?: string;
}) {
  const containerId = useId().replace(/:/g, "");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<{ playVideo: () => void; pauseVideo: () => void; destroy: () => void } | null>(
    null,
  );

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !window.YT) return;
      playerRef.current = new window.YT.Player(containerId, {
        videoId,
        playerVars: {
          playsinline: 1,
          mute: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
    };
  }, [containerId, videoId]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          playerRef.current?.playVideo();
        } else {
          playerRef.current?.pauseVideo();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={cn("aspect-video w-full overflow-hidden", className)}>
      <div id={containerId} title={title} className="h-full w-full" />
    </div>
  );
}
