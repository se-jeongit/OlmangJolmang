import "../../styles/schedule.css";
import React, { useState } from "react";
import {CirclePicker} from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useDaumPostcodePopup } from 'react-daum-postcode';

function ScheduleWrite() {
    const [color, setColor] = useState("#f44336");

    const handleChange = (selectedColor) => {
        setColor(selectedColor.hex);
    };

    const open = useDaumPostcodePopup();
    
    const [zonecode, setZonecode] = useState('');
    const [roadAddress, setLoadAddress] = useState('');
    
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
    
        if (data.addressType === 'R') {
        if (data.bname !== '') {
            extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    
        setZonecode(data.zonecode);  // 우편번호
        setLoadAddress(fullAddress); // 도로명 주소
        }
    };
      
    const handleClick = () => {
        open(
        { onComplete: handleComplete },
        );
    };

    return(
        <div className="container">

            <div className="title">
                <h3> 일정 등록 </h3>
            </div>

            <div className="body-main">
                <form name="scheduleForm" method="post">
                    <table className="write-form">
                        <tr>
                            <td>일정 제목</td>
                            <td>
                                <input
                                    type="text"
                                    name="subject"
                                    maxLength="100"
                                    id="form-subject"
                                    className="form-control"
                                    placeholder="일정 제목을 입력하세요."
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>일정 분류</td>
                            <td>
                                <select name="categoryNum" id="form-categoryNum" className="form-select" defaultValue="my">
                                    <option value="my">나의 일정</option>
                                    <option value="friend">친구 일정</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>색 상</td>
                            <td>
                                <CirclePicker
                                    color={color}
                                    onChangeComplete={handleChange}
                                    colors={[
                                        "#FFD1DC", "#A8E6CF", "#CBAACB", "#FFF9B0",
                                        "#B2EBF2", "#FF8C94", "#FFB347", "#D1C4E9"
                                    ]}
                                />
                                {/* <p>선택한 컬러 : <strong style={{ color }}>{color}</strong></p> */}
                            </td>
                        </tr>

                        <tr>
                            <td>일정 일자</td>
                            <td>
                                <div className="form-date">
                                    <input
                                        type="date"
                                        name="startDate"
                                        id="form-startDate"
                                        className="form-control"
                                    />
                                    <input
                                        type="time"
                                        name="startTime"
                                        id="form-startTime"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-date"><FontAwesomeIcon icon={faChevronDown}/></div>
                                <div className="form-date">
                                    <input
                                        type="date"
                                        name="endDate"
                                        id="form-endDate"
                                        className="form-control"
                                    />
                                    <input
                                        type="time"
                                        name="endTime"
                                        id="form-endTime"
                                        className="form-control"
                                    />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>종일일정</td>
                            <td>
                                <input
                                    type="checkbox"
                                    name="all_day"
                                    id="form-all_day"
                                    className="form-check-input"
                                    value="1"
                                />
                                <label className="form-check-label" htmlFor="form-all_day"> 하루 종일</label>
                                {/* 음력설정 */}
                            </td>
                        </tr>

                        <tr>
                            <td>일정반복</td>
                            <td>
                                <select name="repeat" id="form-repeat" className="form-select" defaultValue="0">
                                    <option value="0">반복 안 함</option>
                                    <option value="">매일</option>
                                    <option value="">매주</option>
                                    <option value="">매월</option>
                                    <option value="">매년</option>
                                    <option value="">사용자 설정</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>알림</td>
                            <td>
                                <button>알림추가</button>
                            </td>
                        </tr>

                        <tr>
                            <td>함께할 친구</td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>일정 장소</td>
                            <td>                    
                                <input
                                    type="text"
                                    name="place"
                                    maxLength="100"
                                    id="form-place"
                                    className="form-control"
                                    placeholder="일정 장소를 입력하세요."
                                />

                                <div>
                                    <label htmlFor="zone-code" />
                                    <input
                                        id="zone-code"
                                        placeholder="우편번호"
                                        disabled
                                        value={zonecode}
                                    />
                                    <button type="button" onClick={handleClick}>
                                        우편번호 찾기
                                    </button>
                                    <p>
                                        <label htmlFor="road-address" />
                                        <input
                                        id="road-address"
                                        placeholder="도로명주소"
                                        disabled
                                        value={roadAddress}
                                        />
                                    </p>
                                    <input placeholder="상세주소"
                                    />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>메 모</td>
                            <td>
                                <input
                                    name="memo"
                                    id="form-memo"
                                    className="form-control"
                                    placeholder="참고사항을 입력하세요."
                                />
                            </td>
                        </tr>
                    </table>

                    <table>
                        <tr>
                            <td className="text-center">
                                <button type="button">저장</button>
                                <button type="reset">취소</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default ScheduleWrite;