import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Categories.css'
import { Link } from 'react-router-dom';
export default function Categories() {
  const getCategories = async()=>{
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=10`);
      return data;
  }
  const {data,isLoading} = useQuery('web_categories',getCategories);
  if (isLoading){
    return <p>...loading</p>
  }
  return (
    <div className='container'>
      <Swiper
      modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={4.5}
      navigation
      loop={true}
      autoplay={{
        delay:1000
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      {data?.categories.length?data?.categories.map( (category)=>
      <SwiperSlide key={category._id} >
        <Link to={`/products/category/${category._id}`}>
        <img src={category.image.secure_url} />
        </Link>
      </SwiperSlide>
       ):'no category found'}
      </Swiper>
    </div>
  )
}