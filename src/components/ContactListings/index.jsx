import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

import LoadingContacts from '../LoadingIndicators/LoadingContacts';
import Contact from '../Contact';
import View from '../View';
import LoadMore from './LoadMore';
import AddMore from './AddMore';
import FilterButton from './FilterButton';
import FlexCenter from '../StyledComponents/FlexCenter';
import CheckedIndicator from './CheckedIndicator';
import * as Styled from '../StyledComponents/ContactListings';

import AllContactsContext from '../../contexts/AllContactsContext';

import useContactListings from '../../hooks/useContactListings';

function ContactListings() {

    const contactsHook = useContactListings();

    let { errorFetchingContact: error, fetchingContacts: fetching, contacts, mode, fetchContacts } = contactsHook;

    const targetContacts = contacts[mode];

    const handleScroll = (e) => {
        const target = e.target;
        const scollHeight = target.scrollHeight;
        const height = target.clientHeight;
        const _scrollTop = target.scrollTop;
        if (Math.abs(scollHeight - (height + _scrollTop)) < 2) {
            fetchContacts();
        }
    }

    return (
        <View onScrolledToBottom={fetchContacts}>
            <Styled.MainBox height={"100%"} position="relative" overflow="hidden">
                <AllContactsContext.Provider value={contactsHook}>
                    <Styled.FixedHeader>
                        <Box>
                            <Typography variant='h5'>Contact List</Typography>
                            <FilterButton />
                        </Box>
                        <CheckedIndicator />
                    </Styled.FixedHeader>
                    <Divider />
                    <Styled.ScrollableBox height="calc(100% - 70px)" overflow="auto" onScroll={handleScroll}>

                        {targetContacts.length > 0 && (
                            <List>
                                {targetContacts.map((contact, k) => <Contact key={k} details={{ ...contact, index: k }} />)}
                            </List>
                        )}

                        {(targetContacts.length === 0 && !fetching) ? (
                            <FlexCenter height="100%" p={4} textAlign="center">
                                No Contact! Click on the Plus {`(+)`} icon below to Add New.
                            </FlexCenter>
                        ) : null}

                        <AddMore />
                        {fetching && <LoadingContacts />}
                        {!fetching && <LoadMore onClick={fetchContacts} />}
                        {error && <Typography color="error" pl={4} pr={4} pb={1} textAlign="center">{error}</Typography>}
                    </Styled.ScrollableBox>
                </AllContactsContext.Provider>
            </Styled.MainBox>
        </View>
    );
}

export default ContactListings;