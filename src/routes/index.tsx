import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { StatGrid } from "@/components/site/StatCounter";
import { FacilityCard } from "@/components/site/FacilityCard";
import { Reveal } from "@/components/site/Reveal";
import { NewsletterForm } from "@/components/site/Newsletter";
import { DonateCta } from "@/components/site/DonateCta";
import { PhotoAlbum } from "@/components/site/PhotoAlbum";
import { ScrollYouTube } from "@/components/site/ScrollYouTube";
import { facilities } from "@/data/facilities";
import { ANNUAL_STATS, DONATE_URL, HOME_STATS } from "@/lib/site";
import heroPhoto from "@/assets/photos/hero.jpg";
import motherPhoto from "@/assets/photos/doctor-mother.jpg";
import trainingPhoto from "@/assets/photos/training.jpg";
import healthcareRealPhoto from "@/assets/photos/healthcare-real.jpg";
import educationRealPhoto from "@/assets/photos/education-real.jpg";
import educationKidsPhoto from "@/assets/photos/education-kids-real.jpg";
import staffPhoto from "@/assets/photos/staff.jpg";
import solarInstallPhoto from "@/assets/photos/solar-install-real.jpg";
import clinicPhoto from "@/assets/photos/clinic-visit.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Engera USA — Health care for rural Ethiopia" },
      {
        name: "description",
        content:
          "Engera USA supports eight rural health facilities in Ethiopia's Gurage Zone and Oromia's South West Shewa, serving more than 230,000 people a year.",
      },
      { property: "og:title", content: "Engera USA — Health care for rural Ethiopia" },
      {
        property: "og:description",
        content:
          "Eight health facilities. More than 230,000 people served each year. Maternal and child health care in rural Ethiopia.",
      },
      { property: "og:url", content: "https://engra-heart-map.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://engra-heart-map.lovable.app/" }],
  }),
  component: Home,
});

const services = [
  {
    title: "Healthcare",
    body: "Medicines, diagnostics, maternity wards and tuberculosis units — the essentials that let a rural health center actually treat people.",
    photos: [
      { src: healthcareRealPhoto, alt: "A clinician examining a patient at an Engera-supported health center" },
      { src: heroPhoto, alt: "Patients waiting to be seen at a health center" },
    ],
  },
  {
    title: "Education",
    body: "School meals, school facilities and the reusable sanitary pad programme that keeps girls in class.",
    photos: [
      { src: educationRealPhoto, alt: "Schoolchildren in a classroom supported by Engera" },
      { src: educationKidsPhoto, alt: "Children at a school Engera supports" },
    ],
  },
  {
    title: "Training",
    body: "Scholarships and clinical training for nurses, midwives and lab staff, so skills stay in the community.",
    photos: [
      { src: trainingPhoto, alt: "Clinical staff training at an Engera-supported facility" },
      { src: staffPhoto, alt: "Engera staff and clinical team" },
    ],
  },
  {
    title: "Infrastructure",
    body: "Solar power, water wells and buildings that keep care running through the night and through the dry season.",
    photos: [
      { src: solarInstallPhoto, alt: "A solar panel installation at an Engera-supported health center" },
      { src: clinicPhoto, alt: "An Engera-supported health center building" },
    ],
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroPhoto}
          alt="A health worker caring for a mother and child at an Engera-supported health center"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, color-mix(in oklab, var(--primary-dark) 88%, transparent) 0%, color-mix(in oklab, var(--primary) 55%, transparent) 65%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36 lg:px-8">
          <Reveal>
            <p className="eyebrow text-accent-light">Gurage Zone &amp; Oromia, Ethiopia</p>
            <h1 className="display-xl mt-5 max-w-3xl text-4xl md:text-6xl lg:text-[4.25rem]">
              Everyone has a right to access quality health care.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              Engera USA supports eight rural health facilities serving more than 230,000 people
              each year — with a focus on mothers, newborns and children.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="donate" size="lg">
                <a href={DONATE_URL} target="_blank" rel="noreferrer">
                  Donate now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="editorial"
                className="border-primary-foreground/40 text-primary-foreground hover:border-accent-light hover:text-accent-light"
              >
                <Link to="/projects">See the facilities</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="pattern-weave">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
          <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow text-accent">Our mission</p>
              <h2 className="mt-5 font-display text-3xl leading-tight text-primary md:text-4xl">
                Engera improves the health of women and children by partnering with local
                communities to promote well-being and prevent disease.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We work alongside Ethiopian staff and religious sisters who run each facility,
                investing in the things that keep care running: medicines and diagnostics,
                maternity wards, tuberculosis units, water wells, solar power, and the training
                of nurses and midwives.
              </p>
              <Link
                to="/about"
                className="link-underline mt-7 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-primary transition-colors hover:text-accent"
              >
                Read our story →
              </Link>
            </div>
            <img
              src={motherPhoto}
              alt="A doctor examining an expectant mother at a rural Ethiopian health center"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover shadow-editorial"
            />
          </Reveal>
        </div>
      </section>

      {/* Stats — confirmed figures */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 lg:px-8">
          <Reveal>
            <StatGrid stats={HOME_STATS} />
          </Reveal>

          <Reveal className="mt-16 border-t border-border pt-12">
            <p className="eyebrow text-accent">Current annual reach (FY2025)</p>
            <div className="mt-8">
              <StatGrid stats={ANNUAL_STATS.slice(0, 3)} />
            </div>
            <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              FY2025 figures from the Ethiopian Catholic Church Social and Development Commission
              plan and achievement data for the eight facilities we support. The all-time
              &ldquo;people served&rdquo; counter above is cumulative since Engera was founded.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we do — kept clearly separate from the block above */}
      <section className="mx-auto max-w-6xl px-5 pt-24 pb-20 md:pt-32 md:pb-28 lg:px-8">
        <Reveal>
          <p className="eyebrow text-accent">What we do</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-primary md:text-4xl">
            Four kinds of support, one goal
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={i * 70}
              className="card-lift overflow-hidden border border-border bg-card shadow-card"
            >
              <PhotoAlbum images={service.photos} />
              <div className="p-7">
                <h3 className="font-display text-2xl text-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28 lg:px-8">
        <ScrollYouTube videoId="-kRT3nbQ2o0" title="Engera USA" className="shadow-editorial" />
      </section>

      {/* Facilities preview */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-accent">Where we work</p>
            <h2 className="mt-4 font-display text-3xl text-primary md:text-4xl">
              Eight facilities, one network of care
            </h2>
          </div>
          <Link
            to="/projects"
            className="link-underline text-xs font-semibold uppercase tracking-wide text-primary transition-colors hover:text-accent"
          >
            View map &amp; all facilities →
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.slice(0, 3).map((facility, i) => (
            <Reveal key={facility.slug} delay={i * 70}>
              <FacilityCard facility={facility} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing sequence — three ways to help, then a quiet newsletter note */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-accent">How you can help</p>
            <h2 className="mt-5 font-display text-3xl leading-tight text-primary md:text-4xl">
              There are three ways to make this work possible.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether you donate, use your skills on the ground, or partner with us as an
              organisation, your support helps provide care for mothers and children in rural
              Ethiopia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="donate" size="lg">
                <a href={DONATE_URL} target="_blank" rel="noreferrer">
                  Donate
                </a>
              </Button>
              <Button asChild size="lg" variant="editorial">
                <Link to="/get-involved">Volunteer or partner</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal className="mt-16 grid gap-8 border-t border-border pt-12 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <p className="eyebrow text-accent">Newsletter</p>
              <h3 className="mt-4 font-display text-2xl text-primary md:text-3xl">
                Stay close to the work
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                A few updates a year from the health centres — new wards, solar installations,
                training and the people behind them.
              </p>
            </div>
            <NewsletterForm tone="light" />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <DonateCta />
    </>
  );
}
