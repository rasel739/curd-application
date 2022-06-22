import { useLocation } from "react-router-dom";
import personImg from "../assets/image/person.png";
import curdDetailsStyle from "../assets/style/curdDetails.module.scss";
import homeStyle from "../assets/style/home.module.scss";

const CurdDetails = () => {
  const location = useLocation();

  const { id, name, phone } = location.state;

  return (
    <div className={homeStyle.containerFull}>
      <div className={homeStyle.container}>
        <div className={curdDetailsStyle.curdDetailMain}>
          <div className={curdDetailsStyle.curdDetailImg}>
            <img src={personImg} alt="" />
          </div>
          <div>
            <span>Id</span>:<span>{id}</span>
          </div>
          <div>
            <span>Name</span>:<span>{name}</span>
          </div>
          <div>
            <span>Phone</span>:<span>{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurdDetails;
