import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";

const RootLayout: React.FC = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
