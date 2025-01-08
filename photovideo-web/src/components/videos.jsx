
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

            <div>

                <div className="card w-50 p-3 text-bg-dark embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Mw1s6XuvwpM" allowFullScreen></iframe>
                </div>



                <div className="card w-50 p-3 text-bg-dark embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/97292707" allowFullScreen></iframe>

                </div>

                <div className="card w-50 p-3 text-bg-dark embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/169453866" allowFullScreen></iframe>
                </div>

                <div className="card w-50 p-3 text-bg-dark embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/example"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    )

}