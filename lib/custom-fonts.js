import localFont from "next/font/local";

const Comorant_Garamond = localFont({
  src: [
    {
      path: "../public/fonts/Cormorant_Garamond/CormorantGaramond-Italic.ttf",
      style: "italic",
    },
    {
      path: "../public/fonts/Cormorant_Garamond/CormorantGaramond-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Cormorant_Garamond/CormorantGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Cormorant_Garamond/CormorantGaramond-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Cormorant_Garamond/CormorantGaramond-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Cormorant_Garamond/CormorantGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
});
const Noto_Sans_JP = localFont({
  src: [
    {
      path: "../public/fonts/Noto_Sans_JP/NotoSansJP-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Noto_Sans_JP/NotoSansJP-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Noto_Sans_JP/NotoSansJP-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Noto_Sans_JP/NotoSansJP-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Noto_Sans_JP/NotoSansJP-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Noto_Sans_JP/NotoSansJP-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-notosans",
});
const Sawarabi = localFont({
  src: [
    {
      path: "../public/fonts/Sawarabi_Mincho/sawarabi-mincho-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Sawarabi_Mincho/SawarabiMincho-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sawarabi",
});

export { Sawarabi, Noto_Sans_JP, Comorant_Garamond };
