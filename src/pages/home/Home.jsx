import React from 'react'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import Discount from '../../components/discount/Discount'
import './home.scss'
import TopSellings from '../../components/topSellings/TopSellings'
import Guide from '../../components/guide/Guide'

const Home = () => {
  return (
    <div className='home'>
    <Hero />
    <Products />
    <Discount />
    <TopSellings />
    <Guide />
    </div>
  )
}

export default Home