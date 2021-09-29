import React from 'react'
import styled from 'styled-components'
import { Education, Seminar, Notice } from '../DesktopItem'
import { JoinTerms } from '../../../../utils/Terms'


export function DesktopHome({ posts }) {
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
          <Education posts={posts} />
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
              <Seminar posts={posts} />
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
              <Notice posts={posts} />
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
    height: 2800px;
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
`

export function DesktopEducation({ posts }) {
  return (
    <DesktopEducationBlock>
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
      {/* applyArea */}
      <div className="applyArea">
        <h3>교육&nbsp;&amp;&nbsp;스터디 신청</h3>
        {/* <select name="apply_select">
            <option value="정렬방식">정렬방식</option>
            <option value="전체">전체</option>
            <option value="진행중">진행중</option>
            <option value="종료">종료</option>
          </select> */}
        {/* applyArea > edu_box */}
        <div className="edu_box" id="#">
          <Education posts={posts} />
        </div>
      </div>
    </DesktopEducationBlock>
  )
}
const DesktopEducationBlock = styled.div`
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

  /* applyArea */
  .applyArea {
    width: 1160px;
    height: auto;
    margin: 0 auto;
    margin-top: 60px;
    position: relative;
  }

  .applyArea > h3 {
    color: #333;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -2px;
  }

  .applyArea select {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #bbb;
    padding: 0 10px;
    background: url(../images/ico_down.svg) no-repeat 95% 50%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    right: 0;
    top: 6px;
    box-shadow: 0px 1px 6px rgba(130, 139, 150, 0.2);
  }

  .applyArea select::-ms-expand {
    display: none;
  }

  .applyArea select:active {
    outline: none;
    border: 1px solid #5775d9;
  }

  .applyArea select:focus {
    outline: none;
    border: 1px solid #5775d9;
  }

  /* applyArea > edu_box */
  .applyArea > .edu_box {
    width: 1160px;
    height: auto;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }

  .applyArea > .edu_box div {
    width: 340px;
    height: 509px;
    margin-right: 40px;
    margin-bottom: 40px;
    background-color: #fff;
    border: 1px solid #bbb;
    position: relative;
    cursor: pointer;
  }

  .applyArea > .edu_box div > img {
    max-width: 100%;
    max-height: 360px;
  }

  .applyArea > .edu_box div > p {
    color: #2b90d9;
    font-size: 14px;
    font-weight: 700;
    margin-top: 14px;
    padding-left: 20px;
  }

  .applyArea > .edu_box div > .red {
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

  .applyArea > .edu_box div > .end {
    color: #bbb;
  }

  .applyArea > .edu_box div > h3 {
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

  .applyArea > .edu_box div > h5 {
    font-size: 12px;
    color: #767676;
    font-weight: 300;
    padding: 0 20px;
    margin-top: 35px;
  }

  .applyArea > .edu_box div .hover {
    width: 100%;
    height: 100%;
    background-color: rgba(12, 42, 65, 0.85);
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    border: 1px solid rgba(12, 42, 65, 0.85);
  }

  .applyArea > .edu_box div .hover > img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  .applyArea > .edu_box div:hover .hover {
    display: block;
  }
`

export const DesktopSeminar = ({ posts }) => {
  return (
    <DesktopSeminarBlock>
      {/* applyArea */}
      <div className="applyArea">
        <h3>세미나&nbsp;&amp;&nbsp;포럼</h3>
        {/* <select name="apply_select">
          <option value="정렬방식">정렬방식</option>
          <option value="전체">전체</option>
          <option value="진행중">진행중</option>
          <option value="종료">종료</option>
        </select> */}
        {/* applyArea > edu_box */}
        <div className="edu_box" id="#">
          <a href="applyDetail.html" data-aos="fade-up">
            <div>
              <img src="images/edu01.png" />
              <p>신청가능</p>
              <h3>4차산업 인재양성 프로그램 모집. 전액 국비무료 교육</h3>
              <h5>신청기간: 2021.03.01 ~ 2021.03.30</h5>
              <div className="hover">
                <img src="images/ico_plus.svg" />
              </div>
            </div>
          </a>
          <a href="#" data-aos="fade-up">
            <div>
              <img src="images/edu02.png" />
              <p>신청가능</p>
              <h3>부산국비지원 무료교육을 받아보세요.</h3>
              <h5>신청기간: 2021.03.01 ~ 2021.03.30</h5>
              <div className="hover">
                <img src="images/ico_plus.svg" />
              </div>
            </div>
          </a>
          <a href="#" data-aos="fade-up">
            <div className="right">
              <img src="images/edu03.png" />
              <p>신청가능</p>
              <h3>소프트웨어 개발자 교육</h3>
              <h5>신청기간: 2021.03.01 ~ 2021.03.30</h5>
              <div className="hover">
                <img src="images/ico_plus.svg" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </DesktopSeminarBlock>
  )
}
const DesktopSeminarBlock = styled.div`
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

  /* applyArea */
  .applyArea {
    width: 1160px;
    height: auto;
    margin: 0 auto;
    margin-top: 60px;
    position: relative;
  }

  .applyArea > h3 {
    color: #333;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -2px;
  }

  .applyArea select {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #bbb;
    padding: 0 10px;
    background: url(../images/ico_down.svg) no-repeat 95% 50%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    right: 0;
    top: 6px;
    box-shadow: 0px 1px 6px rgba(130, 139, 150, 0.2);
  }

  .applyArea select::-ms-expand {
    display: none;
  }

  .applyArea select:active {
    outline: none;
    border: 1px solid #5775d9;
  }

  .applyArea select:focus {
    outline: none;
    border: 1px solid #5775d9;
  }

  /* applyArea > edu_box */
  .applyArea > .edu_box {
    width: 1160px;
    height: auto;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }

  .applyArea > .edu_box div {
    width: 340px;
    height: 509px;
    margin-right: 40px;
    margin-bottom: 40px;
    background-color: #fff;
    border: 1px solid #bbb;
    position: relative;
    cursor: pointer;
  }

  .applyArea > .edu_box div > img {
    max-width: 100%;
    max-height: 360px;
  }

  .applyArea > .edu_box div > p {
    color: #2b90d9;
    font-size: 14px;
    font-weight: 700;
    margin-top: 14px;
    padding-left: 20px;
  }

  .applyArea > .edu_box div > .red {
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

  .applyArea > .edu_box div > .end {
    color: #bbb;
  }

  .applyArea > .edu_box div > h3 {
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

  .applyArea > .edu_box div > h5 {
    font-size: 12px;
    color: #767676;
    font-weight: 300;
    padding: 0 20px;
    margin-top: 35px;
  }

  .applyArea > .edu_box div .hover {
    width: 100%;
    height: 100%;
    background-color: rgba(12, 42, 65, 0.85);
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    border: 1px solid rgba(12, 42, 65, 0.85);
  }

  .applyArea > .edu_box div .hover > img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  .applyArea > .edu_box div:hover .hover {
    display: block;
  }
`

export const DesktopConsulting = () => {
  return (
    <DesktopConsultBlock>
      {/* titleBG */}
    <div className="titleBG">
      <div className="titleArea">
        <h5 data-aos="fade-up">
          WITH AI GROUP PROGRAM
          <br />
          <span>
            부산 아이티와 인공지능협회에서 추천하는
            <br />
            다양한 프로그램
          </span>
        </h5>
        <img src="/images/edu_ai_banner_01.png" />
      </div>
    </div>
    {/*contents Area*/}
    <div className="contentsArea">
      <div className="n_tit_page">
        <h2>추천교육</h2>
      </div>
      <br />
      <font size={5} style={{ color: '#37bac8' }}>
        AI 교육 추천
      </font>
      <br />
      {/* de28 : 소개(탭) */}
      <div className="recommand_edu_ai">
        <div className="tableArea">
          <table summary>
            <caption />
            <tbody>
              <tr>
                <th>
                  코세라 앤드류 응의 머신러닝{' '}
                  <font style={{ color: '#37bac8' }}>(수료증)</font>
                </th>
                <td>
                  <section className="conA">
                    {' '}
                    <a
                      href="https://ko.coursera.org/learn/machine-learning"
                      target="_blank"
                    >
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>
                  The Elements of AI{' '}<br />
                  <font style={{ color: '#37bac8' }}>(수료증)</font>
                </th>
                <td>
                  <section className="conA">
                    {' '}
                    <a href="https://course.elementsofai.com/" target="_blank">
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>
                  에드위드 MIT 인공지능개론{' '}<br />
                  <font style={{ color: '#37bac8' }}>(수료증)</font>
                </th>
                <td>
                  <section className="conA">
                    {' '}
                    <a href="https://www.edwith.org/mitai" target="_blank">
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>
                  에드위드 머신러닝을 위한 python{' '}<br />

                  <font style={{ color: '#37bac8' }}>(수료증)</font>
                </th>
                <td>
                  <section className="conA">
                    {' '}
                    <a href="https://www.edwith.org/aipython" target="_blank">
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>
                  KAIST 인공지능 및 기계학습 개론 1, 2{' '}<br />
                  <font style={{ color: '#37bac8' }}>(수료증)</font>
                </th>
                <td>
                  <section className="conA">
                    {' '}
                    <a
                      href="https://kaist.edwith.org/machinelearning1_17"
                      target="_blank"
                    >
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>
                  GIST AI기반 클라우드를 위한 컴퓨터 시스템{' '}<br />
                  <font style={{ color: '#37bac8' }}>(수료증)</font>
                </th>
                <td>
                  <section className="conA">
                    {' '}
                    <a
                      href="https://gist.edwith.org/computer-systems"
                      target="_blank"
                    >
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>스탠포드 CS231n</th>
                <td>
                  <section className="conA">
                    {' '}
                    <a
                      href="https://www.youtube.com/watch?v=vT1JzLTH4G4"
                      target="_blank"
                    >
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>NLP 스탠포드</th>
                <td>
                  <section className="conA">
                    {' '}
                    <a
                      href="https://www.youtube.com/watch?v=8rXD5-xhemo"
                      target="_blank"
                    >
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>김성훈 교수의 모두를 위한 딥러닝 강좌</th>
                <td>
                  <section className="conA">
                    {' '}
                    <a
                      href="https://www.youtube.com/watch?v=BS6O0zOGX4E&list=PLlMkM4tgfjnLSOjrEJN31gZATbcj_MpUm"
                      target="_blank"
                    >
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* de28 : 소개(탭) */}
      <br />
      <br />
      <font size={5} style={{ color: '#37bac8' }}>
        IT 교육 추천
      </font>
      <br />
      {/* de28 : 소개(탭) */}
      <div className="recommand_edu_it">
        <div className="tableArea">
          <table summary>
            <caption />
            <colgroup>
              <col style={{ width: '40%' }} />
              <col style={{ width: '*' }} />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  소프트웨어 공학 연구소<br />
                  <font style={{ color: '#37bac8' }}>
                    (프로그래머와 예비 개발자의 학습 및 놀이 동아리)
                  </font>
                </th>
                <td>
                  오랜기간 winapi.co.kr을 운영하면서 다양한 소프트웨어 개발을
                  위한 연구 및 전파를 진행하고 있습니다.
                  <br />
                  <section className="conA">
                    {' '}
                    <a href="http://soen.kr" target="_blank">
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>
                  생활코딩{' '}<br />
                  <font style={{ color: '#37bac8' }}>
                    (생활코딩은 일반인들에게 프로그래밍을 알려주는 무료 온라인,
                    오프라인 수업)
                  </font>
                </th>
                <td>
                  어떻게 공부할 것인가를 생각해보기 전에 왜 프로그래밍을
                  공부하는 이유에 대한 이유를 함께 생각해 볼수 있는
                  사이트입니다.
                  <br />
                  <section className="conA">
                    {' '}
                    <a
                      href="https://www.opentutorials.org/course/1"
                      target="_blank"
                    >
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>
                  Lael's World{' '}<br />
                  <font style={{ color: '#37bac8' }}>
                    (천재는 노력하는 사람을 이길 수 없고, 노력하는 사람은 즐기는
                    자를 이길 수 없다)
                  </font>
                </th>
                <td>
                  서버 및 클라우드 관련 노하우가 가득합니다.
                  <br />
                  <section className="conA">
                    {' '}
                    <a href="https://blog.lael.be" target="_blank">
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>
                  Study For Us{' '}<br />
                  <font style={{ color: '#37bac8' }}>
                    (개인 서버 및 네트워크 환경 구축에 대해 이해하기 쉽게
                    설명하는 블로그)
                  </font>
                </th>
                <td>
                  다양한 개인 서버 및 네트워크 환경 구축에 대한 정보가
                  가득합니다.
                  <br />
                  <section className="conA">
                    {' '}
                    <a href="https://studyforus.tistory.com" target="_blank">
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>
                  W3Schools{' '}<br />
                  <font style={{ color: '#37bac8' }}>
                    (온라인으로 웹 기술을 배우는 교육용 웹 사이트이다)
                  </font>
                </th>
                <td>
                  체계적으로 구성된 웹 어플리케이션 개발의 최강자
                  <br />
                  <section className="conA">
                    {' '}
                    <a href="https://www.w3schools.com" target="_blank">
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
              <tr>
                <th>
                  VELOPERT.LOG{' '}<br />
                  <font style={{ color: '#37bac8' }}>
                    (DEVELOPMENT &amp; LIFE LOG)
                  </font>
                </th>
                <td>
                  최신 웹 어플리케이션 개발 정보
                  <br />
                  <section className="conA">
                    {' '}
                    <a href="https://velopert.com" target="_blank">
                      바로가기&nbsp;&nbsp;{' '}
                      <i className="glyphicon glyphicon-new-window" />
                    </a>
                  </section>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* de28 : 소개(탭) */}
    </div>
    </DesktopConsultBlock>
  )
}
const DesktopConsultBlock = styled.div`
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

  .contentsArea {
    width: 1160px;
    margin: 30px auto;
  }
  .recommand_edu_ai {

  }
  
  .recommand_edu_ai > .tableArea {

  }
  .recommand_edu_ai > .tableArea > table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
	  line-height: 1.5;
	  border-top: 3px solid #5775d9;
	  border-bottom: 1px solid #ccc;
	  margin: 20px auto;
  }

  .recommand_edu_it > .tableArea > table  {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
	  line-height: 1.5;
	  border-top: 3px solid #5775d9;
	  border-bottom: 1px solid #ccc;
	  margin: 10px auto;
  }


  th {
    padding: 1rem;
    width: 50%;
  }
  td {
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .recommand_edu_it {
   
  }

  .recommand_edu_it > .tableArea  {
    padding : 1rem;

  }

  a {
    width: 200px;
    background-color: rgb(55, 186, 200);
    font-weight: 700;
    color: white;
    padding-left: 8px;

  }
`;

export const DesktopReservation = ({children}) => {
  return (
    <DesktopReservationBlock>
      {/* reservation */}
      <div className="res_banner">
        <h3>대관신청</h3>
        <p>
          부산아이티 에서는 교육장 및 세미나실, 미팅룸 등 다양한 목적으로 사용할
          수 있는 공간을 열어드리고 있습니다.
          <br />
          아래 내용을 확인하시어 대관을 신청해주세요.
        </p>
      </div>
      <h2 className="res_title">대관시설안내</h2>
      {/* reservation > tab */}
      <input type="radio" id="tab01" name="rad01" defaultChecked />
      <input type="radio" id="tab02" name="rad01" />
      <input type="radio" id="tab03" name="rad01" />
      <input type="radio" id="tab04" name="rad01" />
      <div className="res_label">
        <label htmlFor="tab01" className="lab lab01">
          Class Room A
        </label>
        <label htmlFor="tab02" className="lab lab02">
          Class Room B
        </label>
        <label htmlFor="tab03" className="lab lab03">
          비대면 회의실
        </label>
        <label htmlFor="tab04" className="lab lab04">
          미팅룸
        </label>
      </div>
      {/* reservation > classroom A */}
      <div className="sheet sheet01">
        <div style={{ display: 'flex' }}>
          {/* reservation > banner */}
          <div className="reservation_banner">
            <input type="radio" name="slide" id="slide01" defaultChecked />
            <input type="radio" name="slide" id="slide02" />
            <input type="radio" name="slide" id="slide03" />
            <div className="slidewrap">
              <ul className="slidelist">
                <li>
                  <a>
                    <label htmlFor="slide03" className="left" />
                    <img src="images/A_01.jpg" />
                    <label htmlFor="slide02" className="right" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide01" className="left" />
                    <img src="images/A_02.jpg" />
                    <label htmlFor="slide03" className="right" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide02" className="left" />
                    <img src="images/A_03.jpg" />
                    <label htmlFor="slide01" className="right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="room_info">
            <h3>
              Class Room A <span>클래스룸 A</span>
            </h3>
            <h3 className="price">
              200,000원<span>/ 2시간</span>
            </h3>
            <ul>
              <li>• 수용인원 30명</li>
              <li>• 대면 강연 / 회의</li>
            </ul>
            <p>
              <span>기본 2시간 기준.</span> 기준시간 미만은 기준시간만큼 사용한
              것으로 간주. <br />
              부가가치세법에 따라 부가가치세를 납부하여야 할 경우, 부가세를
              별도로 징수
            </p>
            <a href="/static/RegisterDoc.hwp" className="dowmload">
              대관신청서 다운로드 받기
            </a>
          </div>
        </div>
      </div>
      {/* reservation > classroom B */}
      <div className="sheet sheet02">
        <div style={{ display: 'flex' }}>
          {/* reservation > banner */}
          <div className="reservation_banner">
            <input type="radio" name="slide" id="slide04" defaultChecked />
            <input type="radio" name="slide" id="slide05" />
            <input type="radio" name="slide" id="slide06" />
            <div className="slidewrap">
              <ul className="slidelist">
                <li>
                  <a>
                    <label htmlFor="slide06" className="left" />
                    <img src="images/B_01.jpg" />
                    <label htmlFor="slide05" className="right" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide04" className="left" />
                    <img src="images/B_02.jpg" />
                    <label htmlFor="slide06" className="right" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide05" className="left" />
                    <img src="images/B_03.jpg" />
                    <label htmlFor="slide04" className="right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="room_info">
            <h3>
              Class Room B <span>클래스룸 B</span>
            </h3>
            <h3 className="price">
              200,000원<span>/ 2시간</span>
            </h3>
            <ul>
              <li>• 수용인원 30명</li>
              <li>• 대면 강연 / 회의</li>
            </ul>
            <p>
              <span>기본 2시간 기준.</span> 기준시간 미만은 기준시간만큼 사용한
              것으로 간주. <br />
              부가가치세법에 따라 부가가치세를 납부하여야 할 경우, 부가세를
              별도로 징수
            </p>
            <a href="/static/RegisterDoc.hwp" className="dowmload">
              대관신청서 다운로드 받기
            </a>
          </div>
        </div>
      </div>
      {/* reservation > 비대면 회의실 */}
      <div className="sheet sheet03">
        <div style={{ display: 'flex' }}>
          {/* reservation > banner */}
          <div className="reservation_banner">
            <input type="radio" name="slide" id="slide07" defaultChecked />
            <input type="radio" name="slide" id="slide08" />
            <input type="radio" name="slide" id="slide09" />
            <div className="slidewrap">
              <ul className="slidelist">
                <li>
                  <a>
                    <label htmlFor="slide09" className="left" />
                    <img src="images/C_01.jpg" />
                    <label htmlFor="slide08" className="right" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide07" className="left" />
                    <img src="images/C_02.jpg" />
                    <label htmlFor="slide09" className="right" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide08" className="left" />
                    <img src="images/C_03.jpg" />
                    <label htmlFor="slide07" className="right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="room_info">
            <h3>
              Untact Meeting Room <span>비대면 회의실</span>
            </h3>
            <h3 className="price">
              200,000원<span>/ 2시간</span>
            </h3>
            <ul>
              <li>• 수용인원 2명</li>
              <li>• 언텍트 강의 / 회의</li>
            </ul>
            <p>
              <span>기본 2시간 기준.</span> 기준시간 미만은 기준시간만큼 사용한
              것으로 간주. <br />
              부가가치세법에 따라 부가가치세를 납부하여야 할 경우, 부가세를
              별도로 징수
            </p>
            <a href="/static/RegisterDoc.hwp" className="dowmload">
              대관신청서 다운로드 받기
            </a>
          </div>
        </div>
      </div>
      {/* reservation > 미팅룸 */}
      <div className="sheet sheet04">
        <div style={{ display: 'flex' }}>
          {/* reservation > banner */}
          <div className="reservation_banner">
            <input type="radio" name="slide" id="slide10" defaultChecked />
            <input type="radio" name="slide" id="slide11" />
            <input type="radio" name="slide" id="slide12" />
            <div className="slidewrap">
              <ul className="slidelist">
                <li>
                  <a>
                    <label htmlFor="slide12" className="left" />
                    <img src="/images/D_01.jpg" />
                    <label htmlFor="slide11" className="right" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide10" className="left" />
                    <img src="/images/D_02.jpg" />
                    <label htmlFor="slide12" className="right" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide11" className="left" />
                    <img src="/images/D_03.jpg" />
                    <label htmlFor="slide10" className="right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="room_info">
            <h3>
              Meeting Room <span>미팅룸</span>
            </h3>
            <h3 className="price">
              150,000원<span>/ 2시간</span>
            </h3>
            <ul>
              <li>• 수용인원 10명</li>
              <li>• 대면 강연 / 회의</li>
            </ul>
            <p>
              <span>기본 2시간 기준.</span> 기준시간 미만은 기준시간만큼 사용한
              것으로 간주. <br />
              부가가치세법에 따라 부가가치세를 납부하여야 할 경우, 부가세를
              별도로 징수
            </p>
            <a href="/static/RegisterDoc.hwp" className="dowmload">
              대관신청서 다운로드 받기
            </a>
          </div>
        </div>
      </div>
      {/* reservation > 대관신청방법 */}
      <div className="procedure">
        <img src="/images/procedure.svg" />
      </div>
      {/* reservation > 환불방법 */}
      <div className="refund">
        <img src="/images/refund.svg" />
      </div>
      {/* reservation > 대관일정확인 */}
      <div className="calendar_box">
        <div className="title">
          <img src="/images/calendar_title.svg" />
        </div>
        <div className="calendar">
          {children}
        </div>
      </div>
    </DesktopReservationBlock>
  )
}

const DesktopReservationBlock = styled.div`
  /* reservation */
  .res_banner {
    width: 100%;
    height: 408px;
    background-image: url(../images/reservation_banner.png);
    background-position: center;
    background-size: cover;
    text-align: center;
    color: #fff;
  }

  .res_banner > h3 {
    font-size: 30px;
    padding-top: 154px;
  }

  .res_banner > p {
    font-size: 16px;
    padding-top: 10px;
  }

  .res_title {
    font-size: 30px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  /* reservation_tab */
  #tab01,
  #tab02,
  #tab03,
  #tab04 {
    display: none;
  }

  #tab01 ~ .sheet01 {
    display: none;
  }

  #tab01:checked ~ .sheet01 {
    display: block;
  }

  #tab01 ~ .res_label .lab01 {
    transition: all 0.3s;
  }

  #tab01:checked ~ .res_label .lab01 {
    border: 1px solid #5775d9;
    background-color: #5775d9;
    color: #fff;
  }

  #tab02 ~ .sheet02 {
    display: none;
  }

  #tab02:checked ~ .sheet02 {
    display: block;
  }

  #tab02 ~ .res_label .lab02 {
    transition: all 0.3s;
  }

  #tab02:checked ~ .res_label .lab02 {
    border: 1px solid #5775d9;
    background-color: #5775d9;
    color: #fff;
  }

  #tab03 ~ .sheet03 {
    display: none;
  }

  #tab03:checked ~ .sheet03 {
    display: block;
  }

  #tab03 ~ .res_label .lab03 {
    transition: all 0.3s;
  }

  #tab03:checked ~ .res_label .lab03 {
    border: 1px solid #5775d9;
    background-color: #5775d9;
    color: #fff;
  }

  #tab04 ~ .sheet04 {
    display: none;
  }

  #tab04:checked ~ .sheet04 {
    display: block;
  }

  #tab04 ~ .res_label .lab04 {
    transition: all 0.3s;
  }

  #tab04:checked ~ .res_label .lab04 {
    border: 1px solid #5775d9;
    background-color: #5775d9;
    color: #fff;
  }

  .res_label {
    width: 1160px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    color: #787878;
  }

  .res_label > .lab {
    width: 25%;
    height: inherit;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    border: 1px solid #bbb;
  }

  /* reservation_tab > sheet */
  .sheet {
    width: 1160px;
    height: 260px;
    margin: 0 auto;
    margin-top: 50px;
  }

  /* reservation_tab > room_banner */
  .reservation_banner {
    width: 460px;
    height: 260px;
  }

  .reservation_banner > .slidewrap > .slidelist > li {
    width: 460px;
    height: 260px;
  }

  .reservation_banner input[id*='slide'] {
    display: none;
  }

  /* 슬라이드 영역 - max-width 크기를 조절해주면 됩니다*/
  .reservation_banner .slidewrap {
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }

  .reservation_banner .slidelist {
    white-space: nowrap;
    font-size: 0;
  }

  .reservation_banner .slidelist > li {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    transition: all 0.5s;
  }

  .reservation_banner .slidelist > li > a {
    display: block;
    position: relative;
  }

  .reservation_banner .slidelist > li > a img {
    width: 100%;
  }

  /* 좌우로 넘기는 LABEL버튼에 대한 스타일 */
  .reservation_banner .slidelist label {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .reservation_banner .slidelist .left {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.8);
    left: 10px;
    background-image: url(../images/btn_pre.svg);
    background-repeat: no-repeat;
    background-position: center;
  }

  .reservation_banner .slidelist .right {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.8);
    right: 10px;
    background-image: url(../images/btn_next.svg);
    background-repeat: no-repeat;
    background-position: center;
  }

  /* INPUT 체크되면 변화값이 li까지 전달되는 스타일 */
  .reservation_banner input[id='slide01']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(0%);
  }

  .reservation_banner input[id='slide02']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-100%);
  }

  .reservation_banner input[id='slide03']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-200%);
  }

  .reservation_banner input[id='slide04']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(0%);
  }

  .reservation_banner input[id='slide05']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-100%);
  }

  .reservation_banner input[id='slide06']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-200%);
  }

  .reservation_banner input[id='slide07']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(0%);
  }

  .reservation_banner input[id='slide08']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-100%);
  }

  .reservation_banner input[id='slide09']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-200%);
  }

  .reservation_banner input[id='slide10']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(0%);
  }

  .reservation_banner input[id='slide11']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-100%);
  }

  .reservation_banner input[id='slide12']:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-200%);
  }

  /* reservation_tab > room_info */
  .room_info {
    width: 660px;
    height: inherit;
    margin-left: 40px;
  }

  .room_info > h3 {
    font-size: 24px;
  }

  .room_info > h3 > span {
    font-size: 16px;
    color: #405391;
    margin-left: 10px;
    font-weight: 400;
  }

  .room_info .price {
    font-size: 24px;
    color: #ff451c;
  }

  .room_info .price > span {
    font-size: 14px;
    color: #787878;
  }

  .room_info > ul {
    font-size: 16px;
    margin-top: 10px;
  }

  .room_info > p {
    font-size: 14px;
    color: #555;
    margin-top: 30px;
  }

  .room_info > p > span {
    color: #000;
    font-weight: 600;
    background: linear-gradient(
      to top,
      rgba(95, 132, 255, 0.3) 40%,
      transparent 60%
    );
  }

  /* reservation_tab > 대관신청서 다운로드 */
  .room_info > .dowmload {
    display: block;
    width: 660px;
    height: 50px;
    line-height: 50px;
    color: #5775d9;
    margin-top: 11px;
    padding-left: 45px;
    background-image: url(../images/btn_download.svg);
    background-position: center;
    background-size: cover;
    transition: all 0.3s;
  }

  .room_info > .dowmload:hover {
    background-color: #e5e8f4;
  }

  /* reservation > procedure */
  .procedure {
    width: 1160px;
    height: auto;
    margin: 0 auto;
    margin-top: 70px;
  }
  .procedure > img {
    max-width: 100%;
    max-height: 100%;
  }

  /* reservation > refund */
  .refund {
    width: 1160px;
    height: auto;
    margin: 0 auto;
    margin-top: 70px;
  }
  .refund > img {
    max-width: 100%;
    max-height: 100%;
  }

  /* reservation > calendar */
  .calendar_box {
    width: 1160px;
    height: auto;
    margin: 0 auto;
    margin-top: 70px;
  }
  .calendar_box > .title {
    margin-bottom: 20px;
  }
  .calendar {
    width: 1160px;
    height: 600px;
    margin-bottom: 12rem;
    
  }
`

export const DesktopDetailBoard = () => {
  return <>디테일 뷰</>
}
const DesktopDetailBoardBlock = styled.div``
