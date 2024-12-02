import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./styles.css";
import { Button } from "../../../components/ui/button";

const sliderInfo = [
  {
    id: 1,
    image: "images/main-banner.jpg",
    title: "iPad S13+ Pro",
    description: "Desde $999.00 o $41.62/mes",
  },
  {
    id: 2,
    image: "images/main-banner-1.jpg",
    title: "Venta especial",
    description: "Desde $999.00 o $41.62/mes",
  },
];

const Slider = () => {
  return (
    <Swiper
      className="col-span-4 row-span-2 lg:col-span-2 lg:row-span-2"
      pagination={true}
      modules={[Pagination]}
    >
      {sliderInfo.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative aspect-w-4 aspect-h-3 sm:aspect-h-9 sm:aspect-w-16 lg:aspect-h-10 lg:aspect-w-16 overflow-hidden sm:rounded-lg lg:h-full w-full">
            <img src={item.image} alt={item.title} />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex p-5 sm:p-10">
              <div className="text-white space-y-4 lg:space-y-6">
                <span className="text-xs font-normal  sm:font-semibold uppercase bg-red-300/60 text-white px-2 py-1 rounded-md">
                  Super oferta para ti
                </span>
                <h2 className="text-2xl sm:text-4xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-base">{item.description}</p>
                <Button size="lg">Comprar ahora</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
