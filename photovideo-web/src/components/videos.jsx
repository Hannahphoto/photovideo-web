
export default function Videos() {

    const openLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <div>
                <h1 className="--bs-heading-color"style={{ color: "white" }}>
                    Videos
                </h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="card text-bg-dark embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Mw1s6XuvwpM" allowFullScreen></iframe>
              
                </div>
                <div className="card text-bg-dark embed-responsive embed-responsive-16by9">
                 
                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/97292707" allowFullScreen></iframe>
                   
                </div>
                <div className="card text-bg-dark">
                         <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/169453866" allowFullScreen></iframe>
                </div>
                <div className="card text-bg-dark">
                    <img src="/images/narrativeattempt.png" className="card-img" alt="..."></img>
                     
                        <button type="button" className="btn btn-outline-info"style={{ color: "white" }} >Untitled, An Attempt At Narrative</button>
                </div>
           

            </div>
        </>
    )

}