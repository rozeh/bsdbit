import React from 'react'
import styled from 'styled-components'

const DesktopTemplate = ({ children }) => {
    return(
        <DesktopTemplateBlock>
            {children}
        </DesktopTemplateBlock>
    )
}

const DesktopTemplateBlock = styled.div`
    width: 100%;
`

export default DesktopTemplate