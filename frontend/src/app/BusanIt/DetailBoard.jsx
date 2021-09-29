import React, { useEffect, useState } from 'react';
import { BrowserView, MobileOnlyView } from 'react-device-detect'
import DesktopDialog from '../pages/desktop/DesktopDialog';
import DesktopFooter from '../pages/desktop/DesktopFooter';
import DesktopHead from '../pages/desktop/DesktopHead';
import DesktopTemplate from '../pages/desktop/DesktopTemplate';
import DesktopDetail from '../pages/desktop/pages/DesktopDetail';
import { DesktopReservation } from '../pages/desktop/pages/DesktopPages';
import MobileFooter from '../pages/mobile/MobileFooter';
import MobileHead from '../pages/mobile/MobileHead';
import MobileTemplate from '../pages/mobile/MobileTemplate';
import DesktopReserveDialog from '../pages/desktop/pages/DesktopReserveDialog';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { regDocs, userDocs } from '../../data/docs/docs';
import { list } from '../../data/board/board';
import MobileDetail from '../pages/mobile/pages/MobileDetail';

const DetailBoard = ({match}) => {
    const [login, setLogin] = useState(false)
    const onToggle = () => setLogin(!login)
    
    const [ reserve, setReserve ] = useState(false)
    const turnOn = () => setReserve(!reserve)

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true)
        const res = await list
        const res1 = res.data.list
        setPosts(res1.filter(x=> {
            return x.boardId == match.params.boardId
        }))
        setLoading(false)
      }
      fetchPosts()
    }, [])


    return(
        <>
        <BrowserView>
        <DesktopTemplate>
            <DesktopHead onToggle={onToggle} />
            <DesktopDetail turnOn={turnOn} match={match} posts={posts} >
            <DesktopFooter />
            <DesktopDialog onToggle={onToggle} visible={login} />
            {posts.map(post => 
            <DesktopReserveDialog 
                turnOn={turnOn} 
                reserve={reserve}
                match={match}
                title={post.title}
                boardId={post.boardId}
            />
            )}
            </DesktopDetail>
        </DesktopTemplate>
        </BrowserView>
        <MobileOnlyView>
            <MobileTemplate>
                <MobileHead />
                <MobileDetail turnOn={turnOn} match={match} posts={posts} />
                <MobileFooter />
            </MobileTemplate>
        </MobileOnlyView>
        </>
    )
}

export default DetailBoard;