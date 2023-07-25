import React from 'react'

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    };
    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    < button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'active' : ''
                    }>
                        {page}
                    </button>
                )
            })}
            <button className='next' onClick={() => { setCurrentPage(currentPage < pages.length ? currentPage + 1 : currentPage) }}>
                <i className='fa-solid fa-chevron-right'></i>
            </button>
        </div >
    )
}

export default Pagination