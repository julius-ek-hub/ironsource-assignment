import { useState } from "react";

import useContactListingsContext from "./useContactsListingsContext";

function useDropDownMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const { fetchingContacts } = useContactListingsContext();

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		if (!fetchingContacts) setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return { open, anchorEl, handleClick, handleClose };
}

export default useDropDownMenu;
