import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <h2 style={{ fontSize: '2rem', color: '#741BF2', marginBottom: '1rem' }}>
                        Algo salió mal
                    </h2>
                    <p style={{ color: '#6B7280', marginBottom: '2rem' }}>
                        Lo sentimos, ocurrió un error inesperado. Por favor, recarga la página.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            padding: '0.75rem 2rem',
                            background: 'linear-gradient(135deg, #F238E6, #741BF2)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '1rem',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Recargar Página
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
