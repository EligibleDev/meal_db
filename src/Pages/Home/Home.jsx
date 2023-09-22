import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="h-96 flex flex-col gap-8 items-center justify-center">
                <h1 className="text-5xl font-extrabold">Welcome to THE MEAL DB</h1>
                <div className="flex gap-4">
                    <NavLink className="btn" to="/posts">Posts</NavLink>
                    <NavLink className="btn" to="/shop">Shop</NavLink>
                </div>
            </div>
        </>
    );
};

export default Home;