
import { Link } from "react-router-dom"

export default function Navbar({ }) {
    console.log('Navbar Rendered');
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: "0px", margin: "1.5%" }} >
                <div className="container-fluid">
                    <Link className="navbar-brand poppins-medium" id='link' to="/home" style={{ color: '#cbbbe3', fontSize: '4vw' }}  >Hannah Price</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" id='link'to="/photos" style={{ color: 'white' }}>Photos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='link'to="/videos" style={{ color: 'white' }}>Videos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"id='link'to="/commissions" style={{ color: 'white' }}>Commissions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='link'to="/cv" style={{ color: 'white' }}>CV</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='link'to="/contact" style={{ color: 'white' }}>Contact</Link>
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