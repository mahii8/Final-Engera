import { cn } from "@/lib/utils";

/**
 * Tiny illustrative Africa silhouette with Ethiopia highlighted — pure SVG,
 * no map tiles.
 */
export function AfricaBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none flex items-center gap-2 border border-border bg-card/95 px-2.5 py-2 shadow-card backdrop-blur",
        className,
      )}
    >
      <svg viewBox="0 0 120 124" role="img" aria-label="Africa with Ethiopia highlighted" className="h-14 w-auto">
        {/* Continent outline, plotted from real coastline lon/lat points (equirectangular projection). */}
        <path
          d="M48.3 4.0 L45.2 4.8 L35.8 4.5 L29.6 6.3 L22.8 6.2 L20.5 9.7 L16.1 14.7 L11.0 21.6 L6.3 28.9 L5.6 36.2 L4.0 39.1 L5.2 42.5 L7.6 44.2 L10.7 48.7 L13.6 52.2 L19.5 54.3 L26.5 53.9 L33.0 52.2 L37.7 52.2 L41.7 55.1 L44.9 55.7 L45.6 59.3 L45.2 63.5 L48.6 68.6 L51.4 75.6 L50.6 85.2 L53.6 97.5 L56.8 106.4 L59.8 114.8 L62.3 116.0 L72.0 114.1 L79.3 108.4 L86.0 96.1 L94.1 78.7 L92.2 72.5 L92.9 68.3 L95.8 64.6 L97.8 61.5 L101.6 58.8 L108.5 49.5 L111.0 43.6 L107.1 44.4 L101.1 45.8 L98.1 43.9 L97.0 42.5 L92.5 37.7 L89.0 31.5 L86.3 26.2 L83.8 18.9 L81.7 15.5 L79.7 13.9 L76.1 13.5 L70.3 13.2 L62.3 11.3 L51.7 10.8 L46.7 9.3 L48.3 4.0 Z"
          fill="var(--muted)"
          stroke="var(--border)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Ethiopia, plotted with the same projection so it lands in the Horn of Africa. */}
        <path
          d="M87.7 49.5 L88.7 55.7 L91.8 56.3 L94.9 55.0 L98.0 53.7 L105.4 49.5 L98.4 47.2 L96.1 44.9 L91.8 39.4 L87.9 39.9 L84.8 45.3 L83.8 48.4 L87.7 49.5 Z"
          fill="var(--accent)"
          stroke="var(--accent-dark)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[0.62rem] font-semibold uppercase leading-tight tracking-wide text-muted-foreground">
        Ethiopia,
        <br />
        in Africa
      </span>
    </div>
  );
}
