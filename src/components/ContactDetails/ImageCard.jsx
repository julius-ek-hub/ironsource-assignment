import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import * as Styled from '../StyledComponents/ContactDetails';
import ActionButtons from "./ActionButtons";

import useContactDetailsContext from '../../hooks/useContactDetailsContext';


function ImageCard() {

    const { phone, name: { title, first, last }, picture, gender } = useContactDetailsContext();

    return (
        <Styled.ImageBox>
            <Styled.AvatarLarge src={picture.large} gender={gender} />
            <Stack alignItems="center">
                <Typography variant="h6">{`${title}. ${first} ${last}`}</Typography>
                <Typography>{phone}</Typography>
            </Stack>
            <ActionButtons />
        </Styled.ImageBox>
    );
}

export default ImageCard;