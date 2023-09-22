/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const FoodCard = ({ food }) => {

    return (
        <>
            {/* <li>{food.strMeal}</li> */}
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={food.strMealThumb} alt="Shoes" /></figure>
                <div className="card-body justify-between gap-4 p-6">
                    <h2 className="card-title">{food.strMeal}</h2>
                    <Link to={`/shop/${food.idMeal}`} className=" btn">Details</Link>
                </div>
            </div>
        </>
    );
};

export default FoodCard;