import { Link } from 'react-router-dom';
import { useEffect } from 'react';



export default function Commissions() {
  // useEffect(() => {
  //   const bootstrap = require('bootstrap'); // Ensure Bootstrap is loaded
  // }, []);

  return (
    <>
      <h1 className="--bs-heading-color" style={{ color: "white" }}>
        Commissions
      </h1>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 12"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" aria-label="Slide 13"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="13" aria-label="Slide 14"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="14" aria-label="Slide 15"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="15" aria-label="Slide 16"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="16" aria-label="Slide 17"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="17" aria-label="Slide 18"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="18" aria-label="Slide 19"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="19" aria-label="Slide 20"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="20" aria-label="Slide 21"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="21" aria-label="Slide 22"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/comissions/mnight6.png" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='poppins-extralight-italic'>The New York Times</h5>
              <p>Ishana & M Night Shyamalan.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/mnight1.png" className="d-block w-100" alt="..."></img>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/mnight4.png" className="d-block w-100" alt="..."></img>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
           <div className="carousel-item">
            <img src="/images/comissions/nikegive3.png" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='poppins-extralight-italic'>Nike Give</h5>
              <p>Mentorship program.</p>
            </div>
          </div>
           <div className="carousel-item">
            <img src="/images/comissions/nikegive.png" className="d-block w-100" alt="..."></img>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
         <div className="carousel-item">
            <img src="/images/comissions/apple1.PNG" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='poppins-extralight-italic'>APPLE</h5>
              <p>Black History Month</p>
            </div>
          </div>
           <div className="carousel-item">
            <img src="/images/comissions/apple2.PNG" className="d-block w-100" alt="..."></img>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/apple3.PNG" className="d-block w-100" alt="..."></img>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
         <div className="carousel-item">
            <img src="/images/comissions/apple4.PNG" className="d-block w-100" alt="..."></img>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
         <div className="carousel-item">
            <img src="/images/comissions/apple5.PNG" className="d-block w-100" alt="..."></img>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
           <div className="carousel-item">
            <img src="/images/comissions/apple6.PNG" className="d-block w-100" alt="..."></img>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/chakaia.png" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='poppins-extralight-italic'>The New York Times</h5>
              <p>Chakaia Booker</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/vogue.png" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='poppins-extralight-italic'>Vogue</h5>
              <p></p>
            </div>
          </div>
        <div className="carousel-item">
            <img src="/images/comissions/vice-imani.png" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='poppins-extralight-italic'>Vice</h5>
              <p>Imani Babarin</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/espn2.png" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='poppins-extralight-italic'>ESPN</h5>
              <p>Anderson .Paak's Family</p>
            </div>
          </div>
            <div className="carousel-item">
            <img src="/images/comissions/espn.png" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5  className='poppins-extralight-italic'>ESPN</h5>
              <p>Anderson .Paak's Family</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/thewire.png" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5  className='poppins-extralight-italic'>The Wire</h5>
              <p>Musician Tyshawn Sorey</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/thewire2.png" className="d-block w-100" alt="..."></img>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/theatlantic.png" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5  className='poppins-extralight-italic'>The Atlantic</h5>
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/refinery.png" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5  className='poppins-extralight-italic'>The New York Times Magazine</h5>
              <p>Philadelphia Refinery</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/presbusts.png" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5  className='poppins-extralight-italic'>The New York Times Magazine</h5>
              <p>Presidential Busts</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/comissions/presbusts2.png" className="d-block w-100" alt="..."></img>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5  className='poppins-extralight-italic'>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div> 
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )

}