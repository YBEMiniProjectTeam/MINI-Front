import { atom } from 'recoil';

interface CheckInAndOutDate {
  startDate: string | null;
  endDate: string | null;
}

export const checkInAndOutDateState = atom<CheckInAndOutDate>({
  key: 'checkInAndOutDateState',
  default: {    
    startDate: '',
    endDate: '',
  },
});