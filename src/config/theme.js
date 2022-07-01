import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
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

export default defaultTheme;
