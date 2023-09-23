import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
    const navigation = useNavigation();
    console.log(navigation.state)

    return (
        <>
            <Header />
            <div className="min-h-screen">
                {/* {navigation.state === "loading"
                    ? <span className="loading loading-dots w-20 mx-auto h-96 flex items-center"></span>
                    : <Outlet/>
                } */}
                <Outlet/>
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;