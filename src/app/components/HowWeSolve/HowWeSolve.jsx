"use client";
import React, { useEffect, useState } from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./HowWeSolve.module.scss";
import RequestButton from "../LearnMoreButton/RequestButton";
import Image from "next/image";

const HowWeSolve = () => {
  const solves = [
    {
      title: "Stay Ahead of Regulations",
      image: "/images/solve1.png",
      description:
        "We monitor and update your business on evolving financial and tax regulations, ensuring compliance with the latest international standards.",
      whatWeDo: `
                <ul>
                    <li>Regular audits of financial processes to align with current regulations.</li>
                    <li>Implement timely updates on legal changes impacting your business.</li>
                    <li>Advise on local and international tax law adjustments.</li>
                </ul>
            `,
    },
    {
      title: "Reduce Risks",
      image: "/images/solve2.png",
      description:
        "Minimize your exposure to fines and penalties with our comprehensive risk management strategies.",
      whatWeDo: `
                <ul>
                    <li>Establish robust record-keeping practices and procedures.</li>
                    <li>Conduct periodic compliance checks and ensure all filings are accurate and timely.</li>
                    <li>Offer expert guidance on mitigating risks related to tax and financial operations.</li>
                </ul>
            `,
    },
    {
      title: "Simplify Complex Taxes",
      image: "/images/solve3.png",
      description:
        "Optimize your tax structure to reduce liabilities and improve efficiency across jurisdictions.",
      whatWeDo: `
                <ul>
                    <li>Provide detailed consultations on tax structuring in multiple jurisdictions.</li>
                    <li>Analyze your business's tax position and recommend efficient solutions.</li>
                    <li>Assist with international tax planning and cross-border issues to ensure compliance.</li>
                </ul>
            `,
    },
    {
      title: "Streamline Financial Tasks",
      image: "/images/solve4.png",
      description:
        "Save valuable time by automating and streamlining accounting processes such as bookkeeping, reconciliation, and reporting.",
      whatWeDo: `
                <ul>
                    <li>Implement custom bookkeeping systems tailored to your business needs.</li>
                    <li>Set up automated reconciliation processes to ensure timely and accurate financial records.</li>
                    <li>Design reporting systems that provide you with clear, actionable financial insights.</li>
                </ul>
            `,
    },
    {
      title: "Get Clear Financial Insights",
      image: "/images/solve5.png",
      description:
        "Empower your decision-making with tailored financial reports and strategic analysis.",
      whatWeDo: `
                <ul>
                    <li>Prepare detailed management reports that highlight key financial metrics.</li>
                    <li>Conduct financial analysis to identify areas of improvement and growth.</li>
                    <li>Provide regular updates and consultations to ensure your business remains on track.</li>
                </ul>
            `,
    },
    {
      title: "Navigate Licensing with Ease",
      image: "/images/solve6.png",
      description:
        "Simplify the process of obtaining and maintaining licenses like MiCA or FCA with our expert support.",
      whatWeDo: `
                <ul>
                    <li>Guide you through the application processes for financial licenses, ensuring all necessary documentation is in place.</li>
                    <li>Help prepare the required materials and submissions for regulatory authorities.</li>
                    <li>Provide ongoing support for compliance with licensing requirements.</li>
                </ul>
            `,
    },
  ];

  return (
    <section className={styles.howWeSolve}>
      <div className="_container">
        <div className={styles.top}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            How We Solve Your Challenges
          </motion.h2>
          <RequestButton text={"Schedule a Consultation"} />
        </div>
        <div className={styles.body}>
          {solves.map((solve, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item}
            >
              <Image
                src={solve.image}
                width={625}
                height={133}
                alt={solve.title}
              />
              <div className={styles.content}>
                <h3 dangerouslySetInnerHTML={{ __html: solve.title }} />
                <p dangerouslySetInnerHTML={{ __html: solve.description }} />
                <h4>What We Do:</h4>
                <div dangerouslySetInnerHTML={{ __html: solve.whatWeDo }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeSolve;
