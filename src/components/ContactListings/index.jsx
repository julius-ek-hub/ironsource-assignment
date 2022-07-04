import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Text from '@mui/material/Typography';
import List from '@mui/material/List';

import LoadingContacts from '../LoadingIndicators/LoadingContacts';
import Contact from '../Contact';
import View from '../View';
import LoadMore from './LoadMore';
import AddMore from './AddMore';
import FilterButton from './FilterButton';
import FlexCenter from '../StyledComponents/FlexCenter';
import AllSelectedContactsDeleteButton from './AllSelectedContactsDeleteButton';
import * as Styled from '../StyledComponents/ContactListings';
import ErrorMessage from './ErrorMessage';

import AllContactsContext from '../../contexts/AllContactsContext';

import useContactListings from '../../hooks/useContactListings';

function ContactListings() {

    const contactsHook = useContactListings();

    let {
        errorFetchingContact: error,
        fetchingContacts: fetching,
        contacts,
        selected,
        apiMode,
        fetchContacts,
        loadMoreOnscroll
    } = contactsHook;

    const targetContacts = contacts[apiMode];

    const handleScroll = (e) => {
        const target = e.target;
        const scollHeight = target.scrollHeight;
        const height = target.clientHeight;
        const _scrollTop = target.scrollTop;
        if (Math.abs(scollHeight - (height + _scrollTop)) < 2 &&
            loadMoreOnscroll &&
            selected.length === 0)
            fetchContacts();

    }

    return (
        <View onScrolledToBottom={fetchContacts}>
            <Styled.MainBox>
                <AllContactsContext.Provider value={contactsHook}>
                    <Styled.FixedHeader>
                        <Box>
                            <Text variant='h5' ml={1}>Contact List</Text>
                            <FilterButton />
                        </Box>
                        <AllSelectedContactsDeleteButton />
                    </Styled.FixedHeader>
                    <Divider />
                    <Styled.ScrollableBox onScroll={handleScroll}>

                        {targetContacts.length > 0 && (
                            <List>
                                {targetContacts.map((contact, k) => <Contact key={k} details={{ ...contact, index: k }} />)}
                            </List>
                        )}

                        {(targetContacts.length === 0 && !fetching) ? (
                            <FlexCenter height="100%" p={4}>
                                No Contact! Click on the Plus {`(+)`} icon below to Add New.
                            </FlexCenter>
                        ) : null}

                        <AddMore />
                        <LoadingContacts loading={fetching} />
                        <LoadMore onClick={fetchContacts} show={!fetching} />
                        <ErrorMessage error={error} />
                    </Styled.ScrollableBox>
                </AllContactsContext.Provider>
            </Styled.MainBox>
        </View>
    );
}

export default ContactListings;