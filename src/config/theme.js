import { createTheme } from "@mui/material/styles";

const themeInMode = (mode = "light") =>
	createTheme({
		palette: { mode: mode },
		components: {
			MuiButtonBase: {
				defaultProps: {
					disableRipple: true,
					style: {
						textTransform: "none",
					},
				},
			},
		},
	});

export default themeInMode;
