import React from 'react';
import styled from 'styled-components';
import AdminTemplate from '../../pages/admin/AdminTemplate';
import { BrowserView, MobileOnlyView } from 'react-device-detect'
import { Dashboard } from '../../pages/admin/pages/AdminPages'

const Admin = () => {

  return(
    <AdminTemplateBlock>
    <BrowserView>    
      <AdminTemplate>
        <Dashboard />
      </AdminTemplate>
    </BrowserView>
    </AdminTemplateBlock>
  )
}

const AdminTemplateBlock = styled.div`

`;

export default Admin;