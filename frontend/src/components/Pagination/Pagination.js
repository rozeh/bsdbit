import React, { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    const [className, setClassName] = useState("");


    return (
        <div className="paging">
            {pageNumbers.map (num => (
                <a href="*"  className={className} onClick={() => paginate(num)} 
                onMouseOver={() => {
                    if (!className.includes("select")) {
                        setClassName(current => current+" select")
                    }
                }}

                onMouseOut={() => {
                    if(className.includes("select")){
                        setClassName("");
                    }
                } }
                >
                    {num}
                </a>
            ))}
      </div>
    )
}

export default Pagination;