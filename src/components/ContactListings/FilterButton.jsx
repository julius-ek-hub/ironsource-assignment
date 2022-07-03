import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MuiSwitch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import SortIcon from '@mui/icons-material/Sort';

import DropDownMenu from '../DropDownMenu';
import useContactListingsContext from '../../hooks/useContactsListingsContext';


function FilterButton() {

    const { mode, setApiMode, modes, sortBy, isSortedBy } = useContactListingsContext();

    const handleModeChange = () => {
        setApiMode(mode === modes.real ? modes.random : modes.real)
    }

    const handleSortChange = (event) => {
        sortBy(event.target.value);
    };

    return (
        <Box ml="auto" mr={2}>
            <DropDownMenu
                InvokeComponent={props => (
                    <IconButton {...props}>
                        <SortIcon />
                    </IconButton>
                )}
            >
                <FormControl sx={{ p: 1 }}>
                    <FormLabel sx={{ ml: 1 }}>Sort by:</FormLabel>
                    <RadioGroup
                        value={isSortedBy}
                        onChange={handleSortChange}
                        sx={{ ml: 2 }}
                    >
                        <FormControlLabel value="name.first" control={<Radio />} label="First name" />
                        <FormControlLabel value="name.last" control={<Radio />} label="Last name" />
                        <FormControlLabel value="dob.age" control={<Radio />} label="Age" />
                    </RadioGroup>
                </FormControl>
                <Divider />
                <RadioGroup
                    sx={{ ml: 2, mt: 1, mr: 1 }}
                    value={mode} >
                    <FormControlLabel
                        onClick={handleModeChange}
                        control={<MuiSwitch checked={mode === modes.real} />}
                        label="Use Real API" />
                </RadioGroup>
            </DropDownMenu>
        </Box >
    );
}

export default FilterButton;