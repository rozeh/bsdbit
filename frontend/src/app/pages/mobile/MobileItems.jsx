import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MobileHomeEducation = ({ posts }) => {
  const edu = posts.filter((x) => {
    return x.category == 1
  })

  return (
    <>
    {edu.map(post => (
      <a href={`/board/${post.boardId}`} data-aos="fade-up">
        <div key={post.boardId}>
          <img src={`/images/${post.imageSrc}.png`} />
          <p>신청가능</p>
          <h3>{post.title}</h3>
          <h5>신청기간: <span id="#">2021.03.01 ~ 2021.03.30</span></h5>
        </div>
      </a>
    ))}
    </>
  )
}


const MobileHomeSeminar = ({ posts }) => {
  const sem = posts.filter((x) => {
    return x.category == 2
  })

  return(
    <>
      {sem.map(post => (
        <div className="seminar_con" key={post.boardId}>
          <div id="#" className="seminar_img">
            <img src={`/images/${post.imageSrc}.png`} />
          </div>
          <h3 id="#">{post.title}</h3>
            <p id="#">
              신청기간 : <span id="#">2021.03.01 ~ 2021.03.30</span>
            </p>
        </div>
      ))}
    </>
  )
}

const MobileHomeNotice = ({ posts }) => {
  const not = posts.filter((x) => {
    return x.category == 3
  })

  return <>
    {not.map(post => (
      <div className="notice_con" key={post.boardId}>
        <h3 id="#">{post.title}</h3>
        <p id="#">2021.02.08</p>
      </div>
    ))}
  </>
}

export { MobileHomeEducation, MobileHomeSeminar, MobileHomeNotice }
