import React from 'react'
import styled from 'styled-components'

const MobileFooter = () => {
  return (
    <MobileFooterBlock>
      <div className="footer_line" />
      <footer>
        <div className="footer_logo">
          <img src="/images/logo.svg" />
        </div>
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
    </MobileFooterBlock>
  )
}

const MobileFooterBlock = styled.div`
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
    text-align: center;
  }

  footer .call {
    text-align: center;
  }

  footer .call > h3 {
    font-size: 1rem;
    color: #191919;
    margin-bottom: 5vh;
    margin-top: 5vh;
  }

  footer .call > h3 > span {
    font-size: 1.3rem;
    color: #5775d9;
    font-weight: 900;
  }
`

export default MobileFooter
