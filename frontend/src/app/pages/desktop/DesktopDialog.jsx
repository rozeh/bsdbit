import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import styled, { keyframes, css } from 'styled-components'
import { login, setLogin, userAuth } from '../../../data/auth/auth'

const DesktopDialog = ({
  children,
  confirmText,
  cancelText,
  onToggle,
  visible,
}) => {
  const [animate, setAnimate] = useState(false)
  const [localVisible, setLocalVisible] = useState(visible)

  const [email, setEmail] = useState()
  const [password, setPassword ] = useState()

  useEffect(() => {
    //visible 값이 ture -> false가 되는 것을 감지
    if (localVisible && !visible) {
      setAnimate(true)
      setTimeout(() => setAnimate(false), 1000)
    }
    setLocalVisible(visible)
  }, [localVisible, visible])

  const setUserAuth = useSetRecoilState(userAuth)
  const Auth = useRecoilState(userAuth)

  const onSubmit = async event => {
    event.preventDefault()

    try {
      const { data } = await login({email, password})
      console.log("받은 데이터: ", data.success)
      if(data.success) {
        setUserAuth({
          isAuth:true,
          user: data.username
        })
      }

      console.log("확인: ", Auth.isAuth)
      setLogin(data.token, data.username)
      
      alert(`${data.username}님이 로그인 되었습니다.`)

      setTimeout(onToggle(), 500)
    }catch {
      alert(`아이디가 존재하지 않습니다.`)
    }
  }

  if (!animate && !localVisible) return null
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <div className="login_popup">
          <button className="close_window" onClick={onToggle}>X</button>
          <div>
          <img src="/images/ico_login.svg" />
          </div>
          <h3>로그인</h3>
          <p>E-mail</p>
          <input type="email" 
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={ event => setEmail(event.target.value) } 
          />
          <p>Password</p>
          <input type="password" 
            placeholder="비밀번호를 입력해주세요" 
            value={password} 
            onChange={ event => setPassword(event.target.value) }
          />
          <a href="/join" className="join">
            회원가입
          </a>
          <a href="#" className="btn_login" id="#" onClick={onSubmit}>
            로그인
          </a>
        </div>
      </DialogBlock>
    </DarkBackground>
  )
}

const fadeIn = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1;
    }
`

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`

const DialogBlock = styled.div`
  width: 600px;
  height: 610px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  z-index: 200;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
    img {
        display: block;
        margin: 0 auto;
    }
    h3 {
        font-size: 30px;
        text-align: center;
        color: #243366;
        margin: 20px 0;
    }

    p {
        font-size: 14px;
        font-weight: 700;
        color: #787878;
        margin: 10px 0;
    }

    input {
        width: 100%;
        height: 47px;
        border-radius: 5px;
        border: 1px solid #bbb;
        padding: 0 20px;
    }

    input:focus {
        outline: none;
        border: 1px solid #5775D9;
    }

    .join {
        font-size: 14px;
        color: #243366;
        margin-top: 10px;
    }
    .btn_login, .btn_loginKakao {
        display: block;
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        margin-top: 20px;
        border-radius: 5px;
    }
    .close_window {
        width:  50px;
        height: 40px;
        border: none;
        text-align: center;
        font-size: 25px;
        line-height: 40px;
        margin-top: 10px;
        border-radius: 5px;
        color:white;
        background-color: #5775D9;

    }
    .close_window:hover{
      background-color: #1341d6;
    }
    
    .btn_login {
        background-color: #5775D9;
        color: #fff;
    }
    .btn_loginKakao {
        background-image: url(../images/btn_kakao.png);
        background-size: cover;
        background-position: center;
        color: #3C1E1E;
    }

`

DesktopDialog.defaultProps = {
  confirmText: '확인',
  cancelText: '취소',
}

export default DesktopDialog
