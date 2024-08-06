import {
  IJeneseiTheme,
  IJeneseiThemeSize,
  JeneseiThemeVariablesKeys,
  TJeneseiThemeSize,
} from '.'

export const JeneseiThemeVariables: Record<JeneseiThemeVariablesKeys, string> =
  {
    transparent: 'transparent',
    black100: '#000000;',
    black80: 'rgba(0 0 0 / 0.8)',
    black60: 'rgba(0 0 0 / 0.6)',
    black50: 'rgba(0 0 0 / 0.5)',
    black40: 'rgba(0 0 0 / 0.4)',
    black10: 'rgba(0 0 0 / 0.1)',
    black05: 'rgba(0 0 0 / 0.05)',
    grayJanice: '#f2f2f7',
    grayKaren: '#e5e5ea',
    grayMonica: '#c7c7cc',
    graySandra: '#d1d1d6',
    grayPatricia: '#484848',
    graySarah: '#737373',
    greenGoogle: '#34a853',
    green100: '#34a853',
    green10: 'rgba(52 168 83 / 0.1)',
    whiteStandard: '#ffffff',
    yellowGoogle: '#fbbc04',
    redGoogle: '#ea4335',
    red100: '#ff4141',
    red10: 'rgba(255 65 65 / 0.1)',
    blueGoogle: '#4285f4',
    blueRest: '#4195d2',
    blueActive: 'rgba(65 149 210 / 0.1)',
    blueHover: 'rgba(23 105 165 / 0.8)',
    blueFocus: '#1769a5',
    blueBr: '#0975a6',
  }

const DefaultJeneseiThemeGenre = {
  white: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
    },
    color: {
      rest: JeneseiThemeVariables.black100,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black100,
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent,
    },
  },
  product: {
    background: {
      rest: JeneseiThemeVariables.blueRest,
      hover: JeneseiThemeVariables.blueHover,
    },
    color: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
      placeholder: JeneseiThemeVariables.whiteStandard,
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent,
    },
  },
  productBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
    },
    color: {
      rest: JeneseiThemeVariables.blueRest,
      hover: JeneseiThemeVariables.blueHover,
      placeholder: JeneseiThemeVariables.blueRest,
    },
    border: {
      rest: JeneseiThemeVariables.blueRest,
      hover: JeneseiThemeVariables.blueHover,
    },
  },
  gray: {
    background: {
      rest: JeneseiThemeVariables.black10,
      hover: JeneseiThemeVariables.graySandra,
    },
    color: {
      rest: JeneseiThemeVariables.black60,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black80,
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent,
    },
  },
  grayBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
    },
    color: {
      rest: JeneseiThemeVariables.black60,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black80,
    },
    border: {
      rest: JeneseiThemeVariables.black10,
      hover: JeneseiThemeVariables.graySandra,
    },
  },
  black: {
    background: {
      rest: JeneseiThemeVariables.black100,
      hover: JeneseiThemeVariables.black60,
    },
    color: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
      placeholder: JeneseiThemeVariables.whiteStandard,
    },
    border: {
      rest: JeneseiThemeVariables.transparent,
      hover: JeneseiThemeVariables.transparent,
    },
  },
  blackBorder: {
    background: {
      rest: JeneseiThemeVariables.whiteStandard,
      hover: JeneseiThemeVariables.whiteStandard,
    },
    color: {
      rest: JeneseiThemeVariables.black100,
      hover: JeneseiThemeVariables.black60,
      placeholder: JeneseiThemeVariables.black100,
    },
    border: {
      rest: JeneseiThemeVariables.black100,
      hover: JeneseiThemeVariables.black60,
    },
  },
}

export const JeneseiTheme: IJeneseiTheme = {
  transition: '0.3s ease',
  transitionDuration: '0.3s',
  transitionTimingFunction: 'ease',
  screens: {
    mobile: { width: '850px' },
    tablet: { width: '1290px' },
    other: true,
  },
  fontFamily: 'Inter',
  effects: {
    button: {
      playstation:
        '0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
  },
  colors: {
    white: JeneseiThemeVariables.whiteStandard,
    focus: JeneseiThemeVariables.black60,
    danger: JeneseiThemeVariables.redGoogle,
    button: DefaultJeneseiThemeGenre,
    toggle: DefaultJeneseiThemeGenre,
    checkbox: DefaultJeneseiThemeGenre,
    input: DefaultJeneseiThemeGenre,
  },
}

export const KEY_SIZE_DATA: Record<TJeneseiThemeSize, IJeneseiThemeSize> = {
  large: {
    height: 46,
    heightIcon: 20,
    radius: 6,
    padding: 16,
    font: 20,
  },
  largeMedium: {
    height: 42,
    heightIcon: 18,
    radius: 6,
    padding: 14,
    font: 18,
  },
  medium: {
    height: 38,
    heightIcon: 16,
    radius: 6,
    padding: 12,
    font: 16,
  },
  mediumSmall: {
    height: 34,
    heightIcon: 14,
    radius: 6,
    padding: 10,
    font: 14,
  },
  small: {
    height: 30,
    heightIcon: 12,
    radius: 8,
    padding: 8,
    font: 12,
  },
}
