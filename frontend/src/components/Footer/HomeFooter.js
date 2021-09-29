import React from "react";

const HomeFooter = () => {
  return (
    <>
      {/* footer */}
      <div className="footer_line" />
      <footer>
        <img src="images/logo.svg" className="footer_logo" alt="logo" />
        <p className="add">
          BUSAN AI DATACENTER
          <br />
          2F, 41, Jangdaegol-ro, Suyeong-gu, Busan, Republic of Korea
        </p>
        <p className="copy">Copyright©2021 AIPLATFORM All rights reserved.</p>
        <div className="call">
          <h3>
            대관 및 신청문의
            <br />
            <span>051-783-9998</span>
          </h3>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
