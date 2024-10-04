import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
// - 0 + 버튼

type numberProps = {
    num : number,
    handlePlus: () => void,
    handleMinus: () => void,
}

const PersonnelButton = ({num, handlePlus , handleMinus}:numberProps) => {
  const [btnNum, setBtnNum] = useState<number>(0);
  const handelBtnMinus = () => {
    if(btnNum > 0){
      setBtnNum(btnNum -1);
      handleMinus();
    }
  }

  const handelBtnPlus = () => {
    if(btnNum >=0 && btnNum <= 1){
      if (num<2){
        setBtnNum(btnNum + 1);
        handlePlus();
      }
    }
  }
  return (
    <div>
      <div className="w-fit border-2">
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={handelBtnMinus}> 
          -
        </Button>

         <span className="flex justify-center items-center w-3">{btnNum}</span>  

          <Button variant="outlined" onClick={handelBtnPlus}>
            +
          </Button>
        </Stack>
      </div>
    </div>
  );
};
export default PersonnelButton;