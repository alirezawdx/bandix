/** @type {import('tailwindcss').Config} */

// Tailwind colors
const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
	theme: {
		colors: {
			...colors,
			primary: '#FF8200',
			secondary: '#FFC72E',
			dark: '#0A0903',
		},
		fontFamily: {
			dana: ['Dana', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
