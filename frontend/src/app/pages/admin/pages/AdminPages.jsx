import React from 'react';
import styled from 'styled-components';

export const Dashboard = () => {
  return (
    <DashboardBlock>
        <div className="content-title">
          <h1>DASH BOARD</h1>
        </div>
        <div className="contents-wrapper">
          sss
        </div>
    </DashboardBlock>
  )
}

const DashboardBlock = styled.div`
    .content-title {
    padding-top: 0.3rem;
    width: 100%;
    text-align: center;
    height: 65px;
  }

  .content-title h1 {
    display: block;
    padding: 0.5rem auto;
    color: #555555;
  }

  .contents-wrapper {
    width: 1680px;
    background-color: white;
    height: 750px;
    margin: 0 auto;
  }
`;