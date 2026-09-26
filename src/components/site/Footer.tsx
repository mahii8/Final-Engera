import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/site/Newsletter";
import { BrandLogo } from "@/components/site/BrandLogo";
import { DONATE_URL, NAV_LINKS, ORG, SOCIAL_LINKS } from "@/lib/site";
import { facilities } from "@/data/facilities";
import { IMPACT_NUMBERS } from "@/lib/site";

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
} as const;

export function Footer() {
  return (
    <footer className="site-footer bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <BrandLogo light className="[&_img]:h-10" usaClassName="text-primary-foreground" />
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/75">
            A nonprofit supporting {IMPACT_NUMBERS.facilities} rural health facilities serving
            more than 230,000 people each year in Ethiopia's Gurage Zone and Oromia's South
            West Shewa.
          </p>
          <Button asChild variant="donate" className="mt-6">
            <a href={DONATE_URL} target="_blank" rel="noreferrer">
              Donate today
            </a>
          </Button>

          <div className="mt-8">
            <p className="eyebrow text-accent-light">Newsletter</p>
            <p className="mt-3 max-w-sm text-sm text-primary-foreground/75">
              Occasional updates from the facilities we support.
            </p>
            <NewsletterForm className="mt-4 max-w-sm" />
          </div>

          <div className="mt-8 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center border border-primary-foreground/25 text-primary-foreground/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-light hover:text-accent-light"
                >
                  <Icon className="size-5" aria-hidden />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow text-accent-light">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-primary-foreground/80 transition-colors hover:text-accent-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-8 text-accent-light">Engera worldwide</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={ORG.uk}
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground/80 transition-colors hover:text-accent-light"
              >
                Engera UK
              </a>
            </li>
            <li>
              <a
                href={ORG.sister}
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground/80 transition-colors hover:text-accent-light"
              >
                Engera (Italy)
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-accent-light">Facilities</p>
          <ul className="mt-4 space-y-2 text-sm">
            {facilities.map((f) => (
              <li key={f.slug}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: f.slug }}
                  className="text-primary-foreground/80 transition-colors hover:text-accent-light"
                >
                  {f.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Engera USA. All rights reserved.</p>
          <p>
            {ORG.email} · Sister organization of{" "}
            <a
              href={ORG.sister}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-accent-light"
            >
              Engera
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
