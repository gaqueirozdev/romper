import { createTheme } from "@mui/material";

export const paletteTheme = createTheme({
  palette: {
    primary: { main: '#CA451B', dark: '#A53613' },
    'gray-lighter': { main: '#d9d9d9' },
    'primary-contrast': { main: 'rgba(202, 69, 27, .15)' },
    'gray-light': { main: '#b5b5b5' },
    gray: { main: '#404040' },
    'gray-dark': { main: '#202020' },
    black: { main: '#181818' },
    green: { main: '#61d25f' },
    white: { main: '#fff' },
    'red-light': { main: '#f14545' },
    red: { main: '#e40e28' },
  },
  typography: {
    fontFamily: ["Work Sans", "sans-serif"].join(",")
  }
});

export const theme = createTheme(paletteTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: paletteTheme.palette['black'].main
        },
        html: {
          fontSize: '62.5%',
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled'
      },
      styleOverrides: {
        root: {
          backgroundColor: paletteTheme.palette['gray'].main,
          borderRadius: '12px'
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          color: paletteTheme.palette['gray-light'].main,
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: 'none'
          },
          '&::after': {
            borderBottom: 'none'
          },
          '&::before': {
            borderBottom: 'none'
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          color: paletteTheme.palette['gray-light'].main,
          '&.Mui-focused': {
            fontSize: '1.2rem'
          }
        },
        
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === 'small' && {
            padding: '1.4rem 1.8rem'
          }),
          ...(ownerState.size === 'large' && {
            padding: '1.8rem 2.4rem'
          }),
          borderRadius: '12px',
          fontSize: '1.6rem',
          fontWeight: 'bold',
          textTransform: 'none'
        })
      },
      defaultProps: {
        variant: 'contained'
      }
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          [paletteTheme.breakpoints.up('sm')]: {
            width: 'max-content'
          }
        }
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          [paletteTheme.breakpoints.up('sm')]: {
            minWidth: '200px'
          }
        },
        message: {
          width: '100%',
          textAlign: 'center'
        }
      }
    }
  }
})