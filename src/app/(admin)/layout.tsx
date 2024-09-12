import Sidebar from "@/components/admin/UI/Sidebar/Sidebar";
import "../../styles/globals.css";
import StoreProvider from "../StoreProvider";
const App = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <title>Care4Pet</title>
      </head>
      <body>
        <StoreProvider>
          <div className="flex py-12">
            <Sidebar />
            <div className="mx-auto w-3/4">{children}</div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
};

export default App;
