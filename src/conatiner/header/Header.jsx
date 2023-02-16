import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.jpg';

export default function Header() {
  return (
    <div className='gpt_header'>
      <div className="gpt3_header_content">
        <h1 className='gpt_h1_text'>Let's Build Something Amazing With GPT-3 OpenAI </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, quibusdam eligendi praesentium laudantium facere vel voluptatibus ea, nesciunt magnam cum dolore atque laborum! Maiores optio quam mollitia quae nam tenetur.</p>
        <div className="gpt_header_input">
          <input type="email" placeholder='Your Email Address' />
          <button>Get Started</button>
        </div>
        <div className="gpt_header_content_people">
          <img src={people} alt="" width={"50px"}/>
          <p>1500 people have requested this AI in an hour</p>
        </div>

      </div>
      <div className="gpt_header_image">
          <img src={ai} alt="" />
        </div>
        
    </div>
  )
}
