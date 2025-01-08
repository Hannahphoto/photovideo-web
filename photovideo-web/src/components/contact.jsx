
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
        </div>
    );
}
