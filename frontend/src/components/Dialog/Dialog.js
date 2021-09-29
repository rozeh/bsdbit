import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { fadeIn, slideDown, slideUp } from './ChildDialog/Animation'
import Button from '../Button/Button'
import { regDocs } from '../../data/docs/docs'
import { list } from '../../data/board/board'

const DialogBlock = styled.div`
  margin: auto;
  width: 720px;
  height: 750px;
  padding: 1.5rem;
  background: #fff;
  border-radius: 2px;
  padding: 30px;

  h3 {
    font-size: 30px;
    color: #333;
    margin-top: 60px;
    margin-bottom: 30px;
  }

  .line {
    width: 660px;
    height: 3px;
    background-color: #5775d9;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  .docs_request {
    width: 660px;
    margin: 0 auto;
  }
  .input_area p {
    font-size: 16px;
    color: #333;
    font-weight: 700;
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

  .apply_popup .input_area input:focus {
    outline: none;
    border: 1px solid #5775d9;
  }

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

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
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
`

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`

const Dialog = ({
  title,
  subTitle,
  children,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  visible,
  boardId
} ) => {
  const [animate, setAnimate] = useState(false)
  const [localVisible, setLocalVisible] = useState(visible)
  const [docsuser, setDocsuser] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [content, setContent] = useState('')

  
  const onSubmit = async event => {
    event.preventDefault()
    
    const paramDoc = { boardId, title, content, docsuser, phoneNum }

    try {
      const { data } = await regDocs(paramDoc)
      alert("신청완료되었습니다.") 
    }catch (e) {

    }

  }


  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true)
      setTimeout(() => setAnimate(false), 50)
    }
    setLocalVisible(visible)
  }, [localVisible, visible])

  if (!animate && !localVisible) return null

  return (
    <DarkBackground>
      <DialogBlock>
        <form onSubmit={onSubmit}>
      <div className="docs_request">
        <h3>
          <img src="../../images/ico_edu.svg" />
          {subTitle}
          <span>{children}</span>
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
              onChange = { event => setDocsuser(event.target.value) }
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
                maxLength={8}
                oninput="numberMaxLength(this);"
                onChange={ event => setPhoneNum(event.target.value) }
              />
              {/* name */}
            <p>
              <span>*</span>&nbsp; 요청 원하는 것
            </p>
            <input
              type="text"
              className="name"
              id="#"
              placeholder="필요한 말씀을 알려주세요!"
              onChange = { event => setContent(event.target.value) }
            />
            </div>
            {/* upload */}
          </div>
        {/* btn_submit */}
        <button className="btn_submit" onClick={onConfirm}>
          신청하기
        </button>
        </div>
        </form>
      </DialogBlock>
    </DarkBackground>
  )
}

Dialog.defaultProps = {
  confirmText: '확인',
  cancelText: '취소',
}

export default Dialog
