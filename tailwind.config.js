/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*"],
	theme: {
		extend: {
			colors: {
				bodyColor: "#FEF7F2",
				primaryColor: "#2B1B12",
				secondPrimaryColor: "#DDC7BB",
				thirdPrimaryColor: "#4F3527",
				boxColor: "#DDC7BB"
			}
		},
		fontFamily: {
			Montserrat: ["Montserrat", "serif"]
		},
		container: {
			center: true,
			padding: {
				default: "12px",
				md: "32px"
			}
		}
	},
	plugins: [],
}

