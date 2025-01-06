
export default function Photos() {

    return (
        <>
            <div>
                <h1 className="--bs-heading-color" style={{ color: "white" }}>
                    Photo Projects
                </h1>
            </div>
            <div className="row row-cols-1">
                <div className="card text-bg-dark">
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/images/comissions/mnight6.png" className="d-block w-100" alt="..."></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className='poppins-extralight-italic'>Semaphore</h5>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/comissions/mnight1.png" className="d-block w-100" alt="..."></img>
                                {/* <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div> */}
                            </div>
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

            </div>
        </>
    )

}