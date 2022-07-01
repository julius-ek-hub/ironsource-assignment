import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

import LoadingContacts from '../LoadingIndicators/LoadingContacts';
import Contact from '../Contact';
import View from '../View';
import LoadMore from './LoadMore';
import AddMore from './AddMore';
import FilterButton from './FilterButton';
import FlexCenter from '../StyledComponents/FlexCenter'

import AllContactsContext from '../../contexts/AllContactsContext';

import useContactListings from '../../hooks/useContactListings';
import { Divider } from '@mui/material';

function AllPosts() {

    const contactsHook = useContactListings();

    let { errorFetchingContact: error, fetchingContacts: fetching, contacts, fetchContacts } = contactsHook;

    const handleScroll = (e) => {
        const target = e.target;
        const scollHeight = target.scrollHeight;
        const height = target.clientHeight;
        const _scrollTop = target.scrollTop;
        if (Math.abs(scollHeight - (height + _scrollTop)) < 10) {
            fetchContacts();
        }
    }

    return (
        <View onScrolledToBottom={fetchContacts}>
            <Box height={"100%"} position="relative" overflow="hidden">
                <AllContactsContext.Provider value={contactsHook}>
                    <Box display="flex" alignItems="center" height="70px">
                        <Typography variant='h5' fontWeight="bold" p={2}>Contact List</Typography>
                        <FilterButton />
                    </Box>
                    <Divider />
                    <Box height="calc(100% - 70px)" overflow="auto" onScroll={handleScroll}>

                        {contacts.length > 0 && (
                            <List>
                                {contacts.map((contact, k) => <Contact key={k} details={{ ...contact, index: k }} />)}
                            </List>
                        )}

                        {(contacts.length === 0 && !fetching) ? (
                            <FlexCenter height="100%">
                                No Contact
                            </FlexCenter>
                        ) : null}

                        <AddMore />
                        {fetching && <LoadingContacts />}
                        {!fetching && <LoadMore onClick={fetchContacts} />}
                        {error && <Typography>{error}</Typography>}
                    </Box>
                </AllContactsContext.Provider>
            </Box>
        </View>
    );
}

export default AllPosts;