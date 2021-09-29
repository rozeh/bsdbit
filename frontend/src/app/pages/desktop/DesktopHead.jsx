import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { unsetLogout, userAuth } from '../../../data/auth/auth'

const DesktopHead = ({ onToggle }) => {
  const [auth, setAuth] = useRecoilState(userAuth)
  const onLogout = () => {
    setAuth({
      isAuth: false,
      user: '',
    })
    unsetLogout()
    alert('로그아웃 되었습니다.')
    window.location.replace('/')
  }

  return (
    <DesktopHeadBlock>
      {/* lnb */}
      <div className="lnb">
        {auth.isAuth ? (
          <>
            <ul>
              <li>
                <button onClick={onLogout} className="logout_button">
                  {auth.user}님 어서오세요
                </button>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul>
              <li>
                <a href="/join">회원가입</a>
              </li>
              <li>
                <img src="/images/lnb_line.png" alt="lnb" />
              </li>
              <li>
                <button onClick={onToggle} className="off_button">
                  로그인
                </button>
              </li>
            </ul>
          </>
        )}
      </div>
      {/* gnb */}
      <div className="gnb">
        <a href="/" className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        <ul>
          <li>
            <a href="/education">교육&amp;스터디</a>
          </li>
          {/* <li>
            <a href="/seminar">세미나&amp;포럼</a>
          </li> */}
          <li>
            <a href="/consulting">AI협회 교육</a>
          </li>
          <li>
            <a href="/reservation">대관신청하기</a>
          </li>
          {/* <li>
              <a href="/notice">공지사항</a>
            </li>
            <li>
              <a href="/test">고객센터</a>
            </li> */}
        </ul>
        {/* gnb > search */}
        <div className="search">
          <input type="text" placeholder="검색어를 입력해주세요" />
          <div id="#">
            <img src="/images/ico_search.svg" />
          </div>
        </div>
      </div>
    </DesktopHeadBlock>
  )
}

const DesktopHeadBlock = styled.header`
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
  .off_button {
    color: #999;
    font-size: 14px;
    transition: 0.3s;
    border: 1px solid #999;
    padding: 2px;
    border-radius: 0.4rem;
    background-color: white;
    line-height: 18px;
    vertical-align: middle;
    cursor: pointer;
  }

  .off_button:hover {
    background-color: #ccc;
  }

  .logout_button {
    margin-top: 15px;
    padding: 8px 8px;
    background-color: white;
    border-radius: 36px;
    border: 1px solid #ddd;
  }

  .logout_button:hover {
    background-color: #ddd;
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
    margin-left: 300px;
  }

  .gnb > ul > li > a {
    margin: 0 30px;
    color: #191919;
    transition: 0.3s;
    font-size: 18px;
    font-weight: 500;
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
`

export default DesktopHead
