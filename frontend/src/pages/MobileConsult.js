import React from 'react'


function MobileConsult() {
  return (
    <>
      {/* titleBG */}
      <div className="titleBG">
        <div className="titleArea">
          <h5 data-aos="fade-up">
            WITH BUSAN.IT PROGRAM
            <br />
            <span>
              부산 아이티에서 신청가능한
              <br />
              다양한 프로그램
            </span>
          </h5>
          <img src="images/ai_education.png" />
        </div>
      </div>
      {/* education */}
      <div className="education">
        <h3>컨설팅</h3>
        {/* applyArea > edu_box */}
        <div className="edu_box" id="#">
          <a href="applyDetail.html" data-aos="fade-up">
            <div>
              <img src="images/edu01.png" />
              <p>신청가능</p>
              <h3>4차산업 인재양성 프로그램 모집. 전액 국비무료 교육</h3>
              <h5>
                신청기간: <span id="#">2021.03.01 ~ 2021.03.30</span>
              </h5>
            </div>
          </a>
        </div>
      </div>
      {/* paging */}
      <div className="paging">
        <a className="select" href="#">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
      </div>
      {/* footer */}
      <div className="footer_line" />
      <footer>
        <div className="footer_logo">
          <img src="images/logo.svg" />
        </div>
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
      {/* btn_top */}
      <a id="btn_top" href="#">
        <img src="images/btn_top.png" />
      </a>
    </>
  )
}

export default MobileConsult
