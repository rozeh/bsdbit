import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Education = ({posts}) => {
    const edu = posts.filter( x => {
        return x.category == 1
    })
  return (
    <>
    {edu.map(post=> (
        <a href={`/board/${post.boardId}`} data-aos="fade-up">
            <div>
              <img src={`/images/${post.imageSrc}.png`} />
              <p>신청가능</p>
              <h3>{post.title}</h3>
              <h5>
                신청기간: <span id="#">2021.03.01 ~ 2021.03.30</span>
              </h5>
              <div className="hover">
                <img src="/images/ico_plus.svg" />
              </div>
            </div>
        </a>
    ))}
    </>
  )
}

const Seminar = ({posts}) => {
    const sem = posts.filter( x => {
        return x.category == 2
    })
  // if(loading) {
  //     return <h2>Loading...</h2>
  // }
  return (
    <>
    { sem.map(post =>(
        <div className="seminar_con">
            <div id="#" className="seminar_img">
                <img src={`/images/${post.imageSrc}.png`} />
            </div>
            <h3 id="#">{post.title}</h3>
            <p id="#">신청기간 : <span id="#">2021.03.01 ~ 2021.03.30</span></p>
        </div>
    ))}
    </>
  )
}

const Notice = ({posts}) => {
  const not = posts.filter( x => {
      return x.category == 3
  })
  return (
    <>
    {not.map( post => (
        <div className="notice_con">
            <h3 id="#">{post.title}</h3>
            <p id="#">2021.02.08</p>
        </div>
    ))}

    </>
  )
}

const DesktopItemBlock = styled.div``

export { Education, Seminar, Notice }
