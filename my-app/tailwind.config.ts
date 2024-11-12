import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        textColorPrimary: "var(--text-color-primary)",
        textColorSecondary: "var(--text-color-secondary)",
        textColorTertiary: "var(--text-color-tertiary)",
        backgroundColorSecondary: "var(--background-color-secondary)"
      },
      keyframes: {
        translation: {
          '0%, 50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translate(0%)' }
        },
        fade : {
          '0%' : {opacity : '0', transform : 'scale(50%)'},
          '100' : {opacity : '1', transform : 'scale(100%)'}
        }
      },
      animation: {
        translation: 'translation 300ms',
        fade : 'fade 300ms'
      },
      screens: {
        md: '971px',
        sm: '660px',
        mds: '6971px',
        sms: '6660px',
        xs: '100px',
      }
    },
  },
  plugins: [],
} satisfies Config;
