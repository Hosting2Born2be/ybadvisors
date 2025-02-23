"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Hero.module.scss";
import { fadeInUp } from "@/utils/animations";
import RequestButton from "../LearnMoreButton/RequestButton";

const Hero = () => {
  const sectionRef = useRef(null);
  /**const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); */

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div
        className={styles.heroBackground}
        style={
          {
            //backgroundImage: "url('/images/hero.webp')",
          }
        }
      />
      {/**<motion.div
        className={styles.heroBackground}
        style={{
          y: yBackground,
          backgroundImage: "url('/images/hero.webp')",
        }}
      /> */}

      <div className="_container">
        <div className={styles.body}>
          <img src="/images/logo.svg" alt="logo" />
          <img
            className={styles.arrow}
            src="/images/VerticalLine.svg"
            alt="arrow"
          />
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.top}
            >
              <h2>
                Simplifying Compliance. Optimizing <br />
                Operations. Empowering Growth.
              </h2>
              <RequestButton text={"Request a Call"} classValue={"white"} />
              <h1>
                Financial Expertise You Can <br />
                Rely On, Every Step of the Way
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
