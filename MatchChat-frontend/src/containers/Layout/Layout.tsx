import "./Layout.css";
import { ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import WidgetBar from "../../components/sidebar/WidgetBar";

function Layout(): ReactElement {
  return (
    <div className="layout-container">
      <div className="navbar-position-fixed">
        <Navbar />
      </div>
      <div className="layout-body">
        <div>
          <div className="sidebar-position-fixed sidebar-position-left">
            <Sidebar />
          </div>
        </div>
        <main className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <div>
          <div className="sidebar-position-fixed sidebar-position-right">
            <WidgetBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
