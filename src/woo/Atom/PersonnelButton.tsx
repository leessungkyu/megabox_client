import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
// - 0 + 버튼

const PersonnelButton = () => {
  const [num, setNum] = useState<number>(0);

  const plusNum = () => {
    setNum((prev) => prev + 1);
    num >= 2 ? setNum(2) : setNum(num + 1);
  };
  const miunsNum = () => {
    setNum((prev) => prev - 1);
    num === 0 ? setNum(0) : setNum(num - 1);
  };

  return (
    <div>
      <div className="w-fit border-2">
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={miunsNum}>
            -
          </Button>

          <span className="flex justify-center items-center">{num}</span>

          <Button variant="outlined" onClick={plusNum}>
            +
          </Button>
        </Stack>
      </div>
    </div>
  );
};
export default PersonnelButton;