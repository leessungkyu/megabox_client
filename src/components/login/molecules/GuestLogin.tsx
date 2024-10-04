import {TextField, Button} from '@mui/material'
import PhoneInput from 'react-phone-number-input'
import {ChangeEvent, useState} from 'react'
import { E164Number } from 'libphonenumber-js/types.cjs'

const GuestLogin = () => {
    const [guest, setGuest] = useState<{
        username: string|undefined,
        usertel : string|undefined,
    }>({
        username: '',
        usertel : '',
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGuest({...guest, username:e.target.value})
    }
    const handlePhoneChange = (e: E164Number) => {
        setGuest({...guest, usertel:e})
    }
    return <div className='w-[500px] h-[600px]'>
        <form>
            <div><h1>비회원예매확인</h1></div>
            <div>
                <TextField
                                id="guestname"
                                label="성명"
                                variant="standard"
                                type="text"
                                autoComplete="current_Name"
                                value={guest.username}
                                onChange={handleChange}
                                // error={errors.errors_id}
                                // helperText={errors.errors_id ? UserFindError.E_username  : ''}
                                fullWidth
                                required
                        />
            </div>
            <div>
            <h2>전화번호</h2>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={guest.usertel}
                    onChange={handlePhoneChange}
                    defaultCountry="KR"
                />     
            </div>
            <div>
                <TextField
                                id="guestpw"
                                label="비밀번호"
                                variant="standard"
                                type="text"
                                autoComplete="current_Name"
                                value={guest.username}
                                onChange={handleChange}
                                fullWidth
                                required
                        />
                </div>
                <div className='px-3 py-10 text-gray'>
                    * 비회원 정보 오 입력 시 예매 내역 확인/취소 및 티켓 발권이 어려울 수 있으니 다시 한번 확인해 주시기 바랍니다.
                </div>
                <div>                    
                    <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ height: 50, fontSize: '1.2rem' }}
                                    type="submit"
                                    fullWidth
                        >비회원예매확인</Button>
                </div>
            </form>
    </div>
}
export default GuestLogin;