import React from 'react'
import styled from 'styled-components'

const MobileLoginBlock = styled.div`
.login {
    width: 100%;
    height: auto;
}

.login img {
    display: block;
    margin: 0 auto;
    margin-top: 5vh;
}

.login h3 {
    font-size: 1.5rem;
    text-align: center;
    color: #243366;
    margin: 3vh 0;
}

.login p {
    font-size: 0.75rem;
    font-weight: 700;
    color: #787878;
    margin: 1vh 0;
}

.login input {
    width: 100%;
    height: 6vh;
    border-radius: 5px;
    border: 1px solid #bbb;
    padding: 0 20px;
}

.login input:focus {
    outline: none;
    border: 1px solid #5775D9;
}

.login .btn_login,
.login .btn_loginKakao {
    display: block;
    width: 100%;
    height: 6vh;
    text-align: center;
    line-height: 6vh;
    margin-top: 3vh;
    border-radius: 5px;
}

.login .btn_login {
    background-color: #5775D9;
    color: #fff;
    margin-top: 5vh;
}

.login .btn_loginKakao {
    background-image: url(../images/btn_kakao.png);
    background-size: cover;
    background-position: center;
    color: #3C1E1E;
}
`;

function MobileLogin() {
  return (
    <MobileLoginBlock>
      <div className='login'>
        <a href="/">
          <img src="images/ico_login.svg" />
        </a>
        <h3>로그인</h3>
        <p>E-mail</p>
        <input type="email" placeholder="이메일을 입력해주세요" />
        <p>Password</p>
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <a href="#" className="btn_login" id="#">
          로그인
        </a>
        <a
          href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Fbusanit.com%252Fkakaologin.do%26client_id%3Dbf278ebd3839dafb3219ac731ebd4f67"
          target="_blank"
          className="btn_loginKakao"
          id="#"
        >
          카카오 로그인
        </a>
        </div>
    </MobileLoginBlock>
  )
}

export default MobileLogin
