import React, { useState } from 'react'
import './Home.css'
import Typed from 'typed.js';
import about from '../../Assets/work-7.jpg'
import { Link, Outlet } from 'react-router-dom';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import image1 from '../../Assets/image1.jpg'
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.jpg'





export default function Home() {

  const [counterOn, setCounterOn] = useState()

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Professional Web Designer', 'Professional Web Developer'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <>
    <header className='mb-5'>
      <div className="main-home">
        <div className="container">
          <div className="content">
            <h2>Hello I'm</h2>
            <h1>Youssef Ali</h1>
            <span className='fs-1 text-light' ref={el} />
          </div>
        </div>
      </div>
    </header>

    <section id="about" className='py-5 mb-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image text-center">
              <div className="test position-absolute">
                <img src={about} alt="" />
                <div className="bg">
                  <div className="icons d-flex justify-content-center align-items-center">
                    <i className='fab fa-facebook me-2 text-light'></i>
                    <i className='fab fa-twitter me-2 text-light'></i>
                    <i className='fab fa-google me-2 text-light'></i>
                    <i className='fab fa-github me-2 text-light'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content py-4">
              <h2><span>I</span> HELLO</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className='brdr py-4'></p>
              <div className="cap d-flex justify-content-around">
                <div className="cap1">
                  <p><span className='text-black fw-bold'>Name:</span> Rdam smith</p>
                  <p><span className='text-black fw-bold'>Age:</span> 26 year</p>
                  <p><span className='text-black fw-bold'>Freelance:</span> Available</p>
                  <div className="btns">
                    <button className='btn btn-danger text-light me-5 p-3 my-2'>Download CV <i className='fas fa-download'></i></button>
                    <button className='btn btn-danger text-light p-3 pe-5'>Hire Me <i className='fab fa-telegram'></i></button>
                  </div>
                </div>
                <div className="cap2">
                  <p><span className='text-black fw-bold'>Job Title:</span> UI/UX Designer</p>
                  <p><span className='text-black fw-bold'>Location:</span> United States, US</p>
                  <p><span className='text-black fw-bold'>E-mail:</span> ososmeedo@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" className='py-5'>
      <div className="container">
        <div className="title">
          <h2>Our Services</h2>
          <p className='line1'></p>
          <p className='line2'></p>
          <p className='line3'></p>
        </div>
        <div className="row py-5">
          <div className="col-md-3">
            <div className="content text-center py-5">
              <p><i class="fa-solid fa-pen-ruler fa-2x text-danger"></i></p>
              <h2>UI/UX DESIGN</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis necstatibus.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content text-center py-5">
              <p><i class="fa-solid fa-code fa-2x text-danger"></i></p>
              <h2>APP DEVELOPMENT</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis necstatibus.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content text-center py-5">
              <p><i class="fa-solid fa-table-columns fa-2x text-danger"></i></p>
              <h2>PRODUCT DESIGN</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis necstatibus.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content text-center py-5">
              <p><i class="fa-solid fa-gears fa-2x text-danger"></i></p>
              <h2>UI/UX DESIGN</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci mollitia quis necstatibus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" className='py-5'>
      <div className="container">
        <div className="title text-center">
          <h2 className='fw-bold'>Our Portfolio</h2>
          <p className='line1'></p>
          <p className='line2'></p>
          <p className='line3'></p>
        </div>

        <div className="nav">
          <ul className='list-unstyled d-flex justify-content-center w-100 py-4'>
            <li className='me-3 cursor-pointer'><Link className='text-decoration-none text-black' to={'all'}>ALL</Link></li>
            <li className='me-3 cursor-pointer'><Link className='text-decoration-none text-black' to={'graphic'}>GRAPHIC</Link></li>
            <li className='me-3 cursor-pointer'><Link className='text-decoration-none text-black' to={'web'}>WEB DESIGN</Link></li>
            <li className='me-3 cursor-pointer'><Link className='text-decoration-none text-black' to={'branding'}>BRANDING</Link></li>
          </ul>
        </div>

        <Outlet></Outlet>
      </div>
    </section>


    <section className="separator py-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3">
            <div className="content text-center">
              <p><i className='fa fa-users text-danger fs-4'></i></p>
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="separator">
                  <h1>
                    {counterOn && <CountUp start={0} end={73} duration={2} delay={0} />}
                  </h1>
                </div>
              </ScrollTrigger>
              <p className='fw-semibold'>Team Members</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content text-center">
              <p><i className='fa fa-file text-danger fs-4'></i></p>
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="separator">
                  <h1>
                    {counterOn && <CountUp start={0} end={125} duration={2} delay={0} />}
                  </h1>
                </div>
              </ScrollTrigger>
              <p className='fw-semibold'>Complete Projects</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content text-center">
              <p><i className='fas fa-cloud-download text-danger fs-4'></i></p>
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="separator">
                  <h1>
                    {counterOn && <CountUp start={0} end={664} duration={2} delay={0} />}
                  </h1>
                </div>
              </ScrollTrigger>
              <p className='fw-semibold'>Files Download</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="content text-center">
              <p><i className='fas fa-coffee text-danger fs-4'></i></p>
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="separator">
                  <h1>
                    {counterOn && <CountUp start={0} end={432} duration={2} delay={0} />}
                  </h1>
                </div>
              </ScrollTrigger>
              <p className='fw-semibold'>Lines Of Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonial" className='py-5'>
      <div className="title text-center">
        <h2 className='fw-bold'>Client's Feedback</h2>
        <p className="line1"></p>
        <p className="line2"></p>
        <p className="line3"></p>
      </div>
      <div className="container">
        <div id="carouselExampleIndicators" class="carousel slide text-center w-75 mx-auto mt-5 p-5">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active p-5">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="image">
                    <img src={img1} className='w-100 rounded-circle' alt="..." />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="cap text-start">
                    <h2>Alex Ander</h2>
                    <p className='text-secondary'><i className='fas fa-map-marker'></i> United</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi exercitationem enim unde velit fugit cumque ducimus rerum delectus, sapiente, magnam veniam expedita obcaecati consequuntur earum maiores officia eum tempora? Dolorum voluptatem quidem recusandae accusantium, eligendi est cum necessitatibus qui. Hic eum quis impedit culpa tempora perspiciatis accusantium odio dolor laborum.</p>
                    <p className='text-start'>
                      <i className='fas fa-star text-warning me-2'></i>
                      <i className='fas fa-star text-warning me-2'></i>
                      <i className='fas fa-star text-warning me-2'></i>
                      <i className='fas fa-star text-warning me-2'></i>
                      <i className='fas fa-star'></i>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="carousel-item p-5">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="image">
                    <img src={img2} className='w-100 rounded-circle' alt="..." />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="cap text-start">
                    <h2>Alex Ander</h2>
                    <p className='text-secondary'><i className='fas fa-map-marker'></i> United</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi exercitationem enim unde velit fugit cumque ducimus rerum delectus, sapiente, magnam veniam expedita obcaecati consequuntur earum maiores officia eum tempora? Dolorum voluptatem quidem recusandae accusantium, eligendi est cum necessitatibus qui. Hic eum quis impedit culpa tempora perspiciatis accusantium odio dolor laborum.</p>
                    <p className='text-start'>
                      <i className='fas fa-star text-warning me-2'></i>
                      <i className='fas fa-star text-warning me-2'></i>
                      <i className='fas fa-star text-warning me-2'></i>
                      <i className='fas fa-star text-warning me-2'></i>
                      <i className='fas fa-star'></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="blog" className='py-5'>
      <div className="title text-center">
        <h2 className='fw-bold'>Our Blog</h2>
        <p className="line1"></p>
        <p className="line2"></p>
        <p className="line3"></p>
      </div>

      <div className="container">
        <div className="row py-5">
          <div className="col-md-4">
            <div className="content bg-white w-100">
              <img src={image1} className='w-100' alt="" />
              <div className="cap p-4 text-center">
                <p className='text-secondary'>23 November, 2015</p>
                <h2>Web Design Blog Post</h2>
                <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt eius incidunt repellat molestiae.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content bg-white position-relative ">
              <img src={image2} className='w-100' alt="" />
              <div className="cap p-4 text-center">
                <p className='text-secondary'>20 April, 2018</p>
                <h2>Development Blog Post</h2>
                <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt eius incidunt repellat molestiae.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content bg-white">
              <img src={image3} className='w-100' alt="" />
              <div className="cap p-4 text-start">
                <p className='text-secondary'>17 May, 2017</p>
                <h2>Full Width Blog Post</h2>
                <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt eius incidunt repellat molestiae.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="contact" className='py-5'>
      <div className="title text-center">
        <h2 className='fw-bold'>Contact Us</h2>
        <p className="line1"></p>
        <p className="line2"></p>
        <p className="line3"></p>
      </div>

      <div className="container">
        <div className="w-75 mx-auto">
          <div className="top d-flex justify-content-around my-4">
            <input type="text" placeholder='Name' className='form-control w-75 me-4' />
            <input type="text" placeholder='Email' className='form-control w-75' />
          </div>
          <input type="text" placeholder='Subject' className='form-control mb-3'/>
          <textarea placeholder='Message for me' className='form-control mb-3'></textarea>
          <button className='btn btn-danger text-light'> SEND MESSAGE</button>
        </div>
      </div>
    </section>

    <footer className='py-5'>
      <div className="text-center">
        <p>
          <i className='fab fa-facebook text-light me-3'></i>
          <i className='fab fa-twitter text-light me-3'></i>
          <i className='fab fa-google text-light me-3'></i>
          <i className='fab fa-github text-light me-3'></i>
        </p>
        <p className='text-light'>Copy Right 2018 © By <span className='text-danger'>Osama El-Gamal</span> All Rights Reserved</p>
      </div>
    </footer>
  </>
}
