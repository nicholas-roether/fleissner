import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#be6e46",
			contrastText: "#fff"
		},
		secondary: {
			main: "#cde7b0",
			contrastText: "#000"
		},
		background: {
			default: "#3d3d3d",
			paper: "#464646",
		}
	},
	typography: {
		fontFamily: "'Open Sans', sans-serif",
		h1: {fontFamily: "'Source Serif Pro', serif"},
		h2: {fontFamily: "'Source Serif Pro', serif"},
		h3: {fontFamily: "'Source Serif Pro', serif"},
		h4: {fontFamily: "'Source Serif Pro', serif"},
		h5: {fontFamily: "'Source Serif Pro', serif"},
		h6: {fontFamily: "'Source Serif Pro', serif"},
	}
});

export default theme;