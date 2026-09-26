import { useState } from "react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

/**
 * Newsletter signup. No mailing-list backend is connected yet, so the form
 * confirms locally and stores nothing.
 */
export function NewsletterForm({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const [email, setEmail] = useState("");

  return (
    <form
      className={cn("flex flex-col gap-3 sm:flex-row", className)}
      onSubmit={(event) => {
        event.preventDefault();
        toast.success("Thank you — we'll be in touch with our next update.");
        setEmail("");
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className={cn(
          "h-11 flex-1 border px-4 text-sm transition-colors focus:outline-none",
          tone === "dark"
            ? "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent-light"
            : "border-border bg-background text-primary placeholder:text-muted-foreground focus:border-accent",
        )}
      />
      <button
        type="submit"
        className="h-11 shrink-0 cursor-pointer bg-accent px-5 text-xs font-semibold uppercase tracking-wide text-accent-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark"
      >
        Subscribe
      </button>
    </form>
  );
}
