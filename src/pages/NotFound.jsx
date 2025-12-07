import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="notfound-page">
            <div className="notfound-content">
                <div className="notfound-icon gradient-text">404</div>
                <h1 className="notfound-title">Página no encontrada</h1>
                <p className="notfound-description">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
                <div className="notfound-actions">
                    <Button variant="primary" size="large" onClick={() => navigate('/')}>
                        Volver al Inicio
                    </Button>
                    <Button variant="outlined" size="large" onClick={() => navigate('/contact')}>
                        Contactar Soporte
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
