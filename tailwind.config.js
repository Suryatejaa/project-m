/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A0E27',
                secondary: '#00D4FF',
                accent: '#FFD700',
                light: '#FFFFFF',
                gray: '#E5E5E5',
                success: '#00FF88',
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
