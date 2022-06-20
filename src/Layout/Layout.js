import Routed from "../routes/Routed";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <Routed />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
