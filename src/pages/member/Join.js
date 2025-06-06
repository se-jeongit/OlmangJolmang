import "../../styles/member/join.css";
import * as Header from "../../components/layout/Header";

const Login = () =>{
    Header.setTitle("회원가입")
    
    return (
        <div className="join-main">
            <h3 className="join-title">회원가입</h3>
            <div>
                <div>
                    <input className="input-inner" placeholder="이메일을 입력해주세요" />
                </div>

                <div>
                    <input className="input-inner" placeholder="비밀번호를 입력해주세요" />
                </div>

                <div>
                    <input className="input-inner" placeholder="비밀번호를 다시 입력해주세요" />
                </div>

                <div>
                    <input className="input-inner" placeholder="닉네임을 입력해주세요" />
                </div>

                <div>
                    <input className="input-inner" placeholder="이름을 입력해주세요" />
                </div>

                <div>
                    성별
                    <select>
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
                    <input className="input-inner" placeholder="전화번호를 입력해주세요" />
                </div>

                <div>
                    <input className="input-inner" placeholder="생년월일(YYYYMMDD)을 입력해주세요" />
                </div>

                <div>
                    개인정보 동의
                    <check></check>
                </div>

                <div>
                    <button>
                        가입완료
                    </button>
                    <button>
                        가입완료
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;