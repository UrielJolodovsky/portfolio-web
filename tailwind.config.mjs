/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
			radiusMorph: {
				"0%": { borderRadius: "56% 44% 42% 58% / 51% 55% 45% 49%" },
				"25%": { borderRadius: "41% 59% 36% 64% / 61% 55% 45% 39%" },
				"50%": { borderRadius: "59% 41% 53% 47% / 46% 48% 52% 54%" },
				"75%": { borderRadius: "49% 51% 38% 62% / 58% 51% 49% 42%" },
				"100%": { borderRadius: "56% 44% 42% 58% / 51% 55% 45% 49%" },
			  },
			},
		},
		animation: {
			radiusMorph: "radiusMorph 10s infinite",
		},
	},
	plugins: [],
}
