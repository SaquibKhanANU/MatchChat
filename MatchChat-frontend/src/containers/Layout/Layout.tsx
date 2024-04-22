import { ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() : ReactElement {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    );
}
