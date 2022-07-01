import { useState } from 'react';

import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';

import MoreVert from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import DeleteIcon from '@mui/icons-material/Delete';

import ConfirmDelete from './ConfirmDelete';
import AllInfoDialog from '../ContactDetails/AllInfoDialog';
import FullScreenLoading from '../LoadingIndicators/FullScreenLoading';

import useContactSideMenu from '../../hooks/useContactSideMenu';
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

export default function Menu() {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [confirmBoxOpen, setConfirmBoxOpen] = useState(false);
    const { post, handleClose, ...rest } = useContactSideMenu();
    const { cell, id } = useContactDetailsContext();
    const { contactBeingDeleted, deleteContact } = useContactListingsContext();

    const doDelete = () => {
        setConfirmBoxOpen(false);
        deleteContact(id.value);
    }

    return (
        <>
            <IconButton onClick={rest.handleClick} >
                <MoreVert />
            </IconButton>
            <MuiMenu
                anchorEl={rest.anchorEl}
                open={rest.open}
                onClose={handleClose}
                onClick={handleClose}
            >

                <MenuItem Icon={PersonIcon} title="More Info" onClick={
                    () => setDetailsOpen(true)
                } />
                <MenuItem Icon={CallIcon} title="Call this User" onClick={
                    () => window.location.assign(`tel:${cell}`)
                } />
                <MenuItem Icon={DeleteIcon} title="Delete Contact" onClick={
                    () => setConfirmBoxOpen(true)
                } />
            </MuiMenu>
            <ConfirmDelete
                open={confirmBoxOpen}
                onRefused={() => setConfirmBoxOpen(false)}
                onAgreed={doDelete}
            />
            <AllInfoDialog
                open={detailsOpen}
                onClose={() => setDetailsOpen(false)} />
            {contactBeingDeleted ? <FullScreenLoading /> : null}
        </>
    );
}

