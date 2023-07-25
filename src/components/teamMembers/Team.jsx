import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Team = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('./team-members.json')
            .then(res => setData(res.data));
    }, [])

    return (
        <div className='members-div'>
            <Swiper
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Mousewheel, Keyboard, Navigation]}
                slidesPerView={1}
                className='members-swiper'
            >
                {data.map((member, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='member'>
                                <h1>{member.name}</h1>
                                <p>{member.role}</p>
                                <img src={member.memberImage} alt={member.name} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Team