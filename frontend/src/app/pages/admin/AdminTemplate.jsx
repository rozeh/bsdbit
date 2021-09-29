import React from 'react';
import styled from 'styled-components';
import AdminFooter from './AdminFooter';
import AdminHead from './AdminHead';
import AdminSidebar from './AdminSidebar';

const AdminTemplate = ({children}) => {
  return (
    <AdminTemplateBlock>
        <div className="page-wrapper">
          <div className="page-body-wrapper">
            <AdminHead />
              <main>
              <AdminSidebar />
                <div className="page-body">
                  {children}
                </div>
              </main>
          </div>
        </div>
    </AdminTemplateBlock>  
  )
}

const AdminTemplateBlock = styled.div`
  main { 
    display: flex;
  }
  .page-body {
    background-color: #cccccc;
    width: 100%;
  }
`;


export default AdminTemplate;