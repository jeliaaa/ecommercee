import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './single.scss';
import DropdownDescription from '../drop/DropdowndDescription';
const Single = () => {
    const [item, setItem] = useState({});
    const [thumb, setThumb] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setItem(data);

                // Set the first image in the 'item.images' array as the default thumb
                if (data.images && data.images.length > 0) {
                    setThumb(data.images[0]);
                }
            })
            .catch((error) => console.error(error));
    }, [id]);

    const handleThumb = (e) => {
        e.preventDefault();
        setThumb(e.target.src);
    };

    return (
        <div className='single-wrapper'>
            <h6>Home / Products / Product</h6>
            <div className='single'>
                <div className='img-bar'>
                    {/* Add conditional checks for item.images */}
                    {item.images &&
                        item.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt=''
                                onClick={handleThumb}
                                className={thumb === image ? 'selected' : ''}
                            />
                        ))}
                </div>

                <img src={thumb} alt='' className='main_img' />
                <section>
                    <h2>{item.title}</h2>
                    <h3>{item.price} $</h3>
                    <button className='add'>ADD</button>
                    <DropdownDescription title={'DESCRIPTION >'} description={item.description} />
                    <DropdownDescription title={'RETURN POLICY >'} description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repudiandae temporibus enim odio commodi placeat nobis necessitatibus dolores sed sunt saepe quasi optio, tempore praesentium incidunt inventore vel. Veritatis, nisi?'/>
                </section>
            </div>
        </div>
    );
};

export default Single;
