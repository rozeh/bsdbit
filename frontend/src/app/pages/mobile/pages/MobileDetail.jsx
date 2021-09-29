import React from 'react'
import styled from 'styled-components'

const MobileDetail = ({ turnOn, children, posts }) => {
  return (
    <MobileDetailBlock>
      <div className="program">
        <h5>WITH BUSAN.IT PROGRAM</h5>
        <h3>프로그램 신청</h3>
        {/* program_detail */}
        {posts.map((post) => (
          <div className="program_detail">
            <h3 id="#">{post.title}</h3>
            <div className="line" />
            {/* program_신청기간 및 장소 */}
            <p className="day" id="#">
              신청기간 :<br />
              <span id="#">2021.03.01 ~ 2021.03.30</span>
            </p>
            <br />
            <p className="place" id="#">
              장소 :<br />
              <span id="#">
                부산시 남구 수영로 312 (대연동, 21 센츄리시티 오피스텔)8층
                부산아이티
              </span>
            </p>
            <div className="mark">상세내용</div>
            {/* program_상세내용 포스터 */}
            <div className="poster" id="#">
              <img src={`/images/${post.imageSrc}.png`} />
            </div>
            <button className="btn_apply">
              <a href="#">신청하기</a>
            </button>
          </div>
        ))}
      </div>
      <div>
        {/* apply_popup */}
        <div className="apply_popup">
          <h3>
            <img src="images/ico_edu.svg" />
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
            />
            {/* phone */}
            <p>
              <span>*</span>&nbsp;연락처
            </p>
            <input
              type="number"
              className="phone"
              id="#"
              placeholder="숫자만 입력해 주세요"
              maxLength={8}
              oninput="numberMaxLength(this);"
            />
          </div>
          {/* upload */}
          <p className="upload">신청서 업로드</p>
          <div className="filebox">
            <label htmlFor="ex_file">파일 업로드</label>
            <input type="file" id="ex_file" />
          </div>
          {/* btn_submit */}

        </div>
      </div>
      <div className="apply_modal_layer" />
    </MobileDetailBlock>
  )
}

const MobileDetailBlock = styled.div`
  /* program */
.program {
    width: 100%;
    height: auto;
    background-color: #f2f2f2;
    padding: 0 16px;
    padding-bottom: 5vh;
    padding-top: 8vh;
}

.program > h5 {
    text-align: center;
    padding-top: 10vh;
    color: #5775D9;
    font-size: 0.875rem;
    font-family: 'Poppins', sans-serif;
}

.program > h3 {
    text-align: center;
    margin-top: 1vh;
    color: #333;
    font-size: 1.5rem;
    font-weight: 700;
}

/* program > program_detail */
.program > .program_detail {
    width: 100%;
    height: auto;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #eee;
    border-top: 3px solid #5775D9;
    margin-top: 8vh;
    padding: 0 10px;
}

.program > .program_detail > h3 {
    color: #191919;
    font-size: 1.25rem;
    font-weight: 700;
    margin: 3vh 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.program > .program_detail > .line {
    width: 100%;
    height: 1px;
    background-color: #bbb;
    margin: 0 auto;
    margin-bottom: 2vh;
    margin-top: 2vh;
}

.program > .program_detail p {
    font-size: 0.875rem;
    color: #787878;
}

.program > .program_detail p > span {
    font-size: 1rem;
    color: #333;
}

.program > .program_detail .mark {
    width: 35%;
    height: 5vh;
    border-radius: 50px;
    background-color: #243366;
    color: #fff;
    text-align: center;
    line-height: 5vh;
    font-size: 1rem;
    margin-top: 5vh;
    margin-bottom: 3vh;
}

.program > .program_detail > .poster > img {
    width: 100%;
    height: auto;
    margin-bottom: 5vh;
}

/* 프로그램 신청하기 버튼 */
.program_detail .btn_apply {
    display: block;
    width: 50%;
    height: 6vh;
    margin: 0 auto;
    border: 1px solid #5775D9;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 6vh;
    box-shadow: 0px 2px 4px rgba(117, 127, 131, 0.2);
    transition: all 0.3s;
    margin-bottom: 5vh;
}

.program_detail .btn_apply > a {
    font-size: 1rem;
    color: #5775D9;
}

.program_detail .btn_apply:hover {
    background-color: #e3eaf0;
}

.program_detail .btn_apply:active {
    outline: none;
}

.program_detail .btn_apply:focus {
    outline: none;
}

/* apply_popup */
.apply_popup {
    width: 90%;
    height: 80vh;
    background-color: #fff;
    position: absolute;
    top: 5vh;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: none;
    z-index: 2;
    border-radius: 10px;
    padding: 16px;
    position: fixed;
}

.apply_modal_layer {
    width: 100%;
    height: 100vh;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    display: none;
}

.apply_popup > h3 {
    font-size: 1.25rem;
    color: #333;
    margin-top: 4vh;
    margin-bottom: 3vh;
}

.apply_popup > h3 > span {
    color: #5775D9;
}

.apply_popup > h3 > img {
    margin-right: 1vw;
}

.apply_popup > .line {
    width: 100%;
    height: 3px;
    background-color: #5775D9;
    margin: 0 auto;
    margin-bottom: 3vh;
}

/* input_area */
.apply_popup .input_area p {
    font-size: 0.875rem;
    color: #333;
    font-weight: 700;
}

.apply_popup .input_area p span {
    color: #D94A2B;
}

.apply_popup .input_area input {
    width: 100%;
    height: 6vh;
    border-radius: 5px;
    border: 1px solid #bbb;
    padding: 0 10px;
    margin: 1vh 0 2vh 0;
}

.apply_popup .input_area input::placeholder {
    color: #787878;
}

.apply_popup .input_area input:active {
    outline: none;
    border: 1px solid #5775D9;
}

.apply_popup .input_area input:focus {
    outline: none;
    border: 1px solid #5775D9;
}

/* input_area > phone */
.apply_popup .phone_box {
    width: 100%;
    height: 6vh;
    margin-top: 1vh;
}

.apply_popup > .input_area > .phone_box > .phone {
    margin-top: 1vh;
}

.apply_popup > .input_area select {
    width: 40%;
    height: 6vh;
    border-radius: 5px;
    border: 1px solid #bbb;
    padding: 0 10px;
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
    border: 1px solid #5775D9;
}

.apply_popup > .input_area select:focus {
    outline: none;
    border: 1px solid #5775D9;
}

/* input_area > phone _ 스핀 제거 */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* upload */
.upload {
    margin-top: 10vh;
}

.filebox label {
    display: inline-block;
    padding: 1vh 5vh;
    color: #5775D9;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid #5775D9;
    border-radius: .25em;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    margin-top: 1vh;
}

.filebox label:hover {
    background-color: #5775D9;
    color: #fff;
}

.filebox label:active {
    background-color: #5775D9;
    color: #fff;
}

.filebox input[type="file"] {
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
    width: 100%;
    height: 6vh;
    margin-top: 10vh;
    background-color: #5775D9;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
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

export default MobileDetail
