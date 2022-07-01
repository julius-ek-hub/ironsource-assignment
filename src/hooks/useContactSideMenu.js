import { useState } from "react";

function useContactSideMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return { open, anchorEl, handleClick, handleClose };
}

export default useContactSideMenu;
