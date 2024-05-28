import React,{useState} from "react"
import CardDish from "./CardDish" 
import Pagiantion from "./Pagiantion"

function filteredDishes(props) {
    let [allMenus,setAllMenus] = useState(props.Allmenus)
    let [filteredDishes,setFilteredDishes] = useState([])
    let [activeDish,setActiveDish] = useState("Chicken")
    let [currentPage,setCurrentPage] = useState(1)
    let [itemsPerPage,setItemsPerPage] = useState(4)

    let indexOflastDish = currentPage * itemsPerPage
    let indexOFFirstDish = indexOflastDish - itemsPerPage
    let showTheseDishesNow = filteredDishes.slice(indexOFFirstDish,indexOflastDish);
    let maxItem = 4
    let singleDishItem = props.singleDish.map((item,index)=>{
        if(index < maxItem){
            return(
                <li>
                    <img src={item.strMealThumb} className="br-10" alt="" />
                    <h5>{item.strMeal}</h5>
                </li>
            )
        }
    })
    function showFilteredDishesHandler(category){
        props.setSingleDish([])
        setActiveDish(category)
        let filteredDishesAre = allMenus.filter((item)=>{
            return item.strCategory === category }).map((menuItem)=>{
                return(
                    <CardDish menuItem={menuItem} />
                )
            })
            setFilteredDishes(filteredDishesAre)
    }
    let allCategories = props.allMenuCategory.map((item)=>{
            return(
                <li onClick={showFilteredDishesHandler}>{item.strCategory}</li>
            )
    })

 return  <div className="filtred-dishes">
            <div className="container">
             <div className="text-center">
                    <h2>Choose your dishes</h2>
                    <p>he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from</p>
             </div>
             <div className="filterd-dishes">
                <ul>
                    {allCategories}
                </ul>
             </div>

             <div className="filtered-dishes-results">
                <ul className="flex flex-wrap gap-30">
                    {singleDishItem}
                    {singleDishItem !=0 || filteredDishes.length !=0 ? showTheseDishesNow:
                        <div className="alert">
                            <h2>Sorry,no item found</h2>
                            <h4>Please try another dishes</h4>
                        </div>    
                    }    
                </ul>

             </div>
             <Pagiantion 
                filteredDishes={filteredDishes}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>
            </div>
        </div>
}
export default filteredDishes

 



