import { useContext } from "react";
import DimensionContext from "../contexts/DimensionContext";

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

const useDimensionContext = () => useContext(DimensionContext);

export default useDimensionContext;
