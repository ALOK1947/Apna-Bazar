import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Home() {
  return (
    <div className='w-full h-full bg-blue-400 pt-12 sm:pt-0'>
      <div className='relative pb-64'>
        <Link to={'/shop'}>
          <div className="overflow-hidden w-full sm:hidden bg-orange-300">
            <div className="animate-marquee whitespace-nowrap py-5 w-screen flex flex-wrap justify-center gap-2">
              <span className="mx-4 text-xl font-bold bg-orange-500 text-white p-2 rounded-lg">
                Flat 50% OFF | Use Code: SAVE50
              </span>
              <span className="mx-4 text-xl font-bold bg-yellow-500 text-white p-2 rounded-lg">
                Buy 1 Get 1 Free | Code: BOGO
              </span>
            </div>
          </div>
        </Link>

        <Link to={'/shop'}>
          <img className="object-contain sm:mb-0 max-w-full max-h-full mb-56 sm:mb-0 mt-5 sm:mt-0" src="homes.webp" alt="Home" />
        </Link>
      </div>

      <div className="justify-between absolute top-[490px] sm:top-[650px] w-full flex overflow-hidden">
        <Swiper
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          loopAdditionalSlides={3}
          watchSlidesProgress={true}
          modules={[Autoplay]}
          style={{ '--swiper-wrapper-transition-timing-function': 'linear' }}
        >
          {[
            { src: 'shoes.webp', link: '/shop/mens-shoes', alt: 'Shoes' },
            { src: 'beauty.webp', link: '/shop/beauty', alt: 'Beauty' },
            { src: 'furniture.webp', link: '/shop/furniture', alt: 'Furniture' },
            { src: 'phone.webp', link: '/shop/smartphones', alt: 'Phone' },
            { src: 'shoess.webp', link: '/shop/sports-accessories', alt: 'Shoes' },
            { src: 'kitchen.webp', link: '/shop/kitchen-accessories', alt: 'Kitchen' },
            { src: 'laptop.webp', link: '/shop/laptops', alt: 'Laptop' }
          ].map((item, index) => (
            <SwiperSlide key={index} className="w-auto flex m-7 items-center justify-center">
              <Link to={item.link}>
                <img src={item.src} width={'400px'} height={'200px'} alt={item.alt} className="rounded-lg shadow-lg" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
