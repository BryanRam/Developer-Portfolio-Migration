const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null
					}
				}
			}
		},
		fontFamily: {
			'sans': ['"Montserrat-Regular"'],
		}
	},

	daisyui: {
		themes: [{
				tokyonightdark: {
					primary: "#2ac3de",
					secondary: "#7aa2f7",
					accent: "#a9b1d6",
					neutral: "#9aa5ce",
					"base-100": "#1a1b26",
				},
				tokyonightlight: {
					"base-100": "#d5d6db",
				},
			},

		],
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;