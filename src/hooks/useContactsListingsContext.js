import { useContext } from "react";
import AllContactsContext from "../contexts/AllContactsContext";

/**
 * @returns {{
 * contacts: Array,
 * fetchingContacts: Boolean,
 * errorFetchingContact: null | String,
 * contactBeingDeleted: String,
 * isSortedBy: String,
 * mode: 'real' | 'random',
 * modes: {
 *   real: String,
 *   random: String
 * },
 * checked: Array.<String>
 * setApiMode: Function,
 * fetchContacts: Function,
 * deleteContact: Function,
 * saveContact: Function,
 * sortBy: Function
 * setChecked: Function,
 * }}
 */

const useContactListingsContext = () => useContext(AllContactsContext);

export default useContactListingsContext;
