import React from 'react'
import './aboutUs.scss'
import Team from '../../components/teamMembers/Team'
const AboutUs = () => {
  return (
    <div className='about_us'>
      <div className='info'>
        <h1>Information</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Nobis modi omnis eaque porro
          beatae, mollitia eum quis necessitatibus quia qui
          quidem minus. Vero sint aut quis impedit, tempore totam delectus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis tempore officia quae debitis porro architecto voluptas
          saepe, quis ab earum consequuntur quod dolores suscipit beatae
          vel asperiores ipsam, a velit!Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Nobis modi omnis eaque porro
          beatae, mollitia eum quis necessitatibus quia qui
          quidem minus. Vero sint aut quis impedit, tempore totam delectus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis tempore officia quae debitis porro architecto voluptas
          saepe, quis ab earum consequuntur quod dolores suscipit beatae
          vel asperiores ipsam, a velit!Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Nobis modi omnis eaque porro
          beatae, mollitia eum quis necessitatibus quia qui
          quidem minus. Vero sint aut quis impedit, tempore totam delectus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis tempore officia quae debitis porro architecto voluptas
          saepe, quis ab earum consequuntur quod dolores
        </p>
      </div>

      <div className='team-members'>
        <h1>OUR TEAM</h1>
        <div className='members'>
          <Team />
        </div>
      </div>
    </div>
  )
}

export default AboutUs