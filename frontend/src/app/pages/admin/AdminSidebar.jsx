import React from 'react'
import styled from 'styled-components';

const AdminSidebar = (props) => {
  return(
  <AdminSidebarblock>
    <aside>
      <ul>
        <li>
          강의
        </li>
        <li>
          세미나
        </li>
        <li>
          Ai협회 교육
        </li>
        <li>
          대관 신청하기
        </li>
        <hr />
        <li>
          공지사항
        </li>
        <li>
          컨텐츠 관리
        </li>
        <li>
          팝업관리
        </li>
      </ul>
    </aside>  
  </AdminSidebarblock>
  )
}

const AdminSidebarblock = styled.div`
  aside {
    float: left;
    width: 200px;
    height: 850px;
    background-color: #11276f;
    
  }
  ul {
    margin: 35px auto;
    text-align: center;
  }
  li {
    font-size: 14pt;
    color: white;
    margin: 35px 0;
  }
  hr{
    width: 150px;
    margin: 0 auto;
    border: 0.4px solid #cccccc;
  }

  
`;

export default AdminSidebar;