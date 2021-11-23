module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px'
      },
      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760'
      },
      backgroundImage: theme => ({
        'spotify-theme': "url('/img/teste1.svg')",
        'spotify-theme-mobile': "url('/img/teste2.svg')"
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
