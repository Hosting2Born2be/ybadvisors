import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import LinkedinIcon from "@/icons/socials/LinkedinIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className={styles.footer}>
      <div className="_container">
        <div className={styles.body}>
          <div className={styles.col1}>
            <Link href="/" className={styles.logo}>
              <img src="/images/logo_black.svg" />
            </Link>
            <div className={styles.company}>
              <h4>YB Advisors Ltd.</h4>
              <p>
                Your partner in accounting, taxation, and <br />
                compliance.
              </p>
            </div>
            <div className={styles.addresses}>
              <div>
                <span>Registered Address:</span>
                <h4>
                  Schaanerstrasse 99, <br />
                  Vaduz, 9490, <br />
                  Liechtenstein
                </h4>
              </div>
              <div>
                <span>Registration Number:</span>
                <h4>FL-0002.730.986-1</h4>
              </div>
            </div>
          </div>
          <div className={styles.col2}>
            <h3>Contact us</h3>
            <div>
              <span>Email</span>
              <Link href="mailto:office@ybadvisors.li">
                office@ybadvisors.li
              </Link>
            </div>
            <div className={styles.founderSection}>
              <span>Founder & CEO</span>
              <div>
                <Link href="https://search.app/LTaVD7unHtr2fKNb7" target="_blank" className={styles.link}>
                  <div className={styles.socialContainer}>
                    <LinkedinIcon />
                  </div>
                  Boris Yelevich
                </Link>
                <Link href="https://www.linkedin.com/company/yb-advisors/" target="_blank" className={styles.link}>
                  <div className={styles.socialContainer}>
                    <LinkedinIcon />
                  </div>
                  YB Advisors
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.col3}>
            <h3>Legal</h3>
            <div className={styles.legal}>
              <Link href="/terms-of-use">
                Terms of Use <ButtonArrow />
              </Link>
              <Link href="/privacy-policy">
                Privacy Policy <ButtonArrow />
              </Link>
              <Link href="/cookie-policy">
                Cookie Policy <ButtonArrow />
              </Link>
              <Link href="/refund-policy">
                Refund Policy <ButtonArrow />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.copy}>
          © {currentYear} YB Advisors Ltd. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;