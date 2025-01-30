"use client";
import React, { useEffect, useRef, useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./OurServices.module.scss";
import RequestButton from "../LearnMoreButton/RequestButton";

const OurServices = () => {
  const contentRef = useRef(0);
  const [openId, setOpenId] = useState(0);

  const clickHandler = (id) => {
    if (id === openId) setOpenId(null);
    else setOpenId(id);
  };

  const services = [
    {
      title: "Implementation of Processes",
      text: `
                <b>Ensure Smooth Operations:</b> Tailor your accounting processes to boost efficiency, reduce errors, and ensure compliance with industry standards.
            `,
    },
    {
      title: "Development of Accounting Strategies",
      text: `
                <b>Strengthen Your Financial Foundation:</b> Create a solid strategy to optimize financial management, support business goals, and stay ahead of regulations.
            `,
    },
    {
      title: "Tax Structure Consultation",
      text: `
                <b>Optimize Your Tax Efficiency:</b> Navigate complex tax structures and reduce liabilities with expert guidance tailored to your business and cross-border needs.
            `,
    },
    {
      title: "Bookkeeping System Setup",
      text: `
                <b>Simplify Financial Management:</b> Implement a seamless bookkeeping system for accurate, real-time tracking and easy access to financial data.
            `,
    },
    {
      title: "Team Training and Education",
      text: `
                <b>Empower Your Team:</b> Equip your accounting team with the skills and knowledge to manage financial systems effectively and ensure accuracy.
            `,
    },
    {
      title: "Reconciliation System Development",
      text: `
                <b>Achieve Financial Clarity:</b> Build a robust reconciliation system to ensure consistency, accuracy, and compliance in your financial records.
            `,
    },
    {
      title: "Licensing and Regulatory Support",
      text: `
                <b>Navigate Licensing with Confidence:</b> Receive expert support in acquiring and maintaining key licenses (e.g., MiCA, FCA) and ensure ongoing regulatory compliance.
            `,
    },
  ];

  return (
    <section className={styles.ourServices}>
      <div className="_container">
        <div className={styles.body}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col1}
          >
            <h2>
              Our <br />
              Services
            </h2>
            <RequestButton text={"Request a Call"} />
          </motion.div>
          <div className={styles.col2}>
            {services.map((service, index) => (
              <div
                key={index}
                className={styles.accordionItem}
                onClick={() => clickHandler(index)}
              >
                <div className={styles.accordionTitle}>{service.title}</div>
                <div
                  className={styles.accordionContent}
                  ref={contentRef}
                  style={
                    index === openId
                      ? { height: contentRef.current.scrollHeight }
                      : { height: "0px" }
                  }
                >
                  <div dangerouslySetInnerHTML={{ __html: service.text }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
