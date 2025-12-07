// Theme Configuration
export const theme = {
    colors: {
        primary: {
            pink: '#F238E6',
            purple: '#741BF2',
            blue: '#2350D9',
        },
        accent: {
            lightBlue: '#A7DDF2',
            mint: '#BDF2E8',
        },
        gradients: {
            primary: 'linear-gradient(135deg, #F238E6, #741BF2)',
            secondary: 'linear-gradient(135deg, #741BF2, #2350D9)',
            accent: 'linear-gradient(135deg, #A7DDF2, #BDF2E8)',
            hero: 'linear-gradient(135deg, #F238E6 0%, #741BF2 50%, #2350D9 100%)',
        },
    },
    breakpoints: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
    },
};

export default theme;
