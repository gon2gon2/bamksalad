import axios from "axios";

axios.defaults.baseURL = "http://172.20.13.240:5000/api/";
// axios.defaults.withCredentials = true;


export const requestData = async (method, endpoint, data) => {
    return axios({
        method: method,
        url: endpoint,
        data:data,
        headers:{'Content-Type': 'application/json'}
    });
}


// 이메일 형식 판별 함수
export const validateEmail = (email) => {
    // from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reEmail.test(String(email).toLowerCase());
}

// 비밀번호 형식 판별 함수 (영문 숫자 특수문자 포함 8자 이상20)
export const validatePassword = (password) => {
    // 출처: https://seongilman.tistory.com/186 [SEONG];
    const rePassword = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;
    return rePassword.test(String(password));
}