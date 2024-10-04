import { ChangeEvent, useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { LoginError } from "../contexts/ErrorMsg";
import Postcode from "../components/login/organism/Postcode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        username: "",
        password: "",
        name: "",
        tel: "",
        zip: "",
        address1: "",
        address2: "",
    });
    const [passwordChk, setPasswordChk] = useState<string>("");
    
    const [errors, setErrors] = useState({
        error_id: false,
        error_Pw: false,
        error_Phone: false,
        error_PWCHK: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        setSignup((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleChangepwchk = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordChk(e.target.value);
    };

    // 비밀번호 일치 여부 확인
    useEffect(() => {
        if (signup.password && passwordChk) {
            setErrors((prev) => ({
                ...prev,
                error_PWCHK: signup.password !== passwordChk,
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                error_PWCHK: false,
            }));
        }
    }, [signup.password, passwordChk]);

    const validateEmail = (value: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailRegex.test(value);
        setErrors((prev) => ({ ...prev, error_id: !isValid }));
        return isValid;
    };

    const validationPassWord = (value: string): boolean => {
        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/;
        const isValid = passwordRegEx.test(value);
        setErrors((prev) => ({ ...prev, error_Pw: !isValid }));
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isEmailValid = validateEmail(signup.username);
        const isPasswordValid = validationPassWord(signup.password);

        if (isEmailValid || isPasswordValid || errors.error_PWCHK) {
            alert("아이디와 비밀번호의 형식을 확인하세요.");
            return; // 유효하지 않으면 함수 종료
        }

        try {
            const response = await axios.post("http://localhost:8080/auth/signup", signup);
            if (response.status === 200) {
                alert("회원가입 완료!!");
                navigate('/login');
            } else {
                alert("회원가입 에러: " + response.data.message || "알 수 없는 오류");
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                alert("회원가입 중 오류 발생: " + error.response.data.message || "알 수 없는 오류");
            } else {
                alert("회원가입 중 네트워크 오류 발생");
            }
            console.error(error);
        }
    };

    return (
        <div className="w-full h-full flex justify-center py-10">
            <div className="w-[600px]">
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            id="username"
                            label="아이디"
                            variant="standard"
                            value={signup.username}
                            onChange={handleChange}
                            error={errors.error_id}
                            helperText={errors.error_id ? LoginError.E_id : ''}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            id="password"
                            label="비밀번호"
                            variant="standard"
                            type="password"
                            autoComplete="current-password"
                            value={signup.password}
                            onChange={handleChange}
                            error={errors.error_Pw}
                            helperText={errors.error_Pw ? LoginError.E_pw : errors.error_PWCHK ? LoginError.E_pwchk : ''}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            id="passwordChk"
                            label="비밀번호 확인"
                            variant="standard"
                            type="password"
                            autoComplete="current-password"
                            value={passwordChk}
                            onChange={handleChangepwchk}
                            error={errors.error_PWCHK}
                            helperText={errors.error_PWCHK ? LoginError.E_pwchk : ''}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            id="name"
                            label="이름"
                            variant="standard"
                            value={signup.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            id="tel"
                            label="연락처"
                            variant="standard"
                            value={signup.tel}
                            onChange={handleChange}
                            error={errors.error_Phone}
                            helperText={errors.error_Phone ? LoginError.E_phone : ''}
                            fullWidth
                            required
                        />
                    </div>
                    <div>
                        <Postcode 
                            signup={signup}
                            setSignup={setSignup}
                        />
                    </div>
                    <div>
                        <TextField
                            id="address2"
                            label="상세주소"
                            variant="standard"
                            value={signup.address2}
                            onChange={handleChange}
                            fullWidth
                        />
                    </div>
                    <div className="py-10">
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ height: 50, fontSize: '1.2rem' }}
                            type="submit"
                            fullWidth
                        >회원가입</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
