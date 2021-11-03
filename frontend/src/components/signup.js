import React from 'react';
import { useState, useRef } from 'react';

import axios from "axios";
import { requestData } from '../apis/api';

import "../style/signup.css";


const Signup = () => {


    // useRef
    const idRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const passwordRef = useRef(null);
    const repeatPasswordRef = useRef(null);


    // useState
    const [idState, setIdState] = useState("");
    const [nameState, setNameState] = useState("");
    const [phoneState, setPhoneState] = useState("");
    const [passwordState, setPasswordState] = useState("");
    const [repeatPasswordState, setRepeatPasswordState] = useState("");

    const registerData = {
        email:idState, 
        name:nameState,
        phone_number:phoneState,
        password:passwordState,
    }


    // onChangeHandler
    const idChecker = (e) => {
        console.log("idChecker 진입");
        e.preventDefault();

        setIdState(idRef.current.value);

    }

    const nameChecker = (e) => {
        console.log("nameChecker 진입");
        e.preventDefault();
        
        setNameState(nameRef.current.value);
    }

    const phoneChecker = (e) => {
        console.log("phoneChecker 진입");
        e.preventDefault();

        setPhoneState(phoneRef.current.value);
    }

    const passwordChecker = (e) => {
        console.log("passwordChecker 진입");
        e.preventDefault();

        setPasswordState(passwordRef.current.value);

    }

    const repeatChecker = (e) => {
        console.log("repeatChecker 진입");
        e.preventDefault();

        setRepeatPasswordState(repeatPasswordRef.current.value);

    }
    
    // onClickHandler
    const submitFormHandler = async (e) => {
        console.log("submitFormHandler 진입");
        e.preventDefault();

        console.log(idState);
        console.log(nameState);
        console.log(phoneState);
        console.log(passwordState);
        console.log(repeatPasswordState);

        console.log(registerData);

        if (idState && nameState && phoneState && passwordState && repeatPasswordState !== "") {
            if (passwordState === repeatPasswordState) {
                try {
                    const response = await requestData('post', '/signup', registerData);
                    console.log(response.data);
                

                } catch (e) {
                    alert("error");
                }
            }
        }

    }
    
    return (
        <div className="class-register">
            <h1>회원가입 페이지 입니다.</h1>

            <form>
                <input 
                    type="text"
                    name="idInput"
                    placeholder="Id (email)"
                    ref={idRef}
                    onChange={idChecker}
                    >

                </input>

                <input 
                    type="text"
                    name="nameInput"
                    placeholder="name"
                    ref={nameRef}
                    onChange={nameChecker}
                    >

                </input>

                <input 
                    type="text"
                    name="nameInput"
                    placeholder="phone number"
                    ref={phoneRef}
                    onChange={phoneChecker}
                    >

                </input>

                <input 
                    type="password"
                    name="idInput"
                    placeholder="password"
                    ref={passwordRef}
                    onChange={passwordChecker}
                    >

                </input>

                <input 
                    type="password"
                    name="idInput"
                    placeholder="repeat password"
                    ref={repeatPasswordRef}
                    onChange={repeatChecker}
                    >

                </input>

                <button
                    type="text"
                    name="submitButton"
                    onClick={submitFormHandler}
                    >
                        가입신청
                </button>

                
            </form>
        </div>

    );
}

export default Signup;