import React, { useState } from 'react'
import Card from './Card'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import emergencyy from "../assests/emergencyy.jpg";
import healthy from "../assests/healthy.jpg";
import testimonials from "../assests/testimonials.jpg";
import gamesTitle from "../assests/gamesTitle.jpg";
function  Cards() {
  const [cards,setCards]=useState([{
    id:1,
    title:"emergency crisis information ",
    Description:" Free, confidential mental health counseling for individuals in India.",
    image:emergencyy,
    link:"https://icallhelpline.org"
    },
    {
      id:2,
      title:"Healthy lifestyle resource",
      Description:"Meditation and sleep resources for relaxation and mental clarity.",
      image:healthy,
      link:"https://www.calm.com"
      },
      {
        id:3,
        title:" Student stories and testimonials",
        Description:"Showcases personal stories and testimonials on mental health, focusing on students and adults.",
        image:testimonials,
        link:"https://themighty.com"
        },
        {
          id:4,
          title:"Self relaxing tool",
          Description:"Offers soothing music and casual games like 2048, Sudoku,and Tic Tac Toe for quick mental relaxation.",
          image:gamesTitle,
          link:"https://www.lofiandgames.com"
          }
  ])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
    cssEase: "linear",

      };
  return (
    <div className='w-full h-[70vh] flex flex-col gap-[2vw]  py-5 items-center' id="services">
        <h1 className='font-extrabold text-[800] text-[2.25rem] text-[#FFFFFF]'>What We Provide</h1>
        <div className='w-full flex justify-center'>
        <Slider className='w-[80vw] ' {...settings}>
          {cards.map((data)=><Card data={data}></Card>)}
    
    </Slider>
    </div>
    </div>
  )
}

export default  Cards