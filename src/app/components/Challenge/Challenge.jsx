"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import styles from "./Challenge.module.scss";

const Challenge = () => {
  const challenges = [
    {
      title: "Constantly Changing Regulations",
      text: "94% of businesses report struggling to keep up with evolving tax and financial regulations, leading to inefficiencies and compliance risks.",
      image: "/images/challenge1.webp",
    },
    {
      title: "Navigating Licensing and Regulatory Applications",
      text: "71% of businesses entering new markets report difficulties in navigating licensing and regulatory applications, risking delays and lost opportunities.",
      image: "/images/challenge2.webp",
    },
    {
      title: "Financial Health",
      text: "62% of businesses admit to being unsure about the accuracy of their financial health due to inconsistent reporting and lack of insight.",
      image: "/images/challenge3.webp",
    },
    {
      title: "Financial Management",
      text: "Accounting tasks consume an average of 10 hours per week for 68% of SMBs, taking away from strategic initiatives.",
      image: "/images/challenge4.webp",
    },
    {
      title: "Tax Structures",
      text: "79% of companies with cross-border operations report challenges in managing complex, multi-jurisdiction tax requirements.",
      image: "/images/challenge5.webp",
    },
    {
      title: "Penalties and Fines",
      text: "Businesses face an average fine of €87,000 for improper taxation or failure to meet compliance standards.",
      image: "/images/challenge6.webp",
    },
  ];

  return (
    <section className={styles.challenges}>
      <div className="_container">
        <div className={styles.body}>
          <div className={styles.title}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              The <br />
              Challenges <br />
              Businesses <br />
              Face Today
            </motion.h2>
          </div>
          <div className={styles.sliderWrap}>
            <Swiper
              spaceBetween={36}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade, Navigation]}
              effect="fade"
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
            >
              {challenges.map((challenge, index) => (
                <SwiperSlide key={index} className={styles.singleSlide}>
                  <div className={styles.slideInner}>
                    <div
                      className={styles.image}
                      style={{ backgroundImage: `url(${challenge.image})` }}
                    ></div>
                    <div className={styles.content}>
                      <div>
                        <h3
                          dangerouslySetInnerHTML={{ __html: challenge.title }}
                        />
                        <p
                          dangerouslySetInnerHTML={{ __html: challenge.text }}
                        />
                        <div className={styles.navigation}>
                          <button className="prev">
                            <img src="/images/prevArrow.svg" />
                          </button>
                          <button className="next">
                            <img src="/images/nextArrow.svg" />
                          </button>
                        </div>
                      </div>
                      <span className={styles.bottomLine}>
                        <span></span>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
