import { ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Layout() : ReactElement {
    return (
        <>
            <Navbar />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
}

export default Layout;