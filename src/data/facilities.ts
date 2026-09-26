import buratPhoto from "@/assets/photos/clinic-visit.jpg";
import shebraberPhoto from "@/assets/photos/shebraber-site.jpg";
import villageHillsidePhoto from "@/assets/photos/zizencho-site.jpg";
import avenueRoadPhoto from "@/assets/photos/megenesse-site.jpg";
import staffChildPhoto from "@/assets/photos/getche-site.jpg";
import healthcareRealPhoto from "@/assets/photos/healthcare-real.jpg";
import educationRealPhoto from "@/assets/photos/galeya-site.jpg";
import educationKidsPhoto from "@/assets/photos/yewere-site.jpg";

export type Facility = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string[];
  region: string;
  locationNote: string;
  coordinates: [number, number];
  photo?: string;
  photoAlt?: string;
  facts: { label: string; value: string }[];
  /** Specific work carried out at this facility. */
  work: string[];
  /** FY2025 figures from the ECC-SDC plan vs. achievement data. */
  catchment?: number;
  opdPatients?: number;
};

export const MAP_CENTER: [number, number] = [8.24, 37.95];

/** Wide views used for the Africa → Ethiopia → region intro animation. */
export const AFRICA_VIEW: { center: [number, number]; zoom: number } = {
  center: [3, 21],
  zoom: 3,
};

export const ETHIOPIA_VIEW: { center: [number, number]; zoom: number } = {
  center: [9.1, 40.3],
  zoom: 6,
};

export const MAP_DISCLAIMER = "Pin locations are drawn from real GPS coordinates.";

export const facilities: Facility[] = [
  {
    slug: "burat-health-center",
    name: "Burat Health Centre",
    shortDescription:
      "Long-supported centre recently renovated, with solar panels installed.",
    description: [
      "Supported since the early days through regular doctor and volunteer visits, medicines, diagnostic equipment, training and ongoing operational support. In recent years, we've helped strengthen the centre further with solar power, improved facilities and new medical equipment, including an ultrasound machine.",
      "Burat serves four local communities, three of which have already been recognised by the government as ‘model kebeles’ for hygiene and sanitation, with the fourth preparing to follow.",
    ],
    region: "Gurage Zone",
    locationNote: "Near Endibir, Gurage Zone",
    coordinates: [7.9968, 37.9202],
    photo: buratPhoto,
    photoAlt: "Engera staff and volunteers at Burat Health Centre in the Gurage Zone",
    catchment: 19000,
    opdPatients: 50000,
    facts: [
      { label: "Engera support", value: "Since the early days" },
      { label: "Catchment (2025)", value: "19,000+ people" },
      { label: "Patients treated (2025)", value: "50,000+ outpatient visits" },
    ],
    work: [
      "Outpatient consultations, laboratory diagnostics, antenatal care and immunisation — 50,000+ outpatient visits in 2025, the busiest of the Engera-supported health centres relative to its size.",
      "Medicines, diagnostic tools and operational support supplied through Engera, alongside regular doctor and volunteer visits.",
      "Clinical nurses from Burat have taken part in Engera-funded training at Attat, including neonatal resuscitation used in the delivery room straight away.",
      "Recent building renovation and a solar installation now keep lighting, the cold chain and the laboratory running day and night.",
      "The reusable sanitary pad programme run with Adey Pads reaches school girls in the surrounding community.",
    ],
  },
  {
    slug: "zizencho-health-center",
    name: "Zizencho Health Centre",
    shortDescription:
      "Built in 2008 in a village with no road; now treats more than 30,000 patients a year.",
    description: [
      "Built in 2008 with Engera's support in an isolated highland village that had no road, electricity, or running water.",
      "It now treats more than 30,000 patients a year, with a pre/postnatal ward, a TB unit, a water well and solar panels.",
    ],
    region: "Gurage Zone",
    locationNote: "Highland village, Gurage Zone",
    coordinates: [7.957172, 38.036767],
    photo: villageHillsidePhoto,
    photoAlt: "Community members gathered outside Zizencho Health Centre",
    catchment: 17000,
    opdPatients: 28000,
    facts: [
      { label: "Built", value: "2008" },
      { label: "Catchment (2025)", value: "17,000+ people" },
      { label: "Patients treated (2025)", value: "28,000+ outpatient visits" },
    ],
    work: [
      "Antenatal, delivery and postnatal care in a dedicated pre/postnatal ward — the reason families here no longer travel for hours to give birth safely.",
      "A tuberculosis unit providing diagnosis, treatment and follow-up across the surrounding highland villages.",
      "28,000+ outpatient visits recorded in 2025 for a catchment population of 17,000+ — people travel here from beyond the immediate area.",
      "A water well on site, so the facility no longer depends on water carried in from outside.",
      "Solar panels supplying stable power for lighting, the laboratory and refrigerated vaccines.",
    ],
  },
  {
    slug: "megenesse-health-center",
    name: "Gura Megenasse Health Centre",
    shortDescription:
      "One of the region's first clinics, founded by CUAMM just over 7km from Endibir.",
    description: [
      "One of the first clinics in the region, founded by CUAMM (Doctors for Africa), just over 7km from Endibir.",
      "It includes a tuberculosis unit and traditional Toukul-style buildings, plus recently installed solar panels.",
    ],
    region: "Gurage Zone",
    locationNote: "7km from Endibir, Gurage Zone",
    coordinates: [8.133475, 37.870347],
    photo: avenueRoadPhoto,
    photoAlt: "Engera medical volunteers with patients at Gura Megenasse Health Centre",
    catchment: 23000,
    opdPatients: 29000,
    facts: [
      { label: "Founded by", value: "CUAMM (Doctors for Africa)" },
      { label: "Catchment (2025)", value: "23,000+ people" },
      { label: "Patients treated (2025)", value: "29,000+ outpatient visits" },
    ],
    work: [
      "General outpatient care and a tuberculosis unit serving 23,000+ people within reach of Endibir — 29,000+ outpatient visits in 2025.",
      "Immunisation and mother-and-child services, supported by medicines and diagnostic equipment supplied through Engera.",
      "Traditional Toukul-style buildings maintained and adapted for clinical use rather than replaced.",
      "A recent solar installation removing the daily interruptions caused by grid power cuts.",
    ],
  },
  {
    slug: "shebraber-health-center",
    name: "Shebraber Health Centre",
    shortDescription: "Built in 2014, with a TB unit and solar power added since.",
    description: [
      "Built in 2014 with Engera's support. Since then, we've helped add a tuberculosis unit and a full solar power system, giving the centre reliable, sustainable power day and night.",
      "We're now in the process of expanding the centre to meet the growing needs of the community.",
    ],
    region: "Gurage Zone",
    locationNote: "Gurage Zone",
    coordinates: [8.040725, 37.783832],
    photo: shebraberPhoto,
    photoAlt: "Shebraber Health Centre, with solar panels installed on the roof",
    catchment: 7800,
    opdPatients: 17000,
    facts: [
      { label: "Built", value: "2014" },
      { label: "Catchment (2025)", value: "7,800+ people" },
      { label: "Patients treated (2025)", value: "17,000+ outpatient visits" },
    ],
    work: [
      "Antenatal care, deliveries and vaccination services run by a small resident midwifery and nursing team — 17,000+ outpatient visits in 2025 for a catchment of 7,800+ people.",
      "A tuberculosis unit added with Engera's support after the centre opened.",
      "A full solar installation, after years of deliveries carried out by torchlight during power cuts.",
      "Ongoing supply of medicines, delivery equipment and staff training through Engera's visiting medical teams.",
    ],
  },
  {
    slug: "getche-health-center",
    name: "Getche Health Centre",
    shortDescription: "Maternity ward development, safer deliveries and nurse training.",
    description: [
      "Engera supported the development of the maternity ward, improving reception facilities for pregnant women, providing safer equipment for pregnancy and delivery, training nurses in obstetric and gynaecological care, and installing solar power to keep essential services running reliably.",
    ],
    region: "Gurage Zone",
    locationNote: "Gurage Zone",
    coordinates: [8.147091, 37.970044],
    photo: staffChildPhoto,
    photoAlt: "A Sister with a young child at Getche Health Centre",
    catchment: 10000,
    opdPatients: 18000,
    facts: [
      { label: "Focus", value: "Maternity ward development" },
      { label: "Catchment (2025)", value: "10,000+ people" },
      { label: "Patients treated (2025)", value: "18,000+ outpatient visits" },
    ],
    work: [
      "A redeveloped maternity ward with proper reception facilities for expectant mothers before and after delivery.",
      "Safer pregnancy and delivery equipment supplied to the ward.",
      "Training for gynaecology and obstetrics nurses, delivered alongside Engera's visiting clinicians.",
      "18,000+ outpatient visits in 2025 for a catchment population of 10,000+.",
      "Solar panels keeping the delivery room lit and equipment usable at any hour.",
    ],
  },
  {
    slug: "attat-hospital",
    name: "Attat Hospital",
    shortDescription:
      "The referral hospital for the region, and where staff from across the network train.",
    description: [
      "Attat is the referral hospital serving the Gurage Zone and the largest facility in the network, with a catchment population of more than 135,000 people.",
      "Nurses and midwives from the smaller health centres travel here for structured clinical training, and the most complex maternal and newborn cases are referred here.",
    ],
    region: "Gurage Zone",
    locationNote: "Attat, near Wolkite, Gurage Zone",
    coordinates: [8.126, 37.883],
    photo: healthcareRealPhoto,
    photoAlt: "Clinical staff examining a patient at a referral facility in the Gurage Zone",
    catchment: 135000,
    opdPatients: 73000,
    facts: [
      { label: "Role", value: "Referral hospital and training partner" },
      { label: "Catchment (2025)", value: "135,000+ people" },
      { label: "Patients treated (2025)", value: "73,000+ outpatient visits" },
    ],
    work: [
      "Referral care for the whole network: complicated deliveries, newborn emergencies and cases beyond the reach of a village health centre.",
      "73,000+ outpatient visits in 2025, serving a catchment population of 135,000+ people — the largest facility Engera supports.",
      "Engera-funded clinical training courses for nurses and midwives from the supported health centres, including neonatal resuscitation.",
      "Scholarships and continuing professional development for staff who then return to their own facilities.",
    ],
  },
  {
    slug: "yewere-health-center",
    name: "Yewere Health Centre",
    shortDescription:
      "A Gurage Zone health centre serving more than 16,000 people in its catchment area.",
    description: [
      "Yewere is one of the eight facilities supported through the partnership with the Ethiopian Catholic Church, serving a catchment population of 16,000+ people.",
      "It provides primary outpatient care, mother-and-child services and immunisation, backed by Engera's supply of medicines and equipment and by visiting medical teams.",
    ],
    region: "Gurage Zone",
    locationNote: "Gurage Zone",
    coordinates: [8.2, 37.92],
    photo: educationKidsPhoto,
    photoAlt: "Community members at Yewere Health Centre receiving new furniture and equipment",
    catchment: 16000,
    opdPatients: 10000,
    facts: [
      { label: "Catchment (2025)", value: "16,000+ people" },
      { label: "Patients treated (2025)", value: "10,000+ outpatient visits" },
      { label: "Focus", value: "Primary care, mother and child health" },
    ],
    work: [
      "Primary outpatient care, antenatal services and infant immunisation for a catchment population of 16,000+.",
      "10,000+ outpatient visits recorded in 2025 — one of the facilities where increasing uptake is a current priority.",
      "Medicines, diagnostics and staff support supplied through Engera and the Ethiopian Catholic Church partnership.",
    ],
  },
  {
    slug: "galeya-rogdha-clinic",
    name: "Galiye Rugda Clinic",
    shortDescription:
      "An Oromia clinic being developed into a full health centre, with a school programme alongside it.",
    description: [
      "Engera has supported Galeya for more than a decade, helping develop a clinic in this remote village in Oromia's South West Shewa zone.",
      "The goal is to bring it to the same standard as the rest of the network — focused on prevention, infant immunisation and pre/post-natal care — while supporting the village school alongside it.",
    ],
    region: "Oromia region",
    locationNote: "Near Waliso, South West Shewa Zone",
    coordinates: [8.378866, 37.721511],
    photo: educationRealPhoto,
    photoAlt: "Children at the village Engera supports alongside Galiye Rugda Clinic",
    catchment: 4500,
    opdPatients: 10000,
    facts: [
      { label: "Region", value: "Oromia, South West Shewa" },
      { label: "Catchment (2025)", value: "4,500+ people" },
      { label: "Patients treated (2025)", value: "10,000+ outpatient visits" },
    ],
    work: [
      "More than a decade of sustained partnership with the Galeya community.",
      "Preventive care, infant immunisation and pre/post-natal services for a village previously without reliable health provision.",
      "10,000+ outpatient visits in 2025 against a catchment of 4,500+ people — the clinic draws patients from well beyond its own village.",
      "Development work to bring the clinic up to the standard of the health centres in the Gurage Zone.",
      "A preschool meal programme and improvements to the village school facilities, run alongside the clinic.",
    ],
  },
];

export function getFacility(slug: string): Facility | undefined {
  return facilities.find((f) => f.slug === slug);
}
