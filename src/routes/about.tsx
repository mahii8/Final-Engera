import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { ScrollVideo } from "@/components/site/ScrollVideo";
import { DONATE_URL } from "@/lib/site";
import { teamGroups } from "@/data/team";
import communityPhoto from "@/assets/photos/community.jpg";
import staffPhoto from "@/assets/photos/staff.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Engera USA" },
      {
        name: "description",
        content:
          "Founded in 2007 by medical volunteers, Engera works with communities in Ethiopia's Gurage Zone and Oromia's South West Shewa to improve maternal and child health.",
      },
      { property: "og:title", content: "About Us — Engera USA" },
      {
        property: "og:description",
        content:
          "Our story, mission and the people behind Engera USA's work in rural Ethiopia.",
      },
      { property: "og:url", content: "https://engra-heart-map.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://engra-heart-map.lovable.app/about" }],
  }),
  component: About,
});

const timeline = [
  {
    year: "Before 2007",
    title: "How it began",
    body: "Medical volunteers from Tuscany begin providing medical assistance and training to orphanages in Addis Ababa. The name Engera refers to the Ethiopian bread made from teff flour.",
  },
  {
    year: "2007",
    title: "Engera is officially founded",
    body: "Engera is formally established and shifts its support to the Gurage Zone, collaborating with local, Italian and international partners — with a particular focus on maternal and child health.",
  },
  {
    year: "2008",
    title: "Zizencho Health Center is built",
    body: "A new health center rises in an isolated highland village with no road, electricity or running water. It grows into one of the busiest facilities in the network.",
  },
  {
    year: "2014 – 2021",
    title: "The network grows",
    body: "Shebraber (2014) and San Marco (2021) join the network, alongside long-running support for Burat, Gura Megenesse and Getche.",
  },
  {
    year: "Other works",
    title: "Into Oromia: the Galeya Rogdha clinic",
    body: "The clinic at Galeya Rogdha, in Oromia's South West Shewa zone, was developed with Engera's support — bringing preventive care, infant immunisation and pre/post-natal services to a remote village, alongside a school programme.",
  },
];

function About() {
  return (
    <>
      {/* Opening — editorial split, distinct from the home banner */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:px-8">
          <Reveal>
            <p className="eyebrow text-accent">About us</p>
            <h1 className="display-xl mt-5 text-4xl text-primary md:text-5xl">
              Working with — not for — the communities we serve.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Officially founded in 2007, Engera marks twenty years next year. Engera USA is the
              sister organisation of Engera; together we support eight health facilities caring
              for more than 230,000 people each year in Ethiopia's Gurage Zone and Oromia's
              South West Shewa.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ScrollVideo
              src="/videos/about.mp4"
              poster="/videos/about-poster.jpg"
              aspectClassName="aspect-[107/180]"
              maxHeightClassName="h-[55vh] md:h-[65vh]"
              className="shadow-editorial"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <Reveal className="grid gap-10 md:grid-cols-2">
          <div className="card-lift border border-border bg-card p-8 shadow-card">
            <p className="eyebrow text-accent">Our vision</p>
            <p className="mt-4 font-display text-2xl leading-snug text-primary">
              Healthy communities in the Gurage Zone and the parts of Oromia where we work, and
              access to quality health care for all who need it.
            </p>
          </div>
          <div className="card-lift border border-border bg-primary p-8 text-primary-foreground shadow-card">
            <p className="eyebrow text-accent-light">Our mission</p>
            <p className="mt-4 font-display text-2xl leading-snug">
              Engera improves the health of women and children in Ethiopia's Gurage Zone and
              Oromia region by partnering with local communities to promote well-being and
              prevent disease.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <img
            src={communityPhoto}
            alt="Community members gathered outside an Engera-supported health center"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover shadow-editorial"
          />
          <div>
            <p className="eyebrow text-accent">What we believe</p>
            <h2 className="mt-4 font-display text-3xl text-primary md:text-4xl">
              Good health is the foundation of a thriving society.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Every activity we undertake is done in collaboration with the Ethiopian people.
              Our goal is to build skills and knowledge that contribute to a healthier
              population, supported by quality and accessible health care.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The association works closely with the Ethiopian Catholic Church (Eparchy of
              Emdbir), but supports patients of all ethnic and religious backgrounds.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <Reveal>
            <p className="eyebrow text-accent">Our history</p>
            <h2 className="mt-4 font-display text-3xl text-primary md:text-4xl">
              From Addis Ababa orphanages to a network of rural health centers
            </h2>
          </Reveal>

          <ol className="mt-12 space-y-10 border-l border-border pl-6 md:pl-10">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.year} delay={i * 60} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[1.85rem] top-2 size-3 rounded-full bg-accent md:-left-[2.85rem]"
                />
                <p className="eyebrow text-accent">{item.year}</p>
                <h3 className="mt-2 font-display text-2xl text-primary">{item.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-16 max-w-3xl border-t border-border pt-10">
            <p className="eyebrow text-accent">Where we are today</p>
            <h2 className="mt-4 font-display text-3xl text-primary md:text-4xl">
              A growing network, not a single project
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Today, Engera continues to support a growing network of health facilities across
              the Gurage Zone and Oromia — providing maternal and child health care, training
              local medical staff, and investing in the community health infrastructure that
              keeps those services running.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our work spans multiple sites at once: medicines and diagnostics, maternity and
              tuberculosis wards, solar power and clean water, scholarships and clinical
              training, and education programmes in the villages around the facilities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="relative isolate overflow-hidden bg-primary-dark text-primary-foreground">
        <img
          src={staffPhoto}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <Reveal>
            <p className="eyebrow text-accent-light">Our team</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">The people behind the care</h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/80">
              Clinicians, business leaders and fundraisers in the US, Italy, the UK and
              Ethiopia — most of whom have travelled to the facilities themselves.
            </p>
          </Reveal>

          <div className="mt-16 space-y-16">
            {teamGroups.map((group) => (
              <div key={group.id}>
                <Reveal>
                  <p className="eyebrow text-accent-light">{group.label}</p>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl">{group.heading}</h3>
                </Reveal>
                <div
                  className={
                    group.members.length === 1
                      ? "mt-8 grid gap-8 md:grid-cols-[220px_1fr] md:items-start"
                      : "mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                  }
                >
                  {group.members.map((member, i) => (
                    <Reveal
                      key={member.name}
                      as="article"
                      delay={i * 60}
                      className={
                        group.members.length === 1
                          ? "contents"
                          : "card-lift border border-primary-foreground/15 bg-primary-foreground/5 p-6"
                      }
                    >
                      {group.members.length === 1 ? (
                        <>
                          <div>
                            {member.photo ? (
                              <img
                                src={member.photo}
                                alt={member.name}
                                loading="lazy"
                                className="aspect-square w-full max-w-[220px] rounded-full object-cover ring-1 ring-primary-foreground/20"
                              />
                            ) : (
                              <div className="flex aspect-square w-full max-w-[220px] items-center justify-center border border-primary-foreground/20 bg-primary-foreground/5 font-display text-4xl text-accent-light">
                                {member.name
                                  .split(" ")
                                  .map((part) => part[0])
                                  .slice(0, 2)
                                  .join("")}
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-display text-2xl">{member.name}</h4>
                            <p className="eyebrow mt-2 text-accent-light">{member.role}</p>
                            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80">
                              {member.bio}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          {member.photo ? (
                            <img
                              src={member.photo}
                              alt={member.name}
                              loading="lazy"
                              className="aspect-square w-full object-cover"
                            />
                          ) : (
                            <div className="flex aspect-square w-full items-center justify-center border border-primary-foreground/20 bg-primary-foreground/5 font-display text-4xl text-accent-light">
                              {member.name
                                .split(" ")
                                .map((part) => part[0])
                                .slice(0, 2)
                                .join("")}
                            </div>
                          )}
                          <h4 className="mt-5 font-display text-xl">{member.name}</h4>
                          <p className="eyebrow mt-2 text-accent-light">{member.role}</p>
                          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                            {member.bio}
                          </p>
                        </>
                      )}
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Reveal className="mt-16 flex flex-wrap gap-3">
            <Button asChild variant="donate">
              <a href={DONATE_URL} target="_blank" rel="noreferrer">
                Support our work
              </a>
            </Button>
            <Button
              asChild
              variant="editorial"
              className="border-primary-foreground/40 text-primary-foreground hover:border-accent-light hover:text-accent-light"
            >
              <Link to="/get-involved">Get involved</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
