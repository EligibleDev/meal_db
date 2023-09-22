import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const food = useLoaderData();
    const meal = food.meals[0]
    console.log(meal)
    return (
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <img className="w-1/2 rounded-xl" src={meal.strMealThumb} alt="" />
            <div>
                <h1 className="text-5xl">{meal.strMeal}</h1>
            </div>
        </div>
    );
};

export default SingleFood;