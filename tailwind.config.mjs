/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			rx: "1150px",
			xl: "1280px",
			"2xl": "1536px", 
		},
		extend: {
			keyframes: {
			radiusAboutMe: {
				"0%": { borderRadius: "56% 44% 42% 58% / 51% 55% 45% 49%" },
				"25%": { borderRadius: "41% 59% 36% 64% / 61% 55% 45% 39%" },
				"50%": { borderRadius: "59% 41% 53% 47% / 46% 48% 52% 54%" },
				"75%": { borderRadius: "49% 51% 38% 62% / 58% 51% 49% 42%" },
				"100%": { borderRadius: "56% 44% 42% 58% / 51% 55% 45% 49%" },
			  },
			pulse: {
				"0%, 100%": { opacity: 1 },
				"50%": { opacity: .5 },
			}  
			},
			dropShadow: {
				'premios': '0px 0px 10px rgba(255, 255, 255, 0.5)',
			}
		},
		animation: {
			radiusAboutMe: "radiusAboutMe 8s infinite",
			pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
		},
	},
	plugins: [],
}
