import React, { useEffect, useState } from "react";
import axios from "axios";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Item from "../Item";
import "./discount.scss";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import imgDisc from "../../images/discImg.png"

const Discount = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?limit=11&offset=3")
      .then((res) => setData(res.data));
  }, []);
  const slicedData = data.slice(8, 11);
  return (
    <div className="discount">
      <section className="discount-left">
        <img src={imgDisc} alt="" />
      </section>
      <section className="discount-right">
        <div className="div-heading">
          <h1><span>MACC</span>WEEKLY DISCOUNT</h1>
          <button>VIEW ALL</button>
        </div>
        <Swiper
          className="mySwiper2"
          slidesPerView={1}
          spaceBetween={50}
          keyboard={true}
          navigation={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          breakpoints={{
            1250: {
              slidesPerView: 2
            }
          }}
        >
          {slicedData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Item
                  key={item.id}
                  name={item.title}
                  image={item.images[1]}
                  id={item.id}
                  price={item.price}
                ></Item>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Discount;
