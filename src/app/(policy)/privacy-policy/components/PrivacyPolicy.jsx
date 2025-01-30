"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "../../Policy.module.scss";
import Link from "next/link";

const PrivacyPolicy = () => {
  const [anchor, setAnchor] = useState("introduction");

  // Refs for each section
  const sections = [
    "introduction",
    "data-we-collect",
    "how-we-use-your-data",
    "legal-basis-for-processing",
    "data-sharing-and-disclosure",
    "data-storage-and-retention",
    "security-measures",
    "international-data-transfers",
    "cookies-and-tracking-technologies",
    "user-rights",
    "updates-to-the-privacy-policy",
    "contact-information",
  ];

  const sectionRefs = useRef(
    sections.reduce((acc, section) => {
      acc[section] = React.createRef();
      return acc;
    }, {})
  );

  const handleScroll = () => {
    let closestSection = "introduction"; // Default section
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
          <h1>Privacy Policy</h1>

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
              <h2 id="introduction" ref={sectionRefs.current["introduction"]}>
                <strong>1. Introduction</strong>
              </h2>
              <p>
                At YB Advisors Ltd., we are committed to safeguarding your
                privacy and protecting your personal and business information.
                This Privacy Policy outlines how we collect, use, and protect
                the data of our clients, partners, and website users.
              </p>
              <p>
                YB Advisors Ltd. is a financial and accounting advisory company
                registered under the laws of Liechtenstein. Our registration
                details are as follows:
              </p>
              <ul>
                <li>
                  <strong>Company Name</strong>: YB Advisors Ltd.
                </li>
                <li>
                  <strong>Legal Form</strong>: Aktiengesellschaft (AG)
                </li>
                <li>
                  <strong>Registration Number</strong>: FL-0002.730.986-1
                </li>
                <li>
                  <strong>Registered Address</strong>: Schaanerstrasse 99,
                  Vaduz, 9490, Liechtenstein
                </li>
              </ul>
              <p>
                This policy applies to all data collected through our website,
                services, or other interactions with the company. You agree to
                the terms outlined in this Privacy Policy by using our services
                or interacting with us.
              </p>
              <h2
                id="data-we-collect"
                ref={sectionRefs.current["data-we-collect"]}
              >
                <strong>2. Data We Collect</strong>
              </h2>
              <p>
                We collect and process the following types of information when
                you use our website or interact with our services:
              </p>
              <h3>
                <strong>Business and Personal Data</strong>
              </h3>
              <p>
                When you submit forms on our website, such as the call request
                form or consultation request form, we collect the information
                you provide, which may include:
              </p>
              <ul>
                <li>Your full name.</li>
                <li>Your email address.</li>
                <li>Your phone number.</li>
                <li>Your company name and position (if applicable).</li>
                <li>
                  The nature of your inquiry (e.g., general financial questions,
                  accounting, taxation).
                </li>
                <li>
                  Any additional details you provide in your message or request.
                </li>
              </ul>
              <h3>
                <strong>Usage Data</strong>
              </h3>
              <p>
                When you visit our website, we may automatically collect certain
                information to enhance your user experience and improve our
                services. This may include:
              </p>
              <ul>
                <li>Your IP address.</li>
                <li>Browser type and version.</li>
                <li>Device information (e.g., operating system).</li>
                <li>Pages viewed and the time spent on the website.</li>
                <li>
                  Cookies and similar tracking technologies (refer to the Cookie
                  Policy for details).
                </li>
              </ul>
              <h3>
                <strong>Third-Party Data</strong>
              </h3>
              <p>
                In some cases, we may receive additional information about you
                from third-party sources, such as:
              </p>
              <ul>
                <li>Public directories or databases.</li>
                <li>Referrals from partners or associates.</li>
              </ul>
              <h3>
                <strong>Purpose of Data Collection</strong>
              </h3>
              <p>The data collected is used solely to:</p>
              <ul>
                <li>Process and respond to your inquiries.</li>
                <li>Provide the services or consultations you request.</li>
                <li>
                  Improve our website&rsquo;s functionality and user experience.
                </li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p>
                We ensure that all data collected is handled securely and only
                for the abovementioned purposes.
              </p>
              <h2
                id="how-we-use-your-data"
                ref={sectionRefs.current["how-we-use-your-data"]}
              >
                <strong>3. How We Use Your Data</strong>
              </h2>
              <p>
                We process the data you provide to deliver our services
                effectively, maintain communication, and ensure compliance with
                legal and regulatory requirements. Specifically, your data is
                used for the following purposes:
              </p>
              <p>
                <strong>Providing and Improving Our Services</strong>
              </p>
              <ul>
                <li>
                  To offer tailored financial consultations and accounting
                  advisory services based on your specific inquiries or business
                  needs.
                </li>
                <li>
                  To develop and refine our service offerings, ensuring they
                  align with industry standards and client expectations.
                </li>
              </ul>
              <p>
                <strong>Communication</strong>
              </p>
              <ul>
                <li>
                  To respond to your inquiries submitted via the call request or
                  consultation request forms.
                </li>
                <li>
                  To keep you informed about updates, relevant information, or
                  changes to our services.
                </li>
                <li>
                  To follow up on requests and ensure your satisfaction with our
                  responses.
                </li>
              </ul>
              <p>
                <strong>Legal and Regulatory Compliance</strong>
              </p>
              <ul>
                <li>
                  To meet our legal and regulatory obligations under applicable
                  laws, particularly those related to data protection and
                  financial services.
                </li>
                <li>
                  To ensure transparency and accountability in our operations.
                </li>
              </ul>
              <p>
                <strong>Internal Record-Keeping and Business Operations</strong>
              </p>
              <ul>
                <li>
                  To maintain accurate records of interactions with clients for
                  service history and operational improvements.
                </li>
                <li>
                  To analyze service performance and optimize internal workflows
                  for better efficiency.
                </li>
              </ul>
              <p>
                Your data is handled securely and only used for the purposes
                stated above. We do not sell, share, or otherwise misuse your
                personal or business information.
              </p>
              <h2
                id="legal-basis-for-processing"
                ref={sectionRefs.current["legal-basis-for-processing"]}
              >
                <strong>4. Legal Basis for Processing</strong>
              </h2>
              <p>
                YB Advisors Ltd. processes your data in compliance with
                applicable data protection laws, relying on the following legal
                bases:
              </p>
              <p>
                <strong>Consent</strong>
              </p>
              <ul>
                <li>
                  We process your data when you provide explicit consent, such
                  as when you submit information through our call or
                  consultation request forms.
                </li>
                <li>
                  By filling out and submitting these forms, you agree to
                  collect and use your data for specified purposes (e.g.,
                  responding to inquiries or providing consultations).
                </li>
              </ul>
              <p>
                <strong>Contractual Necessity</strong>
              </p>
              <ul>
                <li>
                  Processing your data may be necessary to fulfill our
                  obligations under a contract, such as providing requested
                  financial or accounting services.
                </li>
                <li>
                  This includes using your data to deliver tailored advice,
                  strategies, or consultations based on your business needs.
                </li>
              </ul>
              <p>
                <strong>Legal Obligations</strong>
              </p>
              <ul>
                <li>
                  We process your data to comply with applicable laws and
                  regulations, particularly those governing financial services,
                  data protection, and record-keeping.
                </li>
                <li>
                  This ensures our operations remain transparent and legally
                  compliant.
                </li>
              </ul>
              <p>
                <strong>Legitimate Interest</strong>
              </p>
              <p>
                We sometimes process your data to support our legitimate
                business interests, provided they do not override your rights
                and freedoms. These interests include:
              </p>
              <ul>
                <li>Enhancing and improving our services.</li>
                <li>Communicating with you regarding relevant updates.</li>
                <li>
                  Ensuring the security and functionality of our website and
                  operations.
                </li>
              </ul>
              <p>
                By balancing these legal bases, we ensure your data is processed
                lawfully, transparently, and in alignment with your rights.
              </p>
              <h2
                id="data-sharing-and-disclosure"
                ref={sectionRefs.current["data-sharing-and-disclosure"]}
              >
                <strong>5. Data Sharing and Disclosure</strong>
              </h2>
              <p>
                YB Advisors Ltd. is committed to safeguarding your data and only
                shares it under specific circumstances that comply with legal
                and operational requirements.
              </p>
              <h3>
                <strong>Sharing with Service Providers</strong>
              </h3>
              <p>
                We may share your data with trusted service providers who assist
                us in delivering our services. These providers operate under
                strict confidentiality agreements and only process your data as
                necessary to support our operations, including:
              </p>
              <ul>
                <li>
                  <strong>IT and Hosting Services</strong>: For secure data
                  storage, website maintenance, and system functionality.
                </li>
                <li>
                  <strong>Legal and Accounting Advisors</strong>: To ensure
                  compliance with applicable laws and regulations.
                </li>
              </ul>
              <h3>
                <strong>
                  Disclosure Required by Law or Regulatory Authorities
                </strong>
              </h3>
              <p>
                We may disclose your data if required to do so by law,
                regulation, or court order. This includes sharing information
                with regulatory bodies or other authorities to:
              </p>
              <ul>
                <li>Comply with applicable laws and legal obligations.</li>
                <li>Respond to lawful requests or investigations.</li>
                <li>
                  Protect the company&rsquo;s rights, safety, or property.
                </li>
              </ul>
              <h3>
                <strong>No Sale or Unauthorized Sharing</strong>
              </h3>
              <ul>
                <li>
                  We do not sell, rent, or otherwise disclose your data to third
                  parties for commercial purposes.
                </li>
                <li>
                  Your information is only shared as necessary for the provision
                  of our services or in compliance with legal obligations.
                </li>
              </ul>
              <h3>
                <strong>Commitment to Data Security</strong>
              </h3>
              <p>
                Any data shared is handled with the utmost care and in
                accordance with strict confidentiality standards, ensuring it is
                used solely for its intended purpose.
              </p>
              <h2
                id="data-storage-and-retention"
                ref={sectionRefs.current["data-storage-and-retention"]}
              >
                <strong>6. Data Storage and Retention</strong>
              </h2>
              <p>
                YB Advisors Ltd. ensures your data is securely stored and
                retained in compliance with applicable data protection laws and
                best practices.
              </p>
              <h3>
                <strong>Data Storage</strong>
              </h3>
              <ul>
                <li>
                  <strong>Secure Storage Locations</strong>: All collected data
                  is stored on secure servers in Liechtenstein or other regions
                  compliant with EU data protection regulations. These servers
                  adhere to stringent security protocols to safeguard your
                  information.
                </li>
                <li>
                  <strong>Security Measures</strong>: We employ robust measures,
                  including encryption, firewalls, and access controls, to
                  prevent unauthorized access, loss, or misuse of your data.
                </li>
              </ul>
              <h3>
                <strong>Retention Periods</strong>
              </h3>
              <ul>
                <li>
                  <strong>Business Purposes</strong>: We retain your data only
                  for as long as it is necessary to fulfill the purposes for
                  which it was collected, such as delivering services or
                  responding to inquiries.
                </li>
                <li>
                  <strong>Legal Obligations</strong>: Certain data may be
                  retained longer to comply with legal, regulatory, or tax
                  obligations, including record-keeping requirements.
                </li>
                <li>
                  <strong>Archiving or Deletion</strong>: Once the retention
                  period expires or the data is no longer needed, it will be
                  securely deleted, anonymized, or archived by applicable laws.
                </li>
              </ul>
              <p>
                By adhering to these practices, we ensure your data is managed
                responsibly and securely throughout its lifecycle.
              </p>
              <h2
                id="security-measures"
                ref={sectionRefs.current["security-measures"]}
              >
                <strong>7. Security Measures</strong>
              </h2>
              <p>
                At YB Advisors Ltd., we prioritize protecting your data by
                implementing robust security measures and are committed to
                maintaining its confidentiality, integrity, and availability.
              </p>
              <h3>
                <strong>Technical Security Measures</strong>
              </h3>
              <ul>
                <li>
                  <strong>Encryption</strong>: All sensitive data is encrypted
                  during transmission and storage to protect it from
                  unauthorized access.
                </li>
                <li>
                  <strong>Firewalls and Intrusion Detection</strong>: Advanced
                  firewalls and intrusion detection systems are in place to
                  monitor and prevent unauthorized network access.
                </li>
                <li>
                  <strong>Secure Access Controls</strong>: Data access is
                  restricted to authorized personnel, using secure
                  authentication methods, including multi-factor authentication.
                </li>
                <li>
                  <strong>Regular Security Updates</strong>: Systems and
                  software are regularly updated to protect against
                  vulnerabilities and threats.
                </li>
              </ul>
              <h3>
                <strong>Organizational Security Measures</strong>
              </h3>
              <ul>
                <li>
                  <strong>Employee Training</strong>: Staff members receive
                  ongoing training to ensure they follow best practices for data
                  protection and recognize potential security risks.
                </li>
                <li>
                  <strong>Confidentiality Agreements</strong>: All employees and
                  contractors handling sensitive data are required to sign
                  strict confidentiality agreements.
                </li>
                <li>
                  <strong>Incident Response Plan</strong>: A clear incident
                  response plan is in place to detect, contain, and resolve
                  security breaches swiftly.
                </li>
              </ul>
              <h3>
                <strong>Commitment to Ongoing Security</strong>
              </h3>
              <ul>
                <li>
                  <strong>Regular Assessments</strong>: We conduct security
                  audits and risk assessments to identify and address
                  vulnerabilities proactively.
                </li>
                <li>
                  <strong>Adapting to New Threats</strong>: We continuously
                  update our security protocols to align with the latest
                  standards and technologies as cyber threats evolve.
                </li>
              </ul>
              <p>
                These measures ensure that your data remains protected against
                unauthorized access, loss, or misuse.
              </p>
              <h2
                id="international-data-transfers"
                ref={sectionRefs.current["international-data-transfers"]}
              >
                <strong>8. International Data Transfers</strong>
              </h2>
              <p>
                YB Advisors Ltd. ensures that any data transfer outside
                Liechtenstein fully complies with applicable data protection
                laws, including the General Data Protection Regulation (GDPR).
              </p>
              <h3>
                <strong>Transfers Within Compliant Regions</strong>
              </h3>
              <p>
                Data may be transferred to countries or regions that provide
                adequate data protection as determined by the European
                Commission, ensuring the continued safeguarding of your
                information.
              </p>
              <h3>
                <strong>Safeguards for Non-Compliant Regions</strong>
              </h3>
              <p>
                For transfers to countries that do not provide an equivalent
                level of data protection, we implement additional safeguards,
                such as:
              </p>
              <ul>
                <li>
                  <strong>Standard Contractual Clauses (SCCs)</strong>:
                  Agreements that ensure your data receives the same level of
                  protection as it does within the EU/EEA.
                </li>
                <li>
                  <strong>Binding Corporate Rules (BCRs)</strong>: Internal
                  policies approved by data protection authorities to ensure
                  secure data processing across our operations.
                </li>
                <li>
                  <strong>Explicit Consent</strong>: In certain cases, data
                  transfers may only occur with your explicit consent after you
                  have been informed of potential risks.
                </li>
              </ul>
              <h3>
                <strong>Data Protection Commitments</strong>
              </h3>
              <ul>
                <li>
                  <strong>Transparency</strong>: You will always be informed
                  about the safeguards in place when your data is transferred
                  internationally.
                </li>
                <li>
                  <strong>Security</strong>: All data transfers are conducted
                  through secure channels and with appropriate measures to
                  prevent unauthorized access or loss.
                </li>
              </ul>
              <p>
                By adhering to these practices, YB Advisors Ltd. ensures that
                your data remains protected, regardless of location.
              </p>
              <h2
                id="cookies-and-tracking-technologies"
                ref={sectionRefs.current["cookies-and-tracking-technologies"]}
              >
                <strong>9. Cookies and Tracking Technologies</strong>
              </h2>
              <p>
                YB Advisors Ltd. uses cookies and similar tracking technologies
                to enhance your experience on our website, analyze site traffic,
                and provide personalized content. Below is an overview of our
                cookies and how you can manage them.
              </p>
              <h3>
                <strong>What Are Cookies?</strong>
              </h3>
              <p>
                Cookies are small text files placed on your device when you
                visit a website. They are widely used to make websites work
                efficiently and to provide information to website owners.
                Cookies help us remember your preferences, analyze how our
                website is used, and improve user experience.
              </p>
              <h3>
                <strong>Types of Cookies We Use</strong>
              </h3>
              <ul>
                <li>
                  <strong>Essential Cookies</strong>: These are necessary for
                  the basic functioning of the website, such as enabling secure
                  logins and navigating through different sections. Without
                  these cookies, the website may not function properly.
                </li>
                <li>
                  <strong>Performance Cookies</strong>: These cookies collect
                  information about how visitors use our website, such as the
                  pages viewed and any errors encountered. They help us improve
                  the performance of our website.
                </li>
                <li>
                  <strong>Functional Cookies</strong>: These cookies allow the
                  website to remember your preferences (language or region) and
                  provide a more personalized experience.
                </li>
                <li>
                  <strong>Targeting or Advertising Cookies</strong>: These
                  cookies are used to deliver relevant advertisements to you
                  based on your browsing activity. They help us track the
                  effectiveness of our marketing campaigns.
                </li>
              </ul>
              <h3>
                <strong>Managing Cookies</strong>
              </h3>
              <p>
                You have control over how cookies are used on your device. You
                can manage or disable cookies by adjusting the settings in your
                browser. Here&rsquo;s how to manage cookies in some of the most
                common browsers:
              </p>
              <ul>
                <li>
                  <strong>Google Chrome</strong>: Go to "Settings" &gt; "Privacy
                  and security" &gt; "Cookies and other site data" to adjust
                  your preferences.
                </li>
                <li>
                  <strong>Mozilla Firefox</strong>: Go to "Options" &gt;
                  "Privacy &amp; Security" &gt; "Cookies and Site Data" to
                  manage cookie settings.
                </li>
                <li>
                  <strong>Safari</strong>: Go to "Preferences" &gt; "Privacy"
                  and select "Cookies and website data" to customize your
                  preferences.
                </li>
              </ul>
              <p>
                You can also disable cookies entirely; however, please note that
                some parts of the website may not function correctly if cookies
                are disabled.
              </p>
              <h3>
                <strong>Your Consent</strong>
              </h3>
              <p>
                By continuing to use our website, you consent to the use of
                cookies, as described in this section. If you prefer not to have
                cookies placed on your device, you can adjust your browser
                settings accordingly. You may also withdraw your consent anytime
                by clearing cookies from your browser.
              </p>
              <h2 id="user-rights" ref={sectionRefs.current["user-rights"]}>
                <strong>10. User Rights</strong>
              </h2>
              <p>
                As a user, you have certain rights regarding your personal data
                under data protection laws, such as the GDPR. These rights give
                you greater control over your data collection, storage, and use.
                Below is an overview of your rights and how you can exercise
                them:
              </p>
              <h3>
                <strong>Right to Access</strong>
              </h3>
              <p>
                You have the right to request a copy of the personal data we
                hold about you. This includes access to information such as your
                contact details, the nature of the data collected, and how it is
                being used.
              </p>
              <h3>
                <strong>Right to Rectify</strong>
              </h3>
              <p>
                If you believe any of the personal data we hold is incorrect or
                incomplete, you have the right to request corrections or
                updates.
              </p>
              <h3>
                <strong>Right to Erasure (Right to be Forgotten)</strong>
              </h3>
              <p>
                In certain circumstances, you may request that we delete your
                data. This may include situations where the data is no longer
                necessary for the purposes for which it was collected or if you
                withdraw your consent and no other legal basis for processing
                exists.
              </p>
              <h3>
                <strong>Right to Object to Processing</strong>
              </h3>
              <p>
                You have the right to object to our processing of your data in
                certain situations, particularly when processing is based on
                legitimate interests or direct marketing purposes. In such
                cases, we will stop processing your data unless we have
                compelling, legitimate grounds to continue.
              </p>
              <h3>
                <strong>Right to Data Portability</strong>
              </h3>
              <p>
                You can receive a copy of your personal data in a structured,
                commonly used, and machine-readable format. Where technically
                feasible, you may also request that your data be transferred
                directly to another service provider.
              </p>
              <h3>
                <strong>Right to Restrict Processing</strong>
              </h3>
              <p>
                You have the right to request that we temporarily stop
                processing your personal data under specific circumstances, such
                as when you contest its accuracy or have objected to its
                processing.
              </p>
              <h3>
                <strong>How to Exercise Your Rights</strong>
              </h3>
              <p>
                To exercise any of these rights, please contact us using the
                following methods:
              </p>
              <ul>
                <li>
                  <strong>Email</strong>: office@ybadvisors.li
                </li>
                <li>
                  <strong>Website</strong>: Use the contact form available on
                  our website for specific inquiries.
                </li>
                <li>
                  <strong>Postal Address</strong>: Schaanerstrasse 99, Vaduz,
                  Postal Code: 9490, Liechtenstein
                </li>
              </ul>
              <p>
                We will respond to your request within the legally required time
                frame, typically within one month, unless the request is
                particularly complex or numerous, in this case, we may extend
                this period by an additional two months.
              </p>
              <h3>
                <strong>Right to Lodge a Complaint</strong>
              </h3>
              <p>
                If you believe we are not processing your data in accordance
                with data protection laws, you have the right to complain to the
                relevant data protection authority in your jurisdiction.
              </p>
              <p>
                By exercising your rights, you can ensure that your data is
                handled to meet your expectations and comply with applicable
                regulations.
              </p>
              <h2
                id="updates-to-the-privacy-policy"
                ref={sectionRefs.current["updates-to-the-privacy-policy"]}
              >
                <strong>11. Updates to the Privacy Policy</strong>
              </h2>
              <p>
                We reserve the right to update or modify this Privacy Policy at
                any time to reflect changes in our practices, services, legal
                obligations, or for other business reasons. We may also update
                the policy to comply with changes in applicable data protection
                laws or regulations.
              </p>
              <h3>
                <strong>Notification of Changes</strong>
              </h3>
              <p>
                If we make significant changes to this Privacy Policy, we will
                notify users through the following means:
              </p>
              <ul>
                <li>
                  <strong>Email Notification</strong>: We may email the address
                  you provided to inform you of any material changes.
                </li>
                <li>
                  <strong>Website Notice</strong>: We will post a prominent
                  notice indicating that the Privacy Policy has been updated and
                  a link to the new version.
                </li>
              </ul>
              <p>
                The updated policy will be effective as of the date specified in
                the "Last Updated" section at the top of the policy.
              </p>
              <h3>
                <strong>Encouragement to Review Regularly</strong>
              </h3>
              <p>
                We encourage you to review this Privacy Policy regularly to stay
                informed about how we safeguard your personal data. Regular
                reviews will ensure you know any changes and how they may impact
                how we handle your information.
              </p>
              <p>
                By continuing to use our services after updates are posted, you
                accept the updated Privacy Policy and agree to its terms.
              </p>
              <h2
                id="contact-information"
                ref={sectionRefs.current["contact-information"]}
              >
                <strong>12. Contact Information</strong>
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or the way your personal data is handled, please
                contact us through the following means:
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
                We are committed to addressing your inquiries and resolving any
                issues related to your privacy and data protection in a timely
                manner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
