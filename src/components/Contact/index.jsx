import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import { Avatar } from '../StyledComponents/Contact';
import ActionButtons from './ActionButtons';
import ContactBody from './ContactBody';

import ContactDetailsContext from '../../contexts/ContactDetailsContext';


export default function Contact({ details }) {

    const { picture, gender, name } = details;

    return (
        <ContactDetailsContext.Provider value={details}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={picture.thumbnail} gender={gender} alt={name.first} />
                </ListItemAvatar>
                <ContactBody />
                <ActionButtons />
            </ListItem>
        </ContactDetailsContext.Provider>
    );
}

