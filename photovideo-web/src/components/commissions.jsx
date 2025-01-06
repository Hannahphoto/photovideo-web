import { Link } from 'react-router-dom';

export default function Commissions() {

    return (
        <>
            <h1 className="--bs-heading-color" style={{ color: "white" }}>
                Commissions
            </h1>
            <div id="carouselExampleFade" className="carousel slide-fade">
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
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )

}