export const DONATE_URL = "https://engera.beaconforms.com/form/212e5fb2";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/impact", label: "Impact" },
  { to: "/projects", label: "Projects" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export const ORG = {
  name: "Engera USA",
  tagline: "Everyone has a right to access quality health care.",
  email: "lydia.engera@gmail.com",
  region: "Gurage Zone & Oromia's South West Shewa, Ethiopia",
  sister: "https://www.engera.org",
  uk: "https://www.engerauk.com",
};

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/engera-ngo" },
  { label: "Instagram", href: "https://www.instagram.com/forengera/" },
  { label: "Facebook", href: "https://www.facebook.com/forengera/" },
] as const;

/**
 * Confirmed figures — single source of truth for the whole site.
 * FY2025 figures come from the Ethiopian Catholic Church Social and
 * Development Commission plan vs. achievement data for the 8 facilities.
 * `peopleServedAllTime` is a cumulative since-founding total and must only be
 * used for the all-time "People served" counter.
 */
export const IMPACT_NUMBERS = {
  facilities: 8,
  peopleServedAllTime: 500000,
  annualCatchment: 230000,
  annualPatients: 239000,
  safeDeliveries: 2600,
  zizenchoPatients: 30000,
  foundedYear: 2007,
};

/** Home stats strip — all-time counter plus founding year. */
export const HOME_STATS = [
  {
    value: IMPACT_NUMBERS.facilities,
    label: "Health facilities supported",
    note: "Gurage Zone and Oromia's South West Shewa",
  },
  {
    value: IMPACT_NUMBERS.peopleServedAllTime,
    suffix: "+",
    label: "People served",
    note: "All-time, since Engera was founded",
  },
  {
    value: IMPACT_NUMBERS.zizenchoPatients,
    suffix: "+",
    label: "Patients a year at Zizencho",
    note: "In a village with no road in 2008",
  },
  {
    value: IMPACT_NUMBERS.foundedYear,
    plain: true,
    label: "Working since",
    note: "Founded by medical volunteers from Tuscany",
  },
];

/** Current annual reach (FY2025). */
export const ANNUAL_STATS = [
  {
    value: IMPACT_NUMBERS.annualCatchment,
    suffix: "+",
    label: "People in our catchment areas",
    note: "Current annual reach across 8 facilities (FY2025)",
  },
  {
    value: IMPACT_NUMBERS.annualPatients,
    suffix: "+",
    label: "Patients treated a year",
    note: "Outpatient visits achieved in FY2025",
  },
  {
    value: IMPACT_NUMBERS.safeDeliveries,
    suffix: "+",
    label: "Safe deliveries (2025)",
    note: "Mothers supported through delivery",
  },
  {
    value: IMPACT_NUMBERS.facilities,
    label: "Supported health facilities",
    note: "Gurage Zone and Oromia's South West Shewa",
  },
];
