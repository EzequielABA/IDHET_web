// Environment Variables Configuration
export const ENV = {
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.idhet.com',
    APP_ENV: import.meta.env.MODE || 'development',
    IS_PRODUCTION: import.meta.env.PROD,
    IS_DEVELOPMENT: import.meta.env.DEV,
};

export default ENV;
