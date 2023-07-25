import React, { useEffect, useState } from "react";
import axios from "axios";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "./products.scss";
import Item from "../Item";
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?limit=9&offset=3")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  const slicedData = data.slice(0,5);
  return (
    <div className="products">
      <h1>
        <span>NEW</span>PRODUCTS
      </h1>
      <Swiper
        cssMode={true}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
            1280:{
                slidesPerView:2
            },
            1400:{
                slidesPerView: 3
            }
                       
        }}
      >
        {slicedData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Item
                key={item.id}
                id={item.id }
                name={item.title}
                image={item.images[0]}
              ></Item>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <hr />
    </div>
  );
};

export default Products;
