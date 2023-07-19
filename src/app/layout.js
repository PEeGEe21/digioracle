'use client';
import './globals.css';
import { michromaFont, gtWalshFont, outfitFont } from '../app/fonts';
import { MenuProvider } from './utils/context';

// export const metadata = {
//   title: {
//     template: 'DigiOracle - %s',
//     default: 'DigiOracle',
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gtWalshFont.variable} ${gtWalshFont.className} ${outfitFont.className} ${outfitFont.variable} ${michromaFont.className} ${michromaFont.variable} `}
        suppressHydrationWarning={true}
      >
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
