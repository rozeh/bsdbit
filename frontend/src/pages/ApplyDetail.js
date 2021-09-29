import React, { useEffect, useState } from 'react'
import WriteFooter from '../components/Footer/WriteFooter'
import './ApplyDetail.css'
import { list } from '../data/board/board'
import Dialog from '../components/Dialog/Dialog'
import { ThemeProvider } from 'styled-components'

const ApplyDetail = (props) => {
  const [post, setPost] = useState([])
  const [dialog, setDialog] = useState(false)
  useEffect(() => {
    list().then((res) => {
      return setPost(res.data.list)
    })
  }, [])
  const data = JSON.stringify(post)
  const jso = JSON.parse(data)
  const a = jso.filter((x) => {
    return x.boardId == props.match.params.boardId
  })

  const handleClick = (e) => {
    e.preventDefault()
    setDialog(true)
  }

  const onConfirm = () => {
    setDialog(false)
  }

  const onCancel = () => {
    setDialog(false)
  }

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#5775D9',
          gray: '#767676',
          pink: '#d94a2b',
        },
      }}
    >
      {/* program */}
      <div className="program">
        <h5>WITH BUSAN.IT PROGRAM</h5>
        <h3>프로그램 신청</h3>
        {/* program_detail */}
        {a.map((a) => {
          return (
            <>
              <div className="program_detail" key={a.boardId}>
                <h3 id="#">{a.title}</h3>
                <a href="#" id="btn_apply" onClick={handleClick}>
                  신청하기
                </a>
                <div className="line" />
                <div>
                  <p className="day" id="#">
                    신청기간 : <span id="#">2021.03.01 ~ 2021.03.30</span>
                  </p>
                  <p className="place" id="#">
                    장소 :
                    <span id="#">
                      부산시 남구 수영로 312 (대연동, 21 센츄리시티 오피스텔)8층
                      부산아이티
                    </span>
                  </p>
                  <div className="mark">상세보기</div>
                  {/* program_상세내용 포스터 */}
                  <div className="poster" id="#">
                    <img
                      src={`../../images/${a.imageSrc}.png`}
                      className="contentImg"
                    />
                  </div>
                </div>
              </div>

              <div className="apbottom"></div>
            </>
          )
        })}
      </div>
      <WriteFooter />
    </ThemeProvider>
  )
}

export default ApplyDetail
