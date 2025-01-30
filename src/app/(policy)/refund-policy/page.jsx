import React from "react";
import styles from "../Policy.module.scss";
import Link from "next/link";
import Refund from "./components/Refund";

export const metadata = {
  title: "Refund Policy | YB Advisors",
  openGraph: {
    title: "Refund Policy | YB Advisors",
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
      <Refund />
    </>
  );
};

export default TermsAndConditions;
