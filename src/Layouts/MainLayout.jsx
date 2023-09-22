import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <div className="min-h-screen">
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default MainLayout;