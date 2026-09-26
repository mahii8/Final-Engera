import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { ScrollVideo } from "@/components/site/ScrollVideo";
import { DONATE_URL, ORG } from "@/lib/site";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Engera USA" },
      {
        name: "description",
        content:
          "Donate, volunteer or partner with Engera USA to strengthen rural health care in Ethiopia's Gurage Zone and Oromia region.",
      },
      { property: "og:title", content: "Get Involved — Engera USA" },
      {
        property: "og:description",
        content: "Three ways to help: give, volunteer your skills, or partner with us.",
      },
    ],
  }),
  component: GetInvolved,
});

const ways = [
  {
    tone: "donate" as const,
    kicker: "Give",
    title: "Donate",
    body: "Donations fund the essentials: medicines and diagnostics, solar power, maternity equipment and staff training. Every gift goes to the facilities themselves.",
    points: [
      "One-off or recurring gifts",
      "US tax-deductible through Engera USA",
      "Restricted giving to a specific facility on request",
    ],
    cta: { label: "Donate now", href: DONATE_URL },
  },
  {
    tone: "join" as const,
    kicker: "Serve",
    title: "Volunteer",
    body: "Doctors, nurses, midwives and technical volunteers travel to our facilities to support clinical work, training and outreach. Skilled remote volunteering is welcome too.",
    points: [
      "Clinical placements and visiting teams",
      "Training and mentoring for local staff",
      "Remote support: grants, translation, data, design",
    ],
    cta: { label: "Email Us", href: `mailto:${ORG.email}?subject=Volunteering` },
  },
  {
    tone: "partner" as const,
    kicker: "Build",
    title: "Partner",
    body: "We work with foundations, companies, hospitals and faith communities — from solar installations with NextEnergy Foundation to keeping girls in school with Adey Pads.",
    points: [
      "Corporate and foundation partnerships",
      "Institutional and hospital collaborations",
      "Community fundraising and events",
    ],
    cta: { label: "Start a conversation", href: `mailto:${ORG.email}?subject=Partnership` },
  },
];

function GetInvolved() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 lg:px-8">
          <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-accent">Get involved</p>
              <h1 className="display-xl mt-5 text-4xl text-primary md:text-5xl">
                There are three ways to make this work possible.
              </h1>
            </div>
            <p className="rule-accent text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether you donate, use your skills on the ground, or partner with us as an
              organisation, your support helps provide care for mothers and children in rural
              Ethiopia.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-2 md:pb-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {ways.map((way) => (
            <article
              key={way.title}
              className={
                way.tone === "donate"
                  ? "card-lift flex flex-col border border-border bg-card p-8 shadow-card"
                  : way.tone === "join"
                    ? "card-warm flex flex-col rounded-2xl border border-accent/25 bg-accent/[0.06] p-8"
                    : "card-lift flex flex-col rounded-2xl border border-primary/20 bg-primary p-8 text-primary-foreground shadow-editorial"
              }
            >
              <p
                className={
                  way.tone === "donate"
                    ? "eyebrow text-accent"
                    : way.tone === "join"
                      ? "eyebrow text-accent-dark"
                      : "eyebrow text-accent-light"
                }
              >
                {way.kicker}
              </p>
              <h2
                className={
                  way.tone === "partner"
                    ? "mt-3 font-display text-3xl"
                    : "mt-3 font-display text-3xl text-primary"
                }
              >
                {way.title}
              </h2>
              <p
                className={
                  way.tone === "partner"
                    ? "mt-4 text-sm leading-relaxed text-primary-foreground/80"
                    : "mt-4 text-sm leading-relaxed text-muted-foreground"
                }
              >
                {way.body}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {way.points.map((point) => (
                  <li
                    key={point}
                    className={
                      way.tone === "partner"
                        ? "flex gap-3 text-sm text-primary-foreground/90"
                        : "flex gap-3 text-sm text-primary"
                    }
                  >
                    <span
                      aria-hidden
                      className={
                        way.tone === "donate"
                          ? "mt-1.5 size-2 shrink-0 bg-accent"
                          : way.tone === "join"
                            ? "mt-1.5 size-2 shrink-0 rounded-full bg-accent-dark"
                            : "mt-1.5 size-2 shrink-0 rounded-full bg-accent-light"
                      }
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={way.tone === "donate" ? "donate" : "editorial"}
                className={
                  way.tone === "donate"
                    ? "mt-8"
                    : way.tone === "join"
                      ? "mt-8 rounded-full border-accent-dark text-accent-dark hover:bg-accent-dark hover:text-accent-foreground"
                      : "mt-8 rounded-full border-primary-foreground/50 text-primary-foreground hover:border-accent-light hover:text-accent-light"
                }
              >
                <a
                  href={way.cta.href}
                  {...(way.cta.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {way.cta.label}
                </a>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center lg:px-8">
          <ScrollVideo
            src="/videos/get-involved.mp4"
            poster="/videos/get-involved-poster.jpg"
            aspectClassName="aspect-[37/60]"
            maxHeightClassName="h-[55vh] md:h-[65vh]"
          />
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Not sure where to start?</h2>
            <p className="mt-4 text-primary-foreground/80">
              Tell us a little about what you'd like to do and we'll point you to the facility
              or programme where it will matter most.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="donate">
                <a href={DONATE_URL} target="_blank" rel="noreferrer">
                  Donate
                </a>
              </Button>
              <Button
                asChild
                variant="editorial"
                className="border-primary-foreground/40 text-primary-foreground hover:border-accent-light hover:text-accent-light"
              >
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
