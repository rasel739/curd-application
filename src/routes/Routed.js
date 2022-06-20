import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurdDetails from "../components/CurdDetails";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";
import UpdatePerson from "../components/UpdatePerson";

const Routed = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/update-person" element={<UpdatePerson />} />
        <Route path="/contact/:detailId" element={<CurdDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routed;
