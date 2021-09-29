import React from 'react';
import styled from 'styled-components';

const AdminHead = () => {
  
  return (
    <AdminHeadBlock>
      <header>
        <img src="/images/logo.svg" alt="logo" />
      </header>
    </AdminHeadBlock>
  )
}

const AdminHeadBlock = styled.div`
  header {
    padding-top: 1rem;
    width: 1920px;
    height: 130px;
    line-height: 130px;
    vertical-align: middle;
    border-bottom: 1px solid #ccc;
  }
  img {
    width: 200px;
    height: 35px;
    margin-left: 2rem;
  }

`;

export default AdminHead;