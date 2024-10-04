import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from "react-router-dom";
import { LoginError } from "../contexts/ErrorMsg";
import useLoginStore from "../stores/login";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate();
    const { loginId, setLoginId } = useLoginStore(); 
    const [user, setUser] = useState<{username:string, password:string}>({
        username:'',
        password:'',
    })
    const [errors, setErrors] = useState<{ error_id: boolean, error_pw: boolean }>({
        error_id: false,
        error_pw: false,
    });
    //const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]);
    const [rememberId, setRememberId] = useState<boolean>(false);

    useEffect(() => {
        const storedUserId = localStorage.getItem('rememberUserId');
        if (storedUserId) {
            setUser(prev => ({ ...prev, username: storedUserId }));
            setRememberId(true);
        }
    }, []);

    const handleUserid = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setErrors((prev) => ({ ...prev, error_id: false }));
        }
        // setUserId(e.target.value);
        setUser((prev)=>({...prev, username: e.target.value}))
    };

    const handleUserpw = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setErrors((prev) => ({ ...prev, error_pw: false }));
        }
        // setUserPw(e.target.value);
        setUser((prev)=>({...prev, password:e.target.value}))
    };

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberId(e.target.checked);
    };

    const validateEmail = (value: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9._%+-]$/;
        const isValid = emailRegex.test(value);
        setErrors((prev) => ({ ...prev, error_id: isValid }));
        return isValid;
    };

    const validationPassWord = (value: string): boolean => {
        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/;
        const isValid = passwordRegEx.test(value);
        setErrors((prev) => ({ ...prev, error_pw: isValid }));
        return isValid;
    };



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isEmailValid = validateEmail(user.username);
        const isPasswordValid = validationPassWord(user.password);
     
        if (!isEmailValid && !isPasswordValid) {
            try {
                const response = await axios.post("http://localhost:8080/auth/login", user,{
                    withCredentials: true
                });
                if ((response.status = 200) && (response.data !== 'Fail')) {
                    navigate("/");
                    setLoginId(user.username);
                    localStorage.setItem("jwt", response.data);
                    localStorage.setItem('login-id', user.username);
                    if (rememberId) {
                        localStorage.setItem('rememberUserId', user.username);
                    } else {
                        localStorage.removeItem('rememberUserId');
                    }


                }
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    // 서버에서 응답한 오류 처리
                    if (error.response.status === 403) {
                        alert("로그인 권한이 없습니다. 아이디와 비밀번호를 확인하세요.");
                    } else {
                        alert("로그인 중 오류가 발생했습니다.");
                    }
                }
                localStorage.removeItem('rememberUserId');
                //removeCookie('rememberUserId'); // 오류 발생 시 쿠키 삭제
                console.error(error);
            }    
            try {
                const result = await axios.get(`http://localhost:8080/api/findUserPin?userid=${user.username}`);
                localStorage.setItem('login-pin', result.data);
            } catch (error) {
                localStorage.removeItem('login-pin');
                console.error(error);
            }
        } else {
            alert("아이디와 비밀번호를 확인하세요.");
        }
    };

    return (
        <div className="w-full h-[700px]">
        <div className="w-full h-full border flex justify-center items-center">
            <div className="w-[500px] h-[400px] p-10 rounded-md border">
                <form onSubmit={handleSubmit}>
                    <div className="pb-5">
                        <TextField
                            id="ID-basic"
                            label="아이디"
                            variant="standard"
                            value={user.username}
                            onChange={handleUserid}
                            error={errors.error_id}
                            helperText={errors.error_id ? LoginError.E_id : ''}
                            fullWidth
                        />
                    </div>
                    <div className="pb-5">
                        <TextField
                            id="standard-password-input"
                            label="비밀번호"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            onChange={handleUserpw}
                            value={user.password}
                            error={errors.error_pw}
                            helperText={errors.error_pw ? LoginError.E_pw : ''}
                            fullWidth
                        />
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox checked={rememberId} onChange={handleChecked} />} label="ID 저장" />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{  height: 50, fontSize: '1.2rem' }}
                            type="submit"
                            fullWidth
                        >로그인</Button>
                    </div>
                    <div className="flex justify-between py-5">
                        <Link to={"/userfind"} className="w-[130px] text-center">ID/PW 찾기</Link>
                        <span>|</span>
                        <Link to={"/signup"} className="w-[130px] text-center" >회원가입</Link>
                        <span>|</span>
                        <Link to={"/guest"} className="w-[130px] text-center">비회원예매확인</Link>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;
