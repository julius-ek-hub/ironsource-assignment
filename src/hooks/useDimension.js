import { useEffect, useState } from "react";

/**
 * @returns {{
 * height: Number,
 * width: Number,
 * xsm: Boolean,
 * sm: Boolean,
 * md: Boolean,
 * lg: Boolean
 * }}
 */

function useDimension() {
	const [dimensions, setDimensions] = useState({});

	const setAllValues = () => {
		let width = window.innerWidth;
		let height = window.innerHeight;
		setDimensions({
			height,
			width,
			xsm: width > 0,
			sm: width > 500,
			md: width > 700,
			lg: width > 1000,
		});
	};

	useEffect(() => {
		setAllValues();
		window.addEventListener("resize", setAllValues);
		return () => window.removeEventListener("resize", setAllValues);
	}, []);

	return { ...dimensions };
}

export default useDimension;
