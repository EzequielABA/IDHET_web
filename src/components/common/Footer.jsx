import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaHeart } from 'react-icons/fa';
import { footerLinks } from '../../data/navigation.data';
import { APP_NAME } from '../../utils/constants';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-section">
                        <h3 className="footer-brand gradient-text">{APP_NAME}</h3>
                        <p className="footer-description">
                            Soluciones digitales que simplifican la vida cotidiana en República Dominicana.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" className="social-link" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" className="social-link" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" className="social-link" aria-label="LinkedIn"><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Empresa</h4>
                        <ul className="footer-links">
                            {footerLinks.company.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Productos</h4>
                        <ul className="footer-links">
                            {footerLinks.products.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Legal</h4>
                        <ul className="footer-links">
                            {footerLinks.legal.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} {APP_NAME}. Todos los derechos reservados.
                    </p>
                    <p className="footer-made">
                        Hecho con <FaHeart style={{ color: '#741BF2', display: 'inline' }} /> en República Dominicana
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
