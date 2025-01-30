"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "../../Policy.module.scss";
import Link from "next/link";

const CookiePolicy = () => {
  const [anchor, setAnchor] = useState("what-are-cookies");

  // Refs for each section
  const sections = [
    "what-are-cookies",
    "types-of-cookies-we-use",
    "managing-cookies",
    "third-party-cookies",
    "cookie-duration",
    "consent-to-use-cookies",
    "changes-to-this-cookie-policy",
    "contact-us",
  ];

  const sectionRefs = useRef(
    sections.reduce((acc, section) => {
      acc[section] = React.createRef();
      return acc;
    }, {})
  );

  const handleScroll = () => {
    let closestSection = "what-are-cookies"; // Default section
    let minDistance = Infinity;

    sections.forEach((section) => {
      const rect =
        sectionRefs.current[section]?.current?.getBoundingClientRect();
      if (rect) {
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      }
    });

    setAnchor(closestSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnchor = (value) => {
    sectionRefs.current[value]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.policy}>
        <div className="_container">
          <Link href="/" className={styles.back}>
            <img src="/images/back.svg" alt="Back" />
            Back
          </Link>
          <h1>Cookie Policy</h1>

          <div className={styles.body}>
            <div className={styles.col1}>
              <div>
                {sections.map((section) => (
                  <Link
                    key={section}
                    href={`#${section}`}
                    className={`${anchor === section ? styles.active : ""}`}
                    onClick={() => handleAnchor(section)}
                  >
                    {section
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.col2}>
              <p>
                At YB Advisors Ltd., we use cookies and similar technologies to
                enhance the user experience on our website, improve
                functionality, and analyze website usage. This Cookie Policy
                provides information on how we use cookies, the types of cookies
                we use, and your choices.
              </p>
              <h2
                id="what-are-cookies"
                ref={sectionRefs.current["what-are-cookies"]}
              >
                <strong>1. What are Cookies?</strong>
              </h2>
              <p>
                Cookies are small text files placed on your device when you
                visit a website. They enable the website to recognize your
                device and store information, such as preferences or login
                details, to improve your browsing experience. Cookies are
                commonly used across websites for essential functionality and
                user experience.
              </p>
              <h2
                id="types-of-cookies-we-use"
                ref={sectionRefs.current["types-of-cookies-we-use"]}
              >
                <strong>2. Types of Cookies We Use</strong>
              </h2>
              <p>We use the following types of cookies on our website:</p>
              <ul>
                <li>
                  <strong>Essential Cookies</strong>: These cookies are
                  necessary for the operation of our website. They enable you to
                  navigate our site and use its features, such as accessing
                  secure areas or submitting forms. Without these cookies,
                  certain services may not be available.
                </li>
                <li>
                  <strong>Performance and Analytics Cookies</strong>: These
                  cookies collect information about how users interact with our
                  website, such as which pages are visited most often and if
                  users encounter any errors. This helps us improve the
                  website's functionality and performance. Third-party analytics
                  services, such as Google Analytics, usually provide these
                  cookies.
                </li>
                <li>
                  <strong>Functionality Cookies</strong>: These cookies remember
                  your preferences and choices to enhance your experience. For
                  example, they may store your language preference or allow for
                  the customization of content based on your location.
                </li>
                <li>
                  <strong>Targeting/Advertising Cookies</strong>: These cookies
                  deliver relevant advertising content based on your interests.
                  They track your browsing habits across different websites to
                  display more personalized ads.
                </li>
              </ul>
              <h2
                id="managing-cookies"
                ref={sectionRefs.current["managing-cookies"]}
              >
                <strong>3. Managing Cookies</strong>
              </h2>
              <p>
                You can control the cookies placed on your device by adjusting
                your browser settings. Most browsers allow you to accept or
                reject cookies or notify you when a cookie is set. You can
                manage your cookie preferences through the following methods:
              </p>
              <ul>
                <li>
                  <strong>Browser Settings</strong>: You can modify your browser
                  settings to block or delete cookies. Please note that
                  disabling cookies may impact your experience on our website
                  and prevent certain features from functioning properly.
                </li>
                <li>
                  <strong>Opt-Out of Google Analytics</strong>: To opt out of
                  Google Analytics tracking, you can install the Google
                  Analytics Opt-out Browser Add-on, available at{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout">
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                  .&nbsp;
                </li>
              </ul>
              <h2
                id="third-party-cookies"
                ref={sectionRefs.current["third-party-cookies"]}
              >
                <strong>4. Third-Party Cookies</strong>
              </h2>
              <p>
                We may allow third-party service providers, such as analytics or
                advertising companies, to place cookies on your device. These
                third parties may collect information about your online
                activities across different websites over time. We do not
                control the use of third-party cookies, and the privacy policies
                of those third parties govern their use.
              </p>
              <h2
                id="cookie-duration"
                ref={sectionRefs.current["cookie-duration"]}
              >
                <strong>5. Cookie Duration</strong>
              </h2>
              <p>
                The time a cookie remains on your device depends on whether it
                is a <strong>session cookie</strong> or a{" "}
                <strong>persistent cookie</strong>.
              </p>
              <ul>
                <li>
                  <strong>Session Cookies</strong> are temporary cookies that
                  are deleted once you close your browser.
                </li>
                <li>
                  <strong>Persistent Cookies</strong> remain on your device
                  until they expire or you delete them manually.
                </li>
              </ul>
              <h2
                id="consent-to-use-cookies"
                ref={sectionRefs.current["consent-to-use-cookies"]}
              >
                <strong>6. Consent to Use Cookies</strong>
              </h2>
              <p>
                By continuing to use our website, you consent to our use of
                cookies as outlined in this Cookie Policy. You can withdraw your
                consent anytime by managing your cookie preferences through your
                browser settings.
              </p>
              <h2
                id="changes-to-this-cookie-policy"
                ref={sectionRefs.current["changes-to-this-cookie-policy"]}
              >
                <strong>7. Changes to This Cookie Policy</strong>
              </h2>
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any significant
                changes by posting the updated policy on our website with an
                updated "Effective Date." We encourage you to review this policy
                periodically to stay informed about our use of cookies.
              </p>
              <h2 id="contact-us" ref={sectionRefs.current["contact-us"]}>
                <strong>8. Contact Us</strong>
              </h2>
              <p>
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us at:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <Link href="mailto:office@ybadvisors.li">
                    office@ybadvisors.li
                  </Link>
                </li>
                <li>
                  Website:{" "}
                  <Link href="http://ybadvisors.li">www.ybadvisors.li</Link>
                </li>
              </ul>
              <p>
                We are committed to protecting your privacy and ensuring a
                positive experience on our website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
