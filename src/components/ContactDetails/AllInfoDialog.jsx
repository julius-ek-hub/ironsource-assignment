import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Text from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Divider from '@mui/material/Divider';

import * as Styled from '../StyledComponents/ContactDetails';
import ListedInfo from "./ListedInfo";
import ImageCard from "./CardInfo";

import useDimensionContext from "../../hooks/useDimensionContext";
import useContactDetailsContext from '../../hooks/useContactDetailsContext';


function AllInfoDialog({ open, onClose }) {

    const { md } = useDimensionContext();
    const { gender } = useContactDetailsContext();

    const color = gender === 'male' ? 'error' : 'success';

    if (!open) return null;

    return (
        <Dialog open fullWidth onClose={onClose} fullScreen={!md}>
            <Styled.DialogTitle>
                <IconButton onClick={onClose} sx={{ position: 'absolute', left: 10 }}>
                    <ArrowBackIcon sx={{ fontSize: 40 }} color={color} />
                </IconButton>
                <Text variant="h5" fontWeight="bolder">Contact Details</Text>
            </Styled.DialogTitle>
            <DialogContent>
                <ImageCard />
                <Divider />
                <ListedInfo />
            </DialogContent>
        </Dialog>
    );
}

export default AllInfoDialog;