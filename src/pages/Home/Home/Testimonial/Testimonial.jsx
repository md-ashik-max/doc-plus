import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('/testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
            .catch(error => console.error('Error fetching testimonials:', error));
    }, []);


    return (
        <div className="mx-6 my-12 md:my-32">
            <div className="mb-8">
                <p className="border-2 px-6 py-2 font-semibold w-32 rounded-3xl bg-[#FBFBFB] text-[#020043] border-[#020043]">Testimonial</p>
                <h2 className="text-4xl font-semibold my-6">What they say about us</h2>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        className: 'small-device',
                    },
                    640: {
                        slidesPerView: 2,
                        className: 'medium-device',
                    },
                    1024: {
                        slidesPerView: 3,
                        className: 'large-device',
                    },
                }}
            >
                {testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="p-6 bg-[#FFFFF5] rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{testimonial.title}</h3>
                            <p className="text-gray-700 mb-4">{testimonial.content}</p>
                            <div className="flex items-center">
                                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="text-lg font-bold">{testimonial.author}</p>
                                    <p className="text-sm text-gray-600">{testimonial.profession}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Rating
                                    className='text-customYellow'
                                    style={{ maxWidth: 180 }}
                                    value={testimonial.rating}
                                    readOnly
                                />

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default Testimonial;