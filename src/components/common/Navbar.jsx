import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { navigationLinks } from '../../data/navigation.data';
import { useIsMobile } from '../../hooks/useMediaQuery';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <span className="logo-text gradient-text">
                        <img src="assets/images/logo.png" alt="" style={{ width: '100px', height: 'auto' }} />
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <ul className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-active' : ''}`}>
                    {navigationLinks.map((link) => (
                        <li key={link.path} className="navbar-item">
                            <Link
                                to={link.path}
                                className="navbar-link"
                                onClick={closeMobileMenu}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                {isMobile && (
                    <button
                        className="navbar-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? 'hamburger-active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
