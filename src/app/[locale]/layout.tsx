import "../../styles/globals.css";
import { Roboto, Cormorant } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import LocaleSetter from "@/components/shared/LocaleSetter/LocaleSetter";
import StoreProvider from "../StoreProvider";
import Header from "@/components/ui/Header/Header";
import Footer from "@/components/ui/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const App = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html className={`${roboto.variable} ${cormorant.variable}`}>
      <head>
        <title>Care4Pet</title>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <LocaleSetter initialLocale={locale} />
            <Header />
            <div className="container">{children}</div>
            <Footer />
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default App;
