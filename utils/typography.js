import Typography from "typography";
import SutroTheme from "typography-theme-sutro";

delete SutroTheme.googleFonts;

SutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1,h2,h3,h4,h5,h6": {
    marginTop: rhythm(1 / 2),
  },
  h1: {
    fontWeight: 900,
    letterSpacing: "-1px",
  },
});
SutroTheme.scaleRatio = 5 / 2;


const typography = new Typography({
  baseFontSize: '18px',
     baseLineHeight: 1.78,
     headerLineHeight: 1.1,
     scaleRatio: 2.5,
     googleFonts: [],
     headerFontFamily: [ 'Open Sans', 'sans-serif' ],
     bodyFontFamily: [ 'karla', 'Georgia', 'serif' ],
     headerColor: 'inherit',
     bodyColor: 'hsla(0,0%,0%,0.9)',
     headerWeight: 700,
     bodyWeight: 300,
     boldWeight: 700,
     includeNormalize: true,
     blockMarginBottom: 1,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
