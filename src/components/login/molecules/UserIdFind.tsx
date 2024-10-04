import { Button, Input, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { UserFindError } from "../../../contexts/ErrorMsg";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { E164Number } from "libphonenumber-js/types.cjs";
import axios from "axios";

type findIdType = {
    findId:{
        user_name : string,
        tel : string,
        username    : string,
    }
    setFindId: (newFindId: { user_name: string; tel: string; username: string }) => void;
  } 

 type errorsType = {
    errors_id : boolean|undefined,
    errors_name: boolean|undefined,
    errors_phone : boolean|undefined,
 } 
const UserIdFind = ({findId, setFindId}:findIdType) => {
    const [errors, setErrors] = useState<errorsType>({
        errors_name: false,
        errors_id : false,
        errors_phone : false,
    })
    const handleNameChange = (e : ChangeEvent<HTMLInputElement>) => {
        
        if (!e.target.value){
            setErrors({ ...errors, errors_name: true });
            setFindId({...findId, user_name : ''})
        } 
        setFindId({...findId, user_name : e.target.value})
    }
    const handlePhoneChange = (value?: E164Number) => {
        if (!value) {
            // 전화번호가 비어있을 경우 오류 상태를 설정
            setErrors({ ...errors, errors_phone: true });
            setFindId({...findId, username : ''})
          } else {
            // 전화번호가 존재할 경우 오류 상태를 해제
            setErrors({ ...errors, errors_phone: false });
          }
          setFindId({
            ...findId,
            tel: value || '',
        });
      };

      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); 
        if (!findId.tel) {
            setErrors((prevErrors) => ({ ...prevErrors, errors_phone: true }));
            return;
          }

        setFindId({...findId,tel: '01'||findId.tel.substring(2)  })  

        if (!errors.errors_id && !errors.errors_phone ){
     
            const response = async () => {
              const response = await axios.post("http://localhost:8080/auth/findid",findId);
      
              console.log(response)
            } 
            console.log(findId)
            setFindId({...findId,
            username : "test",
            })
        } else {
            setFindId({...findId,
                username : '',
                })        
        }

        if(findId.user_name === 'no'){
            setFindId({...findId,
                username : '',
                })   
        }
    }  


    return <div className="w-60 p-5">
        <form onSubmit={handleSubmit}>
            <div>
                    <TextField
                            id="findName"
                            label="성명"
                            variant="standard"
                            type="text"
                            autoComplete="current_Name"
                            value={findId.user_name}
                            onChange={handleNameChange}
                            error={errors.errors_id}
                            helperText={errors.errors_id ? UserFindError.E_username  : ''}
                            fullWidth
                            required
                    />
            </div>
            <div>
                <h2>전화번호</h2>
            <PhoneInput
                placeholder="Enter phone number"
                value={findId.tel}
                onChange={handlePhoneChange}
                defaultCountry="KR"
                style={{
                    borderColor: errors.errors_phone ? 'red' : undefined,  // 오류 시 빨간색 테두리
                    borderWidth: errors.errors_phone ? '2px' : '1px',
                    borderStyle: errors.errors_phone ? 'solid' : 'inherit',
                    padding: '10px',
                    width: '100%',
                  }}
                />
                {errors.errors_phone && (
                  <Typography variant="body2" color="error">
                    {UserFindError.E_userphone} {/* 오류 메시지 출력 */}
                  </Typography>
                )}
            </div>
            <div className="py-6">
                 {findId.username != '' ? '귀하의 아이디는 '+ findId.username + ' 입니다.': ''} 
            </div>
            <div className="pt-5">
                    <Button
                                variant="contained"
                                color="primary"
                                sx={{ height: 50, fontSize: '1.2rem' }}
                                type="submit"
                                fullWidth
                    >ID 찾기</Button>
            </div>
        </form>
    </div>
}

export default UserIdFind;