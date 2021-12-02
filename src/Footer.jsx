import React from "react";




function Footer() {
  return (
    <div
      className="footer align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      {/* <img src={logo} alt="" className="footer__img pointer" /> */}
      
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75", textAlign:"center" }}
      >
         Designed and developed by @Sagar Kurewar.
      </span>
    </div>
  );
}

export default Footer;