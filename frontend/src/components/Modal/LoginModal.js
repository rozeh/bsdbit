import React, { useState } from 'react'

import { useRecoilState, useSetRecoilState } from 'recoil';
import { login, setLogin, userAuth } from '../../data/auth/auth';
import { MainColorTheme } from '../Button/ButtonTheme';
import Dialog from '../Dialog/Dialog';

const LoginModal = () => {


const [email, setEmail] = useState()
const [password, setPassword] = useState()

const setUserAuth = useSetRecoilState(userAuth)
const Auth = useRecoilState(userAuth)

const onSubmit = async event => {
    event.preventDefault()

    try {
        const { data } = await login({email, password})
        console.log("받은 데이터: ", data.success)
        if (data.success) {
            setUserAuth({
                isAuth: true,
                user: data.username
            })
        }

        console.log("확인: ",Auth.isAuth)
        setLogin(data.token, data.username)

        alert(`${data.username}님이 로그인 되었습니다.`)

    }catch {
      alert(`아이디가 다릅니다.`)
    }
}

  return (
    <div>
      <form onSubmit={onSubmit}>
      <div className="login_popup">
        <img src="images/ico_login.svg" alt="Busanit" />
        <h3>로그인</h3>
        <p>E-mail</p>
        <input type="email" placeholder="이메일을 입력해주세요" value={email} onChange={event=> setEmail(event.target.value)} />
        <p>Password</p>
        <input type="password" placeholder="비밀번호를 입력해주세요"  value={password} onChange={event => setPassword(event.target.value)} />
        <a href="/register" className="join">
          회원가입
        </a>
        <button className="btn_login" type='submit' id="confirm_login" >
          로그인
        </button>
      </div>
      <div className="modal_layer" />
      {/* btn_top */}
      <a id="btn_top" href="#">
        <img src="images/btn_top.png" alt="" />
      </a>
      </form>
      {/* <MainColorTheme>
        <Dialog 
          title="정말"
          >
            삭제할까요?
        </Dialog>
      </MainColorTheme> */}
    </div>
  )
}

export default LoginModal
