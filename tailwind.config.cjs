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
				mytheme: {
					primary: "#00ffd2",
					secondary: "#ff4499",
					accent: "#000000",
					neutral: "#0a0047",
					"base-100": "#004687",
				},
			},
			"dark",
			"cupcake",
		],
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;