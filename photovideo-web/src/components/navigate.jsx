import { Link } from 'react-router-dom';
// import './Navigate.css'; // Optional: Add custom styles for your navigation

export default function NavigateSite() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/photos">Photos</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/commissions">Commissions</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cv">CV</Link></li>
      </ul>
    </nav>
  );
}




