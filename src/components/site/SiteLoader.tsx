import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/site/BrandLogo";
import heroPhoto from "@/assets/photos/hero.jpg";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const alreadySeen = window.sessionStorage.getItem("engera-intro-seen") === "true";
    if (alreadySeen) {
      setVisible(false);
      return;
    }

    window.sessionStorage.setItem("engera-intro-seen", "true");
    const exitTimer = window.setTimeout(() => setLeaving(true), 2300);
    const removeTimer = window.setTimeout(() => setVisible(false), 3200);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`site-loader ${leaving ? "is-leaving" : ""}`}
    >
      <img src={heroPhoto} alt="" className="site-loader-photo" />
      <div className="site-loader-overlay" />
      <BrandLogo light className="site-loader-logo" usaClassName="text-primary-foreground" />
    </div>
  );
}