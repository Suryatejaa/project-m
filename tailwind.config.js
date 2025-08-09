/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A0A0A',
                secondary: '#8B0000',
                accent: '#DC143C',
                light: '#FFFFFF',
                gray: '#B0B0B0',
                success: '#8B0000',
                'blood-red': '#8B0000',
                'dark-red': '#660000',
                'crimson': '#DC143C',
                'black-red': '#1A0000',
                'blood-gradient': 'linear-gradient(135deg, #8B0000 0%, #000000 100%)',
            },
            fontFamily: {
                headers: ['Montserrat', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                stats: ['Poppins', 'sans-serif'],
                quotes: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
