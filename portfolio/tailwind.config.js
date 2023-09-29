/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--color-primary)',
                'secondary': 'var(--color-secondary)',
                'primary-text': 'var(--color-text-primary)',
                'secondary-text': 'var(--color-text-secondary)'
            },
            keyframes: {
                pulse: {
                    '50%': {opacity: 0}
                },
            },
            animation: {
                pulse: 'pulse 2s cubic-bezier(.4,0,.6,1) infinite',
                pulse1: 'pulse 2s .3s cubic-bezier(.4,0,.6,1) infinite',
                pulse2: 'pulse 2s .6s cubic-bezier(.4,0,.6,1) infinite',
            },
            fontFamily: {
                'poppins-bold': ['poppins-bold'],
                'poppins-medium': ['poppins-medium'],
                'poppins-regular': ['poppins-regular'],
                'poppins-light': ['poppins-light'],
                'popins-thin': ['poppins-thin']
            }
        }
    },
    plugins: []
};