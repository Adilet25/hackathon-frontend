/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1440px",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        ourGrey: "#686869",
        our2grey: "#565B5B",
        ourLemonGreen: "#0A9382",
        ourDarkGreen: "#0C6862",
        ourViolet: "#6F4FF2",
      },
      width: {
        vsm: "50vmax",
        logo: "9vmax",
        btn: "7vmax",
        card: "35rem",
      },
      height: {
        btn: "3vmax",
        footerHeight: "300px",
      },
      outlineWidth: {
        16: "16px",
      },
      borderWidth: {
        2: "2px",
      },
      borderRadius: {
        btn: "14px",
        50: "50%",
      },
      fontFamily: {
        ourFont: " 'Manrope'",
      },
      backgroundColor: {
        ourBlue: " #D1E5F2",
      },
      transitionDelay: {
        tr: "1s",
      },
      spacing: {
        "96px": "107px",
        leftSpacing: "105px",
        rightSpacing: "401px",
        BottomSpacing: "424px",
        LeftIKSpacing: "243px",
        REDTalasSpacing: "27.5px",
        REDOshAndBatkenDivSpacing: "230px",
        REDOshAndBatkenDivSpacingBottom: "40px",
        RedrightSpacing: "300px",
        RedRightSpacingMain: "1135px",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-1%)",
            transtion: "3s",
          },
        },
      },
    },
  },
  plugins: [],
};
