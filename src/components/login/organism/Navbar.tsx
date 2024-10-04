import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { useState } from "react";
import useLoginStore from "../../../stores/login";
import Swal from "sweetalert2";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import NavLogin from "../molecules/NavLogin";

const Navbar = () => {
  const navigate = useNavigate();
  const { loginId, setLoginId } = useLoginStore();

  const handleMypage = () => {
    if (loginId) {
      navigate("/mypage");
    } else {
      Swal.fire({
        icon: "warning",
        title: "로그인 필요",
        text: "로그인 하시겠습니까?",
        showCancelButton: true,
        confirmButtonText: "로그인",
        cancelButtonText: "취소",
      }).then((res) => {
        /* Read more about isConfirmed, isDenied below */
        if (res.isConfirmed) {
          navigate("/login");
        } else {
          //취소
        }
      });
    }
  };

  return (
    <div className="flex justify-between items-center h-full w-full px-10 ">
      <div>
        <Stack direction="row" spacing={2}>
          <div className="flex items-center gap-16">
            <Link to={"/"}>
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/ci/logo-white_new2.png"
                alt="메가박스"
              />{" "}
            </Link>
            <Link to={"/"}>영화</Link>
            <Link to={"/event"}>이벤트</Link>
            <Link to={"/store"}>스토어</Link>
          </div>
        </Stack>
      </div>
      <div className="flex items-center gap-4">
        <span onClick={handleMypage}>마이페이지</span>
        {/* <Link to={"/mypage"} >마이페이지</Link>  */}
        <NavLogin />
      </div>
    </div>
  );
};

export default Navbar;
