
import { Link } from "react-router-dom"

export default function Navbar({}) {
    console.log('Navbar Rendered');
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                Nav Bar Test
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Hannah Price</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Photos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Videos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">CV</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}