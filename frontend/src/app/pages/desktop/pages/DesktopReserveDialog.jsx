import React, { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { regDocs } from '../../../../data/docs/docs'

const DesktopReserveDialog = ({ turnOn, reserve, match, title, boardId }) => {
  const [animate, setAnimate] = useState(false)
  const [localReserve, setLocalReserve] = useState(reserve)

  useEffect(() => {
    if (localReserve && !reserve) {
      setAnimate(true)
      setTimeout(() => setAnimate(false), 1000)
    }
    setLocalReserve(reserve)
  }, [localReserve, reserve])

  const [docsuser, setDocsuser] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [content, setContent] = useState('')

  const paramDocs = {boardId, title, docsuser, phoneNum, content}

  const onSubmit = async event => {
    event.preventDefault()

    try {
    const {data} = await regDocs(paramDocs)
      if(data.message=="Success") {
        alert("데이터")
      }
    }catch{
      
    }
  }
 
      
  if (!animate && !localReserve) return null
  return (
    <DarkBackground disappear={!reserve}>
      <DesktopReserveDialogBlock disappear={!reserve}>
        <form onSubmit={onSubmit}>
        <div className="apply_popup">
          <button className="close_window" onClick={turnOn}>
            X
          </button>
          <h3>
            <img src="/images/ico_edu.svg" />
            <span>부산아이티</span>&nbsp;프로그램 신청
          </h3>
          <div className="line" />
          {/* input_area */}
          <div className="input_area">
            {/* name */}
            <p>
              <span>*</span>&nbsp;이름
            </p>
            <input
              type="text"
              className="name"
              id="#"
              placeholder="이름 입력 (최소 2자 이상)"
              value={docsuser}
              onChange={event => setDocsuser(event.target.value)}
            />

            {/* phone */}
            <p>
              <span>*</span>&nbsp;연락처
            </p>
            <div className="phone_box">
              <input
                type="number"
                className="phone"
                id="#"
                placeholder="숫자만 입력해 주세요"
                maxLength={11}
                oninput="numberMaxLength(this);"
                value={phoneNum}
                onChange={event => setPhoneNum(event.target.value)}
              />
            </div>
            <div className="input_area">
            <p>
              <span>*</span>&nbsp;요청사항
            </p>
            <input
              type="text"
              className="name"
              id="#"
              placeholder="요청사항을 남겨주세요"
              value={content}
              onChange={event => setContent(event.target.value)}
            />
            </div>
            {/* btn_submit */}
            <button className="btn_submit" id="#" type="submit" >
              신청하기
            </button>
            </div>
        </div>
        </form>
      </DesktopReserveDialogBlock>
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
  z-index: 20;
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

const DesktopReserveDialogBlock = styled.div`
  .apply_popup {
    width: 720px;
    height: 750px;
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
  }
  .close_window {
    width: 45px;
    height: 38px;
    border: none;
    text-align: center;
    font-size: 25px;
    line-height: 38px;
    margin-top: 10px;
    border-radius: 5px;
    color: white;
    background-color: #5775d9;
  }

  .apply_popup > h3 {
    font-size: 30px;
    color: #333;
    margin-top: 60px;
    margin-bottom: 30px;
  }

  .apply_popup > h3 > span {
    color: #5775d9;
  }

  .apply_popup > h3 > img {
    margin-right: 10px;
  }

  .apply_popup > .line {
    width: 660px;
    height: 3px;
    background-color: #5775d9;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  /* input_area */
  .apply_popup .input_area p {
    font-size: 16px;
    color: #333;
    font-weight: 700;
  }

  .apply_popup .input_area p span {
    color: #d94a2b;
  }

  .apply_popup .input_area input {
    width: 660px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #bbb;
    padding: 0 20px;
    margin: 10px 0 20px 0;
  }

  .apply_popup .input_area input::placeholder {
    color: #787878;
  }

  .apply_popup .input_area input:active {
    outline: none;
    border: 1px solid #5775d9;
  }

  .apply_popup .input_area input:focus {
    outline: none;
    border: 1px solid #5775d9;
  }

  /* input_area > phone */
  .apply_popup .phone_box {
    width: 660px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .apply_popup > .input_area > .phone_box > .phone {
    margin-top: 0;
  }

  .apply_popup > .input_area select {
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

  .apply_popup > .input_area select::-ms-expand {
    display: none;
  }

  .apply_popup > .input_area select:active {
    outline: none;
    border: 1px solid #5775d9;
  }

  .apply_popup > .input_area select:focus {
    outline: none;
    border: 1px solid #5775d9;
  }

  /* input_area > phone _ 스핀 제거 */
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* upload */
  .upload {
    margin-top: 20px;
  }

  .filebox label {
    display: inline-block;
    padding: 10px 26px;
    color: #5775d9;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid #5775d9;
    border-radius: 0.25em;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    margin-top: 10px;
  }

  .filebox label:hover {
    background-color: #5775d9;
    color: #fff;
  }

  .filebox label:active {
    background-color: #5775d9;
    color: #fff;
  }

  .filebox input[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  /* input_area > btn_submit (신청하기 버튼) */
  .btn_submit {
    width: 660px;
    height: 50px;
    margin-top: 100px;
    background-color: #5775d9;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .btn_submit:hover {
    background-color: #243366;
  }

  .btn_submit:active {
    outline: none;
  }

  .btn_submit:focus {
    outline: none;
  }
`

export default DesktopReserveDialog
