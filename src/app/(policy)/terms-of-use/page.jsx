import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import styles from "../Policy.module.scss";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  const locales = ["en", "it", "de"];

  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return params;
}

export async function generateMetadata({ params: { locale } }) {
  const page = await getPage("terms-of-use", locale);
  const pageTitle = `${page.title} | Airis`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: "",
    },
  };
}

const TermsAndConditions = async () => {
  const page = await getPage("terms-of-use");
  return (
    <>
      <section className={styles.policyHero}>
        <div className="_container">
          <h1>{page.title}</h1>
        </div>
      </section>
      <section className={styles.policy}>
        <div className="_container">
          <article
            dangerouslySetInnerHTML={{ __html: page.body }}
            className={styles.content}
          />
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
