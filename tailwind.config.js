const colors = require("@tailwindcss/postcss7-compat/colors");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true
        },
        extend: {
            fontFamily: {
                body: ['Nunito']
            },
            colors: {
                primary: '#6CB2B2',
                back: '#CAE3E3',
                teal: colors.teal,
                header: '#A1CECE',
                headback: '#E4F1F1'


            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}