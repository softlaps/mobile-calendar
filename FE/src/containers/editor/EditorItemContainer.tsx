import { CtrlBlock, ImgBlock } from 'components/editor/EditorConWrap';
import { useAppSelector } from 'hooks';
import { ItemInBodyProps } from 'interface/editor';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { RootState } from 'store';
import CalendarContainer from './calendar/CalendarContainer';

const EditorItemContainer = ({
  item,
  onClick,
  selectedDate,
  months,
}: ItemInBodyProps) => {
  const { prevImgs } = useAppSelector((state: RootState) => state.page);
  const [localData, setLocalData] = useState<{
    data: Array<string>;
    pageName: string;
  } | null>(null);

  useEffect(() => {
    if (prevImgs.length <= 0) return;
    prevImgs.forEach((el) => {
      if (el.pageName === item.pageName) {
        setLocalData(el);
      }
    });
  }, [prevImgs]);
  return (
    <div className="item swiper-zoom-container">
      <div className="swiper-zoom-target">
        <div className="ctrl_wrap">
          {item.ctrlItems?.map((ci, idx) => {
            return (
              <CtrlBlock
                onClick={onClick}
                img={ci}
                key={uuid()}
                pageNo={item.id}
                prevImg={localData && localData.data[idx]}
              />
            );
          })}
        </div>
        <div className="page_wrap">
          {item.ctrlItems?.map((ci) => (
            <ImgBlock key={uuid()} img={ci} />
          ))}
          <img
            src={
              (item?.tempSrc && item?.tempSrc) ??
              'https://cdn-icons-png.flaticon.com/512/107/107817.png'
            }
          />
        </div>
        {item.isCalendar && item.month && (
          <CalendarContainer
            month={item.month}
            months={months}
            selectedDate={selectedDate}
          />
        )}
      </div>
    </div>
  );
};

export default EditorItemContainer;