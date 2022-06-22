import homeStyle from "../assets/style/home.module.scss";
import "./Preloader.scss";
const Preloader = () => {
  return (
    <div className={homeStyle.containerFull}>
      <div className={homeStyle.container}>
        <div className="loader-main">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
