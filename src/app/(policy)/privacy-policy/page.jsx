import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  const locales = ["en", "it", "de"];

  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return params;
}

export async function generateMetadata({ params: { locale } }) {
  const page = await getPage("privacy-policy", locale);
  const pageTitle = `${page.title} | Airis`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: "",
    },
  };
}

const TermsAndConditions = async () => {
  const page = await getPage("privacy-policy");
  return (
    <>
      <section className="policy-hero">
        <img src="/images/about/ellipse1.png" />
        <div className="_container">
          <div className="policy-hero__body">
            <div>
              <Image
                alt="hero1"
                src={"/images/standarts/hero1.png"}
                width={330}
                height={300}
              />
            </div>
            <div>
              <h1>{page.title}</h1>
              {page.date ? <h2>Date: {page.date}</h2> : ""}
            </div>
            <div>
              <Image
                alt="hero1"
                src={"/images/standarts/hero2.png"}
                width={330}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="policy">
        <div className="_container">
          <div className="policy__body">
            <article className="policy__content">
              <h2>
                <strong>1. Introduction</strong>
              </h2>
              <p>
                This Privacy Policy applies to the operator of Airis, an
                AI-powered call center solution. This policy outlines how we
                collect, use, store, and protect personal data when providing
                our services.
              </p>
              <h3>
                <strong>When Does This Privacy Policy Apply?</strong>
              </h3>
              <p>This Privacy Policy applies when you:</p>
              <ul>
                <li>
                  Visit or interact with our <strong>website</strong> (
                  <a href="https://airis.space/">https://airis.space/</a>).
                </li>
                <li>
                  Submit inquiries or request information about our services.
                </li>
                <li>Engage in commercial transactions with us.</li>
              </ul>
              <p>
                Airis processes personal data solely for{" "}
                <strong>business-to-business (B2B) purposes</strong>, meaning
                our services are intended for corporate clients, not individual
                consumers.
              </p>
              <h3>
                <strong>Changes to This Privacy Policy</strong>
              </h3>
              <p>
                We may update this Privacy Policy from time to time. Any
                modifications will be posted on our website, and continued use
                of our services after such changes constitutes acceptance of the
                updated policy. If you do not agree with any changes, please
                discontinue using our services.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>
                <strong>2. Personal Data We Collect and Disclose</strong>
              </h2>
              <p>
                Airis collects and processes personal data solely for{" "}
                <strong>business-to-business (B2B) purposes</strong> to provide
                AI-driven call center automation services. The table below
                outlines the types of personal data we collect, how we use it,
                and with whom it may be disclosed.
              </p>
              <p>
                <br />
                <br />
              </p>
              <div className="table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <strong>
                            Categories of Personal <br />
                            Data
                          </strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>
                            Purpose of <br />
                            Collection
                          </strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>
                            Disclosures of <br />
                            Personal Data
                          </strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Identifiers (name, email address, phone number, IP
                          address)
                        </p>
                      </td>
                      <td>
                        <p>
                          To communicate with clients, process service requests,
                          and provide customer support.
                        </p>
                      </td>
                      <td>
                        <p>
                          - Service providers (e.g., hosting and security
                          vendors)
                        </p>
                        <p>- Payment processors (for transactions)</p>
                        <p>- Legal and compliance advisors (when required)</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Commercial Information (service preferences,
                          transaction history)
                        </p>
                      </td>
                      <td>
                        <p>
                          To manage subscriptions, process payments, and improve
                          service offerings.
                        </p>
                      </td>
                      <td>
                        <p>- Payment processors</p>
                        <p>- Security and fraud prevention providers</p>
                        <p>- Legal and compliance advisors (if required)</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Internet or Electronic Activity (IP address, device
                          information, site usage data)
                        </p>
                      </td>
                      <td>
                        <p>
                          To analyze website traffic, enhance user experience,
                          and improve service functionality.
                        </p>
                      </td>
                      <td>
                        <p>- Analytics providers</p>
                        <p>- Security and hosting vendors</p>
                        <p>- Marketing partners (where permitted)</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Geolocation Data (approximate location from IP
                          address)
                        </p>
                      </td>
                      <td>
                        <p>
                          To optimize service performance based on regional
                          requirements.
                        </p>
                      </td>
                      <td>
                        <p>- Security vendors</p>
                        <p>- Analytics providers</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Call and Interaction Data (AI-generated call logs,
                          callback requests)
                        </p>
                      </td>
                      <td>
                        <p>
                          To provide AI-driven insights and reports for client
                          engagement.
                        </p>
                      </td>
                      <td>
                        <p>- Clients using our AI solution</p>
                        <p>- Service providers supporting AI operations</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Inferences (preferences based on service interactions)
                        </p>
                      </td>
                      <td>
                        <p>
                          To customize service recommendations and optimize call
                          strategies.
                        </p>
                      </td>
                      <td>
                        <p>- Internal analytics</p>
                        <p>- Marketing partners (where legally permitted)</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>
                <strong>Additional Disclosures</strong>
              </h3>
              <ul>
                <li>
                  Airis may disclose personal data if required{" "}
                  <strong>
                    by law or regulatory authorities or in response to legal
                    requests
                  </strong>{" "}
                  such as subpoenas or government inquiries.
                </li>
                <li>
                  Where legally permissible, we may share{" "}
                  <strong>anonymized, de-identified, or aggregated data</strong>{" "}
                  with third parties for research, analytics, or business
                  improvements.
                </li>
                <li>
                  Personal data is <strong>not sold or shared</strong> with
                  third parties for independent marketing purposes.
                </li>
              </ul>
              <h2>
                <strong>3. How We Process Personal Data</strong>
              </h2>
              <p>
                Airis processes personal data strictly for business purposes
                related to the operation of our AI-powered call center solution.
                The table below outlines the purposes for processing personal
                data and the lawful basis for doing so.
              </p>
              <div className="table-wrap">
                <table className="second">
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <strong>Purpose of Processing</strong>
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Lawful Basis</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Providing our AI-powered call center solution &ndash;
                          This includes processing client-provided data,
                          executing automated calls, lead classification,
                          callback scheduling, and generating reports to assist
                          businesses in managing their outreach.
                        </p>
                      </td>
                      <td>
                        <p>Contract; Legitimate interests</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Managing business operations &ndash; This includes
                          internal reporting, maintaining business records,
                          collecting payments, performing accounting, and
                          auditing service performance.
                        </p>
                      </td>
                      <td>
                        <p>Legitimate interests; Legal obligations</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Ensuring security and compliance &ndash; Detecting,
                          preventing, and responding to security incidents,
                          fraud, and other illegal activities; ensuring
                          compliance with telemarketing and data protection
                          regulations.
                        </p>
                      </td>
                      <td>
                        <p>Legitimate interests; Legal obligations</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Improving and developing services &ndash; Analyzing
                          usage patterns, refining AI scripts, and developing
                          new features to enhance service efficiency.
                        </p>
                      </td>
                      <td>
                        <p>Legitimate interests</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Marketing and communication &ndash; Sending service
                          updates, promotional materials, or product
                          recommendations (where permitted by law); soliciting
                          feedback on Airis services. Clients may opt out of
                          marketing communications at any time.
                        </p>
                      </td>
                      <td>
                        <p>
                          Consent (where required by law); Legitimate interests
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Corporate transactions &ndash; Managing data in case
                          of a sale, merger, acquisition, reorganization, or
                          similar corporate events.
                        </p>
                      </td>
                      <td>
                        <p>Legitimate interests; Legal obligations</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Legal compliance and dispute resolution &ndash;
                          Complying with legal obligations, responding to lawful
                          requests from regulatory authorities, and managing
                          disputes.
                        </p>
                      </td>
                      <td>
                        <p>Legal obligations</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          Processing personal data with explicit user consent
                          &ndash; If a user voluntarily agrees to have their
                          data processed for a specific purpose beyond the
                          standard operations of Airis.
                        </p>
                      </td>
                      <td>
                        <p>Consent</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>
                <strong>Third-Party Processing</strong>
              </h3>
              <p>
                We engage a limited number of third-party service providers to
                assist in delivering and maintaining our services. These
                providers help with:
              </p>
              <ul>
                <li>
                  <strong>Hosting and database management</strong> &ndash;
                  Ensuring system reliability and uptime.
                </li>
                <li>
                  <strong>Security monitoring</strong> &ndash; Protecting
                  against unauthorized access and cyber threats.
                </li>
                <li>
                  <strong>Data processing infrastructure</strong> &ndash;
                  Supporting AI-powered call management and reporting features.
                </li>
              </ul>
              <p>
                These third parties{" "}
                <strong>
                  only process personal data as necessary to provide their
                  services
                </strong>{" "}
                and are contractually obligated to protect the data by
                applicable laws. We remain responsible for ensuring our
                third-party service providers adhere to the required privacy and
                security standards.
              </p>
              <h2>
                <strong>4. Sources of Personal Data</strong>
              </h2>
              <p>
                Airis collects personal data from various sources to provide and
                improve its AI-powered call center solution. These sources
                include:
              </p>
              <ul>
                <li>
                  <strong>Information provided directly by clients</strong>{" "}
                  includes data submitted when businesses communicate with us
                  via our website, request service details, or engage in
                  commercial transactions.
                </li>
                <li>
                  <strong>
                    Information collected from business partners or affiliates
                  </strong>{" "}
                  &ndash; We may receive contact details of representatives or
                  employees of current, past, or prospective business clients
                  through referrals, partnerships, or mutual collaborations.
                </li>
                <li>
                  <strong>Automatically collected data</strong> &ndash; We
                  collect technical data such as IP addresses, browser type, and
                  interaction logs when clients visit our website. This helps us
                  analyze usage trends and improve service functionality. More
                  details on automatic data collection are available in{" "}
                  <strong>Section 5</strong> and our{" "}
                  <strong>Cookie Policy</strong>.
                </li>
                <li>
                  <strong>Publicly available information</strong> &ndash; We may
                  gather data from publicly accessible sources, including
                  business directories, publicly shared information on company
                  websites and professional networking platforms.
                </li>
                <li>
                  <strong>
                    Information from third-party service providers
                  </strong>{" "}
                  &ndash; This includes data from trusted vendors supporting our
                  services, such as payment processors, analytics providers, and
                  marketing partners.
                </li>
              </ul>
              <p>
                We may combine personal data from these different sources and
                use it for the purposes outlined in this Privacy Policy.
              </p>
              <h2>
                <strong>5. Cookies and Tracking Technologies</strong>
              </h2>
              <p>
                We use <strong>cookies and other tracking technologies</strong>{" "}
                to enhance user experience, analyze website traffic, and improve
                the functionality of Airis services. These technologies allow us
                to track visitor interactions over time and across different
                devices and websites.
              </p>
              <p>
                Using our website, you consent to cookies as outlined in our{" "}
                <strong>Cookie Policy</strong>, where you can also manage your
                cookie preferences. Some tracking technologies are essential for
                website functionality, while others help us analyze and optimize
                service performance.
              </p>
              <p>
                While some web browsers offer{" "}
                <strong>Do Not Track (DNT)</strong> settings, Airis does not
                currently respond to DNT signals. To manage tracking
                preferences, you can adjust your browser settings or use our
                cookie management options.
              </p>
              <h2>
                <strong>6. Security and Data Retention</strong>
              </h2>
              <p>
                We implement <strong>appropriate security measures</strong> to
                protect personal data against accidental or unlawful
                destruction, loss, unauthorized access, disclosure, or
                alteration. These measures include{" "}
                <strong>
                  technical, administrative, and organizational safeguards
                </strong>{" "}
                to ensure data security while processing and storing
                information.
              </p>
              <h3>
                <strong>Data Retention</strong>
              </h3>
              <p>
                We retain personal data only as long as necessary to fulfill the
                purposes for which it was collected. Once our business
                relationship ends, we may continue to store specific data for:
              </p>
              <ul>
                <li>
                  <strong>Contractual and legal compliance</strong> &ndash;
                  Ensuring obligations in terminated agreements are met.
                </li>
                <li>
                  <strong>Business records and auditing</strong> &ndash;
                  Maintaining records for legitimate business purposes.
                </li>
                <li>
                  <strong>Regulatory, tax, or accounting requirements</strong>{" "}
                  &ndash; Complying with applicable laws and industry standards.
                </li>
              </ul>
              <p>
                When we no longer have a{" "}
                <strong>legitimate business need</strong> or legal obligation to
                retain personal data, we{" "}
                <strong>delete, anonymize, or aggregate it</strong>. If
                immediate deletion is not possible due to technical constraints
                (e.g., backup archives), we will securely store the data and
                restrict access until deletion is feasible.
              </p>
              <p>
                For more details on specific retention periods, please contact
                us using the details provided in <strong>Section 9</strong>.
              </p>
              <h2>
                <strong>7. Children&rsquo;s Privacy</strong>
              </h2>
              <p>
                Airis is a <strong>business-to-business (B2B) solution</strong>{" "}
                and is <strong>not directed at children under 18</strong>. We do
                not knowingly collect or process personal data from children. If
                you are a parent or guardian and believe that a minor has
                provided personal data to us, please contact us using the
                details provided in <strong>Section 9</strong>, and we will take
                appropriate steps to remove the data.
              </p>
              <h2>
                <strong>8. External Links</strong>
              </h2>
              <p>
                Our website may contain{" "}
                <strong>links to third-party websites or services</strong>,
                including external platforms, business partners, or
                advertisements. Airis does not control and is{" "}
                <strong>
                  not responsible for these third-party sites' privacy policies,
                  data collection practices, or security measures
                </strong>
                .
              </p>
              <p>
                We encourage users to review the privacy policies of any
                external sites to understand how their data is collected, used,
                and protected. If you have concerns about a third-party service
                linked to our website, please refer to their privacy notices.
              </p>
              <h2>
                <strong>9. Contact Information</strong>
              </h2>
              <p>
                If you have any questions about how we process personal data or
                need to inquire about your data, please get in touch with us
                using the details below:
              </p>
              <ul>
                <li>
                  <strong>Website:</strong>
                  <a href="https://airis.space/">https://airis.space/</a>
                </li>
                <li>
                  <strong>Email:</strong>
                </li>
              </ul>
              <p>
                <br />
                <br />
              </p>
              <p>
                Our team is available to address any concerns regarding privacy,
                data protection, or your rights under this Privacy Policy.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
