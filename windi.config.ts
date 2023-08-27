import { defineConfig } from "windicss/helpers";
import defaultTheme from "windicss/defaultTheme";
import AspectRatio from "windicss/plugin/aspect-ratio";

export default defineConfig({
  shortcuts: {
    icon: "w-6 h-6 fill-none",
    hstack: "flex flex-row items-center",
    vstack: "flex flex-col items-center",
  },
  theme: {
    extend: {
      fontSize: {
        large: "var(--fz-large)",
        medium: "var(--fz-medium)",
        small: "var(--fz-small)",
      },

      fontFamily: {
        serif: ["RozhaOne", ...defaultTheme.fontFamily.serif],
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        brand: {
          background: "#e3d7c4",
          primary: "#784B58",
          secondary: "#BFD0A0",
          "secondary-alt": "#864555",
          accent: "#BF4E70",
          muted: "#6F5055",
        },
      },

      backgroundImage: {
        "lavender-bone-top": "var(--clr-grad-lavendar-bone-t)",
        "lavender-bone-right": "var(--clr-grad-lavendar-bone-r)",
        "lavendar-alabaster": "var(--clr-grad-lavendar-alabaster)",
        platinum: "var(--clr-grad-platinum)",
      },

      dropShadow: {
        small: [
          "0px 0px 0px hsla(var(--clr-shadow), 0.1)",
          "0px 4px 8px hsla(var(--clr-shadow), 0.1)",
        ],
        large: [
          "0px 0px 0px hsla(var(--clr-shadow), 0.1)",
          "0px 4px 8px hsla(var(--clr-shadow), 0.1)",
          "0px 14px 14px hsla(var(--clr-shadow), 0.05)",
          "0px 32px 19px hsla(var(--clr-shadow), 0.0025)",
        ],
      },

      screens: {
        tiny: "375px",
        exp: "590px",
      },
    },
  },

  plugins: [AspectRatio],
});
