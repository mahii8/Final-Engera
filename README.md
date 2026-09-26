# Engera Health Connect

Build a responsive nonprofit website for "Engera USA," a charity supporting rural health

centers in Ethiopia's Gurage Zone and Oromia region. Style: warm, editorial, trustworthy —

think charity: water meets a small NGO annual report. Serif display headings (Playfair

Display), clean sans body text (Inter).

COLORS

- Navy (primary): #1B2E4B, light #28406B, dark #101E33

- Orange (accent/CTA): #F05924, light #FF7A47, dark #C7431A

- Cream (background): #FFFDF4

PAGES

1. Home — hero, mission statement, 3–4 highlight stats, CTA to donate

2. About Us — org overview, team, mission/history

3. Impact — tabbed section (Healthcare / Infrastructure / Education-style tabs), a

   stats counter block, and a testimonials section (quote, name, title, and — if the

   testimonial is tied to a specific facility — a "See this facility" link)

4. Projects — an interactive map at the top (pins for each health facility, click a

   pin to open a popup with name + short description + "View details" link), then a

   grid of facility cards below it. Each card links to its own dynamic detail page.

5. Facility detail (dynamic route per facility, e.g. /projects/[slug]) — big photo,

   full description, any testimonials tied to that facility, and a small map showing

   just that one pin

6. Get Involved — ways to help (donate, volunteer, partner)

7. Contact — contact form + org info

INTERACTIVE MAP REQUIREMENTS

- Use a real map (Leaflet/OpenStreetMap or Mapbox), not a static image

- Pins should be custom-colored (orange #F05924) to match brand, not default markers

- Clicking a pin opens a popup with facility name, a one-line description, and a link

  to that facility's detail page

- Below/near the map, show a small disclaimer: "Pin locations are approximate — placed

  near the nearest mapped town, since exact GPS for these village-level facilities

  isn't publicly available."

- Map should recenter/zoom smoothly when a facility is selected from a list

CONTENT — DONOR CTA

Donate button/link should point to: https://engera.beaconforms.com/form/212e5fb2

(verify this is still active before final launch)

CONTENT — HEALTH FACILITIES (used for both the map pins and the /projects grid)

1. Burat Health Center — "Supported since the early days through regular doctor and

   volunteer visits, medicine and diagnostic tools, and ongoing operational

   assistance. Recently renovated with solar panels installed." [REAL PHOTOS AVAILABLE]

   Approx location: near Endibir, Gurage Zone (8.084, 37.968)

2. Zizencho Health Center — "Built in 2008 with Engera's support in an isolated

   highland village that had no road, electricity, or running water. Today it treats

   around 30,000 patients a year, with a pre/postnatal ward, TB unit, water well, and

   solar panels." Approx location: (8.151, 37.901)

3. Megenesse Health Center — "One of the first clinics in the region, founded by

   CUAMM (Doctors for Africa), just over 7km from Endibir. Includes a tuberculosis

   unit and traditional Toukul-style buildings, plus recently installed solar

   panels." Approx location: (8.168, 37.978)

4. Shebraber Health Center — "Built in 2014 with Engera's support. Since then,

   contributed to a tuberculosis unit and solar panels for stable, sustainable

   power." Approx location: (8.098, 37.889)

5. Getche Health Center — "Engera supported the development of the maternity ward —

   improving reception facilities for pregnant women, providing safer

   pregnancy/delivery equipment, training gynaecology and obstetrics nurses, and

   installing solar panels." Approx location: (8.140, 37.960)

6. San Marco Health Center — "Opened in April 2021 with full funding from World

   Doctors, community-donated land, and government electricity infrastructure.

   Engera is now planning volunteer placement and outreach support." Approx

   location: (8.075, 37.910)

7. Galeya Rogdha Clinic — "One of Engera's latest projects — a clinic in a remote

   village in the southwestern Shewa zone, Oromia region. The goal is to develop it

   into a full-fledged health center meeting the same standards as our other

   facilities, focused on prevention, infant immunisation, and pre/post-natal care."

   Approx location: near Waliso, Southwest Shewa Zone (8.512, 37.998)

Map center point (between the two clusters): 8.24, 37.95

CONTENT — TESTIMONIALS

1. Dr Eyosiyas Arega, Country Advisor — "Engera has worked with the Gurage community

   for almost twenty years, including the area where my family comes from. During my

   visit to Zizencho, I saw how local efforts, supported by Engera, have strengthened

   access to healthcare and reduced the long, difficult journeys people once made for

   treatment." [linked to Zizencho]

2. Mr Solomon Shurga, Laboratory Assistant — "Before the solar system was installed,

   we often had to stop working for half the day because the electricity would go

   out. Now, with solar energy, we can work properly at any hour of the day or

   night."

3. Ms Rachel, Clinical Nurse — "My name is Rachel, and I'm a clinical nurse at Burat

   Health Center. The Attat training made a real difference for me — especially the

   neonatal resuscitation skills." [linked to Burat]

4. Sister Surabhila — "Engera partnering with Adey Pads has made a big difference for

   our school girls. Now they have proper pads, and more than a thousand girls can

   attend school confidently and without interruption." [linked to Burat, REAL PHOTO

   AVAILABLE]

5. Addis, Midwife / Mother & Child Representative — "I work in the ANC, delivery, and

   vaccination services. Our main challenge has been the power shortage — even basic

   things like light were not available. Even yesterday night, a mother came to give

   birth and the power went off. I had to use her own torchlight to help deliver the

   baby. Thankfully, the baby was strong and healthy, but without electricity we

   cannot do our work properly, especially when it comes to mothers and children.

   Now, with this solar project, all of these problems will be solved." [linked to

   Shebraber; sourced from an Engera x NextEnergy Foundation solar installation

   video]

TECHNICAL

- Fully responsive (mobile-first)

- Each health facility needs its own dynamic detail page/route

- Where no real photo exists yet, use a clean placeholder (navy background, no

  broken image icons) rather than a stock photo — this is a real nonprofit and we

  don't want to misrepresent facilities with generic images


for the source of the images and videos, use the following link to their previous website and use the apropriate photoes

https://www.engera.org/en/about-us/
https://www.engerausa.org/

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://engra-heart-map.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6c7616a7-0db0-4a9f-96ad-f4a6a3b37a52).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
