import PersonnelButton from "../Atom/PersonnelButton";

type Props = {
  num: number,
  handleMinus: () => void;
  handlePlus: () => void;
};
// 관람인원선택
const NumberOfSpectators = ({num, handleMinus, handlePlus}:Props) => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-3">
        성인
        <PersonnelButton num={num} handleMinus={handleMinus} handlePlus={handlePlus} />
        청소년
        <PersonnelButton num={num} handleMinus={handleMinus}  handlePlus={handlePlus}/>
        경로
        <PersonnelButton num={num} handleMinus={handleMinus} handlePlus={handlePlus}/>
        우대 <PersonnelButton num={num} handleMinus={handleMinus} handlePlus={handlePlus}/>
      </div>
    </div>
  );
};
export default NumberOfSpectators;