import ShadeGenerator from 'shade-generator';

const WHITE = '#FFFFFF';
const BLACK = '#000000';

const GREEN_MAIN = '#395B64';
const BRIGHT_GREEN_MAIN = '#73a4b1';
const ERROR_MAIN = '#ff4d4f';
const SECONDARY = '#6c757d';

const DarkBG = '#2e3641';

const generateDesiredShades = (color: string) => ({
  BACKGROUND: ShadeGenerator.hue(color).shade('10').hex(),
  LIGHTEST: ShadeGenerator.hue(color).shade('20').hex(),
  LIGHT: ShadeGenerator.hue(color).shade('70').hex(),
  MAIN: color,
  DARK: ShadeGenerator.hue(color).shade('400').hex(),
  DARKER: ShadeGenerator.hue(color).shade('800').hex(),
});

const Grey = {
  LIGHT: '#f2f2f2',
  MAIN: '#eaeaea',
  DARK: '#d1d1d1',
  DARKER: '#d8d8d8',
};

const Green = generateDesiredShades(GREEN_MAIN);
const BRIGHT_GREEN = generateDesiredShades(BRIGHT_GREEN_MAIN);
const Secondary = generateDesiredShades(SECONDARY);
const Error = generateDesiredShades(ERROR_MAIN);

export const defaultColors: Record<string, Record<string, string>> = {
  default: {
    white: WHITE,
    black: BLACK,
  },

  primary: {
    shadeBackground: Green.BACKGROUND,
    shade1: Green.LIGHTEST,
    shade2: Green.LIGHT,
    main: Green.MAIN,
    shade3: Green.DARK,
    shade4: Green.DARKER,
  },

  secondary: {
    shade1: Secondary.LIGHTEST,
    shade2: Secondary.LIGHT,
    main: Secondary.MAIN,
    shade3: Secondary.DARK,
    shade4: Secondary.DARKER,
  },

  error: {
    shade1: Error.LIGHTEST,
    shade2: Error.LIGHT,
    main: Error.MAIN,
    shade3: Error.DARK,
    shade4: Error.DARKER,
  },

  ternary: {
    main: Grey.DARKER,
    light: Grey.MAIN,
    mediumLight: Grey.DARK,
  },

  background: {
    body: Green.BACKGROUND,
    card: WHITE,
    dark: Green.DARKER,
    secondary: Grey.MAIN,
  },

  text: {
    main: Green.DARKER,
    white: WHITE,
    disabled: Grey.DARKER,
  },

  translucent: {
    shade1: 'rgba(0, 0, 0, 0.1)',
    shade2: 'rgba(0, 0, 0, 0.3)',
    shade3: 'rgba(17, 17, 26, 0.1)',
    shade4: 'rgba(17, 17, 26, 0.05) ',
  },
};

export const darkThemeColors: Record<string, Record<string, string>> = {
  default: {
    white: WHITE,
    black: BLACK,
  },

  primary: {
    shade1: BRIGHT_GREEN.LIGHTEST,
    shade2: BRIGHT_GREEN.LIGHT,
    main: BRIGHT_GREEN.MAIN,
    shade3: BRIGHT_GREEN.DARK,
    shade4: BRIGHT_GREEN.DARKER,
  },

  secondary: {
    shade1: Secondary.LIGHTEST,
    shade2: Secondary.LIGHT,
    main: Secondary.MAIN,
    shade3: Secondary.DARK,
    shade4: Secondary.DARKER,
  },

  error: {
    shade1: Error.LIGHTEST,
    shade2: Error.LIGHT,
    main: Error.MAIN,
    shade3: Error.DARK,
    shade4: Error.DARKER,
  },

  ternary: {
    main: Grey.DARKER,
    light: Grey.MAIN,
    mediumLight: Grey.DARK,
  },

  background: {
    main: DarkBG,
    light: WHITE,
    dark: Green.DARKER,
  },

  text: {
    main: Green.DARKER,
    white: WHITE,
    disabled: Grey.DARKER,
  },

  translucent: {
    shade1: 'rgba(0, 0, 0, 0.1)',
    shade2: 'rgba(0, 0, 0, 0.06)',
  },
};

export const paddings = {
  button: '6px 16px',
};

export const radius = {
  button: '6px',
};

export const transition = '';

export enum EColors {
  primary = 'var(--primary-main)',
  primaryHover = 'var(--primary-shade3)',
  primaryLight = 'var(--primary-shade1)',

  secondary = 'var(--secondary-main)',
  secondaryHover = 'var(--secondary-shade3)',
  secondaryLight = 'var(--secondary-shade1)',

  error = 'var(--error-main)',
  errorHover = 'var(--error-shade3)',
  errorLight = 'var(--error-shade1)',

  textButton = 'var(--text)',

  textMain = 'var(--text-main)',
  textLight = 'var(--text-white)',
  textDisabled = 'var(--text-disabled)',

  backgroundCard = 'var(--background-card)',
  backgroundBody = 'var(--background-body)',
  backgroundDark = 'var(--background-dark)',
  backgroundSecondary = 'var(--background-secondary)',

  disabled = 'var(--grey-main)',
  white = 'var(--default-white)',

  _inherit = 'inherit',
  _blank = '',
}

export enum EFontSize {
  small = '1rem',
  normal = '1.4rem',
  large = '1.8rem',
  xl = '2rem',
  xxl = '2.4rem',
}

export type TFontWeights = 'normal' | 'bold' | 'bolder' | 'extreme';

export enum EFontWeights {
  normal = 400,
  bold = 600,
  bolder = 800,
  extreme = 1000,
}

export enum EShadows {
  elvt1 = 'var(--translucent-shade1) 0px 4px 6px -1px, var(--translucent-shade2) 0px 2px 4px -1px;',
  elvt2 = '4px 4px 14px 3px var(--translucent-shade1)',
  elvt3 = '1px 1px 4px 1px var(--translucent-shade2)',
  elvt4 = 'var(--translucent-shade3) 0px 4px 16px, var(--translucent-shade4) 0px 8px 32px;',
}

export enum EBorders {
  main = '1px solid var(--ternary-main)',
  primary = '1px solid var(--primary-main)',
  secondary = '1px solid var(--primary-main)',
  _blank = '',
}

export enum ETransition {
  all = '0.2s all ease-in-out',
}

export enum ERadius {
  normal = '4px',
  six = '6px',
  over = '8px',
}
