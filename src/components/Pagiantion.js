import React from "react";

function Pagiantion(props) {
  let numOfPages = [];
  for (let i = 1; i <= Math.ceil( props.filteredDishes.length/props.itemsPerPage); i++) {
    numOfPages.push(i);
  }
    function showNextPageDishesHandler(event){
        let currentPage =event.target.id
        props.setCurrentPage(currentPage)
    }

    let pages = numOfPages.map((pageNumber)=>{
        return(
            <li id={pageNumber} onClick={showNextPageDishesHandler}>{pageNumber}</li>
        )
    })
  return (
    <section>
      <ul className="pagination flex">
        {pages}
        </ul>
    </section>
  );
}

export default Pagiantion;
