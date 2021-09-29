import React from 'react'
import { Link } from 'react-router-dom'

import { useRecoilValueLoadable } from 'recoil'

import { boardList } from '../../../data/board/board'

const EduList = ({id, imageSrc, title, category, state, content, ...props}) => {
  return(
    <Link
      to={`/board/${id}`}
      data-aos="fade-up"
    >
      <div>
        <img src={`images/${imageSrc}.png`} alt="강의" />
        <p>{state}</p>
        <h3>{title}</h3>
        <h5>
          신청기간: <span id="#">{content}</span>
        </h5>
        <div className="hover">
          <img src="images/ico_plus.svg" alt="" />
        </div>
      </div>
    </Link>
  )
}
const BoardReadContents = () => {
  const board = useRecoilValueLoadable(boardList)
  return (
    <>
      {board.state === 'loading' ? (
        <p>로딩 중</p>
      ) : board.contents.edu.length === 0 ? (
        <p>데이터가 없습니다.</p>
      ) : (
        <>
          {board.contents.edu &&
            board.contents.edu.map((e) => (
              <EduList 
                id={e.boardId} 
                imageSrc={e.imageSrc}
                state={e.state}
                title={e.title}
                content={e.content}
              />
            ))}
        </>
      )}
    </>
  )
}

const SeminarReadContents = () => {
  const board = useRecoilValueLoadable(boardList)

  return (
    <>
      {board.state === 'loading' ? (
        <p>로딩 중</p>
      ) : board.contents.seminar.length === 0 ? (
        <p>데이터가 없습니다.</p>
      ) : (
        <>
          {board.contents &&
            board.contents.seminar.map((s) => (
                <div className="seminar_con" key={s.boardId}>
                <div id="#" className="seminar_img">
                    <img src={`images/${s.imageSrc}.png`} alt=""/>
                </div>
                <h3 id="#">{s.title}</h3>
                <p id="#">신청기간 : <span id="#">{s.content}</span></p>
              </div>
            ))}
        </>
      )}
    </>
  )
}

const NoticReadContents = () => {
    const board = useRecoilValueLoadable(boardList);

    return (
        <>
            {
             board.state === 'loading'
             ? <p>로딩 중...</p>
             : board.contents.notice.length === '0'
                 ? <p>notice 컨텐츠가 없습니다.</p>
                 : 
                 <>
                     {
                         board.contents.notice && board.contents.notice.map( n => (
                             <div className="notice_con" key={n.boardId}>
                                 <h3 id="#">{n.title}</h3>
                                 <p id="#">{n.content}</p>
                             </div>    
                         ))
                     }
                 </>   
            }
        </>
    )
}

const Education = () => {
  return (
    <div className="education">
      <div className="edu_title">
        <h5>Find your education</h5>
        <h3>
          부산아이티의
          <br />
          <span>현재 진행중인 교육은 ?</span>
        </h3>
      </div>
      {/* education > edu_box */}
      <div className="edu_box" id="#">
        <BoardReadContents />
      </div>
      {/* education > btn_more */}
      <a href="/education" className="btn_more" id="#">
        <img src="images/btn_more.svg" alt="" />
      </a>
      {/* info */}
      <div className="info">
        <div className="info_title">
          <h5>Busan IT notice</h5>
          <h3>
            부산아이티의
            <br />
            <span>소식을 알려드립니다</span>
          </h3>
        </div>
      </div>
      {/* seminar */}
      <div className="seminar">
        <div className="banner_title">
          <div className="line" />
          <h3>Seminar</h3>
          {/* seminar > banner_btns */}
          <div className="banner_btns">
            <div className="btn_banner left">
              <i className="fas fa-angle-left" />
            </div>
            <div className="btn_banner right">
              <i className="fas fa-angle-right" />
            </div>
          </div>
        </div>
        {/* seminar > banner */}
        <div className="seminar_banner">
          <div className="seminar_group" data-aos="fade-up">
            <SeminarReadContents />
          </div>
        </div>
      </div>
      {/* notice */}
      <div className="notice">
        <div className="banner_title">
          <div className="line" />
          <h3>Notice</h3>
          {/* notice > banner_btns */}
          <div className="notice_btns">
            <div className="btn_notice left">
              <i className="fas fa-angle-left" />
            </div>
            <div className="btn_notice right">
              <i className="fas fa-angle-right" />
            </div>
          </div>
        </div>
        {/* notice > banner */}
        <div className="notice_banner">
          <div className="notice_group" data-aos="fade-up">
            <NoticReadContents />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
