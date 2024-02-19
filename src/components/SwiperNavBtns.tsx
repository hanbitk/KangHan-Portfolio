import React from 'react';
import { useSwiper } from 'swiper/react';
import SwiperButton from './SwiperButton/SwiperButton';
import { NavLink } from 'react-router-dom';

interface ISwiperProps {
  isBeginning: boolean;
  isEnd: boolean;
}

const SwiperNavBtns = ({ isBeginning, isEnd }: ISwiperProps) => {
  const swiper = useSwiper();

  const slidePrevHandler = () => swiper.slidePrev();
  const slideNextHandler = () => swiper.slideNext();

  return (
    <div className="w-[80%] h-[30%] flex justify-between py-5 text-2xl font-light">
      {/* Prev Button */}
      <SwiperButton onClick={slidePrevHandler}>
        {/* {isBeginning ? '<\u2010' : '<\u2010'} */}
        {isBeginning ? (
          <NavLink
            to="/resume/HBK_Resume_EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </NavLink>
        ) : (
          '<\u2010'
        )}
      </SwiperButton>

      {/* Next Button */}
      <SwiperButton onClick={slideNextHandler} isEnd={isEnd}>
        {isEnd ? '\u2010>' : '\u2010>'}
      </SwiperButton>
    </div>
  );
};

export default SwiperNavBtns;
