import { createFileRoute } from "@tanstack/react-router";

import { StatGrid } from "@/components/site/StatCounter";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { Reveal } from "@/components/site/Reveal";
import { ScrollVideo } from "@/components/site/ScrollVideo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { testimonials } from "@/data/testimonials";
import { ANNUAL_STATS } from "@/lib/site";
import solarPhoto from "@/assets/photos/infrastructure-site.jpg";
import healthcarePhoto from "@/assets/photos/healthcare-real.jpg";
import babyPhoto from "@/assets/photos/baby-weighed.jpg";
import educationPhoto from "@/assets/photos/education.jpg";
import trainingPhoto from "@/assets/photos/training-site.jpg";
import communityPhoto from "@/assets/photos/community.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Engera USA" },
      {
        name: "description",
        content:
          "Over 239,000 patients treated a year and 2,600+ safe deliveries in 2025 across eight facilities: healthcare, infrastructure, education and training in rural Ethiopia.",
      },
      { property: "og:title", content: "Our Impact — Engera USA" },
      {
        property: "og:description",
        content:
          "Healthcare, infrastructure, education and training — where support for Engera USA goes.",
      },
      { property: "og:url", content: "https://engra-heart-map.lovable.app/impact" },
    ],
    links: [{ rel: "canonical", href: "https://engra-heart-map.lovable.app/impact" }],
  }),
  component: Impact,
});

const pillars = [
  {
    id: "healthcare",
    label: "Healthcare",
    heading: "Care that reaches mothers and children first",
    photo: babyPhoto,
    alt: "Health centre staff weighing and checking a baby",
    body: [
      "Across the eight facilities we support, more than 230,000 people live within the catchment areas we serve — and over 239,000 patient visits were recorded in 2025, including 2,600+ safe deliveries.",
      "Engera supplies medicines, diagnostic tools and delivery equipment, and coordinates visiting medical teams several times a year alongside the Ethiopian staff and religious sisters who run each facility.",
    ],
    points: [
      "Antenatal, delivery and postnatal care",
      "Infant immunisation and child health",
      "Tuberculosis diagnosis and treatment",
      "Laboratory diagnostics and medicines",
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    heading: "Buildings, water and power that make care possible",
    photo: solarPhoto,
    alt: "Solar panels installed beside a rural Ethiopian health centre",
    body: [
      "Zizencho was built in 2008 in a village with no road, electricity, or running water. Shebraber followed in 2014. Getche's maternity ward was rebuilt to give expectant mothers proper reception facilities.",
      "Across the network, solar panels now provide stable, sustainable power — so a delivery at 2am no longer depends on a torchlight.",
    ],
    points: [
      "Solar installations across the facility network",
      "Water well at Zizencho Health Center",
      "Maternity ward development at Getche",
      "Renovation of Burat Health Center",
    ],
  },
  {
    id: "education",
    label: "Education",
    heading: "Keeping children — and especially girls — in school",
    photo: educationPhoto,
    alt: "Schoolgirls in a village supported by Engera",
    body: [
      "Health and schooling are inseparable in the villages where we work. At Galeya Rogdha, in Oromia's South West Shewa, Engera supports a preschool meal programme so the youngest children arrive at class fed, and has contributed to improvements in the school facilities themselves.",
      "Through a partnership with Adey Pads, girls receive reusable sanitary pads — as Sister Surabhila puts it, more than a thousand girls can now attend school confidently and without interruption.",
    ],
    points: [
      "Preschool meal programme at Galeya Rogdha",
      "School facility improvements in the villages we serve",
      "Reusable sanitary pads with Adey Pads",
      "Health education alongside school programmes",
    ],
  },
  {
    id: "training",
    label: "Training",
    heading: "Skills that stay in the community",
    photo: trainingPhoto,
    alt: "Nurses taking part in an Engera-supported training session",
    body: [
      "Equipment only helps if someone is trained to use it. Engera funds scholarships and clinical training for the nurses, midwives and laboratory staff who work in the facilities year-round — including neonatal resuscitation courses at Attat, the referral hospital for the region.",
      "As one clinical nurse at Burat described it, the Attat training made a real difference — especially the neonatal resuscitation skills. Training is delivered with the visiting medical teams and continues between missions.",
    ],
    points: [
      "Neonatal resuscitation training at Attat",
      "Gynaecology and obstetrics nurse training",
      "Scholarships for continuing professional development",
      "Mentoring by visiting doctors and midwives",
    ],
  },
];

function Impact() {
  const voices = testimonials.filter((t) => t.id !== "eyosiyas");

  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary-dark text-primary-foreground">
        <img
          src={healthcarePhoto}
          alt="A nurse caring for a patient at an Engera-supported health centre"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, color-mix(in oklab, var(--primary-dark) 92%, transparent) 10%, color-mix(in oklab, var(--primary-dark) 45%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:py-28 lg:px-8">
          <Reveal>
            <p className="eyebrow text-accent-light">Our impact</p>
            <h1 className="display-xl mt-5 text-4xl md:text-5xl">
              A solar panel. A trained midwife. A lab that works all day.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              Small, specific improvements change what a rural clinic can do. Here is where your
              support goes — and what it has already made possible.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20 lg:px-8">
        <Tabs defaultValue="healthcare">
          <TabsList className="h-auto flex-wrap gap-1 bg-secondary p-1">
            {pillars.map((pillar) => (
              <TabsTrigger
                key={pillar.id}
                value={pillar.id}
                className="cursor-pointer px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {pillar.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {pillars.map((pillar) => (
            <TabsContent key={pillar.id} value={pillar.id} className="mt-10">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
                <div>
                  <h2 className="font-display text-3xl leading-tight text-primary md:text-4xl">
                    {pillar.heading}
                  </h2>
                  {pillar.body.map((p) => (
                    <p key={p} className="mt-5 text-base leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                  <ul className="mt-8 space-y-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-primary">
                        <span aria-hidden className="mt-1.5 size-2 shrink-0 bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  src={pillar.photo}
                  alt={pillar.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover shadow-editorial"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 lg:px-8">
          <Reveal>
            <p className="eyebrow text-accent-light">By the numbers</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">The scale of the work</h2>
            <div className="mt-12 [&_.rule-accent]:border-accent-light [&_p]:text-primary-foreground">
              <StatGrid stats={ANNUAL_STATS} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Voices</p>
          <h2 className="mt-4 font-display text-3xl text-primary md:text-4xl">
            From the staff and communities we work with
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {voices.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 60}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
        <ScrollVideo
          src="/videos/impact.mp4"
          poster="/videos/impact-poster.jpg"
          aspectClassName="aspect-[697/360]"
          className="mt-12 shadow-editorial"
        />
      </section>

      <section className="relative overflow-hidden bg-primary">
        <img
          src={communityPhoto}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-accent">2025 Annual Report</p>
            <h2 className="mt-4 font-display text-3xl text-primary-foreground md:text-4xl">
              Download Our Annual Impact Report
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              A detailed look at the patients served, deliveries attended and communities reached
              across our eight facilities in 2025.
            </p>
            <Button
              asChild
              variant="donate"
              size="lg"
              className="mt-8 rounded-full px-8 text-sm"
            >
              <a href="#" download>
                Download 2025 Report
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
