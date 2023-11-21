const breakingPoints = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
}

export const defaultTheme = {
  colors: {
    white: '#FFFFFF',

    'blue-200': '#F5F8FA',
    'blue-300': '#D3E2E5',
    'blue-500': '#0D3B66',

    'green-300': '#3CDC8C',

    'red-100': '#FDECED',
    'red-300': '#F15156',
    'red-500': '#E44449',
    'red-700': '#7A1921',

    'yellow-500': '#F4D35E',

    'orange-500': '#F27006',
  },

  media: {
    aboveMobile: `(min-width: ${breakingPoints.xs})`,
    aboveTablet: `(min-width: ${breakingPoints.sm})`,
    aboveDesktop: `(min-width: ${breakingPoints.lg})`,
    aboveDesktopXl: `(min-width: ${breakingPoints.xl})`,

    belowMobile: `(max-width: ${breakingPoints.xs})`,
    belowTablet: `(max-width: ${breakingPoints.sm})`,
    belowDesktop: `(max-width: ${breakingPoints.lg})`,
    belowDesktopXl: `(max-width: ${breakingPoints.xl})`,
  },
}
