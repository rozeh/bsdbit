import React from 'react'
import styled from 'styled-components'
import { Education } from '../../desktop/DesktopItem'

export const MobileHome = ({ posts }) => {
  return (
    <MobileHomeBlock>

    </MobileHomeBlock>
  )
}
const MobileHomeBlock = styled.div`
  /* visual */
  .visual {
    width: 100%;
    height: 54vh;
    position: relative;
    padding: 8vh 16px 0 16px;
    overflow: hidden;
  }

  .visual > img {
    width: 54%;
    height: auto;
    position: absolute;
    right: 16px;
    bottom: 0;
  }

  .visual > h5 {
    color: #5775d9;
    font-size: 1rem;
    font-weight: 400;
    padding-top: 7vh;
    letter-spacing: -1px;
  }

  .visual > p {
    color: #243366;
    font-size: 1.875rem;
    letter-spacing: -1px;
    font-weight: 400;
    margin-top: 0.53vh;
    letter-spacing: -2px;
    line-height: 1.3;
  }

  .visual > p > span {
    font-weight: 700;
  }

  .visual > a {
    display: block;
    width: 26vw;
    height: 5vh;
    border: 1px solid #243366;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 5vh;
    margin-top: 6vh;
    color: #243366;
    font-size: 0.875rem;
    position: relative;
  }

  .visual > a:hover {
    background-color: #e1e5f4;
  }

  /* education */
  .education {
    width: 100%;
    height: auto;
    background-image: url(../images/bg01.svg);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 16px;
  }

  .education > h5 {
    font-size: 0.875rem;
    color: #5775d9;
    font-family: 'Poppins', sans-serif;
    padding-top: 7vh;
  }

  .education > h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-top: 0.3vh;
    font-weight: 400;
    letter-spacing: -1px;
  }

  .education > h3 > span {
    font-weight: 700;
  }

  /* education > edu_box */
  .education > .edu_box {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }

  .education > .edu_box a {
    width: 48%;
    height: auto;
    position: relative;
    background-color: #fff;
    margin: 2vh 0;
  }

  .education > .edu_box div > img {
    width: 100%;
    height: auto;
  }

  .education > .edu_box div > p {
    color: #2b90d9;
    font-size: 0.75rem;
    font-weight: 700;
    margin-top: 1vh;
    padding-left: 10px;
  }

  .education > .edu_box div > .red {
    color: #d94a2b;
    animation: blink 0.5s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 100;
    }

    100% {
      opacity: 0;
    }
  }

  .education > .edu_box div .end {
    color: #bbb;
  }

  .education > .edu_box div h3 {
    padding: 0 10px;
    margin-top: 1vh;
    font-size: 1rem;
    color: #191919;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .education > .edu_box div h5 {
    font-size: 0.75rem;
    color: #767676;
    font-weight: 300;
    padding: 0 10px;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }

  /* education > btn_more */
  .education > .btn_more {
    display: block;
    width: 30%;
    height: 5vh;
    border: 1px solid #243366;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 3vh;
    margin-bottom: 8vh;
    position: relative;
  }

  .education > .btn_more > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .education > .btn_more:hover {
    background-color: #e1e5f4;
  }

  /* education > info */
  .info > .info_title {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .info > div > h5 {
    font-size: 0.875rem;
    color: #5775d9;
    font-family: 'Poppins', sans-serif;
  }

  .info > div > h3 {
    font-size: 1.5rem;
    color: #243366;
    margin-top: 0.3vh;
    font-weight: 400;
    letter-spacing: -1px;
  }

  .info > div > h3 > span {
    font-weight: 700;
  }

  /* seminar */
  .seminar {
    width: 100%;
    height: auto;
  }

  .seminar > .banner_title {
    margin-top: 5vh;
  }

  .seminar > .banner_title > .line {
    width: 30px;
    height: 3px;
    background-color: #bbb;
  }

  .seminar > .banner_title > h3 {
    font-size: 1.5rem;
    color: #333;
    margin-top: 0.5vh;
    margin-bottom: 2vh;
    font-family: 'Poppins', sans-serif;
  }

  /* seminar > seminar_banner */
  .seminar_group {
    position: relative;
    width: 100%;
    overflow-x: hidden;
    cursor: pointer;
    white-space: nowrap;
  }

  .seminar_group.active {
    cursor: grabbing;
  }

  .seminar_group .seminar_con {
    display: inline-block;
    background-color: #fff;
    width: 300px;
    height: 290px;
    margin-right: 4vw;
  }

  .seminar_group .seminar_con:last-child {
    margin-right: 0;
  }

  .seminar_group .seminar_con .seminar_img {
    width: 100%;
    height: 210px;
  }

  .seminar_group .seminar_con > h3 {
    font-size: 1rem;
    color: #191919;
    margin-top: 2vh;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .seminar_group .seminar_con > p {
    font-size: 0.75rem;
    color: #767676;
    padding: 0 10px;
    margin-top: 1vh;
  }

  /* notice */
  .notice {
    width: 100%;
    height: auto;
    margin-top: 10vh;
  }

  .notice > .banner_title > .line {
    width: 30px;
    height: 3px;
    background-color: #bbb;
  }

  .notice > .banner_title > h3 {
    font-size: 1.5rem;
    color: #333;
    margin-top: 0.5vh;
    margin-bottom: 2vh;
    font-family: 'Poppins', sans-serif;
  }

  /* notice > notice_banner */
  .notice_group {
    position: relative;
    width: 100%;
    overflow-x: hidden;
    cursor: pointer;
    white-space: nowrap;
  }

  .notice_group.active {
    cursor: grabbing;
  }

  .notice_group .notice_con {
    display: inline-block;
    background-color: #fff;
    width: 300px;
    height: 100px;
    margin-right: 4vw;
    margin-bottom: 8vh;
  }

  .notice_group .notice_con:last-child {
    margin-right: 0;
  }

  .notice_group .center {
    border: 1px solid #5775d9;
  }

  .notice_group .notice_con > h3 {
    font-size: 1rem;
    color: #191919;
    margin-top: 3vh;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .notice_group .notice_con > p {
    font-size: 0.75rem;
    color: #767676;
    padding: 0 10px;
    margin-top: 1vh;
  }
`;

export const MobileEducation = ({posts}) => {
  return (
    <MobileEducationBlock>
      <div>
        {/* titleBG */}
        <div className="titleBG">
          <div className="titleArea">
            <h5 data-aos="fade-up">
              WITH BUSAN.IT PROGRAM
              <br />
              <span>
                부산 아이티에서 신청가능한
                <br />
                다양한 프로그램
              </span>
            </h5>
            <img src="images/ai_education.png" />
          </div>
        </div>
        {/* education */}
        <div className="education">
          <h3>교육&nbsp;&amp;&nbsp;스터디 신청</h3>
          {/* applyArea > edu_box */}
          <div className="edu_box" id="#">
            {posts.map(post => (
              <a href={`/board/${post.boardId}`} data-aos="fade-up" key={post.boardId}>
                <div>
                  <img src={`/images/${post.imageSrc}.png`} />
                  <p>신청가능</p>
                  <h3>{post.title}</h3>
                  <h5>
                    신청기간: <span id="#">2021.03.01 ~ 2021.03.30</span>
                  </h5>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </MobileEducationBlock>
  )
}
const MobileEducationBlock = styled.div`
  /* titleBG */
.titleBG {
    background-image: url(../images/applyBG.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 0 16px;
    padding-top: 8vh;
}

.titleBG > .titleArea {
    width: 100%;
    height: 48vh;
    margin: 0 auto;
    position: relative;
}

.titleBG > .titleArea > h5 {
    font-size: 1rem;
    z-index: 20;
    color: #5775D9;
    font-weight: 400;
    position: absolute;
    left: 0;
    top: 9vh;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
}

.titleBG > .titleArea > h5 > span {
    font-size: 1.875rem;
    color: #243366;
    font-weight: 700;
    margin-top: 0.53vh;
    letter-spacing: -2px;
    line-height: 1.3;  
}

.titleBG > .titleArea > img {
    width: 60%;
    height: auto;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
}

/* education */
.education {
    width: 100%;
    height: auto;
    padding: 0 16px;
}

.education > h5 {
    font-size: 0.875rem;
    color: #5775D9;
    font-family: 'Poppins', sans-serif;
    padding-top: 7vh;
}

.education > h3 {
    font-size: 1.5rem;
    color: #333;
    margin-top: 10vh;
    font-weight: 700;
    letter-spacing: -1px;
}

.education > h3 > span {
    font-weight: 700;
}

/* education > edu_box */
.education > .edu_box {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    margin-top: 2vh;
}

.education > .edu_box a {
    width: 48%;
    height: auto;
    position: relative;
    background-color: #fff;
    margin: 2vh 0;
    border: 1px solid #bbb;
}

.education > .edu_box div > img {
    width: 100%;
    height: auto;
}

.education > .edu_box div > p {
    color: #2b90d9;
    font-size: 0.75rem;
    font-weight: 700;
    margin-top: 1vh;
    padding-left: 10px;
}

.education > .edu_box div > .red {
    color: #d94a2b;
    animation: blink 0.5s infinite;
}

@keyframes blink {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 100;
    }

    100% {
        opacity: 0;
    }
}

.education > .edu_box div .end {
    color: #bbb;
}

.education > .edu_box div h3 {
    padding: 0 10px;
    margin-top: 1vh;
    font-size: 1rem;
    color: #191919;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.education > .edu_box div h5 {
    font-size: 0.75rem;
    color: #767676;
    font-weight: 300;
    padding: 0 10px;
    margin-top: 3vh;
    margin-bottom: 3vh;
}

/* paging */
.paging {
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
}

.paging a {
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid #bbb;
    color: #787878;
    background-color: #fff;
}

.paging a.select {
    color: #fff;
    background-color: #5775D9;
    border: 1px solid #5775D9;
}
`;

export const MobileSeminar = ({posts}) => {
  return (
    <MobileSeminarBlock>
      
    </MobileSeminarBlock>
  )
}
const MobileSeminarBlock = styled.div`

`;

export const MobileConsult = ({posts}) => {
  return (
    <MobileConsultBlock>
      Consult
    </MobileConsultBlock>
  )
}
const MobileConsultBlock = styled.div`

`;

export const MobileReservation = ({children}) => {
  return (
    <MobileReservationBlock>
      {/* reservation_box */}
      <div className="res_banner">
        <h3>대관신청</h3>
        <p>부산아이티 에서는 교육장 및 세미나실, 미팅룸 등 다양한 목적으로 사용할 수 있는 공간을 열어드리고 있습니다.<br />아래 내용을 확인하시어 대관을 신청해주세요.</p>
      </div>
      <h2 className="res_title">대관시설안내</h2>
      {/* reservation > tab */}
      <input type="radio" id="tab01" name="rad01" defaultChecked />
      <input type="radio" id="tab02" name="rad01" />
      <input type="radio" id="tab03" name="rad01" />
      <input type="radio" id="tab04" name="rad01" />
      <div className="res_label">
        <label htmlFor="tab01" className="lab lab01">Class Room A</label>
        <label htmlFor="tab02" className="lab lab02">Class Room B</label>
        <label htmlFor="tab03" className="lab lab03">비대면 회의실</label>
        <label htmlFor="tab04" className="lab lab04">미팅룸</label>
      </div>
      {/* reservation > classroom A */}
      <div className="sheet sheet01">
        {/* reservation > banner */}
        <div className="reservation_banner">
          <input type="radio" name="slide" id="slide01" defaultChecked />
          <input type="radio" name="slide" id="slide02" />
          <input type="radio" name="slide" id="slide03" />
          <div className="slidewrap">
            <ul className="slidelist">
              <li>
                <a>
                  <label htmlFor="slide03" className="left" />
                  <img src="/images/A_01.jpg" />
                  <label htmlFor="slide02" className="right" />
                </a>
              </li>
              <li>
                <a>
                  <label htmlFor="slide01" className="left" />
                  <img src="/images/A_02.jpg" />
                  <label htmlFor="slide03" className="right" />
                </a>
              </li>
              <li>
                <a>
                  <label htmlFor="slide02" className="left" />
                  <img src="/images/A_03.jpg" />
                  <label htmlFor="slide01" className="right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="room_info">
          <h3>Class Room A <span>클래스룸 A</span></h3>
          <h3 className="price">200,000원<span>/ 2시간</span></h3>
          <ul>
            <li>• 수용인원 30명</li>
            <li>• 대면 강연 / 회의</li>
          </ul>
          <p><span>기본 2시간 기준.</span> 기준시간 미만은 기준시간만큼 사용한 것으로 간주. <br />부가가치세법에 따라 부가가치세를 납부하여야 할 경우, 부가세를 별도로 징수</p>
          <a href="/static/RegisterDoc.hwp" className="dowmload">대관신청서 다운로드 받기<img src="images/btn_next.svg" /></a>
        </div>
      </div>
      {/* reservation > classroom B */}
      <div className="sheet sheet02">
        {/* reservation > banner */}
        <div className="reservation_banner">
          <input type="radio" name="slide" id="slide04" defaultChecked />
          <input type="radio" name="slide" id="slide05" />
          <input type="radio" name="slide" id="slide06" />
          <div className="slidewrap">
            <ul className="slidelist">
              <li>
                <a>
                  <label htmlFor="slide06" className="left" />
                  <img src="/images/B_01.jpg" />
                  <label htmlFor="slide05" className="right" />
                </a>
              </li>
              <li>
                <a>
                  <label htmlFor="slide04" className="left" />
                  <img src="/images/B_02.jpg" />
                  <label htmlFor="slide06" className="right" />
                </a>
              </li>
              <li>
                <a>
                  <label htmlFor="slide05" className="left" />
                  <img src="/images/B_03.jpg" />
                  <label htmlFor="slide04" className="right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="room_info">
          <h3>Class Room B <span>클래스룸 B</span></h3>
          <h3 className="price">200,000원<span>/ 2시간</span></h3>
          <ul>
            <li>• 수용인원 30명</li>
            <li>• 대면 강연 / 회의</li>
          </ul>
          <p><span>기본 2시간 기준.</span> 기준시간 미만은 기준시간만큼 사용한 것으로 간주. <br />부가가치세법에 따라 부가가치세를 납부하여야 할 경우, 부가세를 별도로 징수</p>
          <a href="/static/RegisterDoc.hwp" className="dowmload">대관신청서 다운로드 받기<img src="images/btn_next.svg" /></a>
        </div>
      </div>
      {/* reservation > 비대면 회의실 */}
      <div className="sheet sheet03">
        {/* reservation > banner */}
        <div className="reservation_banner">
          <input type="radio" name="slide" id="slide07" defaultChecked />
          <input type="radio" name="slide" id="slide08" />
          <input type="radio" name="slide" id="slide09" />
          <div className="slidewrap">
            <ul className="slidelist">
              <li>
                <a>
                  <label htmlFor="slide09" className="left" />
                  <img src="/images/C_01.jpg" />
                  <label htmlFor="slide08" className="right" />
                </a>
              </li>
              <li>
                <a>
                  <label htmlFor="slide07" className="left" />
                  <img src="/images/C_02.jpg" />
                  <label htmlFor="slide09" className="right" />
                </a>
              </li>
              <li>
                <a>
                  <label htmlFor="slide08" className="left" />
                  <img src="/images/C_03.jpg" />
                  <label htmlFor="slide07" className="right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="room_info">
          <h3>Untact Meeting Room <span>비대면 회의실</span></h3>
          <h3 className="price">200,000원<span>/ 2시간</span></h3>
          <ul>
            <li>• 수용인원 2명</li>
            <li>• 언텍트 강의 / 회의</li>
          </ul>
          <p><span>기본 2시간 기준.</span> 기준시간 미만은 기준시간만큼 사용한 것으로 간주. <br />부가가치세법에 따라 부가가치세를 납부하여야 할 경우, 부가세를 별도로 징수</p>
          <a href="/static/RegisterDOc.hwp" className="dowmload">대관신청서 다운로드 받기<img src="images/btn_next.svg" /></a>
        </div>
      </div>
      {/* reservation > 미팅룸 */}
      <div className="sheet sheet04">
        {/* reservation > banner */}
        <div className="reservation_banner">
          <input type="radio" name="slide" id="slide10" defaultChecked />
          <input type="radio" name="slide" id="slide11" />
          <input type="radio" name="slide" id="slide12" />
          <div className="slidewrap">
            <ul className="slidelist">
              <li>
                <a>
                  <label htmlFor="slide12" className="left" />
                  <img src="/images/D_01.jpg" />
                  <label htmlFor="slide11" className="right" />
                </a>
              </li>
              <li>
                <a>
                  <label htmlFor="slide10" className="left" />
                  <img src="/images/D_02.jpg" />
                  <label htmlFor="slide12" className="right" />
                </a>
              </li>
              <li>
                <a>
                  <label htmlFor="slide11" className="left" />
                  <img src="/images/D_03.jpg" />
                  <label htmlFor="slide10" className="right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="room_info">
          <h3>Meeting Room <span>미팅룸</span></h3>
          <h3 className="price">150,000원<span>/ 2시간</span></h3>
          <ul>
            <li>• 수용인원 10명</li>
            <li>• 대면 강연 / 회의</li>
          </ul>
          <p><span>기본 2시간 기준.</span> 기준시간 미만은 기준시간만큼 사용한 것으로 간주. <br />부가가치세법에 따라 부가가치세를 납부하여야 할 경우, 부가세를 별도로 징수</p>
          <a href="/static/RegisterDoc.hwp" className="dowmload">대관신청서 다운로드 받기<img src="images/btn_next.svg" /></a>
        </div>
      </div>
      {/* reservation > 대관신청방법 */}
      <div className="procedure">
        <div className="procedure_title">대관 신청 방법</div>
        <p>홈페이지 회원가입 → 회원가입 → 로그인 → <span>대관신청</span></p>
        <div className="pre_order">대관일정확인</div>
        <h5>* 대관 가능 시간 : 월-토 09:00 ~ 20:00</h5>
        <div className="down"><img src="images/ico_down_small.svg" /></div>
        <div className="pre_order">홈페이지 대관신청</div>
        <div className="down"><img src="images/ico_down_small.svg" /></div>
        <div className="pre_order">대관신청서 제출</div>
        <h5>* 대관신청서를 다운받아서 사업장 이메일로 제출해주세요.</h5>
        <div className="down"><img src="images/ico_down_small.svg" /></div>
        <div className="pre_order">사용료 납부</div>
        <div className="down"><img src="images/ico_down_small.svg" /></div>
        <div className="pre_order">대관시설 이용</div>
      </div>
      {/* reservation > 대관환불규정 */}
      <div className="refund">
        <div className="refund_title">대관 환불 규정</div>
        <ul>
          <li>• 사용개시일 기준 <span>5일전(D-5) 취소 시</span> 납부사용료 <span className="red">전액</span> 환불.</li>
          <li>• 사용개시일 기준 <span>3일전(D-3) 취소 시</span> 납부사용료의 100분의 10을 공제한 나머지 금액 <span className="red">(90%)</span> 환불.</li>
          <li>• 사용개시일 기준 <span>1일전(D-1) 취소 시</span> 납부사용료의 100분의 30을 공제한 나머지 금액 <span className="red">(70%)</span> 환불.</li>
          <li>• <span>사용개시일 포함 사용개시일 이후 취소 시</span> 납부사용료의 100분의 50을 공제한 나머지 금액 <span className="red">(50%)</span> 환불.</li>
        </ul>
      </div>
      {/* reservation > 대관일정확인 */}
      <div className="calendar_title">대관 일정 확인</div>
      <div className="calendar">
        {children}
      </div>
    </MobileReservationBlock>
  )
}
const MobileReservationBlock = styled.div`
  .btn_home {
    width: 100%;
    height: 8vh;
    position: relative;
    position: fixed;
    z-index: 400;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 2px 6px rgba(128, 147, 183, 0.3);
}

.btn_home > a {
    width: 30%;
    height: auto;
    position: absolute;
    top: 2.5vh;
    left: 50%;
    transform: translateX(-50%);
}

.btn_home > a > img {
    width: 100%;
    height: auto;
}

/* header > menu */
.mobile_menu {
    display: block;
    position: fixed;
    top: 1vh;
    left: 16px;
    z-index: 600;
    width: 10%;
    height: 6vh;
    border: 0;
    font-size: 1.25rem;
    color: #333;
    background: transparent;
}

.mobile_menu:active {
    outline: none;
}

.mobile_menu:focus {
    outline: none;
}

.menuwrap {
    position: fixed;
    top: 0;
    left: -300px;
    z-index: 500;
    overflow: auto;
    width: 300px;
    height: 100%;
    padding: 8vh 20px;
    box-sizing: border-box;
    transition: left .3s ease-in-out;
    background-color: #f0f0f0;
}

.menuwrap.on {
    left: 0;
}

#dimmed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

#menu .category_list li {
    margin-top: 3vh;
}

#menu .category_list li > .link_sub_item {
    font-size: 1.25rem;
    transition: all 0.2s;
    color: #243366;
    font-weight: 700;
}

#menu .category_list li > .link_sub_item:hover {
    color: #5775D9;
}

#menu .category_list li:first-child {
    margin-top: 5vh;
}

/* 메뉴 - 로그인 / 회원가입 버튼 */
#menu .category_list > .login {
    margin-top: 7vh;
}

#menu .category_list > .login > a,
#menu .category_list > .join > a {
    font-size: 1rem;
    color: #787878;
}

#menu .category_list > .login > a:hover,
#menu .category_list > .join > a:hover {
    color: #333;
}

/* reservation_box */
.res_banner {
    width: 100%;
    height: 44vh;
    background-image: url(../images/reservation_banner.png);
    background-position: center;
    background-size: cover;
    text-align: center;
    color: #fff;
}

.res_banner > h3 {
    font-size: 1.875rem;
    padding-top: 17vh;
}

.res_banner > p {
    font-size: 0.875rem;
    padding-top: 10px;
}

.res_title {
    font-size: 1.875rem;
    text-align: center;
    margin-top: 5.33vh;
    margin-bottom: 5.33vh;
}

/* reservation_tab */
#tab01,
#tab02,
#tab03,
#tab04 {
    display: none;
}

#tab01 ~ .sheet01 {
    display: none;
}

#tab01:checked ~ .sheet01 {
    display: block;
}

#tab01 ~ .res_label .lab01 {
    transition: all 0.3s;
}

#tab01:checked ~ .res_label .lab01 {
    border: 1px solid #5775D9;
    background-color: #5775D9;
    color: #fff;
}

#tab02 ~ .sheet02 {
    display: none;
}

#tab02:checked ~ .sheet02 {
    display: block;
}

#tab02 ~ .res_label .lab02 {
    transition: all 0.3s;
}

#tab02:checked ~ .res_label .lab02 {
    border: 1px solid #5775D9;
    background-color: #5775D9;
    color: #fff;
}

#tab03 ~ .sheet03 {
    display: none;
}

#tab03:checked ~ .sheet03 {
    display: block;
}

#tab03 ~ .res_label .lab03 {
    transition: all 0.3s;
}

#tab03:checked ~ .res_label .lab03 {
    border: 1px solid #5775D9;
    background-color: #5775D9;
    color: #fff;
}

#tab04 ~ .sheet04 {
    display: none;
}

#tab04:checked ~ .sheet04 {
    display: block;
}

#tab04 ~ .res_label .lab04 {
    transition: all 0.3s;
}

#tab04:checked ~ .res_label .lab04 {
    border: 1px solid #5775D9;
    background-color: #5775D9;
    color: #fff;
}

.res_label {
    width: 100%;
    height: 6vh;
    margin: 0 auto;
    color: #787878;
    display: flex;
    justify-content: space-between;
}

.res_label > .lab {
    width: 24.5%;
    height: 6vh;
    text-align: center;
    line-height: 6vh;
    cursor: pointer;
    border: 1px solid #bbb;
}


/* reservation_tab > sheet */
.sheet {
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-top: 6vh;
}

/* reservation_tab > room_banner */
.reservation_banner {
    width: 100%;
    height: 28vh;
    margin: 0 auto;
}

.reservation_banner > .slidewrap > .slidelist {
    width: 100%;
    height: 28vh;
    margin: 0 auto;
}

.reservation_banner > .slidewrap > .slidelist > li {
    width: 100%;
    height: 28vh;
    overflow: hidden;
}

.reservation_banner input[id*="slide"] {
    display: none;
}

/* 슬라이드 영역 - max-width 크기를 조절해주면 됩니다*/
.reservation_banner .slidewrap {
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.reservation_banner .slidelist {
    white-space: nowrap;
    font-size: 0;
}

.reservation_banner .slidelist > li {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    transition: all .5s;
}

.reservation_banner .slidelist > li > a {
    display: block;
    position: relative;
}

.reservation_banner .slidelist > li > a img {
    max-width: 100%;
}

/* 좌우로 넘기는 LABEL버튼에 대한 스타일 */
.reservation_banner .slidelist label {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

.reservation_banner .slidelist .left {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.8);
    left: 3vw;
    background-image: url(../images/btn_pre.svg);
    background-repeat: no-repeat;
    background-position: center;

}

.reservation_banner .slidelist .right {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.8);
    right: 3vw;
    background-image: url(../images/btn_next.svg);
    background-repeat: no-repeat;
    background-position: center;
}

/* INPUT 체크되면 변화값이 li까지 전달되는 스타일 */
.reservation_banner input[id="slide01"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(0%);
}

.reservation_banner input[id="slide02"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-100%);
}

.reservation_banner input[id="slide03"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-200%);
}

.reservation_banner input[id="slide04"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(0%);
}

.reservation_banner input[id="slide05"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-100%);
}

.reservation_banner input[id="slide06"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-200%);
}

.reservation_banner input[id="slide07"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(0%);
}

.reservation_banner input[id="slide08"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-100%);
}

.reservation_banner input[id="slide09"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-200%);
}

.reservation_banner input[id="slide10"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(0%);
}

.reservation_banner input[id="slide11"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-100%);
}

.reservation_banner input[id="slide12"]:checked ~ .slidewrap .slidelist > li {
    transform: translateX(-200%);
}

/* reservation_tab > room_info */
.room_info {
    width: 96%;
    height: auto;
    margin: 0 auto;
    margin-top: 3vh;
}

.room_info > h3 {
    font-size: 1.5rem;
}

.room_info > h3 > span {
    font-size: 1rem;
    color: #405391;
    margin-left: 10px;
    font-weight: 400;
}

.room_info .price {
    font-size: 1.5rem;
    color: #FF451C;
}

.room_info .price > span {
    font-size: 0.875rem;
    color: #787878;
}

.room_info > ul {
    font-size: 1rem;
    margin-top: 10px;
}

.room_info > p {
    font-size: 0.875rem;
    color: #555;
    margin-top: 3vh;
}

.room_info > p > span {
    color: #000;
    font-weight: 600;
    background: linear-gradient(to top, rgba(95, 132, 255, 0.3) 40%, transparent 60%);
}

/* reservation_tab > 대관신청서 다운로드 */
.room_info > .dowmload {
    display: block;
    width: 96%;
    height: 6vh;
    line-height: 6vh;
    color: #5775D9;
    border: 1px solid #5775D9;
    margin-top: 3vh;
    padding-left: 4vw;
    position: relative;
    transition: all 0.3s;
}

.room_info > .dowmload:hover {
    background-color: #e5e8f4;
}

.room_info > .dowmload > img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 4vw;
}

/* reservation > procedure */
.procedure_title, .refund_title, .calendar_title {
    width: 96%;
    height: 4vh;
    margin: 0 auto;
    margin-top: 10vh;
    line-height: 4vh;
    border-left: 8px solid #5775D9;
    padding-left: 2vw;
    font-size: 1.5rem;
}

.procedure > p > span {
    color: #5775D9;
}

.procedure > p {
    font-size: 0.875rem;
    margin-left: 5.5vw;
    margin-bottom: 4vh;
}

.procedure .pre_order {
    width: 96%;
    height: 6vh;
    margin: 0 auto;
    border: 1px solid #243366;
    color: #243366;
    text-align: center;
    line-height: 6vh;
}

.procedure h5 {
    font-size: 0.75rem;
    color: #787878;
    font-weight: 300;
    width: 96%;
    height: auto;
    margin: 0 auto;
    margin-top: 0.5vh;
    margin-bottom: 1vh;
}

.procedure .down {
    width: 24px;
    height: 24px;
    margin: 0 auto;
}


/* reservation > refund */
.refund > ul {width: 96%; height: auto; margin: 0 auto;}
.refund > ul li {font-size: 0.875rem; margin: 1vh 0; color: #666;}
.refund > ul li > span {font-weight: 700; color: #000;}
.refund > ul li > .red {color: #D94A2B;}


/* reservation > calendar */
.calendar_title {margin-bottom: 2vh;}
.calendar {width: 96%; height: 50vh; margin: 0 auto; background-color: #f2f2f2;}

`;



