
export default function Contact() {

    const copyToClipboard = () => {
        navigator.clipboard.writeText("hannahprice67@gmail.com").then(
            () => {
                alert("Email copied to clipboard!");
            },
            (err) => {
                console.error("Failed to copy text: ", err);
            }
        );
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h4 className="--bs-heading-color" style={{ color: "white", marginBottom: "10px" }}>
                hannahprice67@gmail.com
            </h4>
            <button type="button" className="btn btn-outline-warning" onClick={copyToClipboard} style={{ padding: "5px 10px", cursor: "pointer" }}>
                Copy Email Address
            </button>
            <div className="card text-bg-dark">
                <div className="card-body poppins-light">
                <h3>
                    Bio
                </h3>
                <p>
                    Raised in Fort Collins, Colorado, Hannah Price (b. 1986) is a photographic artist and filmmaker primarily interested in documenting relationships, race politics, perception and misperception. Price is internationally known for her project City of Brotherly Love (2009-2012), a series of photographs of the men who catcalled her on the streets of Philadelphia. In 2014, Price graduated from the Yale School of Art MFA Photography program, receiving the Richard Benson Prize for excellence in photography. Over the past ten years, Price’s photos have been displayed in several cities across the United States, with a few residing in the permanent collection of the Philadelphia Museum of Art & the Madison Museum of Contemporary Art.
                    Currently, Ms. Price lives and works in Philadelphia, PA.

                </p>
                
                </div>
            </div>
          
        </div>
    );
}
