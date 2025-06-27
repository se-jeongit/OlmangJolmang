import "../../styles/admin.css";
import React, { useState, useEffect, useRef } from "react";
import {TextField,Box, FormControl, InputLabel, NativeSelect} from '@mui/material';

const Tabs = ({ selectedIndex, onSelectHandler, menus }) => {
  const [tabLayouts, setTabLayouts] = useState([]);
  const tabRefs = useRef([]);
  const indicatorRef = useRef(null);
  const containerRef = useRef(null);

  // 탭 위치
  useEffect(() => {
    const run = () => {
      const container = containerRef.current;
      const indicator = indicatorRef.current;
      const tab = tabRefs.current[selectedIndex];

      if (container && indicator && tab) {
        const containerRect = container.getBoundingClientRect();
        const tabRect = tab.getBoundingClientRect();

        const x = tabRect.left - containerRect.left;
        const width = tab.offsetWidth;

        indicator.style.transform = `translateX(${x}px)`;
        indicator.style.width = `${width}px`;

        // console.log("x:", x, "width:", width);
      }
    };

    requestAnimationFrame(run);
  }, [selectedIndex]);

  // 애니메이션
  useEffect(() => {
    const indicator = indicatorRef.current;
    const current = tabLayouts[selectedIndex];

    
    if (indicator && current) {
      indicator.style.transform = `translateX(${current.x}px)`;
      indicator.style.width = `${current.width}px`;
    }
  }, [selectedIndex, tabLayouts]);

  return (
    <div className="tabs-scroll">
      <div className="tabs-container" ref={containerRef}>
        <div className="tabs-indicator" ref={indicatorRef} />
        {menus.map((menu, index) => (
          <div
            key={menu}
            className={`tab-item ${selectedIndex === index ? "active" : ""}`}
            onClick={() => onSelectHandler(index)}
            ref={(el) => (tabRefs.current[index] = el)}
          >
            {menu}
          </div>
        ))}
      </div>
    </div>
  );
};

// 메인
function Admin() {
  const [index, setIndex] = useState(0);
  const menus = ["공지사항", "자주하는 질문", "문의사항"];

  return (
    <div>
      <div className="admin-main">
        <h1>고객센터</h1>
      </div>

      <div className="admin">
        <Tabs menus={menus} selectedIndex={index} onSelectHandler={setIndex} />
        <div style={{ padding: "20px" }}>
          {/* 공지사항 */}
          {index === 0 && 
            <div> 
              <div> 공지사항
                {/* 공지사항 검색 타입 */}
                <div> </div>
                {/* 공지사항 검색  */}
                <div> </div>
              </div>
            </div>
          }
          {/* 자주하는 질문 */}
          {index === 1 && <div> 자주하는</div>}
          {/* 문의사항 */}
          {index === 2 && <div> 문의사항</div>}
        </div>
      </div>
    </div>
  );
}

export default Admin;