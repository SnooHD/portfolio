/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: {
    content: [
      "./pages/**/*.vue",
      "./components/**/*.vue",
      "./layouts/**/*.vue",
      "./app.html"
    ]
  },
  mode: "jit",
  theme: {
    screens: {
      xs: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    transitionProperty: {
      // defaults to these values
      none: "none",
      all: "all",
      color: "color",
      width: "width",
      bg: ["background", "background-color"],
      border: "border-color",
      colors: ["color", "background-color", "border-color"],
      opacity: "opacity",
      transform: "transform",
      fill: "fill",
      "text-shadow": "text-shadow",
      "opacity-transform": ["opacity", "transform"]
    },
    transitionDuration: {
      // defaults to these values
      default: "250ms",
      "0": "0ms",
      "100": "100ms",
      "250": "250ms",
      "400": "400ms",
      "500": "500ms",
      "750": "750ms",
      "800": "800ms",
      "1000": "1000ms"
    },
    transitionTimingFunction: {
      // defaults to these values
      default: "ease",
      linear: "linear",
      ease: "ease",
      "ease-in": "ease-in",
      "ease-out": "ease-out",
      "ease-in-out": "ease-in-out",
      easeOutBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      easeOutSine: "cubic-bezier(0.61, 1, 0.88, 1)",
      easeOutQuint: "cubic-bezier(0.22, 1, 0.36, 1)"
    },
    transitionDelay: {
      // defaults to these values
      default: "0ms",
      "0": "0ms",
      "100": "100ms",
      "200": "200ms",
      "300": "300ms",
      "400": "400ms",
      "500": "500ms",
      "600": "600ms",
      "750": "750ms",
      "1000": "1000ms"
    },
    willChange: {
      // defaults to these values
      auto: "auto",
      scroll: "scroll-position",
      contents: "contents",
      opacity: "opacity",
      transform: "transform",
      fill: "fill"
    },
    textShadow: {
      default: "0 1px 0 rgba(0, 0, 0, .25)",
      md: "0 1px 3px rgba(0, 0, 0, .25)",
      lg: "0 1px 3px rgba(0, 0, 0, .5)",
      none: "none"
    },
    transform: {
      "dev-mobile-blob": "translateY(-45%) scale(1.5)",
      "dev-blob": "scale(1.2)",
      "mobile-top": "translateY(33px)",
      "dev-blob-center": "scale(1.2) translateX(50%)",
      "header-blob": "scale(.8) translate(20%, -10%)",
      none: "none",
      "balloon-active": "translateX(-50%) translateX(9px) translateY(-20px)",
      "balloon-closed": "translateX(-50%) translateX(9px) translateY(-10px)",
      "balloon-triangle": "translateX(-50%) translateY(12px)",
      "bracket-small": "translate(9%, 24%) scale(.8)",
      "js-small": "translate(5%, 22%) scale(.8)",
      "translate-z-0": "translateZ(0)"
    },
    translate: {
      none: ["0", "0"],
      "-y-.8": ["0", "-8%"],
      "intro-blob": ["1%", "3%"],
      "link-center": ["50%", "20px"],
      "footer-bear": ["50%", "-50%"],
      "menu-active": ["300px", "150px"],
      "m-blob": ["-14%", "-2%"],
      "sm-m-blob": ["-17%", "-2%"],
      "sm-m-blob-active": ["-56%", "-34%"],
      "x-12": ["12px", "0"],
      "x-120px": ["-120px", "0"],
      "x-100": ["100%", "0"],
      "-x-100": ["-100%", "0"],
      "-y-100": ["0", "-100%"],
      "y-40px": ["0", "40px"],
      "-y10": ["0", "-10%"],
      "-x-2px": ["-2px", "0"],
      "contact-send": ["200%", "-150%"],
      "contact-stage": ["-200%", "150%"]
    },
    colors: {
      none: "transparent",
      white: "#FFFFFF",
      darker: "#2A2A2A",
      dark: "#34434F",
      "dark-light": "#586C77",
      light: "#F1F4F7",
      gray: "#69787F",
      "gray-border": "#D8D8D8",
      "gray-blue": "#3C5768",
      "gray-light": "#D5DAEB",
      "blue-dark": "#2B3F7E",
      "blue-mid": "#2877B2",
      "yellow-mid": "#F3B202",
      "yellow-dark": "#d49c02",
      "yellow-light": "#FFC975",
      red: "#F25E5E",
      green: "#41B883",
      orange: "#ff9337"
    },
    fontFamily: {
      galano: ["GalanoGrotesque", "sans-serif"]
    },
    extend: {
      animation: {
        bounceRectangle: "bouncingRectangle .5s linear infinite",
        bounceShadow: "shadow .5s linear infinite"
      },
      fontSize: {
        tiny: "0.75rem",
        "1xl": "1.3rem",
        "2.5xl": "1.65rem",
        "5.5xl": "3.25rem",
        "7xl": "5rem"
      },
      lineHeight: {
        tighter: "1.1"
      },
      opacity: {
        "40": ".4",
        "60": ".6"
      },
      zIndex: {
        "-1": "-1"
      },
      width: {
        "2.5": "0.625rem",
        "280px": "280px",
        "363px": "363px",
        "400px": "400px",
        "478px": "478px",
        "640px": "640px",
        "1.2": "120%",
        "3.2": "320%",
        "60vw": "60vw",
        contact: "calc(100% + 2rem)",
        "contact-mobile": "calc(100% + 1rem)"
      },
      height: {
        "2.5": "0.625rem",
        ".5": "50%",
        "75px": "75px",
        "150px": "150px",
        "177px": "177px",
        "240px": "240px",
        "180px": "180px"
      },
      inset: {
        "-4": "-1rem",
        "-6": "-1.5rem",
        "-10": "-2.5rem",

        "25px": "25px",

        "-.06": "-.06%",
        "-.8": "-8%",
        "-.1": "-10%",
        "-.11": "-11%",
        "-.12": "-12%",
        "-.14": "-14%",
        "-.2": "-20%",
        "-.25": "-25%",
        "-.3": "-30%",

        ".09": "9%",
        ".1": "10%",
        ".11": "11%",
        ".15": "15%",
        ".3": "30%",
        ".5": "50%",
        ".75": "75%",
        full: "100%",
        ".02": "2%",
        ".06": "6%",
        "11px": "11px",
        "20px": "20px"
      },
      padding: {
        "2.5": "0.625rem",
        "dev-item": "calc(1rem + 1px)",
        "dev-item-active": "calc(1rem + 8px)",
        full: "100%",
        "52px": "52px",
        "77px": "77px",
        "59px": "59px",
        ".21": "21%",
        ".17": "17%",
        "3.5": ".9rem",
        "7": "1.8rem",
        "1.777": "177.7%",
        ".63": "63%"
      },
      margin: {
        "44": "11rem",
        "-15px": "-15px",
        "1px": "1px",
        "8px": "8px",
        ".03": "3%",
        "15": "3.75rem"
      },
      spacing: {
        "14": "3.25rem"
      },
      boxShadow: {
        window:
          "0px 10px 50px rgba(0, 0, 0, 0.1), 0px 20px 30px rgba(0, 0, 0, 0.2), 0px 0px 1px rgba(0, 0, 0, 0.5)"
      },
      borderRadius: {
        mid: "0.3125rem"
      },
      borderWidth: {
        "1": "1px",
        "14": "14px"
      },
      maxWidth: {
        "267px": "267px",
        "616px": "616px",
        "1100": "1100px"
      }
    }
  },
  variants: {
    // all the following default to ['responsive']
    transform: [
      "responsive",
      "hover",
      "in-view",
      "group-hover",
      "before",
      "after"
    ],
    transformOrigin: ["responsive"],
    translate: [
      "responsive",
      "hover",
      "group-hover",
      "in-view",
      "group-in-view",
      "in-view-child"
    ],
    scale: [
      "responsive",
      "hover",
      "in-view",
      "after",
      "before",
      "hover:before",
      "in-view:before"
    ],
    rotate: ["responsive"],
    skew: ["responsive"],
    perspective: ["responsive"],
    perspectiveOrigin: ["responsive"],
    transformStyle: ["responsive"],
    backfaceVisibility: ["responsive"],
    boxShadow: [
      "responsive",
      "before",
      "after",
      "hover",
      "active",
      "group-active",
      "in-view"
    ],
    transformBox: ["responsive"],
    textShadow: ["responsive", "hover"],
    transitionProperty: ["responsive", "before", "after", "hover"],
    transitionDuration: ["responsive", "before", "after"],
    transitionTimingFunction: ["responsive", "before", "after", "group-hover"],
    transitionDelay: ["responsive", "before", "after"],
    willChange: ["responsive", "before", "after"],
    opacity: ["responsive", "group-hover", "hover", "in-view"],
    pointerEvents: ["responsive", "group-hover"],
    position: ["responsive", "before", "after"],
    inset: ["responsive", "before", "after"],
    width: ["responsive", "before", "after", "group-hover"],
    height: ["responsive", "before", "after"],
    padding: ["responsive", "before", "after"],
    margin: ["responsive", "before", "after"],
    display: ["responsive", "before", "after"],
    backgroundColor: ["responsive", "hover", "before", "after", "group-hover"],
    color: ["responsive", "hover", "before", "after"]
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant("after", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`;
        });
      });
    },
    function({ addVariant, e }) {
      addVariant("before", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`;
        });
      });
    },
    function({ addVariant, e }) {
      addVariant("hover:before", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `hover${separator}before${separator}${className}`
          )}:hover::before`;
        });
      });
    },
    function({ addVariant, e }) {
      addVariant("in-view:before", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.s_in-view.${e(
            `in-view${separator}before${separator}${className}`
          )}::before`;
        });
      });
    },
    function({ addVariant, e }) {
      addVariant("in-view", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.s_in-view.${e(`in-view${separator}${className}`)}`;
        });
      });
    },
    function({ addVariant, e }) {
      addVariant("group-in-view", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.s_in-view .${e(`group-in-view${separator}${className}`)}`;
        });
      });
    },
    function({ addVariant, e }) {
      addVariant("in-view-child", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.s_in-view > .${e(`in-view-child${separator}${className}`)}`;
        });
      });
    },
    require("tailwindcss-interaction-variants"),
    require("tailwindcss-transforms")(),
    require("tailwindcss-transitions")(),
    require("tailwindcss-textshadow")
  ]
};
