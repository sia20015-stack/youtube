import React, { useEffect, useState } from 'react'

import { musicText } from '../../data/music'
import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const Music = ({videos, title, id}) => {

  const[loading, setLoding] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoding(false)
    },400);
  },[])

  const musicClass = loading ? 'isLoading' : 'isLoaded'

  return (
    <section id={id} className={musicClass}>
      <h2>{title}</h2>
      <div className='music__inner'>
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          autoplay={{
            delay:2500,
            disableOnInteraction:false,
          }}
          breakpoints={{
            640:{
              slidesPerView:5,
              spaceBetween:15
            },
            768:{
              slidesPerView:6,
              spaceBetween:15
            },
            1024:{
              slidesPerView:8,
              spaceBetween:15
            },
            1640:{
              slidesPerView: 9,
              spaceBetween:15
            },
            2000:{
              slidesPerView: 10,
              spaceBetween:15
            },
          }}
          modules = {[Autoplay, Navigation]}
          className="mySwiper"
        >
        {videos.map((music, key)=>(
          <SwiperSlide key={key}>
          <div className='music' key={key}>
            <div className='music__img play__icon'>
              <Link to={`/channel/${music.channelID}`}>
                 <img src={music.img} alt='{music.name}'/>
              </Link>
            </div>
            <div className='music__info'>
              <Link to={`/channel/${music.channelID}`}>
                 {music.name}
              </Link>
            </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Music