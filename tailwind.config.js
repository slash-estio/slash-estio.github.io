/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./js/*.{html,js}', './index.html'],
	theme: {
		extend: {
			width: {
				7.5: '1.875rem',
			},
			aspectRatio: {
				golden: '1.618',
			},
		},
		colors: {
			black: {
				100: '#d2d2d2',
				200: '#a5a5a5',
				300: '#797979',
				400: '#4c4c4c',
				500: '#1f1f1f',
				600: '#191919',
				700: '#131313',
				800: '#0c0c0c',
				900: '#060606',
			},
			red: {
				100: '#fecfd1',
				200: '#fca0a3',
				300: '#fb7074',
				400: '#f94146',
				500: '#f81118',
				600: '#c60e13',
				700: '#950a0e',
				800: '#63070a',
				900: '#320305',
			},
			green: {
				100: '#d5f3df',
				200: '#abe8bf',
				300: '#81dc9e',
				400: '#57d17e',
				500: '#2dc55e',
				600: '#249e4b',
				700: '#1b7638',
				800: '#124f26',
				900: '#092713',
			},
			yellow: {
				100: '#fbf1cf',
				200: '#f7e39f',
				300: '#f4d66f',
				400: '#f0c83f',
				500: '#ecba0f',
				600: '#bd950c',
				700: '#8e7009',
				800: '#5e4a06',
				900: '#2f2503',
			},
			blue: {
				100: '#d4e6f6',
				200: '#aaceed',
				300: '#7fb5e4',
				400: '#559ddb',
				500: '#2a84d2',
				600: '#226aa8',
				700: '#194f7e',
				800: '#113554',
				900: '#081a2a',
			},
			white: {
				100: '#f7f8fa',
				200: '#eff1f5',
				300: '#e6e9ef',
				400: '#dee2ea',
				500: '#d6dbe5',
				600: '#abafb7',
				700: '#808389',
				800: '#56585c',
				900: '#2b2c2e',
			},
		},
	},
	plugins: [],
};
