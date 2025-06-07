import { useState } from "react";
import * as Header from "../../components/layout/Header";
import "../../styles/member/member.css";
import { Button, Modal } from "react-bootstrap";

const PwdReset = () =>{
    Header.setTitle("비밀번호 재설정")

    const [emailVal, setEmailVal] = useState(String(""))
    const [modalShow, setModalShow] = useState(String(""))

    const resetInput = (event) => {
        const targetValue = event.target

        if (targetValue.id === 'resetInput') {
            const elements = document.querySelector('.reset-area')
            const btnElements = document.querySelector('.input-button')
            const confrimElements = document.querySelector('.input-confirm')
            
            if (targetValue.value === '') {
                btnElements.disabled = true
                confrimElements.disabled = true
                elements.style.border = '1px solid red'
            } else {
                btnElements.disabled = false
                confrimElements.disabled = false
                elements.style.removeProperty('border')
            }
            
            setEmailVal(targetValue.value)
        }
    }

    const modalOpen = () => {setModalShow(true)}
    const modalClose = () => {setModalShow(false)}
    
    return (
        <div className="member-main">
            <div>
                가입시 사용한 이메일 주소를 입력해주세요.
            </div>
            <div className="reset-area">
                <input id="resetInput" className="input-email" placeholder="이메일을 입력하세요." onBlur={resetInput}>
                </input>
                <button className="input-confirm" type="button" disabled>확인</button>
            </div>
            <button className="input-button" type="button" disabled onClick={modalOpen}>이메일로 인증코드 전송하기</button>
            
            <Modal show={modalShow} onHide={modalClose}>
                <Modal.Header>
                    <Modal.Title>이메일 인증 보내기</Modal.Title>
                </Modal.Header>
                <Modal.Body>이메일 인증 바디</Modal.Body>
                <Modal.Footer>
                    <Button onClick={modalClose}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PwdReset;