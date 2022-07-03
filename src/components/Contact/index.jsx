import { memo } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Checkbox from '@mui/material/Checkbox';

import { Avatar } from '../StyledComponents/Contact';
import ActionButtons from './ActionButtons';
import ContactBody from './ContactBody';

import ContactDetailsContext from '../../contexts/ContactDetailsContext';
import useContactListingsContext from '../../hooks/useContactsListingsContext';


const Contact = ({ details }) => {

    const { checked } = useContactListingsContext();

    const { picture, gender, name } = details;

    const isChecked = _id => checked.includes(details._id)

    return (
        <ContactDetailsContext.Provider value={details}>
            <ListItem sx={{ bgcolor: isChecked(details._id) ? 'divider' : 'background.paper' }}>
                {checked.length > 0 && <Checkbox checked={isChecked(details._id)} />}
                <ListItemAvatar>
                    <Avatar
                        src={picture.thumbnail}
                        gender={gender}
                        alt={name.first} />
                </ListItemAvatar>
                <ContactBody />
                <ActionButtons />
            </ListItem>
        </ContactDetailsContext.Provider>
    );
}

export default memo(Contact);