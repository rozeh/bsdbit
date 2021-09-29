import React from "react";
import { Link } from 'react-router-dom';
import LogoImage from "../Image/LogoImage";
import { useRecoilState } from 'recoil'
import { unsetLogout, userAuth } from "../../data/auth/auth";

const Header = () => {

  const [auth, setAuth] = useRecoilState(userAuth)
  const onLogout = () => {
    setAuth({
      isAuth: false,
      user: ''
    })
    unsetLogout()
    alert("로그아웃 되었습니다.");
    window.location.replace('/');
  }

  return (
    <>
      {/* header */}
      <header>
        {/* lnb */}
        <div className="lnb">
          { auth.isAuth
            ? <ul><li><button onClick={onLogout} className="logout_button">{auth.user}님 어서오세요</button></li></ul>
            : <ul>
            <li>
              <Link to="/register">회원가입</Link>
            </li>
            <li>
              <img src="images/lnb_line.png" alt="lnb" />
            </li>
            <li>
              <a href="#" className="btn_login" >
                로그인
              </a>
            </li>
          </ul>
          }
          
        </div>
        {/* gnb */}
        <div className="gnb">
          <a href='/' className="logo" >
            <LogoImage />
          </a>
          <ul>
            <li>
              <a href="/education">교육&amp;스터디</a>
            </li>
            <li>
              <a href="/seminar">세미나&amp;포럼</a>
            </li>
            <li>
              <a href="/consulting">컨설팅</a>
            </li>
            <li>
              <a href="/reservation">신청하기</a>
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
              <img src="images/ico_search.svg" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
