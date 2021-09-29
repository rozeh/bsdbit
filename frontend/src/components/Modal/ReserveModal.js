import React from 'react'

const ReseveModal = () => {
  return (
    <>
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
          <div className="phone_box">
            <select name="phone_select"></select>
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
        </div>
      </div>
      <div className="apply_modal_layer" />
    </>
  )
}

export default ReseveModal
