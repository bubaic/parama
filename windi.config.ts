import { defineConfig } from "windicss/helpers";
import defaultTheme from "windicss/defaultTheme";

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
    },
  },
});
