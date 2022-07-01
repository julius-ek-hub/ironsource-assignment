import { useContext } from "react";
import AllContactsContext from "../contexts/AllContactsContext";

/**
 * @returns {{
 * contacts: Array.<{
 * name: String,
 * email: String,
 * telephone: String
 * }>
 * }}
 */

const useContactListingsContext = () => useContext(AllContactsContext);

export default useContactListingsContext;
