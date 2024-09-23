import "../../styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import LocaleSetter from "@/components/shared/LocaleSetter/LocaleSetter";

const App = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html>
      <head>
        <title>Care4Pet</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
      <NextIntlClientProvider messages={messages}>
          <MainLayout>
            <LocaleSetter initialLocale={locale} />
            {children}
          </MainLayout>
        </NextIntlClientProvider>

      </body>
    </html>
  );
};

export default App;
