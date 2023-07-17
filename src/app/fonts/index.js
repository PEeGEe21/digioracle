import localFont from "next/font/local";

export const gtWalshFont = localFont({
  src: [
    {
      path: "./GTWalsheim/GTWalsheimPro-UltraBold.ttf",
      weight: "900",
    },
    {
      path: "./GTWalsheim/GTWalsheimPro-Bold.ttf",
      weight: "700",
    },
    {
      path: "./GTWalsheim/GTWalsheimPro-Medium.ttf",
      weight: "500",
    },
    {
      path: "./GTWalsheim/GTWalsheimPro-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-gtwalsh",
});

export const michromaFont = localFont({
  src: [
    {
      path: "./Michroma-Regular.ttf",
      weight: "400",
    }
  ],
  variable: "--font-michroma",
});

export const outfitFont = localFont({
  src: [
    {
      path: "./Outfit/Outfit-Regular.ttf",
      weight: "400",
    },
    {
      path: "./Outfit/Outfit-Medium.ttf",
      weight: "500",
    }
  ],
  variable: "--font-outfit",
});


