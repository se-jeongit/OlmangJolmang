import { useState } from "react";
import * as Header from "../../components/layout/Header";
import "../../styles/member/member.css";

const Login = () =>{
    Header.setTitle("로그인")
    
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
            } else {
                elements.style.removeProperty('border')
            }
            
            setIdVal(targetValue.value)
        } else {
            setPwdChecker(true)

            const elements = document.getElementById('pwdInput')

            if (targetValue.value === '') {
                elements.style.border = '1px solid red'
            } else {
                elements.style.removeProperty('border')
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
            }

            if (pwdVal === '') {
                setPwdChecker(true)
                const elements = document.getElementById('pwdInput')

                elements.style.border = '1px solid red'
            }
        }
    }
    
    return (
        <div className="member-main">
            <h3 className="login-title"><div className="login-image"><img src=""></img></div>𝑶𝒍𝒎𝒂𝒏𝒈𝒋𝒐𝒍𝒎𝒂𝒏𝒈</h3>
            <form className="login-area">
                <div className="login-id">
                    <input id="idInput" className="id input-inner" placeholder="이메일" onBlur={loginInput} />
                </div>
                <div className="login-pw">
                    <input id="pwdInput" className="pwd input-inner" type='password' placeholder="비밀번호" onBlur={loginInput} />
                </div>
                <div className="login-sub-main">
                    <div className="login-submit">
                        <button className="input-button" onClick={loginCheck}>
                            로그인
                        </button>
                    </div>

                    <div className="login-super">
                        <a className="login-atag" href="/pwdReset">비밀번호 재설정</a>
                        <a className="login-atag" href="/join">회원가입</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;