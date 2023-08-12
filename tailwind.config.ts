import type { Config } from 'tailwindcss'

export default {
    content: ["./src/**/*.{html,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                'bounce_reversed': 'bounce_reversed .5s infinite',
            },
            keyframes: {
                bounce_reversed: {
                    '0%, 100%': {
                        transform: 'none',
                        'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
                    },
                    '50%': {
                        transform: 'translateY(-25%)',
                        'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
                    },
                },
            },
            gridTemplateRows: {
                '8': 'repeat(8, minmax(0, 1fr))',
            },
        },
    },
} satisfies Config
