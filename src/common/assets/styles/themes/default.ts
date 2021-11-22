import themeProps from '../../../interfaces/theme'

const defaultTheme: themeProps = {
  name: 'Black',
  colors: {
    background: {
      card: '#FFFFFF',
      button: '#88B1AE',
      body: 'radial-gradient(circle, rgba(225,240,238,1) 20%, rgba(221,232,231,1) 30%, rgba(243,243,243,0) 51%), linear-gradient(180deg, rgba(242,242,242,1) 31%, rgba(221,232,231,1) 50%, rgba(243,243,243,1) 50%);',
    },
    primary: {
      white: '#ffffff',
      black: '#000000',
      primary: '#00526C',
      secondary: '#88B1AE',
    },
    primaries: {
      90: '#1E576F',
      80: '#305D74',
      70: '#3D6378',
      60: '#47697C',
      50: '#516F81',
      40: '#5A7586',
      30: '#627C8B',
      20: '#6A8391',
      10: '#728A97',
    },
    secondaries: {
      90: '#93BBBA',
      80: '#9BC0C0',
      70: '#A3C6C7',
      60: '#ABCCCD',
      50: '#B3D1D4',
      40: '#BCD7DA',
      30: '#C4DDE0',
      20: '#CDE3E6',
      10: '#D5E7EB',
    },
    silvers: {
      5: '#FCFCFC',
      10: '#F0F0F0',
      15: '#E3E3E3',
      20: '#D7D7D7',
      25: '#CACACA',
      30: '#BDBDBD',
      35: '#A4A4A4',
      40: '#989898',
      45: '#8B8B8B',
      50: '#727272',
      55: '#585858',
    },
    blacks: {
      95: '#0D0D0D',
      90: '#191919',
      85: '#262626',
      80: '#333333',
      75: '#3F3F3F',
      70: '#4C4C4C',
    },
    input: {
      default: {
        background: '#88B1AE',
        backgroundHover: '#00526C',
        text: '#fff',
        textHover: '#88B1AE',
        border: '',
        borderHover: '',
        shadowHover: '#ABCCCD',
      },
    },
    button: {
      default: {
        background: '#72A19E',
        backgroundHover: '#00526C',
        text: '#00526C',
        textHover: '#72A19E',
        border: '',
        borderHover: '',
        shadowHover: '#CDE3E6',
      },
    },
    link: {
      default: {
        background: '',
        backgroundHover: '#00526C',
        text: '#00526C',
        textHover: '#FFF',
      },
    },
  },
  fonts: {
    default: {
      family: 'Roboto, sans-serif',
      size: '14',
      weight: 'regular',
    },
    light: {
      family: 'Roboto, sans-serif',
      size: '14',
      weight: 'regular',
    },
    title: {
      family: 'Roboto, sans-serif',
      size: '16',
      weight: 'bold',
    },
  },
}

export default defaultTheme
