import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import UserIdFind from '../components/login/molecules/UserIdFind';
import UserPwFind from '../components/login/molecules/UserPwFInd';

interface LinkTabProps {
  label: string;
  href: string;
}

type findIdType = {
  user_name : string,
  tel : string,
  username : string,
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const UserFindPage = () => {
  const [tab, setTab] = useState<number>(0);
  const [FindId, setFindId] = useState<findIdType>({
    user_name:'',
    tel:'',
    username : '',
  })

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const renderContent = () => {
    switch (tab) {
      case 0:
        return <UserIdFind findId={FindId} setFindId={setFindId} />;
      case 1:
        return <UserPwFind />;
      default:
        return null;
    }
  };

  return (
    <div className='w-full h-[800px] flex justify-center items-center '>
      <div className='w-[500px] h-[500px] border'>
        <div className='w-full h-20  flex justify-center items-center text-center'>
          <h1>아이디 / 비밀번호 찾기</h1>
        </div>
        <div className='flex justify-center items-center'>
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="nav tabs example"
            role="navigation"
          >
            <LinkTab label="아이디 찾기" href="/find-id" />
            <LinkTab label="비밀번호 찾기" href="/find-password" />
          </Tabs>
        </div>
        <div className='flex justify-center items-center '>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default UserFindPage;
