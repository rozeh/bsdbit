import React from 'react';
import styled from 'styled-components';

const DesktopFooter = () => {
    
    return(
        <DesktopFooterBlock>
        {/* footer */}
        <div className="footer_line" />
        <footer>
          <img src="/images/logo.svg" className="footer_logo" alt="logo" />
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
      </DesktopFooterBlock>
    )
}

const DesktopFooterBlock = styled.div`
    /* footer */
  .footer_line {
    width: 100%;
    height: 1px;
    background-color: #eee;
  }

  footer {
    width: 1160px;
    height: 290px;
    margin: 0 auto;
    position: relative;
  }

  footer .footer_logo {
    width: 160px;
    height: 28px;
    margin-top: 70px;
  }

  footer .add {
    font-size: 12px;
    color: #767676;
    font-family: 'Poppins', sans-serif;
    margin-top: 10px;
  }

  footer .copy {
    font-size: 12px;
    color: #767676;
    font-family: 'Poppins', sans-serif;
    margin-top: 80px;
  }

  footer .call {
    width: 206px;
    height: auto;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  footer .call > h3 {
    font-size: 20px;
    color: #191919;
  }

  footer .call > h3 > span {
    font-size: 25px;
    color: #5775d9;
    font-weight: 900;
  }
`;

export default DesktopFooter;