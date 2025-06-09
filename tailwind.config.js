import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "8px", 
          medium: "12px", 
          large: "16px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: "#0a0a0c"
            },
            content1: {
              DEFAULT: "rgba(24, 24, 31, 0.7)",
              foreground: "#fafafa"
            },
            content2: {
              DEFAULT: "rgba(39, 39, 47, 0.6)",
              foreground: "#f4f4f5"
            },
            content3: {
              DEFAULT: "rgba(63, 63, 80, 0.5)",
              foreground: "#e4e4e7"
            },
            content4: {
              DEFAULT: "rgba(82, 82, 95, 0.5)",
              foreground: "#d4d4d8"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.1)"
            },
            focus: {
              DEFAULT: "#6366f1"
            },
            foreground: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
              DEFAULT: "#ECEDEE"
            },
            overlay: {
              DEFAULT: "#000000"
            },
            primary: {
              50: "#1e1b4b",
              100: "#312e81",
              200: "#4338ca",
              300: "#4f46e5",
              400: "#6366f1",
              500: "#818cf8",
              600: "#a5b4fc",
              700: "#c7d2fe",
              800: "#e0e7ff",
              900: "#eef2ff",
              DEFAULT: "#6366f1",
              foreground: "#fff"
            },
            secondary: {
              50: "#581c87",
              100: "#7e22ce",
              200: "#9333ea",
              300: "#a855f7",
              400: "#c084fc",
              500: "#d8b4fe",
              600: "#e9d5ff",
              700: "#f3e8ff",
              800: "#f5f3ff",
              900: "#faf5ff",
              DEFAULT: "#a855f7",
              foreground: "#fff"
            },
            success: {
              50: "#052814",
              100: "#095028",
              200: "#0e793c",
              300: "#12a150",
              400: "#17c964",
              500: "#45d483",
              600: "#74dfa2",
              700: "#a2e9c1",
              800: "#d1f4e0",
              900: "#e8faf0",
              DEFAULT: "#17c964",
              foreground: "#000"
            },
            warning: {
              50: "#312107",
              100: "#62420e",
              200: "#936316",
              300: "#c4841d",
              400: "#f5a524",
              500: "#f7b750",
              600: "#f9c97c",
              700: "#fbdba7",
              800: "#fdedd3",
              900: "#fefce8",
              DEFAULT: "#f5a524",
              foreground: "#000"
            },
            danger: {
              50: "#310413",
              100: "#610726",
              200: "#920b3a",
              300: "#c20e4d",
              400: "#f31260",
              500: "#f54180",
              600: "#f871a0",
              700: "#faa0bf",
              800: "#fdd0df",
              900: "#fee7ef",
              DEFAULT: "#f31260",
              foreground: "#ffffff"
            }
          }
        }
      }
    })
  ]
}
