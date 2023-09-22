import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";

const Shop = () => {

    const restaurant = useLoaderData();

    const [foods, setFoods] = useState([]);

    const loadFood = (category) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals))

    }

    useEffect(() => {
        loadFood(restaurant.categories[0])
    }, [])

    // loadFood(restaurant)

    return (
        <>
            <ul className="menu menu-md flex flex-row justify-center item-center w-1/2 mx-auto">
                {restaurant.categories.map(category =>
                    <li onClick={() => loadFood(category)} key={category.idCategory}>
                        <Link>{category.strCategory}</Link>
                    </li>)}
            </ul>

            {foods.length === 0
                ? <h1 className="text-5xl flex justify-center items-center h-96 font-bold">There is nothing here</h1>
                : <div className="grid grid-cols-4 gap-6 max-w-screen-xl mx-auto my-8">
                        {foods.map(food => < FoodCard key={food.idMeal} food={food} />)}
                </div>
            }
        </>
    );
};

export default Shop;

