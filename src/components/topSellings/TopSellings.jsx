import React, { useEffect, useState } from "react";
import axios from "axios";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Item from "../Item";
import "./topsellings.scss";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import imgTop from "../../images/sellings.png";

const TopSellings = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?limit=9&offset=3")
      .then((res) => setData(res.data));
  }, []);
  const slicedData = data.slice(4, 7);
  return (
    <div className="top-sellings">
      <section className="top-sellings-left">
        <div className="div-heading">
          <h1>
            <span>MACC</span>TOP SELLINGS
          </h1>
          <button>VIEW ALL</button>
        </div>
        <Swiper
          className="mySwiper3"
          slidesPerView={1}
          spaceBetween={50}
          keyboard={true}
          navigation={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          breakpoints={{
            1250: {
              slidesPerView: 2,
            },
          }}
        >
          {slicedData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Item
                  key={item.id}
                  name={item.title}
                  image={item.images[0]}
                  id={item.id}
                  price={item.price}
                ></Item>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="top-sellings-right">
        <img src={imgTop} alt="" />
      </section>
    </div>
  );
};

export default TopSellings;
