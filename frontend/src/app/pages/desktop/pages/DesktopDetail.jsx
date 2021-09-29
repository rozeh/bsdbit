import React from 'react'
import styled from 'styled-components'


const DesktopDetail = ({turnOn, children, posts}) => {

 
  return (
    <DesktopDetailBlock>
      {/* program */}
      <div className="program">
        <h5>WITH BUSAN.IT PROGRAM</h5>
        <h3>프로그램 신청</h3>
        {/* program_detail */}
        {posts.map( post => (
          <div className="program_detail">
          <h3 id="#">{post.title}</h3>
          {/* program_신청하 */}
          <button  id="btn_apply" onClick={turnOn}>
            신청하기
          </button>
          <div className="line" />
          {/* program_신청기간 및 장소 */}
          <p className="day" id="#">
            신청기간 : <span id="#">2021.03.01 ~ 2021.03.30</span>
          </p>
          <p className="place" id="#">
            장소 :{' '}
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
          </div>
        ))}
      </div>
      {children}
    </DesktopDetailBlock>
  )
}

const DesktopDetailBlock = styled.div`
  /* program */
.program {
    width: 100%;
    height: 2627px;
    background-color: #f9f9f9;
}

.program > h5 {
    text-align: center;
    padding-top: 100px;
    color: #5775D9;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
}

.program > h3 {
    text-align: center;
    margin-top: 10px;
    color: #333;
    font-size: 30px;
    font-weight: 700;
}

/* program > program_detail */
.program > .program_detail {
    width: 1160px;
    height: 2164px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #eee;
    border-top: 3px solid #5775D9;
    margin-top: 100px;
    padding: 0 30px;
    position: relative;
}

.program > .program_detail > h3 {
    color: #191919;
    font-size: 30px;
    font-weight: 700;
    margin: 30px 0;
}

.program > .program_detail > button {
    display: block;
    width: 160px;
    height: 46px;
    border: 1px solid #5775D9;
    border-radius: 5px;
    text-align: center;
    line-height: 42px;
    font-size: 16px;
    color: #5775D9;
    box-shadow: 0px 2px 4px rgba(117, 127, 131, 0.2);
    position: absolute;
    right: 30px;
    top: 30px;
    transition: all 0.3s;
}

.program > .program_detail > a:hover {
    background-color: #e3eaf0;
}

.program > .program_detail > .line {
    width: 1100px;
    height: 1px;
    background-color: #bbb;
    margin: 0 auto;
    margin-bottom: 20px;
}

.program > .program_detail p {
    font-size: 16px;
    color: #787878;
}

.program > .program_detail p > span {
    font-size: 16px;
    color: #333;
}

.program > .program_detail .mark {
    width: 130px;
    height: 36px;
    border-radius: 40px;
    background-color: #243366;
    color: #fff;
    text-align: center;
    line-height: 36px;
    font-size: 16px;
    margin-top: 50px;
    margin-bottom: 26px;
}

.program > .program_detail > .poster > img {
    width: 100%;
    height: 1823px;
}
`;
export default DesktopDetail
