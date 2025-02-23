import localFont from "next/font/local";
import "@/styles/base.scss";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader";
import { GoogleAnalytics } from "@next/third-parties/google";

const cabinet = localFont({
  src: [
    {
      path: "./fonts/CabinetGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Bold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-cabinet",
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata = {
  title: "Accounting, Taxation, and Compliance | YB Advisors",
  description:
    "Simplify your financial operations and ensure compliance with expert accounting and taxation services. Contact us today for tailored solutions.",
  openGraph: {
    title: "Accounting, Taxation, and Compliance | YB Advisors",
    description:
      "Simplify your financial operations and ensure compliance with expert accounting and taxation services. Contact us today for tailored solutions.",
    images: "https://ybadvisors.li/images/meta.png",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/icon_light.png",
        href: "/images/icon_light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/icon_dark.png",
        href: "/images/icon_dark.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${cabinet.variable}`}>
        <GoogleAnalytics gaId="G-ZMDD0V36WV" />
        <Preloader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
