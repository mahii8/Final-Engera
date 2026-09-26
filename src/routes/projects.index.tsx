import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { FacilityCard } from "@/components/site/FacilityCard";
import { IllustrativeMap } from "@/components/map/IllustrativeMap";
import { Reveal } from "@/components/site/Reveal";
import { facilities } from "@/data/facilities";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects & Facilities — Engera USA" },
      {
        name: "description",
        content:
          "Explore the eight health facilities Engera USA supports across Ethiopia's Gurage Zone and Oromia's South West Shewa on an interactive map.",
      },
      { property: "og:title", content: "Projects & Facilities — Engera USA" },
      {
        property: "og:description",
        content:
          "An interactive map of the health centers and clinics Engera USA supports in rural Ethiopia.",
      },
      { property: "og:url", content: "https://engra-heart-map.lovable.app/projects" },
    ],
    links: [{ rel: "canonical", href: "https://engra-heart-map.lovable.app/projects" }],
  }),
  component: Projects,
});

function Projects() {
  const [selected, setSelected] = useState<string | null>(null);


  return (
    <>
      <section className="border-b border-border bg-secondary/50 pattern-weave">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 lg:px-8">
          <Reveal>
            <p className="eyebrow text-accent">Projects</p>
            <h1 className="display-xl mt-5 max-w-3xl text-4xl text-primary md:text-5xl">
              Eight facilities in the Gurage Zone and Oromia's South West Shewa
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The map opens on Africa and zooms in to the highlands south-west of Addis Ababa.
              Select a facility to move the map, click a pin for a summary, or open a facility
              page directly from the list.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow text-primary">Facilities</p>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {facilities.map((facility) => (
                <li
                  key={facility.slug}
                  className={cn(
                    "transition-colors hover:bg-secondary",
                    selected === facility.slug && "bg-secondary",
                  )}
                >
                  <div className="flex items-center gap-2 px-3 py-3">
                    <Link
                      to="/projects/$slug"
                      params={{ slug: facility.slug }}
                      className="flex-1"
                    >
                      <span
                        className={cn(
                          "font-display text-lg leading-snug text-primary transition-colors hover:text-accent",
                          selected === facility.slug && "text-accent",
                        )}
                      >
                        {facility.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {facility.locationNote}
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        setSelected((prev) => (prev === facility.slug ? null : facility.slug))
                      }
                      aria-pressed={selected === facility.slug}
                      aria-label={`Show ${facility.name} on the map`}
                      className="cursor-pointer border border-border px-2 py-2 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      Map
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-4 cursor-pointer text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-accent"
            >
              Clear selection
            </button>
          </div>

          <IllustrativeMap
            facilities={facilities}
            selectedSlug={selected}
            onSelect={setSelected}
            className="h-[400px] md:h-[560px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl text-primary md:text-4xl">All facilities</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, i) => (
            <Reveal key={facility.slug} delay={i * 50}>
              <FacilityCard facility={facility} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
