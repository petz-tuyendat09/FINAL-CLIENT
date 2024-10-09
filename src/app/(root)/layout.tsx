import "../../styles/globals.css";
import { Roboto, Lora } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import LocaleSetter from "@/components/shared/LocaleSetter/LocaleSetter";
import StoreProvider from "../StoreProvider";
import Header from "@/components/ui/Header/Header";
import Footer from "@/components/ui/Footer";
import NavigateBar from "@/components/ui/NavigateBar/NavigateBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  display: "swap",
  variable: "--font-roboto",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lora",
});

const App = async ({ children }: { children: React.ReactNode }) => {
  // const locale = await getLocale();
  // const messages = await getMessages();

  return (
    <html className={`${roboto.variable} ${lora.variable}`}>
      <head>
        <title>Care4Pet</title>
      </head>
      <body>
        {/* <NextIntlClientProvider messages={messages}> */}
        <StoreProvider>
          {/* <LocaleSetter initialLocale={locale} /> */}
          <Header />
          <main>{children}</main>
          <NavigateBar />
          <Footer />
        </StoreProvider>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
};

export default App;
