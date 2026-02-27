/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'chatgpt-green': '#10a37f',
                'chatgpt-bg': '#212121',
                'chatgpt-sidebar': '#171717',
                'chatgpt-hover': '#2f2f2f',
                'chatgpt-border': '#303030',
                'chatgpt-input': '#2f2f2f',
                'chatgpt-text': '#ececec',
                'chatgpt-text-secondary': '#b4b4b4',
            },
            fontFamily: {
                sans: ['Söhne', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
