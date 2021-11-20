interface colors {
  background: {
    card: string
    button: string
    body: string
  }
  primary: {
    white: string
    black: string
    gold: string
  }
  golds: {
    90: string
    80: string
    70: string
    60: string
    50: string
    40: string
    30: string
    20: string
    10: string
  }
  silvers: {
    5: string
    10: string
    15: string
    20: string
    25: string
    30: string
    35: string
    40: string
    45: string
    50: string
    55: string
  }
  blacks: {
    95: string
    90: string
    85: string
    80: string
    75: string
    70: string
  }
  input: {
    default: input
    alternative?: input
  }
  button: {
    default: button
    alternative?: button
  }
  link: {
    default: link
    alternative?: link
  }
}

interface input {
  background: string
  text: string
  textHover: string
  border: string
  borderHover: string
  shadow?: string
  shadowHover?: string
}

interface button extends input {
  icon?: { color: string }
}
interface link {
  background: string
  backgroundHover: string
  text: string
  textHover: string
}
interface font {
  family: string
  size: string
  weight: string
}
interface fonts {
  light: font
  title: font
  default: font
}

export default interface themeProps {
  name: string
  colors: colors
  fonts: fonts
}
