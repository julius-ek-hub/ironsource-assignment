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
 * selected: Array.<String>,
 * loadMoreOnscroll: Boolean,
 * setLoadMoreOnscroll: Boolean,
 * setApiMode: Function,
 * fetchContacts: Function,
 * deleteContact: Function,
 * saveContact: Function,
 * sortBy: Function
 * setSelected: Function,
 * }}
 */

const useContactListingsContext = () => useContext(AllContactsContext);

export default useContactListingsContext;
