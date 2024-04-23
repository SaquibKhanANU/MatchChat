import "./Layout.css";
import { ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function Layout(): ReactElement {
    return (
        <div className="layout-container">
            <div className="navbar-position-fixed">
                <Navbar />
            </div>
            <div className="layout-body">
                {/* <Sidebar /> */}
                <div className="sidebar-position-fixed">
                    <Sidebar />
                </div>
                <main className="content">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </div>
    );
}

export default Layout;
