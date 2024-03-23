import React from 'react'
import './Branding.css'
import img1 from '../../Assets/1.jpg'
import img2 from '../../Assets/2.jpg'
import img3 from '../../Assets/3.jpg'
import img4 from '../../Assets/4.jpg'
import img5 from '../../Assets/5.jpg'
import img6 from '../../Assets/6.jpg'
import { Fade } from 'react-awesome-reveal'

export default function Branding() {
  return <>
    <div className="row">
      <div className="col-md-4">
        <div className="content">
          <Fade>
            <img src={img2} className='w-100' alt="" />
          </Fade>
        </div>
      </div>
      <div className="col-md-4">
        <div className="content">
          <Fade>
            <img src={img6} className='w-100' alt="" />
          </Fade>
        </div>
      </div>
    </div>
  </>
}
