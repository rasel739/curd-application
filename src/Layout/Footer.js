import footerStyle from "../assets/style/footer.module.scss";

const Footer = () => {
  return (
    <div className={footerStyle.containerFull}>
      <div className={footerStyle.container}>
        <div className={footerStyle.titleDiv}>
          Curd application &copy; All rights reserved | Rasel Hossain |{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
