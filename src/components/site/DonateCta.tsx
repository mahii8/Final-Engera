import { Button } from "@/components/ui/button";
import { DONATE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Navy donate banner that sits flush above the footer. The `donate-cta` class
 * lets the footer drop its top margin and add a hairline divider site-wide.
 */
export function DonateCta({
  heading = "Your gift keeps the lights on.",
  body = "Solar panels, safe deliveries, medicines and training — funded by people who believe rural health care shouldn't be a lottery.",
  label = "Donate to Engera USA",
  className,
}: {
  heading?: string;
  body?: string;
  label?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "donate-cta group bg-primary text-primary-foreground transition-[background-color,box-shadow] duration-300 hover:bg-primary-light hover:shadow-[inset_0_0_80px_rgba(255,255,255,0.08)]",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:py-20 lg:px-8">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">{heading}</h2>
          <p className="mt-3 max-w-xl text-primary-foreground/80">{body}</p>
        </div>
        <Button
          asChild
          variant="donate"
          size="lg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          <a href={DONATE_URL} target="_blank" rel="noreferrer">
            {label}
          </a>
        </Button>
      </div>
    </section>
  );
}
