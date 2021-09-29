import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserView, MobileOnlyView } from 'react-device-detect'
import DesktopTemplate from '../pages/desktop/DesktopTemplate'
import DesktopHead from '../pages/desktop/DesktopHead'
import DesktopFooter from '../pages/desktop/DesktopFooter'
import DesktopDialog from '../pages/desktop/DesktopDialog'
import MobileTemplate from '../pages/mobile/MobileTemplate'
import { DesktopHome } from '../pages/desktop/pages/DesktopPages'
import MobileHead from '../pages/mobile/MobileHead'
import MobileFooter from '../pages/mobile/MobileFooter'
import MobileHome from '../pages/mobile/pages/MobileHome'
import { list } from '../../data/board/board'
import { createGlobalStyle } from 'styled-components'

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

const BusanIt = () => {
  const [login, setLogin] = useState(false)
  const onToggle = () => setLogin(!login)
  console.log("login: ", login)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await list
      const res1 = res.data.list
      setPosts(res1)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <BrowserView>
        <GlobalStyleBlock />
        <DesktopTemplate>
          <DesktopHead onToggle={onToggle} />
          <DesktopHome posts={posts} />
          <DesktopFooter />
          <DesktopDialog onToggle={onToggle} visible={login} />
        </DesktopTemplate>
      </BrowserView>
      <MobileOnlyView>
        <MobileTemplate>
          <MobileHead />
          <MobileHome posts={posts} />
          <MobileFooter />
        </MobileTemplate>
      </MobileOnlyView>
    </>
  )
}

export default BusanIt
