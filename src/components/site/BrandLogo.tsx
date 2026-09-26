import { cn } from "@/lib/utils";
import engeraLogo from "@/assets/brand/engera-logo.png";

export function BrandLogo({
  className,
  usaClassName,
  light = false,
}: {
  className?: string;
  usaClassName?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-end gap-2", className)}>
      <img src={engeraLogo} alt="Engera" className="h-9 w-auto" />
      <span
        className={cn(
          "mb-0.5 text-[0.65rem] font-bold uppercase tracking-[0.2em]",
          light ? "text-primary-foreground" : "text-primary",
          usaClassName,
        )}
      >
        USA
      </span>
    </span>
  );
}