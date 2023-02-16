import React from 'react';
import './brand.css';
import{google,
  atlassian,
  shopify,
  slack,
  dropbox,} from './import';

export default function Brand() {
  return (
    <div className='gpt_brand section_padding' >
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>

    </div>
  )
}