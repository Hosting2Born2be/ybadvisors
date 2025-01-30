import React from "react";
import styles from "../Policy.module.scss";
import Link from "next/link";
import TermsOfUse from "./components/TermsOfUse";

export const metadata = {
  title: "Terms of Use | YB Advisors",
  openGraph: {
    title: "Terms of Use | YB Advisors",
    images: "https://ybadvisors.li/images/meta.png",
  },
};

const TermsAndConditions = () => {
  return (
    <>
      <section className={styles.policyHero}>
        <div className="_container">
          <Link href={"/"}>
            <img src="/images/logo.svg" alt="logo" />
          </Link>
        </div>
      </section>
      <TermsOfUse />
    </>
  );
};

export default TermsAndConditions;
