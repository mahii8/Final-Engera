import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { AfricaBadge } from "./AfricaBadge";
import { facilities as allFacilities, MAP_CENTER, MAP_DISCLAIMER, type Facility } from "@/data/facilities";

/** Ethiopia border, simplified from real country-boundary data (datasets/geo-countries). */
const ETHIOPIA_OUTLINE: [number, number][] = [
  [34.0707, 9.4546],
  [34.0982, 9.6797],
  [34.2219, 10.026],
  [34.3035, 10.1135],
  [34.3259, 10.2236],
  [34.2795, 10.5655],
  [34.42, 10.7808],
  [34.5748, 10.8841],
  [34.7507, 10.7439],
  [34.7544, 10.6841],
  [34.8385, 10.7291],
  [34.9583, 10.9034],
  [34.9136, 10.953],
  [34.9841, 11.1864],
  [34.9443, 11.2532],
  [35.0731, 11.549],
  [35.0406, 11.7274],
  [35.0727, 11.8189],
  [35.2156, 11.8966],
  [35.3174, 12.0237],
  [35.3537, 12.146],
  [35.4125, 12.1986],
  [35.4288, 12.267],
  [35.6877, 12.6592],
  [36.03, 12.7172],
  [36.115, 12.7018],
  [36.1369, 13.0324],
  [36.2336, 13.3616],
  [36.3913, 13.5994],
  [36.4582, 13.8201],
  [36.4321, 13.9699],
  [36.5264, 14.2635],
  [36.7481, 14.3321],
  [36.9469, 14.3047],
  [36.9954, 14.2641],
  [37.0602, 14.2768],
  [37.1211, 14.4208],
  [37.2938, 14.4574],
  [37.5537, 14.1055],
  [37.8915, 14.8795],
  [38.0067, 14.7244],
  [38.1152, 14.681],
  [38.2293, 14.6797],
  [38.3134, 14.5193],
  [38.4268, 14.4172],
  [38.8661, 14.4937],
  [38.9797, 14.5671],
  [39.0097, 14.6512],
  [39.1275, 14.6022],
  [39.2082, 14.4402],
  [39.2685, 14.4864],
  [39.4486, 14.5051],
  [39.515, 14.5678],
  [39.6509, 14.4966],
  [39.7969, 14.4951],
  [39.8923, 14.4266],
  [40.1046, 14.466],
  [40.2771, 14.4046],
  [40.4798, 14.2444],
  [40.8332, 14.106],
  [41.0436, 13.8725],
  [41.192, 13.6159],
  [41.7118, 13.2479],
  [41.9466, 12.8762],
  [42.1849, 12.733],
  [42.3795, 12.4659],
  [41.9364, 11.8274],
  [41.7924, 11.7045],
  [41.7491, 11.538],
  [41.788, 11.2597],
  [41.7613, 10.9962],
  [41.9375, 10.9298],
  [42.0963, 10.9903],
  [42.3918, 11.0059],
  [42.6156, 11.0897],
  [42.7296, 11.065],
  [42.7718, 10.9965],
  [42.9237, 10.9988],
  [42.8935, 10.9197],
  [42.8194, 10.8726],
  [42.7381, 10.7598],
  [42.6996, 10.6585],
  [42.6472, 10.6322],
  [42.7658, 10.4519],
  [42.8363, 10.2081],
  [42.9819, 10.0916],
  [43.0677, 9.9225],
  [43.1872, 9.8833],
  [43.2488, 9.6523],
  [43.3707, 9.5442],
  [43.419, 9.413],
  [43.5482, 9.3361],
  [43.6215, 9.3369],
  [43.9848, 9.0083],
  [46.9792, 7.9966],
  [47.9792, 7.9966],
  [46.4239, 6.4967],
  [44.9415, 4.9115],
  [43.969, 4.954],
  [43.5285, 4.8416],
  [43.1193, 4.6477],
  [42.9604, 4.5174],
  [42.8996, 4.3611],
  [42.8316, 4.3023],
  [42.1029, 4.1919],
  [41.9235, 4.0706],
  [41.9122, 4.008],
  [41.8359, 3.9495],
  [41.6998, 3.9969],
  [41.643, 3.9694],
  [41.163, 3.9427],
  [40.7637, 4.2849],
  [40.3657, 4.0949],
  [40.1672, 4.0355],
  [39.8485, 3.8673],
  [39.7642, 3.6857],
  [39.575, 3.4979],
  [39.5363, 3.405],
  [39.5044, 3.4033],
  [39.4362, 3.4624],
  [39.3113, 3.4661],
  [39.3159, 3.4949],
  [39.2194, 3.4687],
  [39.0679, 3.5266],
  [38.8952, 3.5136],
  [38.722, 3.5604],
  [38.661, 3.622],
  [38.6603, 3.5945],
  [38.5471, 3.6095],
  [38.509, 3.6508],
  [38.446, 3.6017],
  [38.1019, 3.6126],
  [37.9767, 3.7264],
  [37.0948, 4.2849],
  [37.0157, 4.3706],
  [36.8441, 4.4322],
  [36.0413, 4.4437],
  [35.9405, 4.508],
  [35.9208, 4.6193],
  [35.7845, 4.7642],
  [35.7516, 4.8544],
  [35.7559, 5.0634],
  [35.8074, 5.1447],
  [35.7753, 5.2466],
  [35.8041, 5.318],
  [35.4693, 5.4308],
  [35.345, 5.3524],
  [35.2875, 5.3741],
  [35.2507, 5.4351],
  [35.262, 5.5119],
  [35.0987, 5.6225],
  [34.9744, 5.8631],
  [34.9594, 6.0617],
  [34.8447, 6.2487],
  [34.8326, 6.3535],
  [34.7035, 6.6849],
  [34.5247, 6.7529],
  [34.5037, 6.89],
  [34.2807, 6.9801],
  [34.1983, 7.0644],
  [34.1814, 7.1672],
  [34.1324, 7.1634],
  [34.0336, 7.2503],
  [34.0065, 7.4099],
  [33.7161, 7.6572],
  [33.5509, 7.6913],
  [33.4623, 7.7495],
  [33.3471, 7.719],
  [33.2339, 7.7832],
  [33.0583, 7.798],
  [32.9898, 7.9172],
  [33.1175, 8.1042],
  [33.1851, 8.1411],
  [33.1699, 8.2055],
  [33.2083, 8.2537],
  [33.1644, 8.2928],
  [33.1619, 8.3615],
  [33.2352, 8.4556],
  [33.3614, 8.4343],
  [33.4848, 8.474],
  [33.5521, 8.4468],
  [33.6204, 8.4607],
  [33.6955, 8.3729],
  [33.741, 8.3671],
  [33.8241, 8.4195],
  [33.9503, 8.4332],
  [34.0902, 8.5565],
  [34.1118, 8.6266],
  [34.0707, 9.4546],
];

const SCALE = 30;
const project = (lon: number, lat: number): [number, number] => [
  (lon - 32.6) * SCALE,
  (15.4 - lat) * SCALE,
];

const outlinePath = `${ETHIOPIA_OUTLINE.map(([lon, lat], i) => {
  const [x, y] = project(lon, lat);
  return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
}).join(" ")} Z`;

/**
 * Facility positions are spread out from the real cluster so each marker stays
 * individually hoverable — arrangement is faithful, spacing is exaggerated.
 */
const AMPLIFY = 8;
function baseMarkerPosition(facility: Facility): [number, number] {
  const [lat, lon] = facility.coordinates;
  return project(
    MAP_CENTER[1] + (lon - MAP_CENTER[1]) * AMPLIFY,
    MAP_CENTER[0] + (lat - MAP_CENTER[0]) * AMPLIFY,
  );
}

/**
 * Several facilities sit only a kilometre or two apart in real life, which puts
 * their amplified pins on top of each other — and worse, their NAME LABELS
 * (which extend well past the pin itself) on top of each other too. Keeping
 * pin centers a fixed distance apart isn't enough: "Gura Megenasse" is far
 * wider than "Attat", so two pins that are technically far enough apart can
 * still have colliding text.
 *
 * This instead treats each pin + its label as a rectangle (sized from the
 * actual name length) and repels overlapping rectangles apart along whichever
 * axis has the smaller overlap, same technique as force-directed label
 * placement in real cartography tools. Each facility's label points away from
 * the cluster's center (left-of-center facilities label leftward, right-of-
 * center label rightward) — decided once, from each facility's true
 * geographic position, so labels fan outward instead of all stacking to the
 * right and the direction can't flip mid-layout.
 */
const PIN_RADIUS = 9;
const LABEL_GAP = 6;
const LABEL_HEIGHT = 15;
const CHAR_WIDTH = 6.4;
const LABEL_START_PADDING = 6;

function shortName(facility: Facility) {
  return facility.name.replace(/ (Health Centre|Hospital|Clinic)$/, "");
}

function labelWidth(facility: Facility) {
  return shortName(facility).length * CHAR_WIDTH + LABEL_START_PADDING;
}

type LayoutPoint = { slug: string; x: number; y: number; dir: 1 | -1 };

function labelRect(p: LayoutPoint, width: number) {
  const x1 = p.dir === 1 ? p.x + PIN_RADIUS : p.x - PIN_RADIUS - LABEL_GAP - width;
  const x2 = p.dir === 1 ? p.x + PIN_RADIUS + LABEL_GAP + width : p.x - PIN_RADIUS;
  return { x1, x2, y1: p.y - LABEL_HEIGHT / 2, y2: p.y + LABEL_HEIGHT / 2 };
}

function declutter(points: LayoutPoint[], widths: Map<string, number>) {
  const spread = points.map((p) => ({ ...p }));
  for (let iter = 0; iter < 500; iter++) {
    let moved = false;
    for (let i = 0; i < spread.length; i++) {
      for (let j = i + 1; j < spread.length; j++) {
        const a = spread[i]!;
        const b = spread[j]!;
        const ra = labelRect(a, widths.get(a.slug)!);
        const rb = labelRect(b, widths.get(b.slug)!);
        const overlapX = Math.min(ra.x2, rb.x2) - Math.max(ra.x1, rb.x1);
        const overlapY = Math.min(ra.y2, rb.y2) - Math.max(ra.y1, rb.y1);
        if (overlapX > 0 && overlapY > 0) {
          moved = true;
          // Separate along whichever axis needs the smaller nudge.
          if (overlapX < overlapY) {
            const push = overlapX / 2 + 0.4;
            if (a.x < b.x) {
              a.x -= push;
              b.x += push;
            } else {
              a.x += push;
              b.x -= push;
            }
          } else {
            const push = overlapY / 2 + 0.4;
            if (a.y < b.y) {
              a.y -= push;
              b.y += push;
            } else {
              a.y += push;
              b.y -= push;
            }
          }
        }
      }
    }
    if (!moved) break;
  }
  return spread;
}

/**
 * Computed once, over every facility (not just the ones a given page renders),
 * so a pin — and its label side — sits the same way everywhere it appears.
 */
const baseLayout: LayoutPoint[] = (() => {
  const withPositions = allFacilities.map((facility) => {
    const [x, y] = baseMarkerPosition(facility);
    return { facility, x, y };
  });
  const meanX = withPositions.reduce((sum, p) => sum + p.x, 0) / withPositions.length;
  return withPositions.map(({ facility, x, y }) => ({
    slug: facility.slug,
    x,
    y,
    dir: x >= meanX ? (1 as const) : (-1 as const),
  }));
})();

const labelWidths = new Map(allFacilities.map((f) => [f.slug, labelWidth(f)]));

const MARKER_LAYOUT = new Map<string, LayoutPoint>(
  declutter(baseLayout, labelWidths).map((p) => [p.slug, p]),
);

function markerPosition(facility: Facility): [number, number] {
  const p = MARKER_LAYOUT.get(facility.slug);
  return p ? [p.x, p.y] : baseMarkerPosition(facility);
}

function markerDirection(facility: Facility): 1 | -1 {
  return MARKER_LAYOUT.get(facility.slug)?.dir ?? 1;
}

function shortStat(facility: Facility) {
  const patients = facility.facts.find((f) => f.label.startsWith("Patients"));
  return patients?.value ?? facility.facts[0]?.value ?? facility.region;
}

export type IllustrativeMapProps = {
  facilities: Facility[];
  selectedSlug?: string | null;
  onSelect?: (slug: string) => void;
  showLinks?: boolean;
  className?: string;
  showDisclaimer?: boolean;
};

export function IllustrativeMap({
  facilities,
  selectedSlug,
  onSelect,
  showLinks = true,
  className,
  showDisclaimer = true,
}: IllustrativeMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeSlug = hovered ?? selectedSlug ?? null;
  const active = facilities.find((f) => f.slug === activeSlug);
  const [regionX, regionY] = project(MAP_CENTER[1], MAP_CENTER[0]);
  const navigate = useNavigate();

  return (
    <div>
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border border-border bg-secondary/60 pattern-weave",
          className,
        )}
      >
        <svg
          viewBox="0 0 470 380"
          role="img"
          aria-label="Illustrated map of Ethiopia showing the eight health facilities Engera supports"
          className="h-full w-full"
        >
          <path
            d={outlinePath}
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Region shading */}
          <ellipse
            cx={regionX}
            cy={regionY + 6}
            rx="78"
            ry="68"
            fill="var(--accent)"
            fillOpacity="0.08"
            stroke="var(--accent)"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            strokeDasharray="5 5"
          />
          <text
            x={regionX - 78}
            y={regionY - 66}
            textAnchor="middle"
            className="fill-[var(--primary)] text-[11px] font-semibold uppercase tracking-wide"
          >
            Gurage Zone
          </text>
          <text
            x={regionX + 96}
            y={regionY + 74}
            textAnchor="middle"
            className="fill-[var(--muted-foreground)] text-[11px] font-semibold uppercase tracking-wide"
          >
            Oromia
          </text>
          <text
            x={project(39.9, 12.6)[0]}
            y={project(39.9, 12.6)[1]}
            textAnchor="middle"
            className="fill-[var(--muted-foreground)] text-[10px] uppercase tracking-[0.18em]"
          >
            Ethiopia
          </text>
          <text
            x={project(38.75, 9.03)[0] + 10}
            y={project(38.75, 9.03)[1] - 6}
            className="fill-[var(--muted-foreground)] text-[10px]"
          >
            Addis Ababa
          </text>
          <circle
            cx={project(38.75, 9.03)[0]}
            cy={project(38.75, 9.03)[1]}
            r="3"
            fill="var(--muted-foreground)"
          />

          {facilities.map((facility) => {
            const [x, y] = markerPosition(facility);
            const dir = markerDirection(facility);
            const isActive = facility.slug === activeSlug;
            return (
              <g
                key={facility.slug}
                transform={`translate(${x} ${y})`}
                tabIndex={0}
                role="button"
                aria-label={`${facility.name}, ${facility.region}`}
                className="cursor-pointer outline-none"
                onMouseEnter={() => setHovered(facility.slug)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(facility.slug)}
                onBlur={() => setHovered(null)}
                onClick={() => {
                  onSelect?.(facility.slug);
                  if (showLinks) {
                    navigate({ to: "/projects/$slug", params: { slug: facility.slug } });
                  }
                }}
              >
                <circle r="13" fill="transparent" />
                <circle
                  r={isActive ? 9 : 6}
                  fill={isActive ? "var(--accent)" : "var(--primary)"}
                  stroke="var(--card)"
                  strokeWidth="2"
                  className="transition-all duration-200"
                />
                <text
                  x={dir === 1 ? 12 : -12}
                  y="4"
                  textAnchor={dir === 1 ? "start" : "end"}
                  className={cn(
                    "text-[10px] font-semibold transition-colors",
                    isActive ? "fill-[var(--accent-dark)]" : "fill-[var(--primary)]",
                  )}
                >
                  {shortName(facility)}
                </text>
              </g>
            );
          })}
        </svg>

        <AfricaBadge className="absolute right-3 top-3" />

        {active ? (
          <div className="absolute bottom-3 left-3 right-3 max-w-sm border border-border bg-card/97 p-4 shadow-editorial backdrop-blur">
            <p className="font-display text-lg leading-snug text-primary">{active.name}</p>
            <p className="eyebrow mt-1 text-accent">{shortStat(active)}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {active.shortDescription}
            </p>
            {showLinks ? (
              <Link
                to="/projects/$slug"
                params={{ slug: active.slug }}
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-accent hover:text-accent-dark"
              >
                View details →
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
      {showDisclaimer ? (
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Illustrative map — not to scale. {MAP_DISCLAIMER}
        </p>
      ) : null}
    </div>
  );
}
