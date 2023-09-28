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
            }
        }
    },
    plugins: []
};