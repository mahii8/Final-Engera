import francesco from "@/assets/team/francesco.jpg";
import giuseppe from "@/assets/team/giuseppe.jpg";
import filippo from "@/assets/team/filippo-new.jpg";
import colleen from "@/assets/team/colleen.jpg";
import duccio from "@/assets/team/duccio.jpg";
import wubrest from "@/assets/team/wubrest.jpg";
import tammy from "@/assets/team/tammy.jpg";
import ricky from "@/assets/team/ricky.jpg";
import nicole from "@/assets/team/nicole-chicoine.png";
import lydiaAsset from "@/assets/team/lydia-pistis-real.png";
import eyosiyasAsset from "@/assets/team/eyosiyas-arega-real.png";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export type TeamGroup = {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  members: TeamMember[];
};

export const teamGroups: TeamGroup[] = [
  {
    id: "founder",
    label: "Founder",
    heading: "The founder",
    members: [
      {
        name: "Francesco Silenzi",
        role: "Founder & Chair",
        photo: francesco,
        bio: "Francesco is a pediatrician working in the Emergency Department and Pediatric Trauma Center of Meyer Hospital in Florence. Since 2011 he has been part of the multidisciplinary team against child abuse and mistreatment, and since 2020 a board member of C.I.S.M.A.I. (Italian Coordination of Services against Child Maltreatment and Abuse). He has had a passion for Ethiopia for over 15 years, first personally and then as founder and president of Engera, coordinating medical missions several times a year to protect maternal and child health in rural Ethiopia.",
      },
    ],
  },
  {
    id: "board",
    label: "Board",
    heading: "Board members",
    members: [
      {
        name: "Giuseppe Indolfi",
        role: "Vice Chair",
        photo: giuseppe,
        bio: "Active paediatrician and Professor of Pediatrics who began working in Ethiopia in 2005 and considers it his second home.",
      },
      {
        name: "Filippo Bianco",
        role: "Treasurer",
        photo: filippo,
        bio: "Managing Director at UBS Investment Bank, holds four degrees in Business Administration and speaks five languages. First traveled to Ethiopia in 2011 and has collaborated with Engera since.",
      },
      {
        name: "Colleen McKenna",
        role: "Secretary",
        photo: colleen,
        bio: "Executive Director of the AJA Foundation, with more than 20 years in marketing and non-profit strategy across the tech and non-profit sectors.",
      },
      {
        name: "Duccio Petrocchi",
        role: "Board Member",
        photo: duccio,
        bio: "Senior leader at Microsoft EMEA as a Global Solution Specialist. He holds a Master's degree in Business and Economics from the University of Florence and participated in an Engera mission to Ethiopia in 2008.",
      },
      {
        name: "Wubrest T. Bekele",
        role: "Board Member",
        photo: wubrest,
        bio: "Medical doctor with experience in hospitals, health media ventures and health policy work at Ethiopia's Federal Ministry of Health. She holds a Doctorate in Medicine from Addis Ababa University and received the 'Celebrating Women in Medicine 2020' award from the Ethiopian Medical Women Association.",
      },
      {
        name: "Tammy Muto",
        role: "Board Member",
        photo: tammy,
        bio: "An entrepreneur who has led Greater Austin Moving, a Texas-based moving, storage and home support company, since 2015. Now based in Florence, she joined Engera in 2023 to bring her business and project management experience to healthcare in rural Ethiopia.",
      },
      {
        name: "Nicole M. Chicoine, MD, JD",
        role: "Board Member",
        photo: nicole,
        bio: "Emergency Medicine physician and University of Washington faculty member, with experience serving underserved communities including in Haiti. She is honored to support Engera's mission of delivering medical care, nutrition and education in Ethiopia.",
      },
      {
        name: "Ricky Abbott",
        role: "Board Member",
        photo: ricky,
        bio: "President of Transmission, a marketing consultancy advising some of the world's largest companies. He relocated from the UK to the United States in 2019 and brings business strategy, fundraising and market positioning experience to Engera USA.",
      },
      {
        name: "Sabrina Jardine",
        role: "Board Member",
        bio: "Former professional Ironman triathlete and longtime entrepreneur across the medical and retail sectors. She and her family adopted their son from Ethiopia in 2007, an experience that continues to shape her passion for service in the country.",
      },
    ],
  },
  {
    id: "leadership",
    label: "Director",
    heading: "Director",
    members: [
      {
        name: "Lydia Pistis",
        role: "Director",
        photo: lydiaAsset,
        bio: "Lydia joined Engera as Director in May 2022 from SOAS University of London, where she was Philanthropy Manager for nine years, leading fundraising relating to Africa including scholarships for African students. She leads fundraising and communications, focused on philanthropy's role in transforming lives and women's empowerment.",
      },
    ],
  },
  {
    id: "country",
    label: "Ethiopia",
    heading: "In Ethiopia",
    members: [
      {
        name: "Dr Eyosiyas Arega",
        role: "Country Advisor",
        photo: eyosiyasAsset,
        bio: "As Country Advisor, Eyosiyas advises on project implementation, monitors activities and builds relationships with local stakeholders. Involved with Engera since August 2023, he works to amplify community voice and showcase Engera's work, reporting to the Executive Director who oversees activities across Engera USA, Engera UK and Engera Italy.",
      },
    ],
  },
];
