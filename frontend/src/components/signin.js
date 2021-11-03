import React from "react";
import { useState, useRef } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { requestData } from "../apis/api";

import "../style/signin.css";


export const Pwreset = () => {


    const passwordRef = useRef();
    const repeatRef = useRef();

    const [passwordState, setPasswordState] = useState("");
    const [repeatState, setRepeatState] = useState("");

    const newPasswordData = {new_password:passwordState}


    const onChangeNewPasswordHandler = (e) => {
        e.preventDefault();
        console.log("onChangeNewPasswordHandler 진입");
        
        setPasswordState(passwordRef.current.value);
        
    }

    const onChangeRepeatHandler = (e) => {
        e.preventDefault();
        console.log("onChangeRepeatHandler 진입");

        setRepeatState(repeatRef.current.value);
    }

    const submitData = async (e) => {
        console.log("submitData 진입");
        e.preventDefault();

        if ((passwordState !== "") && (repeatState !== "") && (passwordState === repeatState)) {

            try {
                const response = await requestData("post", "pwreset", newPasswordData);
                console.log(response.data);
            } catch (e) {
                alert("error");
            }
        } else {
            alert("입력란이 비어있습니다")
        }
    }

    return (
        <div className="class-Pwreset">
            <form>
                <input
                    type="password"
                    name="inputNewPassword"
                    placeholder="new password"
                    ref={passwordRef}
                    onChange={onChangeNewPasswordHandler}
                    >
                </input>

                <input
                    type="password"
                    name="inputRepeatNewPassword"
                    placeholder="Repeat new password"
                    ref={repeatRef}
                    onChange={onChangeRepeatHandler}
                    >
                </input>


                <button
                    type="text"
                    name="submitData"
                    onClick={submitData}
                >
                    비밀번호 변경
                </button>


            </form>
        </div>
    );
}


const clientId = "";
const clientPassword = "";


const Signin = ({history}) => {

    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const [idState, setIdState] = useState("");
    const [passwordState, setPasswordState] = useState("");

    const loginData = {email:idState, password:passwordState};
    
    const onChangeIdHandler = (e) => {
        e.preventDefault();
        console.log("onChangeIdHandler 진입");

        setIdState(idRef.current.value);

        
    }

    const onChangePasswordHandler = (e) => {
        e.preventDefault();
        console.log("onChangePasswordHandler 진입");

        setPasswordState(passwordRef.current.value);
    }

    const submitLoginData = async (e) => {
        console.log("submitLoginData 진입");
        e.preventDefault();

        if ((idState !== "") && (passwordState !== "")) {
            try {
                const responseLogin = await requestData("post", '/signin', loginData);
                console.log(responseLogin.data);
            } catch (e) {
                alert("error");
            }
        } else {
            alert("입력란이 비어있습니다.")
        }

    }

    const successResponse = (response) => {
        console.log(response);
    }

    const failResponse = (error) => {
        console.error(error);
    }
    
    const linkToRegister = (e) => {
        console.log("linkToRegister 진입");
        e.preventDefault();
        history.push('/signup');
    
    }
    
    const findUserData = (e) => {
        console.log("findUserData 진입");
        e.preventDefault();
        history.push('/finduser');
    }
    
    return (
        <div className="class-login">
            <h1>로그인 페이지 입니다.</h1>
            
            <form>
                <input
                    type="text"
                    name="idInput"
                    placeholder="id"
                    ref={idRef}
                    onChange={onChangeIdHandler}
                >
                </input>

                <input
                    type="password"
                    name="passwordInput"
                    placeholder="password"
                    ref={passwordRef}
                    onChange={onChangePasswordHandler}
                >
                </input>

                <button
                    type="text"
                    name="submitLoginButton"
                    onClick={submitLoginData}
                >
                    로그인
                </button>

                {/* <button
                    type="text"
                    name="submitLoginButton"
                    onClick={() => {console.log("google")}}
                >
                    구글 계정으로 로그인
                </button> */}

                <GoogleLogin
                    clientId={clientId}
                    buttonText="구글로 로그인하기"
                    onSuccess={successResponse}
                    onFailure={failResponse}
                />

                <button
                    type="text"
                    name="linkToRegisterButton"
                    onClick={linkToRegister}
                >
                    회원가입
                </button>

                <button
                    type="text"
                    name="findUserButton"
                    onClick={findUserData}
                >
                    아이디/비밀번호 찾기
                </button>
            </form>

        </div>
    );

}

export default Signin;




