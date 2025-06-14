import "../../styles/member/member.css";
import * as Header from "../../components/layout/Header";

const Login = () =>{
    Header.setTitle("회원가입")

    // const loginInput = (event) => {
    //     const targetValue = event.target

    //     if (targetValue.id === 'idInput') {
    //         setIdChecker(true)

    //         const elements = document.getElementById('idInput')
            
    //         if (targetValue.value === '') {
    //             elements.style.border = '1px solid red'
    //         } else {
    //             elements.style.removeProperty('border')
    //         }
            
    //         setIdVal(targetValue.value)
    //     } else {
    //         setPwdChecker(true)

    //         const elements = document.getElementById('pwdInput')

    //         if (targetValue.value === '') {
    //             elements.style.border = '1px solid red'
    //         } else {
    //             elements.style.removeProperty('border')
    //         }

    //         setPwdVal(targetValue.value)
    //     }
    // }
    
    return (
        <div className="join-main">
            <h3 className="join-title">회원가입</h3>
            <form>
                <div>
                    <label className="sub-title">이메일</label>
                    <input className="input-inner join-input first" placeholder="이메일을 입력해주세요" />
                </div>

                <div>
                    <button className="input-button" type="button">이메일 인증</button>
                </div>

                <div>
                    <label className="sub-title">비밀번호</label>
                    <input className="input-inner join-input" placeholder="비밀번호를 입력해주세요 (영문 + 숫자 8자 이상)" />
                </div>

                <div>
                    <label className="sub-title">비밀번호 확인</label>
                    <input className="input-inner join-input" placeholder="비밀번호를 다시 입력해주세요" />
                </div>

                <div>
                    <label className="sub-title">닉네임</label>
                    <input className="input-inner join-input" placeholder="닉네임을 입력해주세요 (2~10자)" />
                </div>

                <div>
                    <label className="sub-title">이름</label>
                    <input className="input-inner join-input" placeholder="이름을 입력해주세요" />
                </div>

                <div>
                    <label className="sub-title">성별</label>
                    <select className="join-input">
                        <option value="M">
                            남자
                        </option>
                        <option value="F">
                            여자
                        </option>
                        <option value="N">
                            선택안함
                        </option>
                    </select>
                </div>

                <div>
                    <label className="sub-title">생년월일</label>
                    <input className="input-inner join-input" placeholder="생년월일(YYYYMMDD)을 입력해주세요" />
                </div>

                <div>
                    <label className="sub-title">약관동의</label>
                    <div className="terms-main"></div>
                    <check></check>
                </div>

                <div>
                    <button className="input-button" type="button">
                        가입 신청
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;