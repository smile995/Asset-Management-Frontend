import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="mb-10 ">

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://cdn.under30ceo.com/wp-content/uploads/2021/06/pexels-fauxels-3184312.jpg.webp)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-5xl font-bold">Join Us as a Valued <span className='text-fuchsia-600'>Team</span> Member!</h1>
                                <p className="mb-5">Embark on a journey of professional growth and success by joining our dynamic team! As an employee at any Company , you will become an integral part of a forward-thinking community that values innovation, collaboration, and individual excellence.</p>
                                <Link to={'/employeeRegister'}>
                                    <button className="btn btn-secondary">Join as an Employee</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://hravailable.com/public/uploads/blogs/thumb/1677239143.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Join as an HR/Admin Maestro and Redefine  <span className='text-fuchsia-600'>Excellence!</span> </h1>
                                <p className="mb-5">Unlock your potential for professional development, engage in challenging projects, and collaborate with a diverse and talented workforce. Your journey towards shaping a thriving workplace culture starts here, with us </p>
                                <Link to={'/adminRegister'}>
                                    <button className="btn btn-secondary">Join as HR/Admin</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;