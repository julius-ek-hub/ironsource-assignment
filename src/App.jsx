import { useState } from "react";
import ThemeProvider from "@mui/system/ThemeProvider/";

import FullScreenLoading from "./components/LoadingIndicators/FullScreenLoading";
import ContactListings from './components/ContactListings';

import themeInMode from "./config/theme";

import DimensionContext from "./contexts/DimensionContext";
import ThemeControlContext from "./contexts/ThemeControlContext";

import useDimension from "./hooks/useDimension";

function TheAssignment() {
	const dimensions = useDimension();
	const [mode, setMode] = useState("light");

	return (
		<ThemeControlContext.Provider value={{ setMode }}>
			<ThemeProvider theme={themeInMode(mode)}>
				<DimensionContext.Provider value={dimensions}>
					<ContactListings />
					<FullScreenLoading loading={dimensions.height === undefined} />
				</DimensionContext.Provider>
			</ThemeProvider>
		</ThemeControlContext.Provider>
	);
}

export default TheAssignment;
