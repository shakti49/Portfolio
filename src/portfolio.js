/* Change this file to get your personal Porfolio */

/* ===== Shakti Mishra Portfolio ===== */

const settings = {
  isSplash: true,
};

const seo = {
  title: "Shakti's Portfolio",
  description:
    "Aspiring Zoho CRM Specialist | CRM & Sales Operations | Open to Internship & Freelance Roles. 4+ years of experience in customer support, sales, operations, and software testing.",
  og: {
    title: "Shakti Mishra Portfolio",
    type: "website",
    url: "https://shakti49.github.io",
  },
};

//Home Page
const greeting = {
  title: "Shakti Mishra",
  logo_name: "Shakti_Mishra",
  nickname: "Hii_Shakti",
  subTitle:
    "Tech enthusiast & lifelong learner with 4+ years of experience in customer support, sales, operations, cloud, and software testing. Aspiring Zoho CRM Specialist, open to internship & freelance roles.",
  resumeLink:
    "https://drive.google.com/file/d/11nYx13zzkijjeH826_sBdVhBooR8OR2A/view",
  portfolio_repository: "https://github.com/shakti49/Portfolio",
  githubProfile: "https://github.com/shakti49",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/shakti49",
  // linkedin: "https://www.linkedin.com/in/shakti-mishra49/",
  // gmail: "mshakti49@gmail.com",
  // gitlab: "https://gitlab.com/Shakti8",
  // facebook: "https://www.facebook.com/shakti.mishra.3348",
  // twitter: "https://x.com/hii_shakti?t=Mc1aNEA76RNY68J-_cdUzw&s=09",
  // instagram: "https://www.instagram.com/Hii_Shakti/"

  {
    name: "Github",
    link: "https://github.com/shakti49",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shakti-mishra49/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/Shakti",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:mshakti49@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/hii_shakti?t=Mc1aNEA76RNY68J-_cdUzw&s=09",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/shakti.mishra.3348/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hii_shakti/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

import { skills } from "./portfolio-skills"; // (keep the skills section as-is from your current file)

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
/* === Certifications === */
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
    },
    {
      title: "Zoho CRM",
      subtitle: "LinkedIn Learning",
      logo_path: "zoho_logo.png",
      certificate_link: "https://lnkd.in/duV9gtg5",
      alt_name: "Zoho",
      color_code: "#D83B01",
    },
  ],
};
// Experience Page
/* === Experience === */
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
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
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

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};

