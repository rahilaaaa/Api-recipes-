import { useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";

function SpecialDishes(props) {

  let [showPopUp , setShowPopup] = useState(false)
  let [currentDish,setCurrectDish] = useState('')

  function showPopupHandler(dishName){
    //console.log(dishName);
    setShowPopup(true)
    setCurrectDish(dishName)
}

function closePopupHandler(){
  setShowPopup(false)
}

  let maxspecialDishes = 8;

  let specialMenus = props.specialmenu.map((menuItem, index) => {
    if (index < maxspecialDishes) {
      return <CardDish menuItem={menuItem} showPopupHandler={showPopupHandler} />
    }
  });

  return (
    <section className="special-dishes">
          {showPopUp &&  <Popup
           currentDish={currentDish} 
           closePopupHandler={closePopupHandler}
           AllDishes = {props.specialmenu}></Popup> }

      <div className="container">
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="special-dishes-menu">
          <ul>{specialMenus}</ul>
        </div>
      </div>
    </section>
  );
}
export default SpecialDishes;
