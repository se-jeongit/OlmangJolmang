import "../../styles/admin.css";
import React, { useState, useEffect, useRef } from "react";

const Tabs = ({ menus, selectedIndex, onSelectHandler }) => {
  const indicatorRef = useRef(null);
  const tabRefs = useRef([]);

  useEffect(() => {
    const activeTab = tabRefs.current[selectedIndex];
    if (activeTab && indicatorRef.current) {
      indicatorRef.current.style.width = `${activeTab.offsetWidth}px`;
      indicatorRef.current.style.left = `${activeTab.offsetLeft}px`;
    }
  }, [selectedIndex, menus]);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {menus.map((label, i) => (
          <button
            key={label}
            ref={(el) => (tabRefs.current[i] = el)}
            className={`tab-button ${selectedIndex === i ? 'active' : ''}`}
            onClick={() => onSelectHandler(i)}
          >
            {label}
          </button>
        ))}
        <div className="tab-indicator" ref={indicatorRef}></div>
      </div>
    </div>
  );
};

function Admin() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <div className="admin-main">
        <h1>고객센터</h1>
      </div>

      <Tabs
        menus={['공지사항', '문의사항', '자주하는 질문']}
        selectedIndex={selectedTab}
        onSelectHandler={setSelectedTab}
      />

      <div className="tab-content">
        {selectedTab === 0 && <div style={{ backgroundColor: 'red' }}>공지사항 목록</div>}
        {selectedTab === 1 && <div style={{ backgroundColor: 'yellow' }}>문의 사항 목록</div>}
        {selectedTab === 2 && <div style={{ backgroundColor: 'blue', color: 'white' }}>자주하는 질문 목록</div>}
      </div>
    </div>
  );
}
export default Admin;