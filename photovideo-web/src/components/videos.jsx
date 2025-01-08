
export default function Videos() {

    // const openLink = (url) => {
    //     window.open(url, '_blank');
    // };

    return (
        <>
            <div >
                <h1 className="--bs-heading-color" style={{ color: "white" }}>
                    Videos
                </h1>
            </div>

            <div className="container">
         {/* Video 1 */}
         <div className="card mb-4">
         <div className="ratio ratio-16x9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Mw1s6XuvwpM" allowFullScreen></iframe>
                </div>
                </div>
 {/* Video 2 */}
 <div className="card mb-4">
         <div className="ratio ratio-16x9">
                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/97292707" allowFullScreen></iframe>

                </div>
                </div>

               {/* Video 3 */}
         <div className="card mb-4">
         <div className="ratio ratio-16x9">
                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/169453866" allowFullScreen></iframe>
                </div>
                </div>


                {/* Video 1 */}
         <div className="card mb-4">
         <div className="ratio ratio-16x9">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/example"
                        allowFullScreen
                    ></iframe>
                </div>
                </div>
            </div>
        </>
    )

}