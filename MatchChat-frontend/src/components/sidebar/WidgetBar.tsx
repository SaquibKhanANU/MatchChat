import "./WidgetBar.css";
import React from "react";

interface WidgetBarProps {
  children: React.ReactNode;
}

function WidgetBar({ children }: WidgetBarProps): JSX.Element {
  return (
    <div className="widget-bar-container">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="widget-child">
          {child}
        </div>
      ))}
    </div>
  );
}

export default WidgetBar;
