import { Renault } from 'data/template/renault';
import styled from 'styled-components';
import { SwiperProps, SwiperRef, SwiperSlideProps } from 'swiper/react';
import { Swiper, SwiperModule } from 'swiper/types';
import { FcPlus } from 'react-icons/fc';

interface EditorConProps {
  Swiper: React.FunctionComponent<React.RefAttributes<SwiperRef> & SwiperProps>;
  SwiperSlide: React.FunctionComponent<SwiperSlideProps>;
  thumbsSwiper?: Swiper | null;
  FreeMode: SwiperModule;
  Navigation: SwiperModule;
  Thumbs: SwiperModule;
  swiperRef: React.Ref<SwiperRef> | undefined;
  onSwiper: (idx: number) => void;
}

interface itemProps {
  item: {
    id: number;
    tempSrc: string;
    name: string;
    ctrlItems?: Array<{
      w: string;
      h: string;
      l: string;
      t?: string;
    }>;
  };
}

const EditorConWrap = ({
  Swiper,
  SwiperSlide,
  thumbsSwiper,
  FreeMode,
  Navigation,
  Thumbs,
  swiperRef,
  onSwiper,
}: EditorConProps) => {
  return (
    <EditorConWrapBlock>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        onSlideChange={(i) => onSwiper(i.activeIndex)}
      >
        {Renault?.map((item) => (
          <SwiperSlide key={item?.id}>
            <EditorItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </EditorConWrapBlock>
  );
};

const EditorItem = ({ item }: itemProps) => {
  const onClick = () => {
    alert('클릭!');
  };
  return (
    <div className="item">
      <div className="ctrl_wrap">
        {item.ctrlItems?.map((ci, idx) => (
          <div
            onClick={onClick}
            key={idx}
            className="ctrl_handler"
            style={{
              width: ci.w,
              height: ci.h,
              top: ci.t,
              left: ci.l,
            }}
          >
            <FcPlus />
          </div>
        ))}
      </div>
      <div className="page_wrap">
        <img src={item?.tempSrc} />
      </div>
    </div>
  );
};

const EditorConWrapBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper-slide {
    display: flex;
    align-content: center;
    justify-content: center;

    .item {
      width: calc(100% - 32px);
      max-width: 500px;
      position: relative;

      .ctrl_wrap {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        .ctrl_handler {
          position: absolute;
          border: 1px dashed;
        }
      }
    }
  }
`;

export default EditorConWrap;
