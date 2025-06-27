import { useState } from "react";
import SettingToggle from "../../components/common/SettingToggle";
import * as Header from "../../components/layout/Header";
import "../../styles/member/member.css";

const Login = () =>{
    Header.setTitle("설정")

    const [tabValue, setTabValue] = useState('tab1')

    const tabChange = (event) => {
        console.log('### ITEM ::: ', event.target.id)
        setTabValue(event.target.id)
    }
    
    return (
        <div>
            <div className="setting-sidebar">
                <ul className="tab-menu" onClick={tabChange}>
                    <li id = "tab1">캘린더 설정</li>
                    <li id = "tab2">화면 설정</li>
                    <li id = "tab3">알림 설정</li>

                    <li><a href="/admin">공지 사항</a></li>
                    <li><a href="/admin">자주 묻는 질문</a></li>
                    <li><a href="/admin">문의하기</a></li>

                    <li>회원탈퇴</li>
                    <li>버전 정보</li>
                </ul>
            </div>

            <div className="setting-main">
                <div if = { tabValue === 'tab1' } id = "tab1">
                    <div>
                        <div>주 시작 요일</div>
                        <select>
                            <option>토요일</option>
                            <option>일요일</option>
                            <option>월요일</option>
                        </select>
                    </div>

                    <div>
                        <div>이번달, 다음달 같이 보기 (ON / OFF)</div>
                        <div className="wrapper">
                            <SettingToggle />
                        </div>
                    </div>

                    <div>
                        <div>달력에 일정 표시</div>
                        <select>
                            <option>간략히</option>
                            <option>자세히</option>
                        </select>
                    </div>

                    <div>
                        <div>음력 표시</div>
                        <div className="wrapper">
                            <SettingToggle />
                        </div>
                    </div>

                    <div>
                        <div>친구 일정 보기</div>
                        <div className="wrapper">
                            <SettingToggle />
                        </div>
                    </div>
                </div>

                <div if = { tabValue === "tab2" } id = "tab2">
                    <div>
                        <div>휴일 색상</div>
                        {/* 색상 설정 */}
                    </div>

                    <div>
                        <div>배경, 테마 색상</div>
                        {/* 색상 설정 */}
                    </div>

                    <div>
                        <div>글자 크기</div>
                        {/* 색상 설정 */}
                    </div>
                </div>

                <div if = { tabValue === "tab3" } id = "tab3">
                    <div>
                        <div>나의 일정 알림 (ON / OFF)</div>
                        <div className="wrapper">
                            <SettingToggle />
                        </div>
                    </div>

                    <div>
                        <div>친구 생일 알림 (ON / OFF)</div>
                        <div className="wrapper">
                            <SettingToggle />
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div>
                <div>프로필</div>
                <div>
                    <img src=""></img>
                    <div>누룽지</div>
                </div>
            </div>
        </div>
    );
}

export default Login;