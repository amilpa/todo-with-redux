/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
		"./src/**/*.{jsx,js,ts,tsx}"
	],
  theme: {
    extend: {
			colors : {
				'primary' : '#6a83ab',
				'secondary' : '#8566aa',
				'cardbg' : '#f4f4f4'
			}
		},
  },
  plugins: [],
}

