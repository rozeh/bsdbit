import React from 'react'
import styled from 'styled-components'
import HomeFooter from '../components/Footer/HomeFooter'
import Education from '../components/Main/Education/Education'

import Visual from '../components/Main/Visual'

const HomeBlock = styled.div`
  /* header */
  /* header > lnb */
  .lnb {
    width: 1160px;
    height: 36px;
    margin: 0 auto;
    position: relative;
  }

  .lnb > ul {
    display: flex;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .lnb > ul > li {
    margin-left: 10px;
  }

  .lnb > ul > li > a {
    color: #999;
    font-size: 14px;
    transition: 0.3s;
  }

  .lnb > ul > li > a:hover {
    color: #555;
  }

  .lnb > ul > li > img {
    margin-top: 2px;
  }

  /* header > gnb */
  .gnb {
    width: 1160px;
    height: 80px;
    margin: 0 auto;
    position: relative;
    display: flex;
  }

  .gnb > .logo {
    width: 160px;
    height: 28px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .gnb > ul {
    display: flex;
    line-height: 80px;
    margin-left: 320px;
  }

  .gnb > ul > li > a {
    margin: 0 35px;
    color: #191919;
    transition: 0.3s;
  }

  .gnb > ul > li > a:hover {
    color: #5775d9;
  }

  /* header > gnb > search */
  .search {
    width: 260px;
    height: 36px;
    border-radius: 36px;
    border: 1px solid #ddd;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 20px;
    display: flex;
  }

  .search > input {
    width: 200px;
    height: 34px;
    border: none;
  }

  .search > input:focus {
    outline: none;
  }

  .search > div {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

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
    height: 2899px;
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
    width: 1200px;
    height: auto;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
  }

  .applyArea > .edu_box div {
    width: 360px;
    height: 509px;
    margin-right: 40px;
    margin-bottom: 40px;
    background-color: #fff;
    border: 1px solid #bbb;
    position: relative;
    cursor: pointer;
  }

  .applyArea > .edu_box .right {
    margin-right: 0;
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
  .footer_line {
    width: 100%;
    height: 1px;
    background-color: #eee;
  }

  footer {
    width: 1160px;
    height: 290px;
    margin: 0 auto;
    position: relative;
  }

  footer .footer_logo {
    width: 160px;
    height: 28px;
    margin-top: 70px;
  }

  footer .add {
    font-size: 12px;
    color: #767676;
    font-family: 'Poppins', sans-serif;
    margin-top: 10px;
  }

  footer .copy {
    font-size: 12px;
    color: #767676;
    font-family: 'Poppins', sans-serif;
    margin-top: 80px;
  }

  footer .call {
    width: 206px;
    height: auto;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  footer .call > h3 {
    font-size: 20px;
    color: #191919;
  }

  footer .call > h3 > span {
    font-size: 30px;
    color: #5775d9;
    font-weight: 900;
  }

  /* popup */
  .login_popup {
    width: 600px;
    height: 672px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: none;
    z-index: 2;
    border-radius: 20px;
    padding: 60px;
    position: fixed;
  }

  .modal_layer {
    width: 100%;
    height: 100vh;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    display: none;
  }

  .login_popup > img {
    display: block;
    margin: 0 auto;
  }

  .login_popup > h3 {
    font-size: 30px;
    text-align: center;
    color: #243366;
    margin: 20px 0;
  }

  .login_popup > p {
    font-size: 14px;
    font-weight: 700;
    color: #787878;
    margin: 10px 0;
  }

  .login_popup input {
    width: 100%;
    height: 47px;
    border-radius: 5px;
    border: 1px solid #bbb;
    padding: 0 20px;
  }

  .login_popup input:focus {
    outline: none;
    border: 1px solid #5775d9;
  }

  .login_popup .join {
    font-size: 14px;
    color: #243366;
    margin-top: 10px;
  }

  .login_popup .btn_login,
  .login_popup .btn_loginKakao {
    display: block;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-top: 20px;
    border-radius: 5px;
  }

  .login_popup .btn_login {
    background-color: #5775d9;
    color: #fff;
  }

  .login_popup .btn_loginKakao {
    background-image: url(../images/btn_kakao.png);
    background-size: cover;
    background-position: center;
    color: #3c1e1e;
  }

  /* btn_top */
  a#btn_top {
    width: 59px;
    height: 59px;
    background-color: #fff;
    border: 1px solid #d9e1e8;
    position: fixed;
    right: 2%;
    bottom: 50px;
    display: none;
    z-index: 999;
    transition: 0.3s;
  }

  a#btn_top > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  a#btn_top:hover {
    background-color: #e1e5f4;
    border: 1px solid #243366;
  }
`

const Home = () => {
  return (
    <HomeBlock>
      <Visual />
      <Education />
      <HomeFooter />
    </HomeBlock>
  )
}

export default Home
