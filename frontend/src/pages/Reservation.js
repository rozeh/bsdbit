import React from 'react'
import styled from 'styled-components'
import HomeFooter from '../components/Footer/HomeFooter'

const ReservationBlock = styled.div`
  /* reservation_box */
  .reservation_box {
    width: 100%;
    height: 2627px;
    background-color: #f9f9f9;
  }

  .reservation_box > h5 {
    padding-top: 100px;
    color: #5775d9;
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
    width: 1160px;
    height: 445px;
    margin: 0 auto;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }

  .room > .room_img {
    width: 660px;
    height: inherit;
    transition: all 0.3s;
  }

  .room > .room_info {
    width: 460px;
    height: inherit;
    background-color: #fff;
    border-top: 3px solid #243366;
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
  }

  .room:hover .room_img {
    transform: scale(1.05);
  }

  .room:hover .room_info {
    border-top: 3px solid #5775d9;
  }

  .room:hover .room_info .price > span {
    color: #5775d9;
  }

  .room:hover .room_info .btn_call {
    background-color: #5775d9;
  }

  /* room > room_info */
  .room_info .name {
    font-size: 20px;
    font-weight: 700;
    color: #191919;
    margin-top: 40px;
    margin-left: 40px;
  }

  .room_info .price {
    font-size: 14px;
    color: #787878;
    font-weight: 400;
    position: absolute;
    right: 40px;
    top: 40px;
  }

  .room_info .price > span {
    font-size: 26px;
    color: #243366;
    font-weight: 700;
    transition: all 0.3s;
  }

  .room_info .people {
    font-size: 16px;
    font-weight: 400;
    color: #787878;
    margin-left: 40px;
    margin-top: 4px;
  }

  .room_info .common {
    font-size: 16px;
    color: #243366;
    margin-left: 40px;
    margin-top: 30px;
  }

  .room_info .common_txt {
    font-size: 14px;
    color: #555;
    margin-left: 40px;
    margin-top: 20px;
  }

  /* room > facility */
  .room .room_info .facility {
    width: 100%;
    height: auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
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
`

const Reservation = () => {
  return (
    <ReservationBlock>
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
              <span>150,000원</span>&nbsp;/ 2시간
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
      <HomeFooter />
    </ReservationBlock>
  )
}

export default Reservation
