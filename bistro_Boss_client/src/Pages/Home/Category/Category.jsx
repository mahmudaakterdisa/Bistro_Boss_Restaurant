import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slideImg1 from '../../../assets/home/slide1.jpg'
import slideImg2 from '../../../assets/home/slide2.jpg'
import slideImg3 from '../../../assets/home/slide3.jpg'
import slideImg4 from '../../../assets/home/slide4.jpg'
import slideImg5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (

        <section>
            <SectionTitle
                heading={"order Online"}
                subHeading={"From 11.00am to 10.00pm"}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide><img src={slideImg1} alt='slideImg' />
                    <h3 className='uppercase text-white -mt-16 text-xl text-center'>salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slideImg2} alt='slideImg' />
                    <h3 className='uppercase text-white -mt-16 text-xl text-center'>pizza</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slideImg3} alt='slideImg' />
                    <h3 className='uppercase text-white -mt-16 text-xl text-center'>soup</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slideImg4} alt='slideImg' />
                    <h3 className='uppercase text-white -mt-16 text-xl text-center'>Desserts</h3></SwiperSlide>
                <SwiperSlide><img src={slideImg5} alt='slideImg' />
                    <h3 className='uppercase text-white -mt-16 text-xl text-center'>salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;