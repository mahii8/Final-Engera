import { Link } from "@tanstack/react-router";

import type { Facility } from "@/data/facilities";
import { FacilityPlaceholder } from "./FacilityPlaceholder";

export function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <article className="card-lift group flex h-full flex-col border border-border bg-card shadow-card">
      <div className="aspect-[4/3] w-full overflow-hidden">
        {facility.photo ? (
          <img
            src={facility.photo}
            alt={facility.photoAlt ?? facility.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        ) : (
          <FacilityPlaceholder name={facility.name} region={facility.region} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-accent">{facility.region}</p>
        <h3 className="mt-2 font-display text-2xl leading-snug text-primary">{facility.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {facility.shortDescription}
        </p>
        <Link
          to="/projects/$slug"
          params={{ slug: facility.slug }}
          className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-primary transition-colors hover:text-accent"
        >
          View details →
        </Link>
      </div>
    </article>
  );
}
