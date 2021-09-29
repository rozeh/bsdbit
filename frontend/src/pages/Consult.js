import React, { useState, useEffect } from 'react'
import HomeFooter from '../components/Footer/HomeFooter'
import AOS from 'aos';
import { useRecoilValueLoadable } from 'recoil';
import {Link} from 'react-router-dom';

import { boardList } from '../data/board/board'
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const BoardReadContents = () => {
  const board = useRecoilValueLoadable(boardList)

  return (
    <>
      {board.state === 'loading' ? (
        <p>로딩 중</p>
      ) : board.contents.seminar.length === 0 ? (
        <p>데이터가 없습니다.</p>
      ) : (
        <>
          {board.contents.seminar &&
            board.contents.seminar.map((e) => {
                return(
              <Link
                to={`/board/${e.boardId}`}
                data-aos="fade-up"
                key={e.boardId}
              >
                <div>
                  <img src={`images/${e.imageSrc}.png`} alt="강의" />
                  <p>신청가능</p>
                  <h3>{e.title}</h3>
                  <h5>
                    신청기간: <span id="#">{e.content}</span>
                  </h5>
                  <div className="hover">
                    <img src="images/ico_plus.svg" alt="" />
                  </div>
                </div>
              </Link>
                )
            })}
        </>
      )}
    </>
  )
}



const Consult = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  useEffect(() => {
    const fetchEdus = async () => {
      try {
        setLoading(true) //로딩상태 true
        const response = await axios.get("http://busanit.com:4000/api/v1/post/list");
        const posts = JSON.stringify(response.data.list)
        const postsArr = JSON.parse(posts)
        const EduPost = postsArr.filter(x=> {
          return x.category == 3
        })
        setPost(EduPost);
        
      } catch(error) {
        console.log(error)
      }
      
    }
    fetchEdus();
  }, [])
  console.log("포스트 확인: ", post)
  // const postsObj = JSON.stringify(posts)
  // const postsArr = JSON.parse(postsObj)

  // setPost(postsArr)
  

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts
  }
  return (
    <>
      <div>
        {/* titleBG */}
        <div className="titleBG">
          <div className="titleArea">
            <h5 data-aos="fade-up">
              WITH BUSAN.IT PROGRAM
              <br />
              <span>
                부산 아이티에서 신청가능한
                <br />
                다양한 프로그램
              </span>
            </h5>
            <img src="images/ai_education.png" />
          </div>
        </div>
        {/* applyArea */}
        <div className="applyArea">
          <h3>교육&nbsp;&amp;&nbsp;스터디 신청</h3>
          <select name="apply_select">
            <option value="정렬방식">정렬방식</option>
            <option value="전체">전체</option>
            <option value="진행중">진행중</option>
            <option value="종료">종료</option>
          </select>
          {/* applyArea > edu_box */}
          <div className="edu_box" id="#">
           <BoardReadContents />
          </div>
        </div>
        {/* paging */}
        {/* <Pagination postsPerPage={postsPerPage} totalPosts={post.length} paginate={setCurrentPage} />*/}
        <ReactPaginate
            pageCount = {Math.ceil(post.length / 9)}
            pageRangeDisplayed = {9}
            marginPagesDisplayed = {0}
            breakLabel={""}
            previousClassName={""}
            previousLabel={"이전"}
            nextLabel={"다음"}
            containerClassName={"paging"}
            activeClassName={"select"}
        />
      </div>
      <HomeFooter />
      {AOS.init}
    </>
  )
}

export default Consult
