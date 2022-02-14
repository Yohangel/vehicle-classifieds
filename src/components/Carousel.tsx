import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Carousel(props: {
  images: string[]
  onClick?: any
  imgClass?: string
}) {
  const { images, onClick, imgClass } = props
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      onClick={() => onClick && onClick()}
    >
      {images.map((img, i) => (
        <SwiperSlide
          key={img + Math.random()}
          className={"inline-flex items-center self-center "}
        >
          <img
            src={img}
            className={"w-full h-auto mx-auto" + (imgClass && " " + imgClass)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
