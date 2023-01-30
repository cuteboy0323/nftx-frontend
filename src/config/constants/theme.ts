import { ThemeOptions } from '@mui/material';

export const light: ThemeOptions = {};

export const dark: ThemeOptions = {
    palette: {
        mode: 'dark'
    },
    shape: {
        borderRadius: 8
    },
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '20px !important'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    background: 'rgb(25, 26, 27)',
                    color: 'white',
                    fontFamily: 'Segoe UI'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: '#ffffff',
                    fontWeight: 500,
                    fontFamily: 'Segoe UI',
                    borderRadius: '6px'
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                fontFamily: 'Segoe UI'
            }
        }
    }
};
