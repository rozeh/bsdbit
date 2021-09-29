import React from 'react'
import styled from 'styled-components'

const MobileConsulting = () => {
  return (
    <MobileConsultingBlock>
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
            <img src="images/edu_ai_banner_01.png" />
          </div>
        </div>
        {/* education */}
        <div className="education">
          <div className="contentsArea">
            <div className="n_tit_page">
              <h2>추천교육</h2>
            </div>
            <br />
            <font size={5} style={{ color: '#37bac8' }}>
              AI 교육 추천
            </font>
            <br />
            {/* de28 : 소개(탭) */}
            <div className="recommand_edu_ai">
              <div className="tableArea">
                <table summary>
                  <caption />
                  <tbody>
                    <tr>
                      <th>
                        코세라 앤드류 응의 머신러닝{' '}
                        <font style={{ color: '#37bac8' }}>(수료증)</font>
                      </th>
                      <td>
                        <section className="conA">
                          {' '}
                          <a
                            href="https://ko.coursera.org/learn/machine-learning"
                            target="_blank"
                          >
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        The Elements of AI <br />
                        <font style={{ color: '#37bac8' }}>(수료증)</font>
                      </th>
                      <td>
                        <section className="conA">
                          {' '}
                          <a
                            href="https://course.elementsofai.com/"
                            target="_blank"
                          >
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        에드위드 MIT 인공지능개론 <br />
                        <font style={{ color: '#37bac8' }}>(수료증)</font>
                      </th>
                      <td>
                        <section className="conA">
                          {' '}
                          <a
                            href="https://www.edwith.org/mitai"
                            target="_blank"
                          >
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        에드위드 머신러닝을 위한 python <br />
                        <font style={{ color: '#37bac8' }}>(수료증)</font>
                      </th>
                      <td>
                        <section className="conA">
                          {' '}
                          <a
                            href="https://www.edwith.org/aipython"
                            target="_blank"
                          >
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        KAIST 인공지능 및 기계학습 개론 1, 2 <br />
                        <font style={{ color: '#37bac8' }}>(수료증)</font>
                      </th>
                      <td>
                        <section className="conA">
                          {' '}
                          <a
                            href="https://kaist.edwith.org/machinelearning1_17"
                            target="_blank"
                          >
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        GIST AI기반 클라우드를 위한 컴퓨터 시스템 <br />
                        <font style={{ color: '#37bac8' }}>(수료증)</font>
                      </th>
                      <td>
                        <section className="conA">
                          {' '}
                          <a
                            href="https://gist.edwith.org/computer-systems"
                            target="_blank"
                          >
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>스탠포드 CS231n</th>
                      <td>
                        <section className="conA">
                          {' '}
                          <a
                            href="https://www.youtube.com/watch?v=vT1JzLTH4G4"
                            target="_blank"
                          >
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>NLP 스탠포드</th>
                      <td>
                        <section className="conA">
                          {' '}
                          <a
                            href="https://www.youtube.com/watch?v=8rXD5-xhemo"
                            target="_blank"
                          >
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>김성훈 교수의 모두를 위한 딥러닝 강좌</th>
                      <td>
                        <section className="conA">
                          {' '}
                          <a
                            href="https://www.youtube.com/watch?v=BS6O0zOGX4E&list=PLlMkM4tgfjnLSOjrEJN31gZATbcj_MpUm"
                            target="_blank"
                          >
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* de28 : 소개(탭) */}
            <br />
            <br />
            <font size={5} style={{ color: '#37bac8' }}>
              IT 교육 추천
            </font>
            <br />
            {/* de28 : 소개(탭) */}
            <div className="recommand_edu_it">
              <div className="tableArea">
                <table summary>
                  <caption />
                  <colgroup>
                    <col style={{ width: '40%' }} />
                    <col style={{ width: '*' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>
                        소프트웨어 공학 연구소
                        <br />
                        <font style={{ color: '#37bac8' }}>
                          (프로그래머와 예비 개발자의 학습 및 놀이 동아리)
                        </font>
                      </th>
                      <td>
                        오랜기간 winapi.co.kr을 운영하면서 다양한 소프트웨어
                        개발을 위한 연구 및 전파를 진행하고 있습니다.
                        <br />
                        <section className="conA">
                          {' '}
                          <a href="http://soen.kr" target="_blank">
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        생활코딩 <br />
                        <font style={{ color: '#37bac8' }}>
                          (생활코딩은 일반인들에게 프로그래밍을 알려주는 무료
                          온라인, 오프라인 수업)
                        </font>
                      </th>
                      <td>
                        어떻게 공부할 것인가를 생각해보기 전에 왜 프로그래밍을
                        공부하는 이유에 대한 이유를 함께 생각해 볼수 있는
                        사이트입니다.
                        <br />
                        <section className="conA">
                          {' '}
                          <a
                            href="https://www.opentutorials.org/course/1"
                            target="_blank"
                          >
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Lael's World <br />
                        <font style={{ color: '#37bac8' }}>
                          (천재는 노력하는 사람을 이길 수 없고, 노력하는 사람은
                          즐기는 자를 이길 수 없다)
                        </font>
                      </th>
                      <td>
                        서버 및 클라우드 관련 노하우가 가득합니다.
                        <br />
                        <section className="conA">
                          {' '}
                          <a href="https://blog.lael.be" target="_blank">
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Study For Us <br />
                        <font style={{ color: '#37bac8' }}>
                          (개인 서버 및 네트워크 환경 구축에 대해 이해하기 쉽게
                          설명하는 블로그)
                        </font>
                      </th>
                      <td>
                        다양한 개인 서버 및 네트워크 환경 구축에 대한 정보가
                        가득합니다.
                        <br />
                        <section className="conA">
                          {' '}
                          <a
                            href="https://studyforus.tistory.com"
                            target="_blank"
                          >
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        W3Schools <br />
                        <font style={{ color: '#37bac8' }}>
                          (온라인으로 웹 기술을 배우는 교육용 웹 사이트이다)
                        </font>
                      </th>
                      <td>
                        체계적으로 구성된 웹 어플리케이션 개발의 최강자
                        <br />
                        <section className="conA">
                          {' '}
                          <a href="https://www.w3schools.com" target="_blank">
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        VELOPERT.LOG <br />
                        <font style={{ color: '#37bac8' }}>
                          (DEVELOPMENT &amp; LIFE LOG)
                        </font>
                      </th>
                      <td>
                        최신 웹 어플리케이션 개발 정보
                        <br />
                        <section className="conA">
                          {' '}
                          <a href="https://velopert.com" target="_blank">
                            바로가기&nbsp;&nbsp;{' '}
                            <i className="glyphicon glyphicon-new-window" />
                          </a>
                        </section>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* de28 : 소개(탭) */}
          </div>
        </div>
      </div>
    </MobileConsultingBlock>
  )
}

const MobileConsultingBlock = styled.div`
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
    color: #5775d9;
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
    width: 80%;
    height: auto;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  /* education */
  .education {
    width: 100%;
    height: auto;
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

  .recommand_edu_ai > .tableArea > table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
	  line-height: 1.5;
	  border-top: 3px solid #5775d9;
	  border-bottom: 1px solid #ccc;
	  margin: 20px auto;
  }

  .recommand_edu_it > .tableArea > table  {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
	  line-height: 1.5;
	  border-top: 3px solid #5775d9;
	  border-bottom: 1px solid #ccc;
	  margin: 10px auto;
  }


  th {
    padding: 1rem;
    width: 50%;
  }
  td {
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .recommand_edu_it {
   
  }

  .recommand_edu_it > .tableArea  {
    padding : 1rem;

  }

  a {
    width: 200px;
    background-color: rgb(55, 186, 200);
    font-weight: 700;
    color: white;
    padding-left: 8px;

  }
`

export default MobileConsulting
