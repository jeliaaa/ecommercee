import React from "react";
import "./hero.scss";
import HeroImg from '../../images/hero.png'
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <section className="left">
        <h1>PROVIDING SERVICES AT YOUR DOOR</h1>
        <p>
          <b>MACC Essentials</b> has an important role in making supplies and services
          available to customers and their patients during this critical time.
          This includes services from various domains. Our aim is to aid you. As
          much we can.
        </p>
        <Link to={'/about-us'}><button>LEARN MORE</button></Link>
      </section>
      <section className="right">
        <img src={HeroImg} alt="..."/>
      </section>
    </div>
  );
};

export default Hero;
