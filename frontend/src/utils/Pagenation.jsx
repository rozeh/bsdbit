import React from 'react';
import styled from 'styled-components';

const Pagenation = ({ postsPerPage, totalPosts, pagenate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <PagenationBlock>
            <div className="paging">
            {pageNumbers.map(number => (
                <a onClick={() => pagenate(number)} >
                    {number}
                </a>
            ))}
            </div>
        </PagenationBlock>
    )
}

const PagenationBlock = styled.div`
    /* paging */
  .paging {
    text-align: center;
    margin-bottom: 50px;
  }

  .paging a {
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid #bbb;
    color: #787878;
    background-color: #fff;
  }
  .paging a:hover{
    color: #fff;
    background-color: #5775d9;
    border: 1px solid #5775d9;
  }

  .paging a.select {
    color: #fff;
    background-color: #5775d9;
    border: 1px solid #5775d9;
  }
`;

export default Pagenation;