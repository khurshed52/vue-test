const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		mode: 'layers',
		content: ['./public/**/*.html', './src/**/*.vue'],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'sans': ['"Barlow"', 'sans-serif']
		  },
		extend: {
			colors: {
				emerald: colors.emerald,
				gray: colors.trueGray,
			},
		},	
	},
	variants: {
		extend: {},
	},
	plugins: [],
};