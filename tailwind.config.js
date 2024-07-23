/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                10: '10px',
            },
            height: {
                hero: 'calc(100vh - 64px)',
            },
        },
    },
    plugins: [],
}
