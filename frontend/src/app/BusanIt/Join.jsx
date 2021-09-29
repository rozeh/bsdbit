import React, { useState } from 'react';
import { BrowserView, MobileOnlyView } from 'react-device-detect'
import { createGlobalStyle } from 'styled-components';
import DesktopDialog from '../pages/desktop/DesktopDialog';
import DesktopFooter from '../pages/desktop/DesktopFooter';
import DesktopHead from '../pages/desktop/DesktopHead';
import DesktopTemplate from '../pages/desktop/DesktopTemplate';
import DesktopJoin from '../pages/desktop/pages/DesktopJoin';
import MobileFooter from '../pages/mobile/MobileFooter';
import MobileHead from '../pages/mobile/MobileHead';
import MobileTemplate from '../pages/mobile/MobileTemplate';
import MobileJoin from '../pages/mobile/pages/MobileJoin';


const GlobalStyleBlock = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
}

a {
    text-decoration: none;
    color: #000;
}

ul li {
    list-style: none;
}

body {
    width: 100%;
    height: auto;
    margin: 0 auto;
}

/* scroll */
body::-webkit-scrollbar {
    width: 12px;
}

body::-webkit-scrollbar-thumb {
    background-color: #a0a5b5;
    border-radius: 12px;
}

body::-webkit-scrollbar-thumb:hover {
    background-color: #7d8498;
    border-radius: 10px;
}

body::-webkit-scrollbar-track {
    background-color: #fff;
}
`

const Join = () => {
    const [login, setLogin] = useState(false);
    const onToggle = () => setLogin(!login);
    
    return(
        <>
        <BrowserView>
        <GlobalStyleBlock />
        <DesktopTemplate>
            <DesktopHead onToggle={onToggle} />
            <DesktopJoin />
            <DesktopFooter />
            <DesktopDialog onToggle={onToggle} visible={login} />
        </DesktopTemplate>    
        </BrowserView>
        <MobileOnlyView>
        <MobileTemplate>
            <MobileHead />
            <MobileJoin />
            <MobileFooter />
        </MobileTemplate>
        </MobileOnlyView>
        </>
    )
}

export default Join;
