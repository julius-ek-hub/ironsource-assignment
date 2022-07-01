import ThemeProvider from "@mui/system/ThemeProvider/";

import FullScreenLoading from "./components/LoadingIndicators/FullScreenLoading";
import ContactListings from './components/ContactListings';

import theme from "./config/theme";

import DimensionContext from "./contexts/DimensionContext";

import useDimension from "./hooks/useDimension";

function TheAssignment() {
	const dimensions = useDimension();

	return (
		<ThemeProvider theme={theme}>
			<DimensionContext.Provider value={dimensions}>
				<ContactListings />
				{dimensions.height === undefined && <FullScreenLoading />}
			</DimensionContext.Provider>
		</ThemeProvider>
	);
}

export default TheAssignment;
