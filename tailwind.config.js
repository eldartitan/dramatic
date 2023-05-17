/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "metallic-yellow": "#FFC907",
                "metallic-blue": "#3B567D",
                "wild-blue-yonder": "#A1B1CB",
                "ferrari-red": "#FF2E00",
                "spanish-gray": "#959595",
                "chinese-black": "#161214",
            },
        },
    },
    plugins: [],
};
