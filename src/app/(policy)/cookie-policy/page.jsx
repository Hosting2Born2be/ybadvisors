import React from "react";
import styles from "../Policy.module.scss";
import Link from "next/link";
import CookiePolicy from "./components/CookiePolicy";

export const metadata = {
  title: "Cookie Policy | YB Advisors",
  openGraph: {
    title: "Cookie Policy | YB Advisors",
    //images: "",
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
      <CookiePolicy />
    </>
  );
};

export default TermsAndConditions;
