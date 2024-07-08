// src/components/Pagination.js
import React from 'react'

const Pagination = ({currentpage, totalPage, onPageChange}) => {
    const handlePrevious = () => {
        if(currentpage > 1){
            onPageChange(currentpage - 1);
        }
    }
   const handleNext = () => {
    if(currentpage < totalPage){
   onPageChange(currentpage + 1);
    }
   }
  return (
    <div>
      <button onClick={handlePrevious} disabled={currentpage === 1}>Previous</button>
      <span>
        page {currentpage} of {totalPage}
      </span>
     <button onClick={handleNext} disabled={currentpage === totalPage}>Next</button>

    </div>
  )
}

export default Pagination


