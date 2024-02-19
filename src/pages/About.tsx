import { ABOUT_TABS_LINKS } from '../utils/constants';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import hanbit from '../assets/about/hanbit_about.png';
import SwiperNavBtns from '../components/SwiperNavBtns';
import 'swiper/css';
import { useState } from 'react';

const About = () => {
  const about = [
    'I’m Han Bit Kang, a dedicated Front-End Developer.',
    'Completed a one-year Systems Analysis and Development course at FIAP in São Paulo, Brazil.',
    'In 2023, I moved to South Korea to enroll in HangHae 99 Academy’s Front-End Development Bootcamp and completed the course in July 2023.',
    'I am enthusiastic about exploring opportunities that will allow me to continue growing in this dynamic field. ',
  ];

  const [end, setEnd] = useState<boolean>(false);
  const [beginning, setBeginning] = useState<boolean>(true);

  const slideChangeHandler = (swiper: SwiperClass) => {
    setEnd(swiper.isEnd);
    setBeginning(swiper.isBeginning);
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* About Contact Navbar */}
      <div className="flex h-[30%] p-8">
        <ul className="w-[45%] flex items-center justify-between text-2xl font-light">
          {ABOUT_TABS_LINKS.map((link, idx) => {
            return (
              <li
                key={idx}
                className="hover:underline hover:underline-offset-[10px]"
              >
                <NavLink
                  to={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* About Context */}
      <div className="w-full h-screen flex">
        {/* About Description Swiper */}
        <Swiper className="w-[65%]" onSlideChange={slideChangeHandler}>
          {about.map((desc, idx) => {
            return (
              <SwiperSlide key={idx}>
                <p className="w-[80%] text-4xl leading-snug font-light ">
                  {desc}
                </p>
              </SwiperSlide>
            );
          })}
          <SwiperNavBtns isBeginning={beginning} isEnd={end} />
        </Swiper>

        {/* About Profile Image */}
        <div className="flex self-end w-[30%]">
          <img
            src={hanbit}
            alt="Front End Developer Han Bit Kang Profile"
            className="w-full h-[80%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
