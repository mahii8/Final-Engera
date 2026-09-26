import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DONATE_URL, NAV_LINKS } from "@/lib/site";

function Wordmark() {
  return (
    <Link to="/" className="group" aria-label="Engera USA home">
      <BrandLogo className="transition-transform duration-200 group-hover:scale-[1.03]" />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:h-20 lg:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-primary/75 transition-colors hover:text-accent"
              activeProps={{ className: "text-primary border-b-2 border-accent pb-0.5" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="donate" size="sm" className="hidden sm:inline-flex">
            <a href={DONATE_URL} target="_blank" rel="noreferrer">
              Donate
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="quiet" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-background">
              <SheetTitle className="font-display text-xl text-primary">Menu</SheetTitle>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/60 py-3 font-display text-lg text-primary"
                    activeProps={{ className: "text-accent" }}
                    activeOptions={{ exact: link.to === "/" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild variant="donate" className="mt-6 w-full">
                <a href={DONATE_URL} target="_blank" rel="noreferrer">
                  Donate
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
