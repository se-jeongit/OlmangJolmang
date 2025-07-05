import "../../styles/admin.css";
import React, { useState, useEffect, useRef } from "react";
import {TextField,Box, FormControl, InputLabel, NativeSelect, IconButton} from '@mui/material';
import {SearchIcon} from '@mui/icons-material'

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
      {/* 고객센터 검색 */}
      <div>

        {/* <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
               Age
            </InputLabel>
          <NativeSelect defaultValue={30} inputProps={{ name: 'age', id: 'uncontrolled-native',}}>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
          </NativeSelect>
      </FormControl>
      </Box>

        <Box component="form" sx={{'& .MuiTextField-root': { m: 5, width: '300px' },}} noValidate autoComplete="off">
          <div>
            <TextField id="search" label="" type="search" variant="standard"/>
          </div>
        </Box>   */}

        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
          <NativeSelect defaultValue={"none"} inputProps={{ name: 'category', id: 'uncontrolled-native',}}>
              <option value={"none"}>통합검색</option>
              <option value={"title"}>제목</option>
              <option value={"publisher"}>출판사</option>
              <option value={"chapter"}>단원</option>
          </NativeSelect>
      	</FormControl>
          <TextField id="standard-search" type="search" variant="standard" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
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