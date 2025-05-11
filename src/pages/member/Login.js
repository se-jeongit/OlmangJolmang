import React, { useState } from "react";
import "../../styles/member/login.css";

const Login = () =>{
    const [idChecker, setIdChecker] = useState(Boolean(false))
    const [pwdChecker, setPwdChecker] = useState(Boolean(false))
    const [idVal, setIdVal] = useState(String(""))
    const [pwdVal, setPwdVal] = useState(String(""))

    const [loginInfo, setloginInfo] = useState()

    const loginInput = (event) => {
        const targetValue = event.target

        if (targetValue.id === 'idInput') {
            setIdChecker(true)

            const elements = document.getElementById('idInput')
            
            if (targetValue.value === '') {
                elements.style.border = '1px solid red'
                elements.style.margin = '0 0 0.6em'
            } else {
                elements.style.removeProperty('border')
                elements.style.margin = '0 0 1.2em'
            }
            
            setIdVal(targetValue.value)
        } else {
            setPwdChecker(true)

            const elements = document.getElementById('pwdInput')

            if (targetValue.value === '') {
                elements.style.border = '1px solid red'
                elements.style.margin = '0 0 0.6em'
            } else {
                elements.style.removeProperty('border')
                elements.style.margin = '0 0 1.2em'
            }

            setPwdVal(targetValue.value)
        }
    }

    const loginCheck = () => {
        if (idChecker && pwdChecker) {
            alert('아이디 또는 패스워드가 일치하지 않습니다.')
        } else {
            if (idVal === '') {
                setIdChecker(true)
                const elements = document.getElementById('idInput')

                elements.style.border = '1px solid red'
                elements.style.margin = '0 0 0.6em'
            }

            if (pwdVal === '') {
                setPwdChecker(true)
                const elements = document.getElementById('pwdInput')

                elements.style.border = '1px solid red'
                elements.style.margin = '0 0 0.6em'
            }
        }
    }
    return (
        <div className="login-main">
            <h3 className="login-title">로그인</h3>
            <div className="login-area">
                <div className="login-input">
                    <div className="login-id">
                        <input id="idInput" className="input-inner" placeholder="아이디를 입력해주세요" onBlur={loginInput} />
                    </div>
                    {idChecker && idVal === '' ? <div className="input-error">아이디를 입력해주세요</div> : ""}
                    <div className="login-pw">
                        <input id="pwdInput" className="input-inner" type='password' placeholder="비밀번호를 입력해주세요" onBlur={loginInput} />
                    </div>
                    {pwdChecker && pwdVal === '' ? <div className="input-error">비밀번호를 입력해주세요</div> : ""}
                </div>

                <div className="login-checkarea">
                    <input type="checkbox"></input>
                    아이디 저장
                </div>

                <div className="login-sub-main">
                    <div className="login-submit">
                        <button className="input-button" onClick={loginCheck}>
                            로그인
                        </button>
                    </div>

                    <div className="login-super">
                        <a href="/idFind">아이디 찾기</a>
                        <span aria-hidden> | </span>
                        <a href="/pwdCheck">비밀번호 찾기</a>
                        <span aria-hidden> | </span>
                        <a href="/join">회원가입</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;