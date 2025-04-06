import React from "react";

function ScheduleMain() {
    return (
        <div className="container">
            <div className="body-container">
                <div className="body-title">
                    <h3><i className="bi bi-calendar-event"></i> 일정관리 </h3>
                </div>

                <div className="body-main">
                    <form name="scheduleForm" method="post" onSubmit={handleSubmit}>
                        <table className="table mt-5 write-form">
                            <tr>
                                <td className="bg-light col-2" scope="row">제 목</td>
                                <td>
                                    <div className="row">
                                        <div className="col">
                                            <input
                                                type="text"
                                                name="subject"
                                                maxLength="100"
                                                id="form-subject"
                                                className="form-control"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <small className="form-control-plaintext">* 제목은 필수 입니다.</small>
                                </td>
                            </tr>

                            <tr>
                                <td className="bg-light col-2" scope="row">일정분류</td>
                                <td>
                                    <div className="row">
                                        <div className="col-5">
                                            <select
                                                name="categoryNum"
                                                id="form-categoryNum"
                                                className="form-select"
                                                value={formData.categoryNum}
                                                onChange={handleChange}
                                            >
                                                {/* 카테고리 옵션이 필요하면 여기에 추가 */}
                                            </select>
                                        </div>
                                    </div>
                                    <small className="form-control-plaintext">* 카테고리는 일정 메인화면에서 설정합니다.</small>
                                </td>
                            </tr>

                            <tr>
                                <td className="bg-light col-2" scope="row">색 상</td>
                                <td>
                                    <div className="row">
                                        <div className="col-5">
                                            <select
                                                name="color"
                                                id="form-color"
                                                className="form-select"
                                                value={formData.color}
                                                onChange={handleChange}
                                            >
                                                <option value="blue" style={{ background: 'blue' }}>파랑</option>
                                                <option value="green" style={{ background: 'green' }}>녹색</option>
                                                <option value="red" style={{ background: 'red' }}>빨강</option>
                                                <option value="orange" style={{ background: 'orange' }}>주황</option>
                                                <option value="tomato" style={{ background: 'tomato' }}>토마토</option>
                                                <option value="magenta" style={{ background: 'magenta' }}>마젠타</option>
                                                <option value="purple" style={{ background: 'purple' }}>보라</option>
                                                <option value="brown" style={{ background: 'brown' }}>갈색</option>
                                                <option value="navy" style={{ background: 'navy' }}>남색</option>
                                                <option value="gray" style={{ background: 'gray' }}>회색</option>
                                                <option value="black" style={{ background: 'black' }}>검정</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="bg-light col-2" scope="row">종일일정</td>
                                <td className="py-3">
                                    <div className="row">
                                        <div className="col">
                                            <input
                                                type="checkbox"
                                                name="all_day"
                                                id="form-all_day"
                                                className="form-check-input"
                                                checked={formData.all_day}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="form-all_day"> 하루종일</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="bg-light col-2" scope="row">시작일자</td>
                                <td>
                                    <div className="row">
                                        <div className="col-5 pe-0">
                                            <input
                                                type="date"
                                                name="startDate"
                                                id="form-startDate"
                                                className="form-control"
                                                value={formData.startDate}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-3">
                                            <input
                                                type="time"
                                                name="startTime"
                                                id="form-startTime"
                                                className="form-control"
                                                value={formData.startTime}
                                                onChange={handleChange}
                                                style={{ display: formData.all_day ? 'none' : 'inline-block' }}
                                            />
                                        </div>
                                    </div>
                                    <small className="form-control-plaintext">* 시작날짜는 필수입니다.</small>
                                </td>
                            </tr>

                            <tr>
                                <td className="bg-light col-2" scope="row">종료일자</td>
                                <td>
                                    <div className="row">
                                        <div className="col-5 pe-0">
                                            <input
                                                type="date"
                                                name="endDate"
                                                id="form-endDate"
                                                className="form-control"
                                                value={formData.endDate}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-3">
                                            <input
                                                type="time"
                                                name="endTime"
                                                id="form-endTime"
                                                className="form-control"
                                                value={formData.endTime}
                                                onChange={handleChange}
                                                style={{ display: formData.all_day ? 'none' : 'inline-block' }}
                                            />
                                        </div>
                                    </div>
                                    <small className="form-control-plaintext">종료일자는 선택사항이며, 시작일자보다 작을 수 없습니다.</small>
                                </td>
                            </tr>

                            <tr>
                                <td className="bg-light col-2" scope="row">일정반복</td>
                                <td>
                                    <div className="row">
                                        <div className="col-5 pe-0">
                                            <select
                                                name="repeat"
                                                id="form-repeat"
                                                className="form-select"
                                                value={formData.repeat}
                                                onChange={handleChange}
                                            >
                                                <option value="0">반복안함</option>
                                                <option value="1">년 반복</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <input
                                                type="text"
                                                name="repeat_cycle"
                                                id="form-repeat_cycle"
                                                maxLength="2"
                                                className="form-control"
                                                value={formData.repeat_cycle}
                                                onChange={handleChange}
                                                style={{ display: formData.repeat === '0' ? 'none' : 'inline-block' }}
                                                placeholder="반복주기"
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="bg-light col-2" scope="row">메 모</td>
                                <td>
                                    <textarea
                                        name="memo"
                                        id="form-memo"
                                        className="form-control"
                                        style={{ height: '90px' }}
                                        value={formData.memo}
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </table>

                        <table className="table table-borderless">
                            <tr>
                                <td className="text-center">
                                    <button type="submit" className="btn btn-dark">
                                        {formData.num ? '수정완료' : '일정등록'}&nbsp;<i className="bi bi-check2"></i>
                                    </button>
                                    <button type="reset" className="btn btn-light">다시입력</button>
                                    <button type="button" className="btn btn-light" onClick={() => window.location.href = '/schedule/main'}>
                                        {formData.num ? '수정취소' : '등록취소'}&nbsp;<i className="bi bi-x"></i>
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ScheduleMain;