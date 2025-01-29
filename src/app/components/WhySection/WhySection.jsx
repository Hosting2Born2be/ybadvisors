"use client";
import React, { useEffect, useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./WhySection.module.scss";

const WhySection = () => {
  const reasons = [
    {
      title: "Experienced <br/>Experts",
      text: "20+ years in financial consulting and compliance.",
    },
    {
      title: "Tailored <br/>Solutions",
      text: "20+ years in financial consulting and compliance.",
    },
    {
      title: "Reliable <br/>Support",
      text: "Ongoing assistance to your financial systems efficiency.",
    },
    {
      title: "Global <br/>Reach",
      text: "Expertise in cross-jurisdictional financial matters.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reasons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reasons.length]);

  return (
    <section className={styles.whySection}>
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Why Businesses Choose <strong>YB Advisors</strong>
        </motion.h2>
        <div className={styles.body}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`${styles.item} ${
                index === activeIndex ? styles.active : ""
              }`}
            >
              <h3 dangerouslySetInnerHTML={{ __html: reason.title }} />
              <p dangerouslySetInnerHTML={{ __html: reason.text }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
