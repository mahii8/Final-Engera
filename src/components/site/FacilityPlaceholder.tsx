import { cn } from "@/lib/utils";

/**
 * Navy placeholder used where no real photograph of a facility exists yet.
 * Intentionally graphic — we never substitute generic stock photography.
 */
export function FacilityPlaceholder({
  name,
  region,
  className,
  size = "md",
}: {
  name: string;
  region?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const initials = name
    .split(" ")
    .filter((w) => !["Health", "Center", "Clinic"].includes(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div
      role="img"
      aria-label={`${name} — photograph not yet available`}
      className={cn(
        "relative flex h-full w-full flex-col justify-between overflow-hidden bg-primary text-primary-foreground",
        size === "sm" ? "p-4" : size === "lg" ? "p-8" : "p-6",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--primary-light), transparent 60%), radial-gradient(circle at 85% 80%, var(--accent-dark), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--cream) 0 1px, transparent 1px 14px)",
        }}
      />
      <span
        aria-hidden
        className={cn(
          "relative font-display leading-none text-accent-light",
          size === "sm" ? "text-3xl" : size === "lg" ? "text-6xl" : "text-5xl",
        )}
      >
        {initials}
      </span>
      <span className="relative eyebrow text-primary-foreground/70">
        {region ? `${region} · ` : ""}Photo coming soon
      </span>
    </div>
  );
}
