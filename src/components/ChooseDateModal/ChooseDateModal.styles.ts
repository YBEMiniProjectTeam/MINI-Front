import styled from "styled-components";
import Calendar from 'react-calendar';

export const HeaderScheduleWrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
`;

export const HeaderSchedule = `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;  
`;

export const HeaderScheduleLeft = styled.div`
    ${HeaderSchedule}
`;

export const Text = `
    display: block;
    color: #888;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    margin-bottom: 4px;
`;

export const CheckInText = styled.span`
    ${Text}
    text-align: left;
`;

export const Date = styled.span`
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    color: #4d4d4d;
`;

export const HeaderScheduleMid = styled.div`
    width: 52px;
`;

export const HeaderScheduleRight = styled.div`
    ${HeaderSchedule}
`;

export const CheckOutText = styled.span`
    ${Text}
    text-align: right;
`;

export const StyledCalendar = styled(Calendar)`
  .react-calendar__tile {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    color: #333;
  }

  .react-calendar__month-view__weekdays__weekday {
    color: #db074a;
    font-weight: bold;
  }
`;