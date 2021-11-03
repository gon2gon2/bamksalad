import React from 'react';
import { useState, useRef } from 'react';
import { requestData } from '../apis/api';

const Idinquiry = () => {

    const nameRef = useRef();
    const phoneRef = useRef();
    
    const [nameState, setNameState] = useState("");
    const [phoneState, setPhoneState] = useState("");

    const sendIdInquiryData = {name:nameState, phone_number:phoneState};

    const nameChangeHandler = (e) => {
        console.log("nameChangeHandler 진입");
        e.preventDefault();

        setNameState(nameRef.current.value);

    }

    const phoneChangeHandler = (e) => {
        console.log("phoneChangeHandler 진입");
        e.preventDefault();

        setPhoneState(phoneRef.current.value);
        
    }

    const submitData = async (e) => {
        console.log("submitData 진입");
        e.preventDefault();

        if ((nameState !== "") && (phoneState !== "")) {

            try {
                const response = await requestData("post", "idinquiry", sendIdInquiryData);
                console.log(response.data);
            } catch (e) {
                alert("error");
            }
        } else {
            alert("입력란이 비어있습니다")
        }
    }
    
    return (
        <div className="class-Idinquiry">
            <form>
                <input
                    type="text"
                    name="inputName"
                    placeholder="Name"
                    ref={nameRef}
                    onChange={nameChangeHandler}
                    >
                </input>

                <input
                    type="text"
                    name="inputPhone"
                    placeholder="Phone Number"
                    ref={phoneRef}
                    onChange={phoneChangeHandler}
                    >
                </input>


                <button
                    type="text"
                    name="submitData"
                    onClick={submitData}
                >
                    아이디 찾기
                </button>


            </form>
        </div>
    );
}

const Pwinquiry = () => {

    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    
    const [nameState, setNameState] = useState("");
    const [phoneState, setPhoneState] = useState("");
    const [emailState, setEmailState] = useState("");

    const sendPwInquiryData = {email:emailState, name:nameState, phone_number:phoneState};


    const nameChangeHandler = (e) => {
        console.log("nameChangeHandler 진입");
        e.preventDefault();
        setNameState(nameRef.current.value);

    }

    const phoneChangeHandler = (e) => {
        console.log("phoneChangeHandler 진입");
        e.preventDefault();
        setPhoneState(phoneRef.current.value);
        
    }

    const emailChangeHandler = (e) => {
        console.log("emailChangeHandler 진입");
        e.preventDefault();

        setEmailState(emailRef.current.value);
    }

    const submitData = async (e) => {
        console.log("submitData 진입");
        e.preventDefault();

        if ((nameState !== "") && (emailState !== "") && (phoneState !== "")) {

            try {
                const response = await requestData("post", "pwinquiry", sendPwInquiryData);
                console.log(response.data);
            } catch (e) {
                alert("error");
            }
        } else {
            alert("입력란이 비어있습니다.")
        }
    }

    return (
        <>
            <div className="class-Idinquiry">
                <form>

                    <input
                        type="text"
                        name="email"
                        placeholder="Phone Number"
                        ref={emailRef}
                        onChange={emailChangeHandler}
                        >
                    </input>


                    <input
                        type="text"
                        name="inputName"
                        placeholder="Name"
                        ref={nameRef}
                        onChange={nameChangeHandler}
                        >
                    </input>

                    <input
                        type="text"
                        name="inputPhone"
                        placeholder="Phone Number"
                        ref={phoneRef}
                        onChange={phoneChangeHandler}
                        >
                    </input>

                    <button
                    type="text"
                    name="submitButton"
                    onClick={submitData}
                >
                    비밀번호 찾기
                </button>

                    

                </form>
            </div>
        </>
    );
}

const Finduser = () => {
    return (
        <>
        
                <Idinquiry />
                <br></br>
                <br></br>
                <br></br>
                <Pwinquiry />

        </>
    );
}



export default Finduser;