import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import {Button, TextField } from "@mui/material";

type postType = {
  signup: {
    zip: string;
    address1: string;
    address2: string;
  };
  setSignup: React.Dispatch<React.SetStateAction<any>>;
}

const Postcode = ({signup, setSignup}:postType) => {
  const scriptUrl = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data:any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';

      setSignup((prev:any) => ({
        ...prev,
        zip: data.zonecode,
        address1: fullAddress,
      }));
    }
   
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div>
        <TextField
        id="userZipcode"
        label="주소번호"
        variant="standard"
        value={signup.zip}
        sx={{width: 200}}
        />
        <Button type='button' variant="contained" onClick={handleClick}>
          주소찾기
        </Button>
        <div>
            <TextField
            id="userAddress1"
            label="주소"
            variant="standard"
            value={signup.address1}
            fullWidth
            />
        </div>
    </div>
  );
};

export default Postcode;