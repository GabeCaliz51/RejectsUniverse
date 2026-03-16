import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav>
            <div className="container nav-content">
                <Link to="/" className="brand" onClick={closeMenu}>
                    <img src="/assets/logo_badge.jpg" alt="RU Logo" style={{ height: '50px', borderRadius: '50%', border: '2px solid #ff00ff' }} />
                </Link>

                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={closeMenu}>HOME</Link>
                    <Link to="/news" onClick={closeMenu}>NEWS</Link>
                    <Link to="/podcast" onClick={closeMenu}>PODCAST</Link>
                    <Link to="/merch" onClick={closeMenu}>MERCH</Link>
                    <Link to="/advice" onClick={closeMenu}>ADVICE</Link>
                    <Link to="/trivia" onClick={closeMenu}>TRIVIA</Link>
                    <Link to="/forum" onClick={closeMenu}>FORUM</Link>
                    <Link to="/about" onClick={closeMenu} style={{ border: '1px solid var(--color-primary)', padding: '5px 15px' }}>ABOUT US</Link>
                </div>
            </div>
        </nav>
    );
}
