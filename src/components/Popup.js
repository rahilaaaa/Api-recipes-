+import React from 'react'


function Popup({closePopupHandler,currentDish, AllDishes}) {
  let dishDetails = AllDishes.filter((menuitem)=>{
    return menuitem.strMeal == currentDish
  }).map((item)=>{
    return(
      <div className='popup-content-data'>
        <div className='popup-header'>
        <img src={item.strMealThumb} alt="" />

        </div>
          <h2>{item.strMeal}</h2>
          

      </div>
    )
  })
    
  return (
    <div className='popup' >
            <div className='popup-content'>
                {dishDetails}
                <button>order now</button>
                <h5 className='popup-close' onClick={closePopupHandler}>close </h5>

            </div>
    </div>
  )
}

export default Popup