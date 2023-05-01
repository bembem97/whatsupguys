const plugin = require("tailwindcss/plugin")
// const color = require("tailwindcss/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")

const screens = {
    sm: "360px",
    mobile: "414px",
    md: "640px",
    tab: "768px",
    lg: "900px",
    xl: "1024px",
    laptop: "1280px",
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        container: ({ theme }) => ({
            center: true,
            padding: theme("spacing.1"),
        }),
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", ...fontFamily.mono],
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                dark: "rgb(var(--dark))",
                primary: "rgb(var(--primary))",
                secondary: "rgb(var(--secondary))",
                highlight: "rgb(var(--highlight))",
            },
            zIndex: {
                navbar: "1100",
            },
            transitionProperty: {
                height: "height",
                "max-height": "max-height",
            },
            lineClamp: {
                7: "7",
                8: "8",
                9: "9",
                10: "10",
            },
            screens: {
                ...screens,
            },
            containers: {
                ...screens,
            },
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/container-queries"),
        plugin(function ({
            addComponents,
            addUtilities,
            matchUtilities,
            theme,
        }) {
            addComponents({
                ".card-portrait": {
                    "@apply grid-rows-[160px_1fr] grid-cols-[minmax(0,_1fr)]":
                        {},
                },
                ".card-landscape": {
                    "@apply grid-cols-[min(100%,_120px)_minmax(0,_1fr)] grid-rows-1":
                        {},
                },
                ".on-target": {
                    "--thickness": "1px",
                    "--length": "0.4rem",
                    borderTopColor: `rgb(var(--primary) / 0.25)`,
                    borderBottomColor: `rgb(var(--primary) / 0.25)`,
                    backgroundSize: `var(--thickness) var(--length), 
                    var(--length) var(--thickness), 
                    var(--length) var(--thickness), 
                    var(--thickness) var(--length),
                    var(--length) var(--thickness),
                    var(--thickness) var(--length), 
                    var(--length) var(--thickness), 
                    var(--thickness) var(--length)`,
                    backgroundRepeat: "no-repeat",
                    backgroundOrigin: "border-box",
                    backgroundPosition: `left top, left top, 
                    right top, right top, 
                    right bottom, right bottom,
                    left bottom, left bottom`,
                    backgroundImage: `
                    linear-gradient(to right, rgb(var(--secondary)), rgb(var(--primary))), 
                    linear-gradient(to right, rgb(var(--secondary)), rgb(var(--primary))),
                    
                    linear-gradient(to left, rgb(var(--secondary)), rgb(var(--primary))), 
                    linear-gradient(to left, rgb(var(--secondary)), rgb(var(--primary))),

                    linear-gradient(to left, rgb(var(--secondary)), rgb(var(--primary))), 
                    linear-gradient(to left, rgb(var(--secondary)), rgb(var(--primary))),

                    linear-gradient(to right, rgb(var(--secondary)), rgb(var(--primary))), 
                    linear-gradient(to right, rgb(var(--secondary)), rgb(var(--primary)))`,
                },
                ".ui": {
                    backgroundColor: theme("colors.highlight"),
                    padding: theme("padding.5"),
                    clipPath: `polygon(var(--bevel-2))`,
                    border: `1px solid theme("colors.primary")`,
                },
                ".chamfered-1": {
                    backgroundImage: `linear-gradient(45deg, transparent 51%, rgb(var(--primary)) 49%), linear-gradient(225deg, transparent 53%, rgb(var(--primary)) 47%)`,
                    backgroundSize: `1rem 1rem, 1rem 1rem`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: `right top, left bottom`,
                },
            })

            addUtilities({
                ".neon-text": {
                    textShadow: "0px 0px 0.5rem rgb(var(--primary))",
                },

                ".bevel-2": {
                    clipPath: `polygon(var(--bevel-2));`,
                },
            })

            matchUtilities({
                translateZ: (value) => ({
                    transform: `translateZ(${value})`,
                }),
            })
        }),
    ],
}
