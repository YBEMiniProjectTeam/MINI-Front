import styled from "styled-components";

export const HeaderScheduleWrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
`;

export const HeaderSchedule = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;  
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

export const CheckOutText = styled.span`
    ${Text}
    text-align: right;
`;

export const HeaderPersonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const HeaderPersonCount = styled.span`
    font-weight: 700;
    margin: 0 0.5rem;
`;

export const CalendarWrapper = styled.div`
  .react-calendar {
    width: 100%;
    border: none;
  }
  .react-calendar__tile--now {
    background: white;
    border: 1px solid #e7e7e7;
    border-radius: 3px;
  }
  .react-calendar__tile--now:hover {
    background: white;
  }
  .react-calendar__tile--active {
    background-color: #db074a;
  }
  .react-calendar__tile--active:hover {
    background-color: #db074a;
  }
  .react-calendar__tile {
    height: 60px;
  }
  .react-calendar__navigation {
    margin-bottom: 0;
  }
  .react-calendar__month-view__weekdays {
    abbr {
        text-decoration: none;
    }
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #f0f0f0;
  }
  .react-calendar__tile:disabled {
    opacity: 0.5;
    background-color: white;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: #db074a;
    color: white;
    border: none;
    border-radius: 0px;
  }
`;