import React from 'react';
import styled from 'styled-components';
import './MobileCSS/MobileTemplate.css';

const MobileTemplate = ({children}) => {
    return (
        <MobileTemplateBlock>
            {children}
        </MobileTemplateBlock>    
    )
}

const MobileTemplateBlock = styled.div`
    

`;

export default MobileTemplate;