import useLoginStore from "../../../stores/login"
import {Avatar} from "@mui/material"
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useState, useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const AbsoluteMenu = styled(Menu)(({ theme }) => ({
    position: 'absolute',
    top: '50px', // 원하는 위치를 설정
    right: '0', // 원하는 위치를 설정
}));


const NavLogin = () => {
    const {loginId, setLoginId} = useLoginStore();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const Navigate = useNavigate();

    useEffect(() => {
        const storedLoginId = localStorage.getItem('login-id');
        if (storedLoginId) {
            setLoginId(storedLoginId); // localStorage의 값으로 상태 업데이트
        }
    }, [setLoginId]); // setLoginId가 변경될 때만 실행


    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const handleLogout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('login-id');
        localStorage.removeItem('login-pin');
        setLoginId('');
        setAnchorEl(null);
      }

      const handleSignup = () => {
        if (!loginId){
            setAnchorEl(null);
            Navigate("/signup");
        } else {
            alert("로그인 중엔 사용 불가")
        }
      }
    
    return (
        <div style={{ position: 'relative' }}>
            {loginId ?
                <div>
                    <div onClick={handleMenu}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>{loginId.substring(0,1)}</Avatar>
                    </div>
                    <AbsoluteMenu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            position: 'absolute',
                            top: '100px', // 원하는 위치를 설정
                            right: '0', // 원하는 위치를 설정
                            width: '100px',
                        },
                    }}
                    >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    <MenuItem onClick={handleSignup}>Signup</MenuItem>
                    </AbsoluteMenu>
                </div>
            :    
                <Link to={"/login"}>
                    <Button variant="outlined">로그인</Button>
                </Link>
            }      
        </div>
    )
}

export default NavLogin;