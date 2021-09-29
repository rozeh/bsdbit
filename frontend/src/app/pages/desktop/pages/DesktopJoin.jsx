import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { register } from '../../../../data/auth/auth';
import { JoinTerms } from '../../../../utils/Terms';

const DesktopJoin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [username, setUsername] = useState('')
  const [agree, setAgree] = useState(false)

  const onSubmit = async event => {
    event.preventDefault()

    if(!agree) {
      alert("약관에 동의하지 않았습니다.")
    }
    const paramReg = {email, password, passwordCheck, username}
    try{
      //회원가입 후 받은 데이터
      const { data } = await register(paramReg)
      alert("회원가입 되었습니다.")
      window.location.replace("/")
    }catch (e){

    }
  }
  return (
  <DesktopJoinBlock>
    <form onSubmit={onSubmit}>
      <div className="banner">
        <img src="images/joinBanner.svg" />
      </div>
      {/* join_form */}
      <div className="join_form">
        <h3>회원가입</h3>
        <div className="agree_title">
          <input id="agree" type="checkbox" value={agree} onChange={()=> setAgree(!agree)} />{' '}
          <label htmlFor="agree">
            <span>이용약관 (필수)</span>
          </label>
          <img src="images/ico_notice.svg" />
        </div>
        <JoinTerms />
        <div className="line" />
        {/* input_join */}
        <div className="input_area">
          {/* E-mail */}
          <p className="email">
            <span>*</span>&nbsp;이메일 (아이디)
          </p>
          <input
            type="text"
            className="id"
            id="#"
            placeholder="이메일 주소 입력"
            value={email}
            onChange={ event => setEmail(event.target.value)}
          />
  
          {/* name */}
          <p>
            <span>*</span>&nbsp;이름
          </p>
          <input
            type="text"
            className="name"
            id="#"
            placeholder="이름 입력 (최소 2자 이상)"
            value={username}
            onChange={ event => setUsername(event.target.value)}
          />
  
          {/* password */}
          <p>
            <span>*</span>&nbsp;비밀번호
          </p>
          <input
            type="password"
            className="password"
            id="#"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={ event => setPassword(event.target.value)}
          />
  
          {/* password_check */}
          <p>
            <span>*</span>&nbsp;비밀번호 확인
          </p>
          <input
            type="password"
            className="pw_check"
            id="#"
            placeholder="비밀번호를 한번 더 입력해주세요"
            value={passwordCheck}
            onChange={ event => setPasswordCheck(event.target.value)}
          />
  
          {/* btn_join */}
          <button className="btn_join" type="submit">
            가입하기
          </button>
        </div>
      </div>
    </form>
  </DesktopJoinBlock>
  )
}

const DesktopJoinBlock = styled.div`
/* banner */
.banner {
width: 100%;
height: 370px;
background-color: #eff3f9;
position: relative;
}

.banner > img {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
}

/* join_form */
.join_form {
width: 1160px;
height: auto;
margin: 0 auto;
margin-bottom: 100px;
}

.join_form > h3 {
color: #243366;
font-size: 30px;
font-weight: 700;
padding-top: 50px;
padding-bottom: 100px;
text-align: center;
}

.join_form .agree_title {
display: flex;
}

.join_form .agree_title span {
font-size: 24px;
color: #333;
margin-right: 30px;
}

.join_form .agree_title > img {
margin-top: 4px;
}

/* join_form > agreeCheck */
.join_form input[type='checkbox'] {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
border: 0;
}

.join_form input[type='checkbox'] + label {
display: inline-block;
position: relative;
padding-left: 30px;
cursor: pointer;
}

.join_form input[type='checkbox'] + label:before {
content: '';
position: absolute;
left: 0;
top: 10px;
width: 18px;
height: 18px;
text-align: center;
background: #fff;
border: 1px solid #bbb;
box-sizing: border-box;
}

.join_form input[type='checkbox']:checked + label:after {
content: '';
position: absolute;
top: 10px;
left: 0;
width: 18px;
height: 18px;
background-color: #556398;
border: 1px solid #5775d9;
box-sizing: border-box;
}

.join_form .line {
width: 1160px;
height: 2px;
margin: 0 auto;
background-color: #5775d9;
margin-top: 70px;
}

/* input_area */
.input_area p {
font-size: 16px;
color: #333;
font-weight: 700;
}

.input_area .email {
margin-top: 20px;
}

.input_area p span {
color: #d94a2b;
}

.input_area input {
width: 660px;
height: 50px;
border-radius: 5px;
border: 1px solid #bbb;
padding: 0 20px;
margin: 10px 0 20px 0;
}

.input_area input::placeholder {
color: #787878;
}

.input_area input:active {
outline: none;
border: 1px solid #5775d9;
}

.input_area input:focus {
outline: none;
border: 1px solid #5775d9;
}

/* input_area > E-mail */
.input_area .btn_dbcheck {
width: 260px;
height: 50px;
border-radius: 5px;
background-color: #e7eef3;
border: 1px solid #5775d9;
color: #5775d9;
font-size: 16px;
margin-left: 40px;
cursor: pointer;
}

.input_area .btn_dbcheck:active {
outline: none;
}

.input_area .btn_dbcheck:focus {
outline: none;
}

.input_area .btn_dbcheck:hover {
border: 2px solid #5775d9;
}

/* input_area > phone */
.input_area select {
width: 160px;
height: 50px;
border-radius: 5px;
border: 1px solid #bbb;
margin-right: 20px;
padding: 0 20px;
background: url(../images/ico_down.svg) no-repeat 95% 50%;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
}

.input_area select::-ms-expand {
display: none;
}

.input_area select:active {
outline: none;
border: 1px solid #5775d9;
}

.input_area select:focus {
outline: none;
border: 1px solid #5775d9;
}

.input_area .phone {
width: 480px;
height: 50px;
}

/* input_area > phone _ 스핀 제거 */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

/* tag_select */
.tag {
margin-top: 10px;
}

.tag label.check {
cursor: pointer;
}

.tag label.check span {
display: block;
width: 150px;
height: 50px;
border: 1px solid #bbb;
display: inline-block;
color: #bbb;
border-radius: 30px;
text-align: center;
line-height: 50px;
margin-left: 20px;
}

.tag label.check .tag01 {
margin-left: 0;
}

.tag label.check input:checked + span {
border-color: #5775d9;
background-color: #fff;
color: #5775d9;
}

/* btn_join */
.btn_join {
width: 660px;
height: 50px;
border-radius: 5px;
background-color: #5775d9;
border: none;
margin-top: 60px;
font-size: 16px;
color: #fff;
cursor: pointer;
box-shadow: 0px 2px 10px rgba(123, 148, 229, 0.9);
transition: 0.3s;
}

.btn_join:hover {
outline: none;
background-color: #243366;
}

.btn_join:active {
outline: none;
background-color: #243366;
}

.btn_join:focus {
outline: none;
background-color: #243366;
}
`

export default DesktopJoin;

