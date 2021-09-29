import React from 'react';
import styled from 'styled-components';
import { MobileHomeEducation, MobileHomeSeminar, MobileHomeNotice } from '../MobileItems';

const MobileHome = ({posts}) => {
  
  return (
    <MobileHomeBlock>
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
        <a href="/reservation" data-aos="fade-up">
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
          <MobileHomeEducation posts={posts} />
        </div>

        {/* education > btn_more */}
        <a href="#" className="btn_more" id="#">
          <img src="/images/btn_more.svg" />
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
            <MobileHomeSeminar posts={posts}/>
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
            <MobileHomeNotice posts={posts} />
          </div>
        </div>
      </div>
    </MobileHomeBlock>
  )
}

const MobileHomeBlock = styled.div`
  /* btn_home */
.btn_home {
    width: 100%;
    height: 8vh;
    position: relative;
    position: fixed;
    z-index: 400;
    background: rgba(255,255,255,0.9);
    box-shadow: 0px 2px 6px rgba(128, 147, 183, 0.3);
}

.btn_home > a {
    width: 30%;
    height: auto;
    position: absolute;
    top: 2.5vh;
    left: 50%;
    transform: translateX(-50%);
}

.btn_home > a > img {
    width: 100%;
    height: auto;
}

/* header > menu */
.mobile_menu {
    display: block;
    position: fixed;
    top: 1vh;
    left: 16px;
    z-index: 600;
    width: 10%;
    height: 6vh;
    border: 0;
    font-size: 1.25rem;
    color: #333;
    background: transparent;
}

.mobile_menu:active {
    outline: none;
}

.mobile_menu:focus {
    outline: none;
}

.menuwrap {
    position: fixed;
    top: 0;
    left: -300px;
    z-index: 500;
    overflow: auto;
    width: 300px;
    height: 100%;
    padding: 8vh 20px;
    box-sizing: border-box;
    transition: left .3s ease-in-out;
    background-color: #f0f0f0;
}

.menuwrap.on {
    left: 0;
}

#dimmed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

#menu .category_list li {
    margin-top: 3vh;
}

#menu .category_list li > .link_sub_item {
    font-size: 1.25rem;
    transition: all 0.2s;
    color: #243366;
    font-weight: 700;
}

#menu .category_list li > .link_sub_item:hover {
    color: #5775D9;
}

#menu .category_list li:first-child {
    margin-top: 5vh;
}

/* 메뉴 - 로그인 / 회원가입 버튼 */
#menu .category_list > .login {
    margin-top: 7vh;
}

#menu .category_list > .login > a,
#menu .category_list > .join > a {
    font-size: 1rem;
    color: #787878;
}

#menu .category_list > .login > a:hover,
#menu .category_list > .join > a:hover {
    color: #333;
}

/* visual */
.visual {
    width: 100%;
    height: 54vh;
    position: relative;
    padding: 8vh 16px 0 16px;
    overflow: hidden;
}

.visual > img {
    width: 54%;
    height: auto;
    position: absolute;
    right: 16px;
    bottom: 0;
}

.visual > h5 {
    color: #5775D9;
    font-size: 1rem;
    font-weight: 400;
    padding-top: 7vh;
    letter-spacing: -1px;
}

.visual > p {
    color: #243366;
    font-size: 1.875rem;
    letter-spacing: -1px;
    font-weight: 400;
    margin-top: 0.53vh;
    letter-spacing: -2px;
    line-height: 1.3;
}

.visual > p > span {
    font-weight: 700;
}

.visual > a {
    display: block;
    width: 26vw;
    height: 5vh;
    border: 1px solid #243366;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 5vh;
    margin-top: 6vh;
    color: #243366;
    font-size: 0.875rem;
    position: relative;
}

.visual > a:hover {
    background-color: #e1e5f4;
}

/* education */
.education {
    width: 100%;
    height: auto;
    background-image: url(../images/bg01.svg);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 16px;
}

.education > h5 {
    font-size: 0.875rem;
    color: #5775D9;
    font-family: 'Poppins', sans-serif;
    padding-top: 7vh;
}

.education > h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-top: 0.3vh;
    font-weight: 400;
    letter-spacing: -1px;
}

.education > h3 > span {
    font-weight: 700;
}

/* education > edu_box */
.education > .edu_box {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
}

.education > .edu_box a {
    width: 48%;
    height: auto;
    position: relative;
    background-color: #fff;
    margin: 2vh 0;
}

.education > .edu_box div > img {
    width: 100%;
    height: auto;
}

.education > .edu_box div > p {
    color: #2b90d9;
    font-size: 0.75rem;
    font-weight: 700;
    margin-top: 1vh;
    padding-left: 10px;
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

.education > .edu_box div .end {
    color: #bbb;
}

.education > .edu_box div h3 {
    padding: 0 10px;
    margin-top: 1vh;
    font-size: 1rem;
    color: #191919;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.education > .edu_box div h5 {
    font-size: 0.75rem;
    color: #767676;
    font-weight: 300;
    padding: 0 10px;
    margin-top: 3vh;
    margin-bottom: 3vh;
}

/* education > btn_more */
.education > .btn_more {
    display: block;
    width: 30%;
    height: 5vh;
    border: 1px solid #243366;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 3vh;
    margin-bottom: 8vh;
    position: relative;
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
    width: 100%;
    height: auto;
    margin: 0 auto;
}

.info > div > h5 {
    font-size: 0.875rem;
    color: #5775D9;
    font-family: 'Poppins', sans-serif;
}

.info > div > h3 {
    font-size: 1.5rem;
    color: #243366;
    margin-top: 0.3vh;
    font-weight: 400;
    letter-spacing: -1px;
}

.info > div > h3 > span {
    font-weight: 700;
}

/* seminar */
.seminar {
    width: 100%;
    height: auto;
}

.seminar > .banner_title {
    margin-top: 5vh;
}

.seminar > .banner_title > .line {
    width: 30px;
    height: 3px;
    background-color: #bbb;
}

.seminar > .banner_title > h3 {
    font-size: 1.5rem;
    color: #333;
    margin-top: 0.5vh;
    margin-bottom: 2vh;
    font-family: 'Poppins', sans-serif;
}

/* seminar > seminar_banner */
.seminar_group {
    position: relative;
    width: 100%;
    overflow-x: hidden;
    cursor: pointer;
    white-space: nowrap;
}

.seminar_group.active {
    cursor: grabbing;
}

.seminar_group .seminar_con {
    display: inline-block;
    background-color: #fff;
    width: 300px;
    height: 290px;
    margin-right: 4vw;
}

.seminar_group .seminar_con:last-child {
    margin-right: 0;
}

.seminar_group .seminar_con .seminar_img {
    width: 100%;
    height: 210px;
}

.seminar_group .seminar_con > h3 {
    font-size: 1rem;
    color: #191919;
    margin-top: 2vh;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.seminar_group .seminar_con > p {
    font-size: 0.75rem;
    color: #767676;
    padding: 0 10px;
    margin-top: 1vh;
}

/* notice */
.notice {
    width: 100%;
    height: auto;
    margin-top: 10vh;
}

.notice > .banner_title > .line {
    width: 30px;
    height: 3px;
    background-color: #bbb;
}

.notice > .banner_title > h3 {
    font-size: 1.5rem;
    color: #333;
    margin-top: 0.5vh;
    margin-bottom: 2vh;
    font-family: 'Poppins', sans-serif;
}

/* notice > notice_banner */
.notice_group {
    position: relative;
    width: 100%;
    overflow-x: hidden;
    cursor: pointer;
    white-space: nowrap;
}

.notice_group.active {
    cursor: grabbing;
}

.notice_group .notice_con {
    display: inline-block;
    background-color: #fff;
    width: 300px;
    height: 100px;
    margin-right: 4vw;
    margin-bottom: 8vh;
}

.notice_group .notice_con:last-child {
    margin-right: 0;
}

.notice_group .center {
    border: 1px solid #5775D9;
}

.notice_group .notice_con > h3 {
    font-size: 1rem;
    color: #191919;
    margin-top: 3vh;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.notice_group .notice_con > p {
    font-size: 0.75rem;
    color: #767676;
    padding: 0 10px;
    margin-top: 1vh;
}
`;
export default MobileHome;