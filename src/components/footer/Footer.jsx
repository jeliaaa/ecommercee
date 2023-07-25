import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="upperside">
        <section className="footer-wrapper">
          <p className="logo">
            Macc<span>Essentials</span>
          </p>
        </section>
        <section className="lists">
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/collections"}>
              <li>Collection</li>
            </Link>
            <Link to={"/"}>
              <li>Products</li>
            </Link>
          </ul>
          <ul>
            <Link to={"/about-us"}>
              <li>About</li>
            </Link>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </section>
        <section className="message">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            expedita atque magni natus. Temporibus dicta voluptates recusandae
            eos deleniti consectetur iure nemo rem velit illo officia et,
            asperiores enim beatae.
          </p>
          <textarea
            cols="40"
            rows="1"
            placeholder="ENTER YOUR EMAIL"
          ></textarea>
        </section>
      </div>
      <p className="rights">All rights are reserved</p>
    </footer>
  );
};

export default Footer;
