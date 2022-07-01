import { useContext } from "react";
import ContactDetailsContext from "../contexts/ContactDetailsContext";

/**
 * @returns {{
 * name: String,
 * email: String,
 * telephone: String,
 * id: String
 * }}
 */

const useContactDetailsContext = () => useContext(ContactDetailsContext);

export default useContactDetailsContext;
