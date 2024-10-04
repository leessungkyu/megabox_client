import { Button, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import { UserFindError } from '../../../contexts/ErrorMsg'
import { E164Number } from 'libphonenumber-js/types.cjs'

type findPwType = {
        userid: string|undefined,
        userphone: string|undefined,
}

type errorType = {
    error_id : boolean|undefined,
    error_phone : boolean|undefined,
}
const UserPwFind = () => {
    const [findPw, setFindPw] = useState<findPwType>({
        userid: '',
        userphone: '',
    })
    const [errors, setErrors] = useState<errorType>({
        error_id : false,
        error_phone : false,
    })

    const handleNameChange = (e : ChangeEvent<HTMLInputElement>) => {
        
        if (!e.target.value){
            setErrors({ ...errors, error_id: true });
        } 
        setFindPw({...findPw, userid : e.target.value})
    }
    const handlePhoneChange = (value?: E164Number) => {
        if (!value) {
            // 전화번호가 비어있을 경우 오류 상태를 설정
            setErrors({ ...errors, error_phone: true });
            setFindPw({...findPw, userphone : ''})
          } else {
            // 전화번호가 존재할 경우 오류 상태를 해제
            setErrors({ ...errors, error_phone: false });
          }

        setFindPw({
          ...findPw,
          userphone: value || '',
        });
      };

      const [auth,setAuth] = useState<{value:string, step: string}>({value:'',step:'0'});
      const [authTime, setAuthTime] = useState<boolean>(false);
      const [timer, setTimer] = useState<number>(0);  
      const handlesetstep = (value:string) => {
        setAuth({...auth, step:value})
      }
      const handlesetAuth = (e:ChangeEvent<HTMLInputElement>) => { 
           setAuth({...auth, value: e.target.value})
           if(e.target.value === 'test'){
                setAuth({value:'', step:'2'})
                setAuthTime(false); 
           }
      }
      const formatTime = () => {
		const minutes = Math.floor(timer / 60);
		const seconds = timer % 60;
		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	};
   // 인증 단계에 따른 타이머 설정
   useEffect(() => {
    let interval: number;
    if (auth.step === '1') {
        setTimer(10);  // 3분 타이머 설정
        interval = window.setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                    clearInterval(interval);
                    setAuthTime(false);
                    setAuth({...auth, value:''})
                    handlesetstep('0')
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);
    }

    return () => clearInterval(interval);
}, [auth.step]);
    
    return <div className="w-60 p-5">
    <form >
        <div>
                <TextField
                        id="findName"
                        label="아이디"
                        variant="standard"
                        type="text"
                        autoComplete="current_Name"
                        value={findPw.userid}
                        onChange={handleNameChange}
                        error={errors.error_id}
                        helperText={errors.error_id ? UserFindError.E_userid  : ''}
                        fullWidth
                        required
                />
        </div>
        <div>
             <h2>전화번호</h2>
                 <PhoneInput
                    placeholder="Enter phone number"
                    value={findPw.userphone}
                    onChange={handlePhoneChange}
                    defaultCountry="KR"
                    style={{
                        borderColor: errors.error_phone ? 'red' : undefined,  // 오류 시 빨간색 테두리
                        borderWidth: errors.error_phone ? '2px' : '1px',
                        borderStyle: errors.error_phone ? 'solid' : 'inherit',
                        padding: '10px',
                        width: '100%',
                    }}
                />
                {errors.error_phone && (
                  <Typography variant="body2" color="error">
                    {UserFindError.E_userphone} {/* 오류 메시지 출력 */}
                  </Typography>
                )}

            </div>
            <div className='py-5'>
            <Button
                                variant="contained"
                                color="primary"
                                sx={{ height: 50, fontSize: '1.2rem' }}
                                type="button"
                                onClick={()=>handlesetstep('1')}
                                fullWidth
                                id='auth1'
                >인증</Button>
            </div>
            <div>
                { (auth.step === '1') &&
                        <>
                        <TextField
                            id="authCode"
                            label="인증번호"
                            variant="standard"
                            type="text"
                            autoComplete="off"
                            value={auth.value}
                            onChange={handlesetAuth}
                            fullWidth
                            required
                        />
                        <Typography variant="body2" color="primary">
                            남은 시간: {formatTime()}
                        </Typography>
                    </>
                }
                {
                    (auth.step === '2')  &&  <h2>인증완료</h2>
                }
            </div>
            <div>
                <Button
                                variant="contained"
                                color="primary"
                                sx={{ height: 50, fontSize: '1.2rem'}}
                                type="submit"
                                fullWidth
                                disabled={auth.step === '2' ? false: true}
                >비밀번호찾기</Button> 
            </div>
        </form>
        </div>
}

export default UserPwFind;