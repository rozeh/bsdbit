import React from 'react'

function MobileMain() {
  return (
    <>
      {/* visual */}
      <div className="visual">
        <img src="images/bannerBG.svg" />
        <h5 data-aos="fade-up">부산 고퀄리티 아이티 교육</h5>
        <p data-aos="fade-up">
          4차산업 혁명시대
          <br />
          인공지능, 블록체인, AR, VR
          <br />
          <span>교육 전문기관</span>
        </p>
        <a href="/mreserve" data-aos="fade-up">
          대관신청하기&nbsp;&nbsp;
          <i className="fas fa-arrow-right" />
        </a>
      </div>
      {/* education */}
      <div className="education">
        <h5>Find your education</h5>
        <h3>
          부산아이티의
          <br />
          <span>현재 진행중인 교육은 ?</span>
        </h3>
        {/* education > edu_box */}
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
          <a href="#" data-aos="fade-up">
            <div>
              <img src="images/edu02.png" />
              <p>신청가능</p>
              <h3>부산국비지원 무료교육을 받아보세요.</h3>
              <h5>
                신청기간: <span id="#">2021.03.01 ~ 2021.03.30</span>
              </h5>
            </div>
          </a>
          <a href="#" data-aos="fade-up">
            <div>
              <img src="images/edu03.png" />
              <p>신청가능</p>
              <h3>소프트웨어 개발자 교육</h3>
              <h5>
                신청기간: <span id="#">2021.03.01 ~ 2021.03.30</span>
              </h5>
            </div>
          </a>
          <a href="#" data-aos="fade-up">
            <div>
              <img src="images/edu04.png" />
              <p>신청가능</p>
              <h3>비대면 교육 개최. 오프라인으로 강의 모집</h3>
              <h5>
                신청기간: <span id="#">2021.03.01 ~ 2021.03.30</span>
              </h5>
            </div>
          </a>
          <a href="#" data-aos="fade-up">
            <div>
              <img src="images/edu05.png" />
              <p>신청가능</p>
              <h3>Intelligent Embedded 융합 S/W 개발자 과정</h3>
              <h5>
                신청기간: <span id="#">2021.03.01 ~ 2021.03.30</span>
              </h5>
            </div>
          </a>
          <a href="#" data-aos="fade-up">
            <div>
              <img src="images/edu06.png" />
              <p className="red">마감임박</p>
              <h3>부산AI교육센터 코딩프로그램 교육</h3>
              <h5>
                신청기간: <span id="#">2021.03.01 ~ 2021.03.30</span>
              </h5>
            </div>
          </a>
          <a href="#" data-aos="fade-up">
            <div>
              <img src="images/edu07.png" />
              <p className="red">마감임박</p>
              <h3>선착순모집. 머신러닝을 이용한 빅테이터 분석 프로젝트 과정</h3>
              <h5>
                신청기간: <span id="#">2021.03.01 ~ 2021.03.30</span>
              </h5>
            </div>
          </a>
          <a href="#" data-aos="fade-up">
            <div>
              <img src="images/edu08.png" />
              <p className="red">마감임박</p>
              <h3>부산AI교육센터 온라인 인공지능 교육</h3>
              <h5>
                신청기간: <span id="#">2021.03.01 ~ 2021.03.30</span>
              </h5>
            </div>
          </a>
        </div>
        {/* education > btn_more */}
        <a href="#" className="btn_more" id="#">
          <img src="images/btn_more.svg" />
        </a>
        {/* info */}
        <div className="info">
          <div className="info_title">
            <h5>Busan IT notice</h5>
            <h3>
              부산아이티의
              <br />
              <span>소식을 알려드립니다</span>
            </h3>
          </div>
        </div>
        {/* seminar */}
        <div className="seminar">
          <div className="banner_title">
            <div className="line" />
            <h3>Seminar</h3>
          </div>
          {/* seminar > banner */}
          <div className="seminar_group" data-aos="fade-up">
            <div className="seminar_con center">
              <div id="#" className="seminar_img">
                <img src="images/seminar01.png" />
              </div>
              <h3 id="#">IT 세미나 컨퍼런스</h3>
              <p id="#">
                신청기간 : <span id="#">2021.03.01 ~ 2021.03.30</span>
              </p>
            </div>
            <div className="seminar_con">
              <div id="#" className="seminar_img">
                <img src="images/seminar02.png" />
              </div>
              <h3 id="#">오픈세미나 인공지능, AR/VR, 블록체인 교육</h3>
              <p id="#">
                신청기간 : <span id="#">2021.03.01 ~ 2021.03.30</span>
              </p>
            </div>
            <div className="seminar_con">
              <div id="#" className="seminar_img">
                <img src="images/seminar03.png" />
              </div>
              <h3 id="#">머신머닝과 인공지능의 현재와 미래</h3>
              <p id="#">
                신청기간 : <span id="#">2021.03.01 ~ 2021.03.30</span>
              </p>
            </div>
          </div>
        </div>
        {/* notice */}
        <div className="notice">
          <div className="banner_title">
            <div className="line" />
            <h3>Notice</h3>
          </div>
          {/* notice > banner */}
          <div className="notice_group" data-aos="fade-up">
            <div className="notice_con center">
              <h3 id="#">부산 클라우드 혁신센터 Powered by AWS 멤버십 가입</h3>
              <p id="#">2021.02.08</p>
            </div>
            <div className="notice_con">
              <h3 id="#">저작권 산업현장 서비스(법률상담) 지원사업</h3>
              <p id="#">2021.02.08</p>
            </div>
            <div className="notice_con">
              <h3 id="#">부산문화콘텐츠 스타프로젝트 제작지원 사업공고</h3>
              <p id="#">2021.02.08</p>
            </div>
          </div>
        </div>
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

export default MobileMain
