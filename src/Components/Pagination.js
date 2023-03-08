import React, { useState} from 'react';

export default function Pagination({ goToNextPage, goToPrevPage }) {
    
  return (
    
    <div style={{width: '10rem', backgroundColor: 'dodgerblue', alignSelf: 'center'}}>
        <button onClick={goToPrevPage}>Prev</button>
        <button onClick={goToNextPage}>Next</button>
    </div>
  )
}

// function goToNextPage() {
//     setCurrentPage(nextPageUrl)
// }

// function goToPrevPage(){
//     setCurrentPage(prevPageUrl)
// }

{/* <Pagination goToNextPage={goToNextPage}
goToPrevPage={goToNextPage}/> */}