"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "../../Policy.module.scss";
import Link from "next/link";

const TermsOfUse = () => {
  const [anchor, setAnchor] = useState("introduction");

  // Refs for each section
  const sections = [
    "introduction",
    "services-provided",
    "user-responsibilities",
    "liabilities-and-disclaimers",
    "consultation-with-experts",
    "intellectual-property",
    "privacy-and-data-protection",
    "amendments-and-updates",
    "governing-law-and-jurisdiction",
    "severability",
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
            <img src="/images/back.svg" />
            Back
          </Link>
          <h1>Terms of Use</h1>

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
                These Terms of Use ("Terms") govern your access to and use of
                the services provided by <strong>YB Advisors Ltd.</strong>, a
                company registered in Liechtenstein, with a registered address
                at{" "}
                <strong>Schaanerstrasse 99, Vaduz, Postal Code: 9490, </strong>
                registration number<strong>: </strong>FL-0002.730.986-1,&nbsp;
              </p>
              <p>
                (hereinafter referred to as "we," "our," or "YB Advisors"). By
                using or accessing our website or any of our services, you agree
                to comply with and be bound by these Terms.
              </p>
              <p>
                The terms outlined in this document form the legal agreement
                between you (the "User") and YB Advisors. These Terms apply to
                all users of our services, whether as a business or an
                individual. You must not access or use our services if you do
                not agree to these Terms.
              </p>
              <h3>
                <strong>Acceptance of Terms</strong>
              </h3>
              <p>
                By accessing or using any of the services offered by YB
                Advisors, including but not limited to financial advisory,
                accounting, taxation consulting, and other related services, you
                signify your acceptance of these Terms. If you disagree with
                these Terms, you are not authorized to use our website or
                services.
              </p>
              <p>
                We reserve the right to amend or update these Terms
                occasionally, and any such changes will be communicated through
                updates on this page. You must review these Terms periodically
                to stay informed about any changes. Your continued use of the
                services after posting any changes constitutes your acceptance
                of those changes.
              </p>
              <h2
                id="services-provided"
                ref={sectionRefs.current["services-provided"]}
              >
                <strong>2. Services Provided</strong>
              </h2>
              <p>
                YB Advisors Ltd. offers expert financial, accounting, and
                taxation advisory services to help businesses navigate complex
                financial and regulatory landscapes. Our services are tailored
                to ensure your company complies with ever-changing regulations
                while optimizing operations and minimizing risks.
              </p>
              <p>
                <strong>The services we provide include:</strong>
              </p>
              <ul>
                <li>
                  <strong>Implementation of Processes</strong>: We assist
                  businesses in designing and implementing efficient accounting
                  workflows and operational processes tailored to your specific
                  needs, ensuring smooth and compliant financial management.
                </li>
                <li>
                  <strong>Development of Accounting Strategies</strong>: We work
                  with businesses to develop comprehensive accounting strategies
                  that ensure compliance with applicable financial regulations
                  and industry best practices, supporting long-term business
                  growth and financial health.
                </li>
                <li>
                  <strong>Tax Structure Consultation</strong>: Our team offers
                  expert advice on tax structuring to optimize tax efficiency
                  while ensuring full compliance with relevant laws and
                  regulations. We advise businesses on structuring their tax
                  arrangements globally, providing recommendations in
                  collaboration with local experts when necessary.
                </li>
                <li>
                  <strong>Bookkeeping System Setup</strong>: We establish and
                  implement efficient and accurate bookkeeping systems to
                  maintain up-to-date financial records. This service includes
                  advising on preparing records for audits and regulatory
                  reviews.
                </li>
                <li>
                  <strong>Team Training and Education</strong>: We provide
                  training and guidance to accounting teams to enhance their
                  understanding of accounting systems, processes, and best
                  practices, empowering your team to manage financial tasks
                  efficiently.
                </li>
                <li>
                  <strong>Reconciliation System Development</strong>: We design
                  and implement reconciliation systems that ensure the accuracy
                  and consistency of your financial records. Our team monitors
                  and improves reconciliation, helping businesses address errors
                  and inconsistencies.
                </li>
                <li>
                  <strong>Licensing and Regulatory Support</strong>: We assist
                  businesses with navigating regulatory requirements, including
                  applying for licenses such as MiCA (Markets in Crypto-Assets),
                  FCA (Financial Conduct Authority) approvals, and other
                  industry-specific regulatory processes. We offer ongoing
                  support to ensure compliance with evolving regulatory
                  frameworks.
                </li>
              </ul>
              <h3>
                <strong>Limitations of Services</strong>
              </h3>
              <p>
                While YB Advisors Ltd. is committed to providing high-quality
                advisory services, please note the following limitations:
              </p>
              <ul>
                <li>
                  <strong>No Tax Liability Guarantee</strong>: YB Advisors Ltd.
                  is not responsible for any taxes your business owes. We
                  strongly recommend that businesses consult with tax experts or
                  legal advisors in their jurisdiction to ensure that their tax
                  commitments are fully met and compliant with local laws.
                </li>
                <li>
                  <strong>No Outcome Guarantee</strong>: Our services are
                  advisory, and while we provide expert guidance, YB Advisors
                  Ltd. does not guarantee specific financial outcomes or
                  results. The effectiveness of our services depends on various
                  factors, including your company&rsquo;s adherence to
                  recommended strategies and regulatory requirements.
                </li>
                <li>
                  <strong>Jurisdictional Variability</strong>: While we provide
                  comprehensive advisory services, we are not responsible for
                  the specific financial regulations, tax laws, or legal
                  requirements in any jurisdiction other than those directly
                  relevant to our services. We encourage you to consult local
                  experts in your jurisdiction to ensure full compliance with
                  regional laws.
                </li>
                <li>
                  <strong>No Auditing Services</strong>: We do not provide audit
                  services. While we assist with preparing financial records for
                  auditing, external audit firms are responsible for conducting
                  audits.
                </li>
              </ul>
              <h2
                id="user-responsibilities"
                ref={sectionRefs.current["user-responsibilities"]}
              >
                <strong>3. User Responsibilities</strong>
              </h2>
              <p>
                When engaging with YB Advisors Ltd. and utilizing our financial
                and accounting advisory services, users (hereinafter referred to
                as "Clients") are required to:
              </p>
              <ol>
                <li>
                  <strong>Provide Accurate Information</strong>:
                </li>
              </ol>
              <p>
                Clients must provide accurate, complete, and truthful
                information during any engagement with YB Advisors Ltd. This
                includes providing all necessary financial records,
                documentation, and other information required to deliver
                effective advisory services.
              </p>
              <ol>
                <li>
                  <strong>Comply with Legal Obligations</strong>:
                </li>
              </ol>
              <p>
                The Client must comply with applicable local, national, and
                international laws, including tax regulations and financial
                reporting requirements in their respective jurisdictions.
              </p>
              <ol>
                <li>
                  <strong>Engage Qualified Local Advisors</strong>:
                </li>
              </ol>
              <p>
                Clients must seek and engage qualified local advisors, including
                tax and legal experts, in their jurisdiction to ensure
                compliance with local laws and regulations. YB Advisors Ltd.
                provides general consultation based on international standards
                and does not substitute jurisdiction-specific expertise.
              </p>
              <ol>
                <li>
                  <strong>Implement Recommended Actions</strong>:
                </li>
              </ol>
              <p>
                The Client is responsible for taking necessary actions to
                implement the recommendations and strategies provided by YB
                Advisors Ltd. YB Advisors will not be held liable for any issues
                resulting from failing to follow advised processes or
                procedures.
              </p>
              <h3>
                <strong>Prohibition of Misuse or Unauthorized Access</strong>
              </h3>
              <p>
                Clients must adhere to the following restrictions to ensure
                proper use of YB Advisors Ltd.'s services:
              </p>
              <ol>
                <li>
                  <strong>Misuse of Services</strong>:
                </li>
              </ol>
              <p>
                Clients are prohibited from using YB Advisors Ltd.'s services
                for any unlawful, fraudulent, or unauthorized purpose. This
                includes misrepresenting their business information or using our
                services to violate financial or regulatory laws.
              </p>
              <ol>
                <li>
                  <strong>Unauthorized Access</strong>:
                </li>
              </ol>
              <p>
                Clients must not attempt to gain unauthorized access to our
                systems, website, or any proprietary materials. Any form of data
                scraping, hacking, or malicious use of the website or services
                is strictly prohibited and will result in immediate termination
                of access.
              </p>
              <ol>
                <li>
                  <strong>Third-Party Misrepresentation</strong>:
                </li>
              </ol>
              <p>
                Without written approval, clients may not present YB Advisors
                Ltd. as a guarantor, auditing firm, or representative in any
                legal, financial, or tax matter. Our advisory services are
                general and not intended to replace independent legal or tax
                representation.
              </p>
              <ol>
                <li>
                  <strong>Respect for Confidentiality</strong>:
                </li>
              </ol>
              <p>
                Clients must respect the confidentiality of any information,
                tools, or resources provided by YB Advisors Ltd. Unauthorized
                sharing, copying, or dissemination of proprietary resources,
                strategies, or systems is prohibited.
              </p>
              <p>
                By using YB Advisors Ltd.'s services, Clients agree to uphold
                these responsibilities and ensure the proper use of the services
                provided. Failure to adhere to these responsibilities may result
                in the suspension or termination of services and legal recourse
                where applicable.
              </p>
              <h2
                id="liabilities-and-disclaimers"
                ref={sectionRefs.current["liabilities-and-disclaimers"]}
              >
                <strong>4. Liabilities and Disclaimers</strong>
              </h2>
              <p>
                YB Advisors Ltd. provides advisory services designed to assist
                businesses in optimizing their financial and accounting
                processes. However, the following limitations of liability
                apply:
              </p>
              <ol>
                <li>
                  <strong>No Responsibility for Tax Liabilities</strong>: YB
                  Advisors Ltd. is not responsible for calculating, filing, or
                  paying any taxes owed by Clients. Tax compliance remains
                  solely the Client's responsibility, and it is advised that
                  Clients seek jurisdiction-specific tax expertise to ensure
                  full compliance.
                </li>
                <li>
                  <strong>Exclusion of Indirect Damages</strong>: YB Advisors
                  Ltd. shall not be held liable for any indirect, incidental,
                  consequential, or punitive damages resulting from its
                  services, including but not limited to loss of revenue,
                  penalties, or fines due to non-compliance with financial
                  regulations.
                </li>
                <li>
                  <strong>Financial Records and Data Accuracy</strong>: YB
                  Advisors Ltd. is not liable for any errors or discrepancies in
                  financial records, documentation, or data provided by the
                  Client. The Client's responsible for ensuring the accuracy and
                  completeness of all information submitted for advisory
                  purposes.
                </li>
                <li>
                  <strong>Advisory Nature of Services</strong>: YB Advisors
                  Ltd.'s services are advisory in nature and do not include
                  auditing, certification, or direct financial reporting.
                  Clients remain fully responsible for implementing recommended
                  processes and strategies.
                </li>
              </ol>
              <h3>
                <strong>No Guarantee of Specific Outcomes or Results</strong>
              </h3>
              <p>
                While YB Advisors Ltd. strives to deliver high-quality advice
                tailored to each Client's needs, no guarantees are made
                regarding specific outcomes or financial results. The
                effectiveness of our recommendations depends on factors outside
                of our control, including Client adherence to advised
                strategies, regulation changes, and market conditions.
              </p>
              <h3>
                <strong>Disclaimer Regarding Reliance on Advice</strong>
              </h3>
              <p>
                YB Advisors Ltd.'s advice and recommendations are based on
                international standards and best practices. Clients are
                encouraged to treat this advice as a general framework for
                decision-making rather than absolute directives. YB Advisors
                Ltd. does not assume responsibility for decisions based solely
                on our recommendations without proper validation and
                consultation with qualified local experts.
              </p>
              <h3>
                <strong>
                  Requirement to Consult Jurisdiction-Specific Experts
                </strong>
              </h3>
              <p>
                Due to the varying nature of financial, tax, and legal
                regulations across jurisdictions, YB Advisors Ltd. strongly
                advises Clients to consult local experts in their jurisdiction
                for:
              </p>
              <ol>
                <li>
                  <strong>Taxation Compliance</strong>: Ensuring compliance with
                  country-specific tax regulations and commitments.
                </li>
                <li>
                  <strong>Legal Matters</strong>: Verifying the legal
                  implications of financial strategies or structures YB Advisors
                  Ltd recommends.
                </li>
                <li>
                  <strong>Regulatory Obligations</strong>: Addressing specific
                  licensing or financial reporting requirements as applicable in
                  the Client's operational region.
                </li>
              </ol>
              <p>
                YB Advisors Ltd. does not substitute for local tax, legal, or
                compliance professionals. Clients are fully responsible for
                seeking appropriate jurisdiction-specific guidance to ensure
                compliance with regional laws.
              </p>
              <h2
                id="consultation-with-experts"
                ref={sectionRefs.current["consultation-with-experts"]}
              >
                <strong>Consultation with Experts</strong>
              </h2>
              <p>
                At YB Advisors Ltd., we provide advisory services based on
                international standards and best practices. However, due to the
                diverse and complex nature of financial, tax, and legal
                regulations across different jurisdictions, Clients must consult
                with qualified local experts to ensure compliance with
                region-specific requirements.
              </p>
              <ol>
                <li>
                  <strong>Specialized Tax Guidance</strong>: Tax laws and
                  regulations vary significantly across countries and regions.
                  While YB Advisors Ltd. provides general guidance and
                  recommendations, Clients must engage licensed tax advisors in
                  their operational jurisdiction to confirm and implement
                  appropriate tax strategies.
                </li>
                <li>
                  <strong>Legal Compliance</strong>: Implementing financial or
                  operational recommendations may have legal implications unique
                  to the Client&rsquo;s jurisdiction. It is the Client&rsquo;s
                  responsibility to consult local legal experts to verify the
                  legality and compliance of any actions taken based on our
                  advice.
                </li>
                <li>
                  <strong>Tailored Regional Solutions</strong>: Our advisory
                  services are designed to address general business needs.
                  However, clients are encouraged to seek local expertise for
                  region-specific challenges, including but not limited to
                  taxation, regulatory filings, and financial reporting.
                </li>
              </ol>
              <h3>
                <strong>Non-Liability for Jurisdictional Tax Issues</strong>
              </h3>
              <p>
                YB Advisors Ltd. explicitly disclaims any liability arising from
                jurisdictional tax issues, including but not limited to:
              </p>
              <ol>
                <li>
                  <strong>Incorrect Tax Filings</strong>: The Company is not
                  responsible for errors or omissions in tax filings made by the
                  Client or their representatives.
                </li>
                <li>
                  <strong>Penalties or Fines</strong>: YB Advisors Ltd. is not
                  liable for penalties, interest, or fines incurred as a result
                  of non-compliance with local tax laws or regulations.
                </li>
                <li>
                  <strong>Interpretation of Local Tax Laws</strong>: YB Advisors
                  Ltd.'s advice is based on international best practices and is
                  not a substitute for jurisdiction-specific tax
                  interpretations. Clients must consult local tax professionals
                  to validate the applicability of our recommendations.
                </li>
              </ol>
              <p>
                YB Advisors Ltd. acts as a trusted partner for financial and
                accounting advice but emphasizes that regional complexities
                require the expertise of qualified local professionals. By
                engaging local advisors, clients can ensure full compliance with
                their jurisdiction&rsquo;s requirements while maximizing the
                effectiveness of our strategic recommendations.
              </p>
              <h2
                id="intellectual-property"
                ref={sectionRefs.current["intellectual-property"]}
              >
                <strong>6. Intellectual Property</strong>
              </h2>
              <p>
                All content, materials, tools, and services provided by YB
                Advisors Ltd., including but not limited to reports, strategies,
                recommendations, training materials, and system designs, are the
                exclusive intellectual property of YB Advisors Ltd. unless
                explicitly stated otherwise.
              </p>
              <ol>
                <li>
                  <strong>Ownership Rights</strong>: YB Advisors Ltd. retains
                  full ownership of all proprietary methodologies, templates,
                  processes, and systems developed and shared while providing
                  its services.
                </li>
                <li>
                  <strong>Non-Transferable Rights</strong>: Clients are granted
                  limited, non-transferable rights to utilize the materials or
                  recommendations provided by YB Advisors Ltd. solely for their
                  internal business purposes. This does not grant any ownership
                  or intellectual property rights to the Client beyond the scope
                  of the engagement.
                </li>
              </ol>
              <h3>
                <strong>Restrictions on Usage</strong>
              </h3>
              <p>
                Clients and third parties are strictly prohibited from engaging
                in the following actions without prior written consent from YB
                Advisors Ltd.:
              </p>
              <ol>
                <li>
                  <strong>Reproduction or Distribution</strong>: Copying,
                  reproducing, distributing, or publishing any content, reports,
                  or materials provided by YB Advisors Ltd., in whole or in
                  part, for any purpose beyond the Client's internal use.
                </li>
                <li>
                  <strong>Commercial Use</strong>: Using the intellectual
                  property of YB Advisors Ltd. for commercial purposes, resale,
                  or redistribution to third parties.
                </li>
                <li>
                  <strong>Modification or Derivation</strong>: Altering,
                  modifying, or creating derivative works based on YB Advisors
                  Ltd.'s proprietary content or services.
                </li>
                <li>
                  <strong>Unauthorized Sharing</strong>: Sharing YB Advisors
                  Ltd.'s intellectual property with third parties, competitors,
                  or entities unaffiliated with the Client's organization.
                </li>
              </ol>
              <h3>
                <strong>Enforcement of Rights</strong>
              </h3>
              <p>
                YB Advisors Ltd. reserves the right to take legal action against
                any unauthorized use, reproduction, or distribution of its
                intellectual property. Such actions are considered a breach of
                these terms and may result in penalties, including termination
                of services and claims for damages.
              </p>
              <p>
                By utilizing the services of YB Advisors Ltd., Clients agree to
                respect the Company's intellectual property rights and abide by
                these restrictions.
              </p>
              <h2
                id="privacy-and-data-protection"
                ref={sectionRefs.current["privacy-and-data-protection"]}
              >
                <strong>7. Privacy and Data Protection</strong>
              </h2>
              <p>
                YB Advisors Ltd. is committed to safeguarding your privacy and
                handling data responsibly. We process all personal and business
                information provided to us in accordance with our{" "}
                <strong>Privacy Policy</strong>.
              </p>
              <ol>
                <li>
                  <strong>Data Usage</strong>: We collect and use your data
                  solely to deliver our services effectively and securely.
                </li>
                <li>
                  <strong>Confidentiality</strong>: All information shared with
                  us is treated as confidential and protected against
                  unauthorized access.
                </li>
              </ol>
              <p>
                For detailed information on how we handle your data, please
                refer to our <strong>Privacy Policy</strong>.
              </p>
              <h2
                id="amendments-and-updates"
                ref={sectionRefs.current["amendments-and-updates"]}
              >
                <strong>8. Amendments and Updates</strong>
              </h2>
              <p>
                YB Advisors Ltd. reserves the right to amend or update these
                Terms of Use to reflect service changes, regulations, or
                business practices.
              </p>
              <ol>
                <li>
                  <strong>Notification of Changes</strong>: Any updates to the
                  Terms will be posted on our website, and Clients are
                  encouraged to review them regularly.
                </li>
                <li>
                  <strong>Continued Use</strong>: By continuing to use our
                  services after changes are made, Clients agree to the revised
                  Terms.
                </li>
              </ol>
              <h2
                id="governing-law-and-jurisdiction"
                ref={sectionRefs.current["governing-law-and-jurisdiction"]}
              >
                <strong>9. Governing Law and Jurisdiction</strong>
              </h2>
              <p>
                These Terms of Use shall be governed by and construed by the
                laws of Liechtenstein.
              </p>
              <ol>
                <li>
                  <strong>Jurisdiction</strong>: Any disputes arising from or
                  related to these Terms or the services provided by YB Advisors
                  Ltd. shall fall under the exclusive jurisdiction of the courts
                  of Liechtenstein.
                </li>
                <li>
                  <strong>Dispute Resolution</strong>: Before initiating any
                  formal legal proceedings, both parties agree to make
                  reasonable efforts to resolve disputes through good-faith
                  negotiations. If such negotiations fail, disputes shall be
                  submitted to the competent courts in Liechtenstein.
                </li>
              </ol>
              <p>
                By using the services of YB Advisors Ltd., you agree to the
                application of Liechtenstein law and the jurisdiction of its
                courts to resolve any disputes.
              </p>
              <h2 id="severability" ref={sectionRefs.current["severability"]}>
                <strong>10. Severability</strong>
              </h2>
              <p>
                If any provision of these Terms of Use is found invalid,
                unlawful, or unenforceable by a court of competent jurisdiction,
                such provision shall be deemed severed from the Terms. The
                remaining provisions shall remain valid, binding, and
                enforceable to the fullest extent permitted by law.
              </p>
              <h2
                id="contact-information"
                ref={sectionRefs.current["contact-information"]}
              >
                <strong>11. Contact Information</strong>
              </h2>
              <p>
                For any inquiries or concerns related to these Terms of Use, you
                can contact YB Advisors Ltd. through the following channels:
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
              <p>Our team will be happy to assist you with your questions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;
