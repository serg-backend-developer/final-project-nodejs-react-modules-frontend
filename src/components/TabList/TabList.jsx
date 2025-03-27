import { useState } from "react";
import clsx from "clsx";
import style from "./TabList.module.css";

const TabList = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const createTabStyle = (tab) => {
    return clsx(style.tab, tab === activeTab && style.tabActive);
  };
  return (
    <div className={style.tabsContainer}>
      <div className={style.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={createTabStyle(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabList;
