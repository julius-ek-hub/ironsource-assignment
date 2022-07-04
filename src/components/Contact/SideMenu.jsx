import { useState } from 'react';

import MuiMenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';

import MoreVert from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';

import ContactDetails from '../ContactDetails';
import DropDownMenu from '../DropDownMenu';
import ConfirmThenDelete from '../ConfirmThenDelete';
import FormLauncher from '../AddOrEditContactForm/FormLauncher';

import useContactDetailsContext from '../../hooks/useContactDetailsContext';
import useContactListingsContext from '../../hooks/useContactsListingsContext';

import { capitalizeFirstLetter, YY_MM_DD } from '../../utils';

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
    const [editOpen, setEditOpen] = useState(false);
    const [confirmingDelete, setConfirmingDelete] = useState(false);
    const thisUser = useContactDetailsContext();

    const { deleteContact, selected, setSelected, updateContact } = useContactListingsContext();

    const { phone, _id, name, dob } = thisUser;

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

                <MenuItem Icon={EditIcon} title="Edit" onClick={
                    () => setEditOpen(true)
                } />

                <MenuItem Icon={CallIcon} title="Call" onClick={
                    () => window.location.assign(`tel:${phone}`)
                } />

                <MenuItem Icon={PersonIcon} title="More Info" onClick={
                    () => setDetailsOpen(true)
                } />

                <MenuItem Icon={DeleteIcon} title="Delete Contact" onClick={
                    () => setConfirmingDelete(true)
                } />
            </DropDownMenu>
            <ConfirmThenDelete
                open={confirmingDelete}
                onDone={() => setConfirmingDelete(false)}
                deleteHandler={() => deleteContact(_id)}
                name={name.first}
            />
            <ContactDetails
                open={detailsOpen}
                onClose={() => setDetailsOpen(false)} />

            <FormLauncher
                open={editOpen}
                title="Edit Contact"
                defaultValues={{
                    ...thisUser,
                    dob: YY_MM_DD(dob.date),
                    gender: capitalizeFirstLetter(thisUser.gender)
                }}
                onSubmit={updateContact}
                onCanceled={() => setEditOpen(false)}
            />
        </>
    );
}

