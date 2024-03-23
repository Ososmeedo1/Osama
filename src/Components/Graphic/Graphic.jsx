import React from 'react'
import './Graphic.css'
import img1 from '../../Assets/1.jpg'
import img2 from '../../Assets/2.jpg'
import img3 from '../../Assets/3.jpg'
import img4 from '../../Assets/4.jpg'
import img5 from '../../Assets/5.jpg'
import img6 from '../../Assets/6.jpg'
import { Zoom } from 'react-awesome-reveal'

export default function Graphic() {
  return <>
    <div className="row gy-3">
      <div className="col-md-4">
        <div className="content">
          <Zoom>
            <img src={img2} className='w-100' alt="" />
          </Zoom>
        </div>
      </div>
      <div className="col-md-4">
        <div className="content">
          <Zoom>
            <img src={img3} className='w-100' alt="" />
          </Zoom>
        </div>
      </div>
      <div className="col-md-4">
        <div className="content">
          <Zoom>
            <img src={img4} className='w-100' alt="" />
          </Zoom>
        </div>
      </div>
      <div className="col-md-4">
        <div className="content">
          <Zoom>
            <img src={img5} className='w-100' alt="" />
          </Zoom>
        </div>
      </div>
      <div className="col-md-4">
        <div className="content">
          <Zoom>
            <img src={img6} className='w-100' alt="" />
          </Zoom>
        </div>
      </div>
    </div>
  </>
}
