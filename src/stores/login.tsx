import create from 'zustand';

// 상태와 액션의 타입 정의
interface LoginState {
  loginId: string; // id와 pin을 포함하는 객체
  setLoginId: (id:string) => void; // id와 pin을 설정하는 함수
}

// zustand 스토어 생성
const useLoginStore = create<LoginState>((set) => ({
  loginId: '', // 초기 상태
  setLoginId: (text: string) => set({ loginId: text }), // 상태 업데이트 함수
}));

export default useLoginStore;
