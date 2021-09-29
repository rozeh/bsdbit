import React from "react";

const Visual = () => {
  return (
    <>
      {/* visual */}
      <div className="visual">
        <div data-aos="fade-up">
          <p>부산 고퀄리티 아이티 교육</p>
          <h1>
            4차산업 혁명시대
            <br />
            인공지능, 블록체인, AR, VR
            <br />
            <span>교육 전문기관</span>
          </h1>
          <a href="/reservation" className="btn_apply">
            <p>
              대관신청하기
              <img src="images/ico_next.svg" alt="" />
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Visual;
