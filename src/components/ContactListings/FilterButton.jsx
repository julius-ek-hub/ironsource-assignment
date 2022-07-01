import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import SortIcon from '@mui/icons-material/Sort';


function FilterButton() {

    return (
        <Box ml="auto" mr={2}>
            <IconButton onClick={() => alert('Not ready yet')}>
                <SortIcon />
            </IconButton>
        </Box>
    );
}

export default FilterButton;