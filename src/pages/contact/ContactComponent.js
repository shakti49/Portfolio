import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

// Minimal, personalized contact section for Shakti Mishra
// Removes template sections (blogs/address/phone dummy data)

const Contact = ({ theme }) => {
  const contact = {
    name: "Shakti Mishra",
    email: "shakti.mishra.dev@gmail.com", // update if different
    phone: "+91 98765 43210",            // update if different
    location: "Bengaluru, India",        // update if different
    linkedin: "https://www.linkedin.com/in/shaktimishra/", // update if different
  };

  const itemStyle = { color: theme?.text };
  const subStyle = { color: theme?.secondaryText };

  return (
    <div className="contact-main">
      <Header theme={theme} />
      <div className="basic-contact" style={{ padding: "32px 20px" }}>
        <h1 className="contact-heading-text" style={itemStyle}>Contact</h1>
        <p className="contact-header-detail-text subTitle" style={subStyle}>
          I'd love to connect. Reach me via email or LinkedIn for opportunities or collaboration.
        </p>

        <div style={{ marginTop: 24 }}>
          <p className="contact-header-detail-text" style={itemStyle}>
            Email: <a href={`mailto:${contact.email}`} style={{ color: theme?.accentBright }}>{contact.email}</a>
          </p>
          <p className="contact-header-detail-text" style={itemStyle}>
            Phone: <a href={`tel:${contact.phone.replace(/\s|-/g, "")}`} style={{ color: theme?.accentBright }}>{contact.phone}</a>
          </p>
          <p className="contact-header-detail-text" style={itemStyle}>
            Location: {contact.location}
          </p>
          <p className="contact-header-detail-text" style={itemStyle}>
            LinkedIn: <a href={contact.linkedin} target="_blank" rel="noreferrer" style={{ color: theme?.accentBright }}>{contact.linkedin}</a>
          </p>
        </div>
      </div>
      <Footer theme={theme} onToggle={undefined} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Contact;
