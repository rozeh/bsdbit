import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { unsetLogout, userAuth } from '../../../data/auth/auth'

const MobileHead = () => {
  const [auth, setAuth] = useRecoilState(userAuth)
  const onLogout = () => {
    setAuth({
      isAuth: false,
      user: ''
    })
    unsetLogout()
    alert("로그아웃 되었습니다.")
  }
  return ( 
    <MobileHeadBlock>
      <div className="btn_home">
        <a href="/">
          <img src="/images/logo.svg" />
        </a>
      </div>
      {/* header */}
      <header>
        {/* menu */}
        <button type="button" className="mobile_menu">
          <i className="fas fa-bars" />
        </button>
        <div className="menuwrap">
          <nav id="menu">
            {/* sub menu */}
            <ul className="category_list">
              <li className="#">
                <a className="link_sub_item" href="/education">
                  교육&amp;스터디
                </a>
              </li>
              {/* <li className="#">
                <a className="link_sub_item" href="/seminar">
                  세미나&amp;포럼
                </a>
              </li> */}
              <li className="#">
                <a className="link_sub_item" href="/consulting">
                  AI협회 교육
                </a>
              </li>
              <li className="#">
                <a className="link_sub_item" href="/reservation">
                  대관 신청하기
                </a>
              </li>
              {auth.isAuth 
              ?<>
               <li className="login" onClick={onLogout}>
                <a className="link_sub_item" href="/login">
                  <i className="fas fa-sign-in-alt=" />
                  {' '}{auth.user}님 반갑습니다.
                </a>
              </li>
              </>
               :<>
              <li className="login">
                <a className="link_sub_item" href="/login">
                  <i className="fas fa-sign-in-alt=" />
                  &nbsp;로그인
                </a>
              </li>
              <li className="join">
                <a className="link_sub_item" href="/join">
                  <i className="fas fa-user-plus" />
                  &nbsp;회원가입
                </a>
              </li>
              </>
              }
            </ul>
          </nav>
        </div>
      </header>
    </MobileHeadBlock>
  )
}

const MobileHeadBlock = styled.div`
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
`;
export default MobileHead
