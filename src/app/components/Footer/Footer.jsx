import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="_container">
        <div className="copy">
          © {currentYear} YB Advisors Ltd. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
