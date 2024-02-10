import React, { useState } from "react";

function Tabs({ children, className }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(children)
    .filter((child) => child.type === Tab)
    .map((tab, index) => ({
      ...tab.props,
      index,
    }));

  const tabPanels = React.Children.toArray(children)
    .filter((child) => child.type === TabPanel)
    .map((panel, index) => ({
      ...panel.props,
      index,
    }));

  return (
    <div className={`tab-component ${className}`}>
      <div className={`tab-list ${className}`}>
        {tabs.map((tab) => (
          <div
            key={tab.index}
            className={`tab ${tab.index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(tab.index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={`tab-contant ${className}`}>
        {tabPanels.map((panel) =>
          panel.index === activeTab ? (
            <div
              key={panel.index}
              className={`tab-panel ${
                panel.index === activeTab ? "active" : ""
              }`}
            >
              {panel.children}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

function Tab({ label }) {
  return <div className="tab-buttons">{label}</div>;
}

function TabPanel({ children, className }) {
  return <div className={`tab-panel ${className}`}>{children}</div>;
}

export { Tabs, Tab, TabPanel };
