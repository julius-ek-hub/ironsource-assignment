import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Text from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Divider from '@mui/material/Divider';

import * as Styled from '../StyledComponents/ContactDetails';
import ListedInfo from "./ListedInfo";
import ImageCard from "./ImageCard";

import useDimensionContext from "../../hooks/useDimensionContext";
import useContactDetailsContext from '../../hooks/useContactDetailsContext';


function ContactDetails({ open, onClose }) {

    const { md } = useDimensionContext();
    const { gender } = useContactDetailsContext();

    const color = gender.toLowerCase() === 'male' ? 'error' : 'success';

    return (
        <Dialog open={open} fullWidth onClose={onClose} fullScreen={!md}>
            <Styled.DialogTitle>
                <IconButton onClick={onClose} sx={{ position: 'absolute', left: 10 }}>
                    <ArrowBackIcon sx={{ fontSize: 40 }} color={color} />
                </IconButton>
                <Text variant="bold" fontWeight="bolder">Contact Details</Text>
            </Styled.DialogTitle>
            <DialogContent>
                <ImageCard />
                <Divider />
                <ListedInfo />
            </DialogContent>
        </Dialog>
    );
}

export default ContactDetails;