import navigationStyle from "../assets/style/Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={navigationStyle.containerFull}>
      <div className={navigationStyle.container}>
        <div className={navigationStyle.titleDiv}>
          <h2>CURD APPLICATION</h2>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
