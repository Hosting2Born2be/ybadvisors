"use client";

import { useMemo } from "react";
import { getMDXComponent } from "@mdx-js/react";

const MDXContentRenderer = ({ mdxCode }) => {
  const Content = useMemo(() => getMDXComponent(mdxCode), [mdxCode]);

  return <Content />;
};

export default MDXContentRenderer;
