import "../../styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import LocaleSetter from "@/components/shared/LocaleSetter/LocaleSetter";

const App = async ({ children }:{ children: React.ReactNode }) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html>
      <head>
        <title>Care4Pet</title>
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
