import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const food = useLoaderData();
    const meal = food.meals[0];
    console.log(meal);
    return (
        <>
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                <img className="w-1/2 rounded-xl" src={meal.strMealThumb} alt="" />
                <div>
                    <h1 className="font-bold text-5xl">{meal.strMeal}</h1>
                    <div className="flex justify-start gap-8">
                        <p>{meal.strCategory}</p>
                        <p>{meal.strTags}</p>
                        <p>{meal.strArea}</p>
                    </div>
                    <a href={meal.strYoutube} className="btn">Watch Video</a>
                </div>
            </div>
            <p className="max-w-screen-xl mx-auto">{meal.strInstructions}</p>
        </>
    );
};

export default SingleFood;