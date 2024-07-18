/** @type {import('tailwindcss').Config} */

// Tailwind colors
const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
	theme: {
		colors: { ...colors },
		fontFamily: {
			dana: ['Dana', 'sans-serif',],
		},
		extend: {},
	},
	plugins: [],
};
