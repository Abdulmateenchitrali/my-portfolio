import React, { useContext } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Design1 from '../../img/portfolio/design1.jpg'
import Design2 from '../../img/portfolio/design2.jpg'
import Design3 from '../../img/portfolio/design3.jpg'
import Design4 from '../../img/portfolio/design4.jpg'
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio">
            <span style={darkMode ? { color: "white" } : ''}>Recent Project</span>
            <span>Portfolio</span>

            {/* Slider */}

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={3}
                className='portfolio-slider'
                grabCursor={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

            >
                <SwiperSlide>
                    <img src={Design1} alt="Design1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Design2} alt="Design2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Design3} alt="Design3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Design4} alt="Design4" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Portfolio