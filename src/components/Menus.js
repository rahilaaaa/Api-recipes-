import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import FilteredDishes from './filteredDishes';

function Menus() {
    const [menu, setMenu] = useState([]);
    const [menuCategory, setMenuCategory] = useState([]);
    const[singleDish, setSingleDish] = useState([])
    const [loading, setLoading] = useState(false);

    async function getAllMenus() {
        setLoading(true)
        let API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
        let response = await fetch(API_URL);
        let data = await response.json();
        setMenu(data.meals)
        setLoading(false)   
    }

    async function getAllCategories() {
        let API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let response = await fetch(API_URL);
        let categoryData = await response.json();
        setMenuCategory(categoryData.categories)
    }
    async function getOnlyOneDish() {
        let API_URL = "www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
        let response = await fetch(API_URL);
        let singleDishData = await response.json();
        setSingleDish(singleDishData.meals)
            
        
    }

    useEffect(() => {
        getAllMenus();
        getAllCategories();
        getOnlyOneDish();
    }, []);

    return (
        <div>
            <Hero />
            {loading ? <p>Loading...</p> :
                <>
                    <SpecialDishes specialmenu={menu} />
                    
                    <FilteredDishes 
                    allMenuCategory={menuCategory}
                     Allmenus={menu}
                     singleDish={singleDish}
                     setSingleDish={setSingleDish}/>
                    
                    
                </>
            }
        </div>
    );
}

export default Menus;

