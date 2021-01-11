import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        common: {
            black: "#005259",
            white: "#FFFFFF"
        },
        primary: {
            main: "#0098A6",
            light: "#00BACC",
            dark: "#007380",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#00BACC",
            light: "#30D8F2",
            dark: "#0098A6",
            contrastText: "#FFFFFF"
        },
        error: {
            main: "#BF0A0A",
            light: "#F23030",
            dark: "#FF6666",
            // contrastText: "#FFFFFF"
        },
        warning: {
            main: "#F2AA00",
            light: "#F23030",
            dark: "#FF6666",
            // contrastText: "#FFFFFF"
        },
        info: {
            main: "#007F99",
            light: "#0BC1D9",
            dark: "#66EBFF",
            // contrastText: "#FFFFFF"
        },
        success: {
            main: "#BF0A0A",
            light: "#F23030",
            dark: "#FF6666",
            // contrastText: "#FFFFFF"
        },
        text: {
            primary: "#007F99",
            secondary: "#6390A6",
            // disabled: "",
            // hint: ""
        },
        divider: "rgba(10, 20, 33, 0.15)",
        background: {
            default: "#f8f8f8",
        }
    },
    typography: {
        fontFamily: "'Nunito', sans-serif",
        h1: {
            // fontFamily: "'Nunito', sans-serif",
            fontWeight: 600,
            fontSize: "2.625rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
            textTransform: "uppercase",
        },
        h2: {
            fontWeight: 200,
            fontSize: "2.625rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em"
        },
        h3: {
            fontWeight: 600,
            fontSize: "1.875rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
            textTransform: "uppercase",
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
            textTransform: "uppercase"
        },
        h5: {
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
            textTransform: "uppercase"
        },
        h6: {
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: "1.75",
            letterSpacing: "0.00938em",
            textTransform: "none"
        },
        subtitle1: {
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
            textTransform: "uppercase"
        },
        subtitle2: {
            fontWeight: 600,
            fontSize: "0.75rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
            textTransform: "uppercase"
        },
        body1: {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
        },
        body2: {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
        },
        button: {
            fontWeight: 700,
            fontSize: "1rem",
            lineHeight: "24px",
            letterSpacing: "0.00938em",
        }
    },
    overrides: {
        MuiPaper: {
            elevation1: {
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)"
            },
            elevation4: {
                boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.16)"
            }
        },
        MuiSwitch: {
            switchBase: {
                color: "#F0F0F0"
            },
            track: {
                color: "rgba(34, 31, 31, 0.26)"
            }
        },
        MuiCard: {
            root: {
                padding: 24
            }
        },
        MuiButtonBase: {
            root: {
                color: "#1B3C4D"
            }
        },
        MuiTypography: {
            root: {
                color: "#0F2733"
            }
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#F8F8F8",
                color: "#0F2733"
            }
        },
        MuiButton: {
            root: {
                padding: "8px 24px",
            },
            contained: {
                boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.25)"
            },
            text: {
                padding: "8px 24px"
            },
            textSizeSmall: {
                padding: "4px 8px",
                fontSize: 12
            }
        },
        // MuiTextField: {
        //     root: {
        //         margin: "12px 0px"
        //     }
        // },
        MuiInputBase: {
            root: {
                color: "#0F2733"
            }
        },
        MuiRadio: {
            root: {
                color: "#1B3C4D",
            }
        }
    }
});

export default theme;