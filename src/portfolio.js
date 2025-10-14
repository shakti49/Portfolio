/* Change this file to get your personal Portfolio */
/* ===== Shakti Mishra Portfolio (Personalized) ===== */
// Global Settings
const settings = {
  isSplash: true,
};
// SEO
const seo = {
  title: "Shakti's Portfolio",
  description:
    "Aspiring Zoho CRM Specialist | CRM & Sales Operations | Open to Internship & Freelance Roles. 4+ years of experience in customer support, sales, operations, cloud, and software testing.",
  og: {
    title: "Shakti Mishra Portfolio",
    type: "website",
    url: "https://shakti49.github.io",
  },
};
// Greeting / Summary (About)
const greeting = {
  title: "Shakti Mishra",
  logo_name: "Shakti_Mishra",
  nickname: "Hii_Shakti",
  subTitle:
    "Tech enthusiast and lifelong learner with 4+ years across customer support, sales, operations, cloud, and software testing. Passionate about CRM implementations (Zoho/Salesforce), data-driven operations, and crafting seamless user experiences. Open to internships and freelance roles.",
  resumeLink:
    "https://drive.google.com/file/d/11nYx13zzkijjeH826_sBdVhBooR8OR2A/view",
  portfolio_repository: "https://github.com/shakti49/Portfolio",
  githubProfile: "https://github.com/shakti49",
};
// Social / Blog Links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/shakti49",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shakti-mishra49/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/Shakti",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Gmail",
    link: "mailto:mshakti49@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "X-Twitter",
    link: "https://x.com/hii_shakti?t=Mc1aNEA76RNY68J-_cdUzw&s=09",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/shakti.mishra.3348/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hii_shakti/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Blog",
    link: "https://blogs.Shakti.com/",
    fontAwesomeIcon: "fa-rss",
    backgroundColor: "#FFA500",
  },
];
// Skills Highlights (import or inline)
// If using external file keep import. Otherwise, define here.
// Keeping import to maintain project structure if present.
import { skills } from "./portfolio-skills";
// Profile Strength (custom section)
const profileStrength = {
  title: "Profile Strength",
  summary: [
    "CRM: Zoho CRM (customization, automation), Salesforce (basics)",
    "Cloud: AWS basics (EC2, S3, IAM), networking fundamentals",
    "Testing: Functional, exploratory, usability (uTest)",
    "Operations & Sales: BPO ops, lending ops, fundraising",
    "Tools: Excel/Sheets, Git/GitHub, Postman (basics)",
  ],
  indicator: 80, // percentage visualization in UI if supported
};
// Interests (custom section)
const interests = {
  title: "Interests",
  items: [
    "CRM automation & sales operations",
    "Cloud fundamentals and cost optimization",
    "Product testing and QA workflows",
    "No-code tools and integrations",
    "Personal finance and fintech",
  ],
};
/* === Education === */
const degrees = {
  degrees: [
    {
      title: "Swami Vivekanand Subharti University (SVSU), Meerut",
      subtitle: "Bachelor of Science",
      logo_path: "svsu_logo.png",
      alt_name: "SVSU Meerut",
      duration: "Oct 2020 - Nov 2023",
      descriptions: [
        "Studied core concepts in computer applications and business operations.",
        "Explored CRM platforms, cloud computing, and project management.",
      ],
      website_link: "https://subharti.org/",
    },
  ],
};
/* === Certifications (from Resume/LinkedIn) === */
const certifications = {
  certifications: [
    {
      title: "AWS Cloud Assessment",
      subtitle: "LearnTube.ai",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/11nYx13zzkijjeH826_sBdVhBooR8OR2A/view",
      alt_name: "AWS",
      color_code: "#FF9900",
      issued: "2025",
    },
    {
      title: "Zoho CRM",
      subtitle: "LinkedIn Learning",
      logo_path: "zoho_logo.png",
      certificate_link: "https://lnkd.in/duV9gtg5",
      alt_name: "Zoho",
      color_code: "#D83B01",
      issued: "2024",
    },
  ],
};
/* === Featured / Achievements (custom section) === */
const featured = {
  title: "Featured & Achievements",
  items: [
    {
      label: "uTest Top Tester Streak",
      description:
        "Consistent delivery of high-quality bug reports and test feedback across multiple projects.",
      link: "https://www.utest.com/",
    },
    {
      label: "Fundraising Impact",
      description:
        "Planned and executed fundraising strategies at Muskurahat Foundation, improving donor engagement.",
      link: "https://muskurahat.org.in/",
    },
  ],
};
// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internships",
  description:
    "Hands-on experience in CRM, cloud, operations, sales, fundraising, and software testing.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Freelance Software Tester",
          company: "uTest",
          company_url: "https://www.utest.com/",
          logo_path: "utest_logo.png",
          duration: "Dec 2020 - Present",
          location: "Remote",
          description:
            "Functional, usability, and exploratory testing on web & mobile apps. Reporting bugs and improving product quality for global clients.",
          color: "#000000",
        },
        {
          title: "Senior Associate Sales Consultant",
          company: "Paisabazaar",
          logo_path: "paisabazaar_logo.png",
          duration: "Dec 2022 - Apr 2023",
          location: "India",
          description:
            "Assisted clients in securing business loans, achieved sales targets, and maintained high client satisfaction.",
          color: "#0077B5",
        },
        {
          title: "Senior Operations & Multifunctional Executive",
          company: "Night Angels by PC",
          duration: "Feb 2020 - Dec 2022",
          location: "India",
          description:
            "Managed customer support, billing, payroll, and inventory to streamline operations.",
          color: "#E4405F",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Cloud Intern",
          company: "Exlearn Technologies",
          duration: "Jul 2025",
          description:
            "Covered fundamentals of cloud computing, AWS (EC2, S3, IAM), networking basics, and real-world cloud migration scenarios.",
          color: "#FF9900",
        },
        {
          title: "Fundraising Intern",
          company: "Muskurahat Foundation",
          duration: "May 2025",
          description:
            "Planned and executed fundraising strategies, improving donor engagement in a remote internship.",
          color: "#F24E1E",
        },
      ],
    },
  ],
};
// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a variety of technologies, especially CRM integrations, cloud, and testing automation.",
  avatar_image_path: "projects_image.svg",
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "WhatsApp Image 2025-09-17 at 12.18.09 AM.jpeg",
    description:
      "Feel free to reach out for CRM, cloud, testing, or operations roles. Open to internships and freelance opportunities — I reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I document my professional journey and technical learnings.",
    link: "https://blogs.Shakti.com/",
    avatar_image_path: "WhatsApp Image 2025-09-17 at 12.18.09 AM.jpeg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Gurgaon , Haryana 122001",
    locality: "Gurgaon",
    country: "India",
    region: "Haryana",
    postalCode: "122001",
    streetAddress: "Gandhi Nagar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/EkCE7a5d5RWiiDMd6",
  },
  phoneSection: {
    title: "Contact Number",
    subtitle: "+91 82858-47520",
  },
};

// Competitive Sites
export const competitiveSites = [];

// Export for all sections (maintain structure; add new ones)
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  profileStrength,
  interests,
  degrees,
  certifications,
  featured,
  experience,
  projectsHeader,
  contactPageData,
  competitiveSites,
};
