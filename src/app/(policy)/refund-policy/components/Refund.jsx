"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "../../Policy.module.scss";
import Link from "next/link";

const Refund = () => {
  const [anchor, setAnchor] = useState("no-refunds-after-service-commencement");

  // Refs for each section
  const sections = [
    "no-refunds-after-service-commencement",
    "refund-exceptions",
    "dissatisfaction-with-services",
    "contact-information",
  ];

  const sectionRefs = useRef(
    sections.reduce((acc, section) => {
      acc[section] = React.createRef();
      return acc;
    }, {})
  );

  const handleScroll = () => {
    let closestSection = "no-refunds-after-service-commencement"; // Default section
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
          <h1>Refund Policy</h1>

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
                At YB Advisors Ltd., we strive to deliver high-quality financial
                and advisory services tailored to your business needs. This
                Refund Policy outlines our position regarding refunds and
                situations where exceptions may apply.
              </p>
              <h2
                id="no-refunds-after-service-commencement"
                ref={
                  sectionRefs.current["no-refunds-after-service-commencement"]
                }
              >
                <strong>1. No Refunds After Service Commencement</strong>
              </h2>
              <p>
                Once services have commenced, no refunds will be issued. By
                approving our service proposal, accepting the offer, and paying
                the invoice, you acknowledge and agree that the refund is not
                applicable.
              </p>
              <h2
                id="refund-exceptions"
                ref={sectionRefs.current["refund-exceptions"]}
              >
                <strong>2. Refund Exceptions</strong>
              </h2>
              <p>Refunds are possible only in the following cases:</p>
              <ul>
                <li>
                  <strong>Technical Errors</strong>: If a payment is processed
                  incorrectly due to a technical issue.
                </li>
                <li>
                  <strong>Human Errors</strong>: If an overpayment, double
                  payment, or duplicate invoice payment occurs.
                </li>
                <li>
                  <strong>Other Exceptional Cases</strong>: Refunds may be
                  considered case-by-case for similar errors not attributable to
                  the client.
                </li>
              </ul>
              <p>
                In such cases, please get in touch with us immediately, and we
                will process your refund promptly after verifying the issue.
              </p>
              <h2
                id="dissatisfaction-with-services"
                ref={sectionRefs.current["dissatisfaction-with-services"]}
              >
                <strong>3. Dissatisfaction with Services</strong>
              </h2>
              <p>
                If you are dissatisfied with our services or feel the results do
                not meet your expectations, we encourage you to contact us
                directly. Our team is committed to understanding your concerns
                and optimizing our performance to meet your needs.
              </p>
              <p>
                Please note that dissatisfaction with the delivered service is{" "}
                <strong>not grounds for a refund</strong>. Instead, we view such
                situations as opportunities for dialogue and improvement,
                ensuring the outcome aligns with your goals.
              </p>
              <h2
                id="contact-information"
                ref={sectionRefs.current["contact-information"]}
              >
                <strong>4. Contact Information</strong>
              </h2>
              <p>
                For any inquiries or refund-related issues, please get in touch
                with us at:
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
                We appreciate your understanding and value your partnership with
                YB Advisors Ltd. Our goal is to provide solutions that meet your
                business objectives while maintaining transparency and
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Refund;
