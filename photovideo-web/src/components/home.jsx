
import { useEffect } from "react";

export default function Home() {
    // const myCarouselElement = document.querySelector('#myCarousel')

    // const carousel = new bootstrap.Carousel(myCarouselElement, {
    //     interval: 2000,
    //     touch: false
    // });

 
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/kingsolomon.png" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/semaphore.png" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/highway.png" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )

}