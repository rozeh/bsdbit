import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserView, MobileOnlyView } from 'react-device-detect'
import DesktopFooter from '../pages/desktop/DesktopFooter';
import DesktopHead from '../pages/desktop/DesktopHead';
import DesktopDialog from '../pages/desktop/DesktopDialog';
import MobileTemplate from '../pages/mobile/MobileTemplate';
import MobileHead from '../pages/mobile/MobileHead';
import MobileFooter from '../pages/mobile/MobileFooter';
import { MobileEducation } from '../pages/mobile/pages/MobilePages';
import DesktopTemplate from '../pages/desktop/DesktopTemplate';
import { DesktopEducation } from '../pages/desktop/pages/DesktopPages';
import Pagenation from '../../utils/Pagenation';
import { list } from '../../data/board/board';
import { createGlobalStyle } from 'styled-components';


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

const Education = ({props}) => {
    const [login, setLogin] = useState(false);
    const onToggle = () => setLogin(!login);

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(9)
    
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true)
        const res = await list
        setPosts(res.data.list.filter(x => x.category == 1 ))
        setLoading(false)
      }
      fetchPosts()
    }, [])
  
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    console.log("포스트확인: ", currentPosts)
    const pagenate = (pageNumber) => setCurrentPage(pageNumber)
    
    return (
        <>
            <BrowserView>
            <GlobalStyleBlock />
            <DesktopTemplate>
            <DesktopHead onToggle={onToggle}/>
                <DesktopEducation posts={currentPosts} />
                <Pagenation postsPerPage={postsPerPage} totalPosts={posts.length} pagenate={pagenate} />
            <DesktopFooter />
            <DesktopDialog onToggle={onToggle} visible={login}/>
            </DesktopTemplate>
            </BrowserView>
            <MobileOnlyView>
                <MobileTemplate>
                    <MobileHead />
                    <MobileEducation posts={currentPosts} />
                    <Pagenation postsPerPage={postsPerPage} totalPosts={posts.length} pagenate={pagenate} />
                    <MobileFooter/>
                </MobileTemplate>
            </MobileOnlyView>
        </>
    )
}

export default Education;