import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Shop from '../Pages/Shop/Shop';
import Dashboard from '../Pages/Dashboard/Dashboard';
import DashboardLayout from '../Layouts/DashboardLayout';
import Profile from '../Pages/Profile/Profile';
import EditProfile from '../Pages/EditProfile/EditProfile';
import EditAddress from '../Pages/EditAddress/EditAddress';
// import Error from '../Components/Error';
import Posts from '../Pages/Posts/Posts';
import SingleFood from '../Pages/SingleFood/SingleFood';

const MyRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />,
                loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
            },
            {
                path: "/shop/:foodId",
                element: <SingleFood />,
                loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`)
            },
            {
                path: "/posts",
                element: <Posts />
            },
            {
                path: "/dashboard",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "/dashboard/profile",
                        element: <Profile />
                    },
                    {
                        path: "/dashboard/edit_profile",
                        element: <EditProfile />
                    },
                    {
                        path: "/dashboard/edit_address",
                        element: <EditAddress />
                    }
                ]
            }
        ]
    }
])

export default MyRoute;