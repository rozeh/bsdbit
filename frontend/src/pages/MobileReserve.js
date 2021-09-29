import React from 'react'
import styled from 'styled-components';

const MobileReserveBlock = styled.div`

/* reservation_box */
.reservation_box {
    width: 100%;
    height: auto;
    background-color: #f2f2f2;
    padding: 0 16px;
    padding-top: 8vh;
}

.reservation_box > h5 {
    padding-top: 100px;
    color: #5775D9;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}

.reservation_box > h3 {
    padding-top: 10px;
    color: #333;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
}

.reservation_box > p {
    padding-top: 10px;
    color: #555;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 100px;
}

/* reservation_box > room */
.room {
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 80px;
}

.room > .room_img {
    width: 100%;
    height: auto;
}

.room > .room_info {
    width: 100%;
    height: 50vh;
    background-color: #fff;
    border-top: 3px solid #243366;
    position: relative;
    cursor: pointer;
    margin-top: 2vh;
    margin-bottom: 5vh;
}

/* room > room_info */
.room_info .name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #191919;
    margin-top: 4vh;
    margin-left: 4vw;
}

.room_info .price {
    font-size: 0.875rem;
    color: #787878;
    font-weight: 400;
    position: absolute;
    right: 4vw;
    top: 4vh;
}

.room_info .price > span {
    font-size: 1.625rem;
    color: #243366;
    font-weight: 700;
}

.room_info .people {
    font-size: 1rem;
    font-weight: 400;
    color: #787878;
    margin-left: 4vw;
    margin-top: 0.5vh;
}

.room_info .common {
    font-size: 1rem;
    color: #243366;
    margin-left: 4vw;
    margin-top: 3vh;
}

.room_info .common_txt {
    font-size: 0.875rem;
    color: #555;
    margin-left: 4vw;
    margin-top: 2vh;
}

/* room > facility */
.room .room_info .facility {
    width: 100%;
    height: auto;
    padding: 0 2vw;
    display: flex;
    justify-content: space-between;
    margin-top: 5vh;
}

/* room > btn_call */
.btn_call {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 18px;
    background-color: #243366;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all 0.3s;
}

.btn_call > img {
    position: absolute;
    left: 60px;
    top: 12px;
}

.btn_call:hover {
    background-color: #5775D9;
}

/* footer */
.footer_line {
    width: 100%;
    height: 1px;
    background-color: #eee;
}

footer {
    width: 100%;
    height: auto;
}

footer .footer_logo {
    width: 160px;
    height: 28px;
    margin: 0 auto;
    margin-top: 70px;
}

footer .add {
    font-size: 0.75rem;
    color: #767676;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin-top: 5vh;
}

footer .copy {
    font-size: 0.75rem;
    color: #767676;
    font-family: 'Poppins', sans-serif;
    margin-top: 3vh;
    margin-bottom: 3vh;
    text-align: center
}

footer .call {
    text-align: center
}

footer .call > h3 {
    font-size: 1rem;
    color: #191919;
    margin-bottom: 5vh;
    margin-top: 5vh;
}

footer .call > h3 > span {
    font-size: 1.3rem;
    color: #5775D9;
    font-weight: 900;
}

/* btn_top */
a#btn_top {
    width: 50px;
    height: 50px;
    background-color: #FFF;
    border: 1px solid #D9E1E8;
    position: fixed;
    right: 3%;
    bottom: 2%;
    display: none;
    z-index: 999;
    transition: 0.3s;
}

a#btn_top > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

a#btn_top:hover {
    background-color: #e1e5f4;
    border: 1px solid #243366;
}
`;
function MobileReserve() {
  return (
    <MobileReserveBlock>
      {/* reservation_box */}
      <div className="reservation_box">
        <h5>WITH BUSAN.IT PROGRAM</h5>
        <h3>대관 신청</h3>
        <p>
          부산아이티 에서는 교육장 및 세미나실, 미팅룸 등 다양한 목적으로 사용할
          수 있는 공간을 열어드리고 있습니다.
          <br />
          아래 내용을 확인하시어 대관을 신청해주세요.
        </p>
        {/* reservation > room */}
        <div className="room" data-aos="fade-up">
          <img src="images/room01.jpg" className="room_img" />
          {/* reservation > room_info */}
          <div className="room_info">
            <p className="name">Class Room A</p>
            <p className="price">
              <span>200,000원</span>&nbsp;/ 2시간
            </p>
            <p className="people">수용인원 24명</p>
            <p className="common">공통안내사항</p>
            <p className="common_txt">
              기준시간 미만은 기준시간만큼 사용한 것으로 간주.
              <br />
              부가가치세법에 따라 부가가치세를 납부하여야 할 경우,
              <br />
              부가가치세를 별도로 징수
            </p>
            {/* 부대시설 아이콘 */}
            <div className="facility">
              <img src="images/ico_beam.svg" />
              <img src="images/ico_board.svg" />
              <img src="images/ico_wifi.svg" />
            </div>
            {/* btn_call */}
            <a href="tel:051-783-9998" className="btn_call">
              <img src="images/ico_phone.svg" />
              전화예약하기
            </a>
          </div>
        </div>
        <div className="room" data-aos="fade-up">
          <img src="images/classb.jpg" className="room_img" />
          {/* reservation > room_info */}
          <div className="room_info">
            <p className="name">Class Room B</p>
            <p className="price">
              <span>200,000원</span>&nbsp;/ 2시간
            </p>
            <p className="people">수용인원 30명</p>
            <p className="common">공통안내사항</p>
            <p className="common_txt">
              기준시간 미만은 기준시간만큼 사용한 것으로 간주.
              <br />
              부가가치세법에 따라 부가가치세를 납부하여야 할 경우,
              <br />
              부가가치세를 별도로 징수
            </p>
            {/* 부대시설 아이콘 */}
            <div className="facility">
              <img src="images/ico_beam.svg" />
              <img src="images/ico_board.svg" />
              <img src="images/ico_wifi.svg" />
            </div>
            {/* btn_call */}
            <a href="tel:051-783-9998" className="btn_call">
              <img src="images/ico_phone.svg" />
              전화예약하기
            </a>
          </div>
        </div>
        <div className="room" data-aos="fade-up">
          <img src="images/bidaemyon.jpg" className="room_img" />
          {/* reservation > room_info */}
          <div className="room_info">
            <p className="name">비대면 회의실</p>
            <p className="price">
              <span>200,000원</span>&nbsp;/ 2시간
            </p>
            <p className="people">수용인원 최대 2명</p>
            <p className="common">공통안내사항</p>
            <p className="common_txt">
              기준시간 미만은 기준시간만큼 사용한 것으로 간주.
              <br />
              부가가치세법에 따라 부가가치세를 납부하여야 할 경우,
              <br />
              부가가치세를 별도로 징수
            </p>
            {/* 부대시설 아이콘 */}
            <div className="facility">
              <img src="images/ico_smartboard.svg" />
              <img src="images/ico_camera.svg" />
              <img src="images/ico_mice.svg" />
              <img src="images/ico_wifi.svg" />
            </div>
            {/* btn_call */}
            <a href="tel:051-783-9998" className="btn_call">
              <img src="images/ico_phone.svg" />
              전화예약하기
            </a>
          </div>
        </div>
        <div className="room" data-aos="fade-up">
          <img src="images/classd.jpg" className="room_img" />
          {/* reservation > room_info */}
          <div className="room_info">
            <p className="name">미팅룸</p>
            <p className="price">
              <span>150,000원</span>&nbsp;/ 시간
            </p>
            <p className="people">수용인원 10명</p>
            <p className="common">공통안내사항</p>
            <p className="common_txt">
              기준시간 미만은 기준시간만큼 사용한 것으로 간주.
              <br />
              부가가치세법에 따라 부가가치세를 납부하여야 할 경우,
              <br />
              부가가치세를 별도로 징수
            </p>
            {/* 부대시설 아이콘 */}
            <div className="facility">
              <img src="images/ico_board.svg" />
              <img src="images/ico_wifi.svg" />
            </div>
            {/* btn_call */}
            <a href="tel:051-783-9998" className="btn_call">
              <img src="images/ico_phone.svg" />
              전화예약하기
            </a>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="footer_line" />
      <footer>
        <img src="images/logo.svg" className="footer_logo" />
        <p className="add">
          BUSAN AI DATACENTER
          <br />
          2F, 41, Jangdaegol-ro, Suyeong-gu, Busan, Republic of Korea
        </p>
        <p className="copy">Copyright©2021 AIPLATFORM All rights reserved.</p>
        <div className="call">
          <h3>
            대관 및 신청문의
            <br />
            <span>051-783-9998</span>
          </h3>
        </div>
      </footer>
    </MobileReserveBlock>
  )
}

export default MobileReserve
