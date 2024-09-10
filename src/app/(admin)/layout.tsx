import Sidebar from "@/components/admin/UI/Sidebar/Sidebar";
import "../../styles/globals.css";
import { store } from "@/store/store";
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
            <div className="w-3/4 mx-auto">{children}</div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
};

export default App;
