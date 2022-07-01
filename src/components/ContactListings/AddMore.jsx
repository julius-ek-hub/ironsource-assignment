import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import * as Styled from '../StyledComponents/ContactListings';


function AddMore() {

    return (
        <Styled.Addmore onClick={() => alert('Not functioning yet..')}>
            <IconButton>
                <AddIcon fontSize='large' />
            </IconButton>
        </Styled.Addmore>
    );
}

export default AddMore;