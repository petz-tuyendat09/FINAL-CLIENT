import "@/styles/globals.css";
import { Manrope, Cormorant } from "next/font/google";

import StoreProvider from "../../StoreProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  variable: "--font-manrope",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});
const App = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={`${manrope.variable} ${cormorant.variable}`}>
      <head>
        <title>Care4Pet</title>
      </head>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
};

export default App;
