
export default function Videos() {

    return (
        <>
            <div>
                <h1 className="--bs-heading-color"style={{ color: "white" }}>
                    Videos
                </h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="card text-bg-dark">
                    <img src="/images/oct27.png" className="card-img" alt="..."></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">October 27th, 2020</h5>
                          
                         
                        </div>
                </div>
                <div className="card text-bg-dark">
                    <img src="/images/blueprint.png" className="card-img" alt="..."></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Blueprint</h5>
                         
                          
                        </div>
                </div>
                <div className="card text-bg-dark">
                    <img src="/images/barber.png" className="card-img" alt="..."></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Revisited & Improvised</h5>
                            {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                           
                        </div>
                </div>
                <div className="card text-bg-dark">
                    <img src="/images/narrativeattempt.png" className="card-img" alt="..."></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Untitled, An Attempt At Narrative</h5>
                            {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                          
                        </div>
                </div>
                {/* <div className="card text-bg-dark">
                    <img src="..." className="card-img" alt="..."></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                           
                        </div>
                </div> */}


            </div>
        </>
    )

}