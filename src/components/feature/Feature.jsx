import React from 'react'
import { Features } from '../../conatiner';
import './feature.css';

const featureData = [
  {
    title: "Improving end distrusts instantly ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    title: "Become the tended active",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    title: "Message or am nothing ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    title: "Really boy law county ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
];

export default function Feature() {


  return (
    <div className='gpt_feature_ section__padding' id="feature" >
      <div className="gpt_feature_heading">
        <h1 className='gradient__text' >
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt_feature_container">
        {featureData.map((item, index) => (
          <Features title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}