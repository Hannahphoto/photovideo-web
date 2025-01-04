
import { Link } from "react-router-dom"

export default function Navbar({ }) {
    console.log('Navbar Rendered');
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: "0px", margin: "1.5%" }} >
                <div className="container-fluid">
                    <a className="navbar-brand poppins-medium" href="#" style={{ color: '#cbbbe3', fontSize: '4vw' }}  >Hannah Price</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#" style={{ color: 'white' }}>Photos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Videos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Commissions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>CV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <footer className="fixed-bottom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: 'white' }}>Footer</a>
                </div>
            </footer>
        </>
    )

}