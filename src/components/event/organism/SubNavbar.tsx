import { useEffect, useState } from "react";
import Button from "../atom/Button";

const SubNavbar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scroll)
  return (
    <div className={`w-full fixed  px-5 bg-subColor text-white flex ${scroll > 20 ? 'top-0' : 'top-24'}`}>
      <Button title="전체" />
      <Button title="미소지기Pick" />
      <Button title="영화" />
      <Button title="제휴/할인" />
    </div>
  );
};

export default SubNavbar;