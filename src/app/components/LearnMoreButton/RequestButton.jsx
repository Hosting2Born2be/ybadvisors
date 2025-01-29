"use client";
import Link from "next/link";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import styles from "./RequestButton.module.scss";
import ButtonArrow from "@/icons/ButtonArrow";
import usePopupStore from "@/stores/popupStore";

const RequestButton = ({ text, link, classValue }) => {
  const { setRequestPopupDisplay } = usePopupStore();

  const orderPopupOpen = () => {
    setRequestPopupDisplay(true);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={styles.requestButton}
    >
      <button
        href={link}
        className={classValue}
        onClick={() => orderPopupOpen()}
      >
        <div>
          <div className={styles.circle}>
            <ButtonArrow />
          </div>
          <span>{text}</span>
          <div className={styles.circleTransparent}>
            <ButtonArrow />
          </div>
        </div>
      </button>
    </motion.div>
  );
};

export default RequestButton;
