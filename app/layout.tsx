import "../styles/globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import MountedClient from "./components/MountedClient";
import RegisterModal from "./components/modals/RegisterModal";
import ReduxProvider from "./providers/ReduxProvider";

const newFont = Nunito({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={newFont.className}>
        <ReduxProvider>
          <MountedClient>
            {/* { <Modal
            isOpen
            onSubmit={() => {}}
            onClose={() => {}}
            btnLabel="Register"
            title="Register"
          /> }  */}
            <RegisterModal />
            <Navbar />
          </MountedClient>

          {children}
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
