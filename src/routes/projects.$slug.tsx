import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { IllustrativeMap } from "@/components/map/IllustrativeMap";
import { FacilityPlaceholder } from "@/components/site/FacilityPlaceholder";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { Reveal } from "@/components/site/Reveal";
import { facilities, getFacility } from "@/data/facilities";
import { testimonialsForFacility } from "@/data/testimonials";
import { DONATE_URL } from "@/lib/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const facility = getFacility(params.slug);
    if (!facility) throw notFound();
    return { facility };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Facility not found — Engera USA" }, { name: "robots", content: "noindex" }],
      };
    }
    const { facility } = loaderData;
    const title = `${facility.name} — Engera USA`;
    const url = `https://engra-heart-map.lovable.app/projects/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: facility.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: facility.shortDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: FacilityDetail,
});

function FacilityDetail() {
  const { facility } = Route.useLoaderData();
  const quotes = testimonialsForFacility(facility.slug);
  const others = facilities.filter((f) => f.slug !== facility.slug).slice(0, 3);

  return (
    <>
      <div className="h-[60vh] min-h-[380px] w-full md:h-[75vh] md:min-h-[520px]">
        {facility.photo ? (
          <img
            src={facility.photo}
            alt={facility.photoAlt ?? facility.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <FacilityPlaceholder name={facility.name} region={facility.region} size="lg" />
        )}
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <Link
          to="/projects"
          className="text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-accent"
        >
          ← All projects
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <Reveal>
            <p className="eyebrow text-accent">{facility.region}</p>
            <h1 className="display-xl mt-4 text-4xl text-primary md:text-5xl">{facility.name}</h1>
            <p className="mt-3 text-sm text-muted-foreground">{facility.locationNote}</p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              {facility.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {facility.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow text-accent">{fact.label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-primary">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <h2 className="font-display text-2xl text-primary md:text-3xl">
                The work at {facility.name}
              </h2>
              <ul className="mt-6 space-y-4">
                {facility.work.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-primary">
                    <span aria-hidden className="mt-1.5 size-2 shrink-0 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Catchment population and patient figures are FY2025, from the Ethiopian Catholic
                Church Social and Development Commission plan and achievement data for the eight
                facilities Engera supports.
              </p>
            </div>

            <Button asChild variant="donate" className="mt-10">
              <a href={DONATE_URL} target="_blank" rel="noreferrer">
                Support this work
              </a>
            </Button>
          </Reveal>

          <Reveal>
            <p className="eyebrow text-primary">Location</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Select any other facility on the map to jump straight to its page.
            </p>
            <div className="mt-4">
              <IllustrativeMap
                facilities={facilities}
                selectedSlug={facility.slug}
                showLinks
                showDisclaimer
                className="h-[340px] md:h-[400px]"
              />
            </div>
            {!facility.photo ? (
              <p className="mt-6 border border-border bg-secondary/60 p-4 text-xs leading-relaxed text-muted-foreground">
                We don't yet have a photograph of this facility that we can publish. Rather than
                use a generic stock image, we show a placeholder until our team can share real
                photos.
              </p>
            ) : null}
          </Reveal>
        </div>
      </section>

      {quotes.length > 0 ? (
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
            <Reveal>
              <p className="eyebrow text-accent">Voices from {facility.name}</p>
              <h2 className="mt-4 font-display text-3xl text-primary md:text-4xl">
                What staff and community members say
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {quotes.map((testimonial, i) => (
                <Reveal key={testimonial.id} delay={i * 60}>
                  <TestimonialCard testimonial={testimonial} showFacilityLink={false} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <h2 className="font-display text-2xl text-primary md:text-3xl">Other facilities</h2>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {others.map((other) => (
            <li key={other.slug}>
              <Link
                to="/projects/$slug"
                params={{ slug: other.slug }}
                className="flex flex-col gap-1 px-2 py-4 transition-colors hover:bg-secondary hover:text-accent"
              >
                <span className="font-display text-xl text-primary">{other.name}</span>
                <span className="text-sm text-muted-foreground">{other.shortDescription}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
