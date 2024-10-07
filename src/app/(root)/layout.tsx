import "../../styles/globals.css";
import { Roboto, Roboto_Slab } from "next/font/google";
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

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-roboto-slab",
});

const App = async ({ children }: { children: React.ReactNode }) => {
  // const locale = await getLocale();
  // const messages = await getMessages();

  return (
    <html className={`${roboto.variable} ${roboto_slab.variable}`}>
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
