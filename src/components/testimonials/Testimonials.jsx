import React from 'react';
import './Testimonials.sass';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonialsItems = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam accusantium nobis aliquam eveniet. Totam deleniti ut mollitia veritatis. Enim aliquid ipsum excepturi sunt corporis eos, reprehenderit labore nostrum placeat!',
    },
    {
      avatar: AVTR2,
      name: 'Shatta Wale',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam accusantium nobis aliquam eveniet. Totam deleniti ut mollitia veritatis. Enim aliquid ipsum excepturi sunt corporis eos, reprehenderit labore nostrum placeat!',
    },
    {
      avatar: AVTR3,
      name: 'Kwame Despite',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam accusantium nobis aliquam eveniet. Totam deleniti ut mollitia veritatis. Enim aliquid ipsum excepturi sunt corporis eos, reprehenderit labore nostrum placeat!',
    },
    {
      avatar: AVTR4,
      name: 'Nana Ama McBrown',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam accusantium nobis aliquam eveniet. Totam deleniti ut mollitia veritatis. Enim aliquid ipsum excepturi sunt corporis eos, reprehenderit labore nostrum placeat!',
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {testimonialsItems.map((item) => (
          <SwiperSlide key={item.name} className="testimonial">
            <div className="client__avatar">
              <img src={item.avatar} alt={item.Swipername} />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="client__review">{item.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
