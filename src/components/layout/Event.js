import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Event({ modalOpen, setModalOpen, newEvent, setNewEvent, handleSave }) {
    if (!modalOpen) return null;

    const combineDateTime = (date, time) => {
        if (!date) return "";
        const t = time || "00:00";
        return `${date}T${t}`;
    }

    return (
        <div className="modal-layer" role="dialog" aria-labelledby="dialogTitle">
            <div className="inner-layer event-form">
                <button type="button" className="btn-close" onClick={() => setModalOpen(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <div className="modal-main">

                    {/* layer-head */}
                    <dl className="li-input">
                        <dt>
                            <div
                            className="modal-palete"
                            tabIndex="0"
                            role="button"
                            aria-expanded="false"
                            aria-controls="plaetteList"
                            aria-haspopup="listbox"
                            aria-labelledby="paletteLabel"
                            >
                            <span className="modal-status screen-out">블루</span>
                            <span className="ico_select">선택됨</span>
                            </div>
                        </dt>
                        <dd>
                            <div className="title-box">
                            <label htmlFor="titleNew" className="screen-out">일정 제목</label>
                            <input
                                type="text"
                                id="titleNew"
                                className="title input-unified"
                                placeholder="일정 제목"
                                value={newEvent.content_title}
                                onChange={(e) => setNewEvent({ ...newEvent, content_title: e.target.value })}
                            />
                            </div>
                        </dd>
                    </dl>

                    {/* layer-body */}
                    <div className="layer-body">
                        <div className="body-input">
                            <dl className="li-input">
                                <dt><span className="ico-modal modal-time">일시</span></dt>
                                <dd>
                                    {/* 시작*/}
                                    <div className="group-time">
                                        <div className="unit-time">
                                            <label htmlFor="startDate" className="screen-out">시작 날짜</label>
                                            <input
                                            id="startDate"
                                            className="date-comm modal-date"
                                            type="date"
                                            value={newEvent.startDate}
                                            onChange={(e) => {
                                                const newStartDate = e.target.value;
                                                setNewEvent(prev => ({
                                                ...prev,
                                                startDate: newStartDate,
                                                start: combineDateTime(newStartDate, prev.startTime),
                                                }));
                                            }}
                                            />
                                        </div>
                                        <div className="unit-time">
                                            <label htmlFor="startTime" className="screen-out">시작 시간</label>
                                            <input
                                            id="startTime"
                                            className="date-comm modal-date"
                                            type="time"
                                            value={newEvent.startTime}
                                            onChange={(e) => {
                                                const newStartTime = e.target.value;
                                                setNewEvent(prev => ({
                                                ...prev,
                                                startTime: newStartTime,
                                                start: combineDateTime(prev.startDate, newStartTime),
                                                }));
                                            }}
                                            />
                                        </div>
                                    </div>
                                    <div className="group-time">
                                        <div className="form-date"><FontAwesomeIcon icon={faChevronDown}/></div>
                                    </div>
                                    {/* 종료 */}
                                    <div className="group-time">
                                        <div className="unit-time">
                                            <label htmlFor="endDate" className="screen-out">종료 날짜</label>
                                            <input
                                            id="endDate"
                                            className="date-comm modal-date"
                                            type="date"
                                            value={newEvent.endDate}
                                            onChange={(e) => {
                                                const newEndDate = e.target.value;
                                                setNewEvent(prev => ({
                                                ...prev,
                                                endDate: newEndDate,
                                                end: combineDateTime(newEndDate, prev.endTime),
                                                }));
                                            }}
                                            />
                                        </div>
                                        <div className="unit-time">
                                            <label htmlFor="endTime" className="screen-out">종료 시간</label>
                                            <input
                                            id="endTime"
                                            className="date-comm modal-date"
                                            type="time"
                                            value={newEvent.endTime}
                                            onChange={(e) => {
                                                const newEndTime = e.target.value;
                                                setNewEvent(prev => ({
                                                ...prev,
                                                endTime: newEndTime,
                                                end: combineDateTime(prev.endDate, newEndTime),
                                                }));
                                            }}
                                            />
                                        </div>
                                    </div>
                                </dd>
                            </dl>

                            <dl className="li-input">
                                <dt></dt>
                                <dd>
                                    <input
                                        type="text"
                                        className="input-unified"
                                        placeholder="설명"
                                        value={newEvent.description}
                                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                                    />
                                </dd>
                            </dl>

                            <dl className="li-input">
                                <dt></dt>
                                <dd>
                                    <input
                                        type="text"
                                        className="input-unified"
                                        placeholder="장소"
                                        value={newEvent.location}
                                        onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                                    />
                                </dd>
                            </dl>
                        </div>
                    </div>

                    {/* layer-footer */}
                    <div className="layer-footer">
                        <div className="group-btn">
                            <button type="button" className="btn btn-big more">더보기</button>
                            <button type="button" className="btn btn-big btn_save" onClick={handleSave}>저장</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Event;
