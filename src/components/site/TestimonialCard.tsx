import { Link } from "@tanstack/react-router";

import type { Testimonial } from "@/data/testimonials";
import { getFacility } from "@/data/facilities";
import { cn } from "@/lib/utils";
import { PhotoAlbum } from "@/components/site/PhotoAlbum";

export function TestimonialCard({
  testimonial,
  className,
  showFacilityLink = true,
}: {
  testimonial: Testimonial;
  className?: string;
  showFacilityLink?: boolean;
}) {
  const facility = testimonial.facilitySlug ? getFacility(testimonial.facilitySlug) : undefined;

  return (
    <figure
      className={cn(
        "flex h-full flex-col border border-border bg-card p-7 shadow-card md:p-8",
        className,
      )}
    >
      <span aria-hidden className="font-display text-5xl leading-none text-accent/40">
        “
      </span>
      <blockquote className="mt-2 flex-1 text-base leading-relaxed text-primary/90 md:text-lg">
        {testimonial.quote}
      </blockquote>

      {testimonial.photos && testimonial.photos.length > 0 ? (
        <PhotoAlbum images={testimonial.photos} className="mt-6 aspect-[16/9]" />
      ) : testimonial.photo ? (
        <img
          src={testimonial.photo}
          alt={testimonial.photoAlt ?? ""}
          loading="lazy"
          className="mt-6 aspect-[16/9] w-full object-cover"
        />
      ) : null}

      <figcaption className="mt-6 border-t border-border pt-5">
        <p className="font-display text-lg text-primary">{testimonial.name}</p>
        {testimonial.title ? (
          <p className="mt-0.5 text-sm text-muted-foreground">{testimonial.title}</p>
        ) : null}
        {testimonial.source ? (
          <p className="mt-2 text-xs italic text-muted-foreground">
            Source: {testimonial.source}
          </p>
        ) : null}
        {facility && showFacilityLink ? (
          <Link
            to="/projects/$slug"
            params={{ slug: facility.slug }}
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-accent transition-colors hover:text-accent-dark"
          >
            See this facility →
          </Link>
        ) : null}
      </figcaption>
    </figure>
  );
}
