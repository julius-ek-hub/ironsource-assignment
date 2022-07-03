import { useState } from "react";

import Text from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Delete from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

import IconButton from '@mui/material/IconButton';

import ConfirmThenDelete from "../ConfirmThenDelete";

import useContactListingsContext from '../../hooks/useContactsListingsContext';


function CheckedIndicator() {

    const [confirmBoxOpen, setConfirmBoxOpen] = useState(false);
    const { checked, setChecked, contacts, mode, deleteContact } = useContactListingsContext();

    const total = checked.length;

    if (total === 0) return null;


    const toggleCheckAll = (e, checked) => {
        if (checked) return setChecked(contacts[mode].map(({ _id }) => _id));
        setChecked([]);
    }


    return (
        <Box display="flex" ml={1} mr={3} mb={1} alignItems="center">
            <Checkbox
                onChange={toggleCheckAll}
                checked={total === contacts[mode].length} />
            <Text>{checked.length} / {contacts[mode].length} Selected</Text>
            <IconButton sx={{ ml: "auto" }} onClick={() => setConfirmBoxOpen(true)}>
                <Delete />
            </IconButton>
            <ConfirmThenDelete
                open={confirmBoxOpen}
                onDone={() => setConfirmBoxOpen(false)}
                deleteHandler={() => deleteContact(checked)}
                name={`${total} contact${total > 1 ? 's' : ''}`}
            />
        </Box>
    );
}

export default CheckedIndicator;
