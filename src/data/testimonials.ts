import voicesPhoto1 from "@/assets/photos/voices-1.jpg";
import voicesPhoto2 from "@/assets/photos/voices-2.jpg";
import voicesPhoto3 from "@/assets/photos/voices-3.jpg";
import voicesPhoto4 from "@/assets/photos/voices-4.jpg";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title?: string;
  facilitySlug?: string;
  photo?: string;
  photoAlt?: string;
  photos?: { src: string; alt: string }[];
  source?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "eyosiyas",
    quote:
      "Since its official founding in 2007, Engera has worked closely with the Gurage community, including the area where my family comes from. During my visit to Zizencho, I saw how local teams, supported by Engera, have brought dependable healthcare closer to families who once faced long and difficult journeys for treatment.",
    name: "Dr Eyosiyas Arega",
    title: "Country Advisor",
    facilitySlug: "zizencho-health-center",
  },
  {
    id: "solomon",
    quote:
      "Before the solar system was installed, we often had to stop working for half the day because the electricity would go out. Now, with solar energy, we can work properly at any hour of the day or night.",
    name: "Mr Solomon Shurga",
    title: "Laboratory Assistant",
  },
  {
    id: "rachel",
    quote:
      "My name is Rachel, and I'm a clinical nurse at Burat Health Center. The Attat training made a real difference for me — especially the neonatal resuscitation skills.",
    name: "Ms Rachel",
    title: "Clinical Nurse",
    facilitySlug: "burat-health-center",
  },
  {
    id: "surabhila",
    quote:
      "Engera partnering with Adey Pads has made a big difference for our school girls. Now they have proper pads, and more than a thousand girls can attend school confidently and without interruption.",
    name: "Sister Surabhila",
    facilitySlug: "burat-health-center",
    photos: [
      { src: voicesPhoto1, alt: "Engera team members visiting the Adey Pads workshop" },
      { src: voicesPhoto2, alt: "Girls sewing reusable sanitary pads at the Adey Pads workshop" },
      { src: voicesPhoto3, alt: "Finished reusable sanitary pads being packed for delivery" },
      { src: voicesPhoto4, alt: "Delivering reusable sanitary pads to schools" },
    ],
  },
  {
    id: "addis",
    quote:
      "I work in the ANC, delivery, and vaccination services. Our main challenge has been the power shortage — even basic things like light were not available. Even yesterday night, a mother came to give birth and the power went off. I had to use her own torchlight to help deliver the baby. Thankfully, the baby was strong and healthy, but without electricity we cannot do our work properly, especially when it comes to mothers and children. Now, with this solar project, all of these problems will be solved.",
    name: "Addis",
    title: "Midwife / Mother & Child Representative",
    facilitySlug: "shebraber-health-center",
    source: "Engera x NextEnergy Foundation solar installation video",
  },
];

export function testimonialsForFacility(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.facilitySlug === slug);
}
