import React from "react";

function Event({ modalOpen, setModalOpen, newEvent, setNewEvent, handleSave }) {
    if (!modalOpen) return null;

    return (
        <div className="modal-layer" role="dialog" aria-labelledby="dialogTitle">
            <div className="inner-layer event-form">
                <div>
                    <div className="layer-head">
                        <div className="modal-title" id="dialogTitle">
                            <div className="modal-palete" tabindex="0" role="button" aria-expanded="false" aria-controls="plaetteList" aria-haspopup="listbox" aria-labelledby="paletteLabel">
                                <span className="modal-status screen-out">블루</span>
                                <span className="ico_select">선택됨</span>
                            </div>
                            <div className="title-box">
                                <label for="titleNew" className="screen-out">일정 제목</label>
                                <input 
                                type="text"
                                id="titleNew"
                                className="title"
                                placeholder="일정 제목"
                                value={newEvent.content_title}
                                onChange={(e) => setNewEvent({ ...newEvent, content_title: e.target.value })}
                            />
                            </div>
                        </div>
                    </div>
                    
                    <div className="layer-body">
                        <div className="body-input">
                            <dl className="li-input">
                                <dt><span className="ico-modal modal-time">일시</span></dt>
                                <dd>
                                    <div className="group-time">
                                        <div className="unit-time">
                                            <label for="timeFirst" className="screen-out">시작 일자</label>
                                            <input
                                                id="timeFirst"
                                                className="date-comm modal-date"
                                                type="datetime-local"
                                                value={newEvent.end}
                                                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
                                            />
                                            <div className="layer-calendar hide" tabindex="0"></div>
                                        </div>
                                        <div className="unit-time">
                                            <label for="timeEnd" className="screen-out">종료 일자</label>
                                            <input
                                                id="timeEnd"
                                                className="date-comm modal-date"
                                                type="datetime-local"
                                                value={newEvent.end}
                                                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
                                            />
                                            <div className="layer-calendar hide" tabindex="0"></div>
                                        </div>
                                    </div>
                                    <div className="unit-item">
                                        <div className="choice item-checkbox">
                                            <input type="checkbox" className="input-comm" id="check" checked />
                                            <label for="check" className="choice">
                                                <span className="text-choice">하루 종일</span>
                                            </label>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl className="li-input">
                                <dt></dt>
                                <dd>
                                    <input
                                        type="text"
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
                                        placeholder="장소"
                                        value={newEvent.location}
                                        onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                                    />
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="layer-footer">
                        <div className="group-btn">
                            <button type="button" className="btn btn-big btn_save" onClick={handleSave}>저장</button>
                            <button type="button" className="btn btn-big bin-close" onClick={() => setModalOpen(false)}>닫기</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Event;