import "./Layout.css";
import { ReactElement, Suspense, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import WidgetBar from "../../components/sidebar/WidgetBar";
import MatchScheduleWidget from "../../components/widgets/MatchScheduleWidget";
import MatchInfoWidget from "../../components/widgets/MatchInfoWidget";
import { useLocation, useMatch } from "react-router-dom";
import { PathConstants } from "../../routes/paths";

function Layout(): ReactElement {
  const location = useLocation();
  const match = useMatch(PathConstants.MATCH);

  const [widgetComponent, setWidgetComponent] = useState<React.ReactNode>(null);
  console.log(location.pathname, PathConstants.MATCH);

  useEffect(() => {
    // Determine which widget to render based on the current location
    if (location.pathname === PathConstants.HOME) {
      setWidgetComponent(
        <WidgetBar>
          <MatchScheduleWidget />
        </WidgetBar>
      );
    } else if (match) {
      setWidgetComponent(
        <WidgetBar>
          <MatchInfoWidget />
          <div>test</div>
        </WidgetBar>
      );
    } else {
      // Handle other routes
      setWidgetComponent(null);
    }
  }, [location.pathname]);

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
            {widgetComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
