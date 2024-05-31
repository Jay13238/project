import { fetchExternalImage } from "next/dist/server/image-optimizer";

const packData = [
  {
    id: 1,
    image: "/branding.png",
    title: "Branding",
    includes: [
      "Consultation meeting with client in person or via Zoom 1 hour",
      "Conceptualising and brainstorming",
      "Logo design",
      "Brand identity one-pager",
      "Business cards (printing of 500)",
      "Email signature",
      "Letterhead",
    ],
    price: "R6000 ex VAT",
  },

  {
    id: 2,
    image: "/social-media.png",
    title: "Social Media Templates Package",
    includes: [
      "Consultation/brainstorming (1 hour – online)",
      "4 x square image templates",
      "4 x IG & FB story templates",
      "4 x horizontal image templates",
      "8 x Instagram highlight covers",
      "1 x Instagram carousel (up to 10 slides)",
      "And More"
    ],
    price: "R5000 ex VAT",
  },
  {
    id: 3,
    image: "/social-media.png",
    title: "Social Media/ Google Ads Package",
    includes: [
      "Consultation meeting with client in person or via Zoom 1 hour",
      "Targeted Facebook/Instagram/Google ads to create awareness, increase reach & engagement, generate leads or conversions (online orders).",
      "I will create, monitor and optimise 2-4 campaigns per month, and share monthly reports.",
    ],
    price: "R5000 per month, ex VAT",
  },
  {
    id: 4,
    image: "/photo.png",
    title: "Photo Packages",
    includes: ["R3000 for a one-hour shoot", "R4400 for a two-hour shoot"],
    price: "R5000 per month, ex VAT",
  },
  {
    id: 5,
    image: "/video-icon.png",
    title: "Video Packages",
    includes: ["R3000 for a one-hour shoot", "R4400 for a two-hour shoot"],
    price: "R5000 per month, ex VAT",
  },
  {
    id: 6,
    image: "/webpage.png",
    title: "Website Creation Package",
    includes: ["R3000 for a one-hour shoot", "R4400 for a two-hour shoot"],
    price: "R5000 per month, ex VAT",
  },
  {
    id: 7,
    image: "/social-media.png",
    title: "Creation and Management of Social Media Accounts",
    includes: [
      "Consultation meeting with client in person or via Zoom 1 hour ~ R300",
      "planning of content",
      "graphic design",
      "posting three times a week based on the best times to post according to the latest social media trends",
    ],
    price: "R1,500 once off + R4000 per month ",
  },
  {
    id: 7,
    image: "/social-media.png",
    title: "Create Content and Manage Social Media",
    includes: [
      "social media accounts exist",
      "Consultation meeting with client in person or via Zoom 1 hour ~ R300",
      "planning of content",
      "graphic design",
      "posting three times a week based on the best times to post according to the latest social media trends",
    ],
    price: " R500 set-up fee + R4000 per month ",
  },
  {
    id: 8,
    image: "/social-media.png",
    title: "Post Your Social Media Content on an Ad Hoc Basis",
    includes: [
      "Consultation meeting with client in person or via Zoom 1 hour ~ R300",
      "Available to post your social media content on an ad hoc basis, as per your requirements",
      "graphic design",
      
    ],
    price: " R500 set-up fee + R300 per hour ",
  },
];

export default packData;

