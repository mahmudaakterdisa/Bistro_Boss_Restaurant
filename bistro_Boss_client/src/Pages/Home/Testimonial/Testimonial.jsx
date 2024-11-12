import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews)
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'what our client says'}
                heading={'testimonial'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >

                        <div className=" mx-20 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="text-sm py-2">{review.details}</p>
                            <h3 className="text-2xl text-orange-400 text-center py-5">{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }


            </Swiper>
        </section>
    );
};

export default Testimonial;