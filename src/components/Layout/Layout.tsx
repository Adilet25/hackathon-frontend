import { FC } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container flex flex-row">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
