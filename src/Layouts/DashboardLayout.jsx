import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full flex flex-col gap-4 text-base-content">
                        <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
                        <li><NavLink to="/dashboard/edit_profile">Edit Profile</NavLink></li>
                        <li><NavLink to="/dashboard/edit_address">Edit Address</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashboardLayout;