import React, { useState } from 'react'
import styled from 'styled-components'
import { MobileOnlyView } from 'react-device-detect'
import MobileFooter from '../pages/mobile/MobileFooter'
import { login, setLogin, userAuth } from '../../data/auth/auth'
import { useRecoilState, useSetRecoilState } from 'recoil'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword ] = useState()

  const setUserAuth = useSetRecoilState(userAuth)
  const Auth = useRecoilState(userAuth)

  const onSubmit = async event => {
    event.preventDefault()

    try {
      const { data } = await login({email, password})
      if (data.success) {
        setUserAuth({
          isAuth: true,
          user: data.username
        })
      }
      setLogin(data.token, data.username)
      alert(`${data.username}님이 로그인 되었습니다.`)
      window.location.replace("/")
    }catch{
      alert("아이디가 존재하지 않습니다.")
    }
  }

  return (
    <MobileOnlyView>
    <LoginBlock>
      <div className="login">
        <a href="/">
          <img src="images/ico_login.svg" />
        </a>
        <h3>로그인</h3>
        <p>E-mail</p>
        <input type="email" 
              placeholder="이메일을 입력해주세요" 
              value={email}
              onChange={event => setEmail(event.target.value)}      
        />
        <p>Password</p>
        <input 
          type="password" 
          placeholder="비밀번호를 입력해주세요" 
          value={password}
          onChange={event => setPassword(event.target.value)}  
        />
        <a href="#" className="btn_login" onClick={onSubmit}>
          로그인
        </a>
      </div>
    </LoginBlock>
    <MobileFooter />
    </MobileOnlyView>
  )
}
const LoginBlock = styled.div`
  /* login */
  .login {
    width: 90%;
    height: auto;
    margin: 0 auto;
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
    border: 1px solid #5775d9;
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
    background-color: #5775d9;
    color: #fff;
    margin-top: 5vh;
  }

  .login .btn_loginKakao {
    background-image: url(../images/btn_kakao.png);
    background-size: cover;
    background-position: center;
    color: #3c1e1e;
  }
`
export default Login
