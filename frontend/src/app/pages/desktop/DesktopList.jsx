import React from 'react'
import styled from 'styled-components'

const DesktopList = () => {
  return (
    <DesktopListBlock>
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
      <div className="education">
      <div className="edu_title">
        <h5>Find your education</h5>
        <h3>
          부산아이티의
          <br />
          <span>현재 진행중인 교육은 ?</span>
        </h3>
      </div>
      {/* education > edu_box */}
      <div className="edu_box" id="#">
        <Education />
      </div>
      {/* education > btn_more */}
      <a href="/education" className="btn_more" id="#">
        <img src="images/btn_more.svg" alt="" />
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
          {/* seminar > banner_btns */}
          <div className="banner_btns">
            <div className="btn_banner left">
              <i className="fas fa-angle-left" />
            </div>
            <div className="btn_banner right">
              <i className="fas fa-angle-right" />
            </div>
          </div>
        </div>
        {/* seminar > banner */}
        <div className="seminar_banner">
          <div className="seminar_group" data-aos="fade-up">
              <Seminar />
          </div>
        </div>
      </div>
      {/* notice */}
      <div className="notice">
        <div className="banner_title">
          <div className="line" />
          <h3>Notice</h3>
          {/* notice > banner_btns */}
          <div className="notice_btns">
            <div className="btn_notice left">
              <i className="fas fa-angle-left" />
            </div>
            <div className="btn_notice right">
              <i className="fas fa-angle-right" />
            </div>
          </div>
        </div>
        {/* notice > banner */}
        <div className="notice_banner">
          <div className="notice_group" data-aos="fade-up">
              <Notice />
          </div>
        </div>
      </div>
    </div>
    </DesktopListBlock>
  )
}

const DesktopListBlock = styled.div`
    /* visual */
  .visual {
    width: 100%;
    height: 500px;
    background-image: url(../images/banner.svg);
    background-size: cover;
    background-position: center;
  }

  .visual > div {
    width: 1160px;
    height: auto;
    margin: 0 auto;
  }

  .visual > div > p {
    padding-top: 110px;
    color: #5775d9;
    font-size: 20px;
  }

  .visual > div > h1 {
    padding-top: 5px;
    color: #243366;
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
  }

  .visual > div > h1 > span {
    font-weight: 700;
  }

  .visual > div > .btn_apply {
    display: block;
    width: 160px;
    height: 50px;
    border: 1px solid #243366;
    border-radius: 5px;
    margin-top: 50px;
    line-height: 50px;
    transition: 0.3s;
  }

  .visual > div > .btn_apply:hover {
    background-color: #e1e5f4;
  }

  .visual > div > .btn_apply > p {
    position: relative;
    margin-left: 24px;
    color: #243366;
  }

  .visual > div > .btn_apply > p > img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  /* education */
  .education {
    width: 100%;
    height: 2300px;
    background-image: url(../images/bg01.svg);
    background-position: center;
    background-size: cover;
  }

  .education > .edu_title {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    padding-top: 70px;
  }

  .education > div > h5 {
    font-size: 14px;
    color: #5775d9;
    font-family: 'Poppins', sans-serif;
  }

  .education > div > h3 {
    font-size: 36px;
    color: #fff;
    line-height: 36px;
    margin-top: 5px;
    font-weight: 400;
  }

  .education > div > h3 > span {
    font-weight: 700;
  }

  .education > .edu_box {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }

  .education > .edu_box div {
    width: 345px;
    height: 509px;
    margin-right: 40px;
    margin-bottom: 40px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
  }

  .education > .edu_box .right {
    margin-right: 0;
  }

  .education > .edu_box div > img {
    max-width: 100%;
    max-height: 360px;
  }

  .education > .edu_box div > p {
    color: #2b90d9;
    font-size: 14px;
    font-weight: 700;
    margin-top: 14px;
    padding-left: 20px;
  }

  .education > .edu_box div > .red {
    color: #d94a2b;
    animation: blink 0.5s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 100;
    }

    100% {
      opacity: 0;
    }
  }

  .education > .edu_box div > .end {
    color: #bbb;
  }

  .education > .edu_box div > h3 {
    padding: 0 20px;
    margin-top: 7px;
    font-size: 20px;
    color: #191919;
    width: 100%;
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .education > .edu_box div > h5 {
    font-size: 12px;
    color: #767676;
    font-weight: 300;
    padding: 0 20px;
    margin-top: 35px;
  }

  .education > .edu_box div .hover {
    width: 100%;
    height: 100%;
    background-color: rgba(12, 42, 65, 0.85);
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    border: 1px solid rgba(12, 42, 65, 0.85);
  }

  .education > .edu_box div .hover > img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  .education > .edu_box div:hover .hover {
    display: block;
  }

  /* education > btn_more */
  .education > .btn_more {
    display: block;
    width: 160px;
    height: 50px;
    border: 1px solid #243366;
    border-radius: 5px;
    margin: 0 auto;
    position: relative;
    transition: 0.3s;
  }

  .education > .btn_more > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .education > .btn_more:hover {
    background-color: #e1e5f4;
  }

  /* education > info */
  .info > .info_title {
    width: 1160px;
    height: auto;
    margin: 0 auto;
    padding-top: 100px;
  }

  .info > div > h5 {
    font-size: 14px;
    color: #5775d9;
    font-family: 'Poppins', sans-serif;
  }

  .info > div > h3 {
    font-size: 36px;
    color: #243366;
    line-height: 36px;
    margin-top: 5px;
    font-weight: 400;
  }

  .info > div > h3 > span {
    font-weight: 700;
  }

  /* seminar */
  .seminar {
    width: 1160px;
    height: auto;
    margin: 0 auto;
    display: flex;
  }

  .seminar > .banner_title {
    margin-top: 60px;
  }

  .seminar > .banner_title > .line {
    width: 30px;
    height: 4px;
    background-color: #bbb;
  }

  .seminar > .banner_title > h3 {
    font-size: 30px;
    color: #333;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
  }

  /* seminar > banner_btns */
  .seminar > .banner_title > .banner_btns {
    display: flex;
  }

  .seminar > .banner_title .btn_banner {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #bbb;
    color: #bbb;
    text-align: center;
    line-height: 29px;
    cursor: pointer;
  }

  .seminar > .banner_title .btn_banner:hover {
    border: 1px solid #555;
    color: #555;
  }

  .seminar > .banner_title .btn_banner:active {
    border: 1px solid #555;
    color: #555;
  }

  .seminar > .banner_title > .banner_btns > .left {
    margin-right: 20px;
  }

  /* seminar > seminar_banner */
  .seminar_banner {
    width: 960px;
    height: 290px;
    margin-top: 60px;
    margin-left: 70px;
    overflow: hidden;
    position: relative;
  }

  .seminar_group {
    display: flex;
  }

  .seminar_con {
    width: 300px;
    height: 290px;
    margin-right: 30px;
    cursor: pointer;
    background-color: #fff;
  }

  .seminar_con:last-child {
    margin-right: 0;
  }

  .center {
    border: 1px solid #5775d9;
  }

  /* seminar > seminar_con */
  .seminar_group .seminar_con .seminar_img {
    width: 100%;
    height: 210px;
  }

  .seminar_group .seminar_con > h3 {
    font-size: 20px;
    color: #191919;
    margin-top: 20px;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .seminar_group .seminar_con > p {
    font-size: 12px;
    color: #767676;
    padding: 0 10px;
  }

  /* titleBG */
  .titleBG {
    background-image: url(../images/applyBG.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .titleBG > .titleArea {
    width: 1160px;
    height: 455px;
    margin: 0 auto;
    position: relative;
  }

  .titleBG > .titleArea > h5 {
    font-size: 24px;
    color: #5775d9;
    font-weight: 400;
    position: absolute;
    left: 0;
    top: 120px;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
  }

  .titleBG > .titleArea > h5 > span {
    font-size: 30px;
    color: #243366;
    font-weight: 700;
  }

  .titleBG > .titleArea > img {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  /* notice */
  .notice > .banner_title {
    margin-top: 60px;
  }

  .notice > .banner_title > .line {
    width: 30px;
    height: 4px;
    background-color: #bbb;
  }

  .notice > .banner_title > h3 {
    font-size: 30px;
    color: #333;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
  }

  /* notice > notice_btns */
  .notice {
    width: 1160px;
    height: auto;
    margin: 0 auto;
    margin-top: 80px;
  }

  .notice > .banner_title > .notice_btns {
    display: flex;
  }

  .notice > .banner_title .btn_notice {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #bbb;
    color: #bbb;
    text-align: center;
    line-height: 29px;
    cursor: pointer;
  }

  .notice > .banner_title .btn_notice:hover {
    border: 1px solid #555;
    color: #555;
  }

  .notice > .banner_title .btn_notice:active {
    border: 1px solid #555;
    color: #555;
  }

  .notice > .banner_title > .notice_btns > .left {
    margin-right: 20px;
  }

  /* notice > notice_banner */
  .notice_banner {
    width: 1160px;
    height: 100px;
    margin-top: 30px;
    overflow: hidden;
    position: relative;
  }

  .notice_group {
    display: flex;
  }

  .notice_con {
    width: 387px;
    height: 100px;
    cursor: pointer;
    background-color: #fff;
  }

  .center {
    border: 1px solid #5775d9;
  }

  /* notice > notice_con */
  .notice_group .notice_con > h3 {
    font-size: 16px;
    color: #191919;
    margin-top: 20px;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 30px;
  }

  .notice_group .notice_con > p {
    font-size: 12px;
    color: #767676;
    padding: 0 10px;
  }

  /* paging */
  .paging {
    text-align: center;
    margin-top: 80px;
  }

  .paging a {
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid #bbb;
    color: #787878;
    background-color: #fff;
  }

  .paging a.select {
    color: #fff;
    background-color: #5775d9;
    border: 1px solid #5775d9;
  }
  /* footer */

`;

export default DesktopList
