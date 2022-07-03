import { useState } from 'react';

import MuiMenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';

import MoreVert from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import ContactDetails from '../ContactDetails';
import DropDownMenu from '../DropDownMenu';
import ConfirmThenDelete from '../ConfirmThenDelete';

import useContactDetailsContext from '../../hooks/useContactDetailsContext';
import useContactListingsContext from '../../hooks/useContactsListingsContext';

const MenuItem = ({ title, Icon, ...rest }) => (
    <MuiMenuItem {...rest}>
        <ListItemIcon sx={{ minWidth: '25px !important' }}>
            <Icon fontSize="small" />
        </ListItemIcon>
        {title}
    </MuiMenuItem>
);

export default function SideMenu() {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [confirmBoxOpen, setConfirmBoxOpen] = useState(false);
    const { phone, _id, name } = useContactDetailsContext();
    const { deleteContact, selected, setSelected } = useContactListingsContext();

    return (
        <>
            <DropDownMenu
                InvokeComponent={props => (
                    <IconButton {...props} >
                        <MoreVert />
                    </IconButton>
                )}>

                <MenuItem Icon={CheckBoxIcon} title="Select" onClick={
                    () => setSelected([...selected, _id])
                } />

                <MenuItem Icon={PersonIcon} title="More Info" onClick={
                    () => setDetailsOpen(true)
                } />

                <MenuItem Icon={CallIcon} title="Call this User" onClick={
                    () => window.location.assign(`tel:${phone}`)
                } />

                <MenuItem Icon={DeleteIcon} title="Delete Contact" onClick={
                    () => setConfirmBoxOpen(true)
                } />
            </DropDownMenu>
            <ConfirmThenDelete
                open={confirmBoxOpen}
                onDone={() => setConfirmBoxOpen(false)}
                deleteHandler={() => deleteContact(_id)}
                name={name.first}
            />
            <ContactDetails
                open={detailsOpen}
                onClose={() => setDetailsOpen(false)} />
        </>
    );
}

