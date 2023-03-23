import styled from 'styled-components';

const CalendarWrap = ({ children }: { children: React.ReactNode }) => {
  return <CalendarWrapBlock>{children}</CalendarWrapBlock>;
};

const CalendarWrapBlock = styled.div`
  width: 67.3992%;
  height: 72.7272%;
  position: absolute;
  /* border: 1px solid black; */
  right: 0;
  bottom: 0;
  z-index: 9;
  right: 3.7851%;
  bottom: 5.3173%;
  display: flex;
  flex-direction: column;
  .row {
    width: 100%;
    height: 20%;
    /* border: 1px solid green; */
    display: flex;

    .cell {
      width: 14.2857%;
      /* border: 1px solid yellow; */
      padding: 0.3em;
      font-size: 35%;

      &.disabled {
        opacity: 0;
        pointer-events: none;
      }
      &.red {
        span {
          color: #e64c66;
        }
        .red.txt {
          zoom: 0.7;
        }
      }
      .cell_top {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
    }
  }
`;

export default CalendarWrap;
