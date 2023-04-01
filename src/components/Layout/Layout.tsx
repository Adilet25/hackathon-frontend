import { FC } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container mx-auto p-4 flex flex-row">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
