import React from "react";
import "../../styles/member/login.css";

const Login = () =>{
    return (
        <div className="login-main">
            <h3 className="login-title">로그인</h3>
            <div className="login-area">
                <div className="login-input">
                    <div className="login-id">
                        <input className="input-inner" placeholder="아이디를 입력해주세요" />
                    </div>
                    <div className="login-pw">
                        <input className="input-inner" placeholder="비밀번호를 입력해주세요" />
                    </div>
                </div>

                <div className="login-checkarea">
                    <input type="checkbox"></input>
                    아이디 저장
                </div>

                <div className="login-sub-main">
                    <div className="login-submit">
                        <button className="input-button">
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