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

const FilterButton = () => {

    const {
        apiMode,
        setApiMode,
        modes,
        selected,
        sortBy,
        isSortedBy,
        darkMode,
        setDarkMode,
        loadMoreOnscroll,
        setLoadMoreOnscroll
    } = useContactListingsContext();

    if (selected.length !== 0) return null;

    const handleModeChange = () => {
        setApiMode(apiMode === modes.real ? modes.random : modes.real)
    }

    const handleSortChange = (e, value) => {
        sortBy(value);
    };

    const handleLoadMoreOnscroll = () => {
        setLoadMoreOnscroll(!loadMoreOnscroll);
    };

    const handleDarkModeChane = (e, value) => {
        setDarkMode(value);
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
                <FormControl sx={{ p: 1 }}>
                    <FormLabel sx={{ ml: 1 }}>Settings</FormLabel>
                    <RadioGroup sx={{ ml: 2, mt: 1, mr: 1 }}>
                        <FormControlLabel
                            onChange={handleDarkModeChane}
                            control={<MuiSwitch checked={darkMode} />}
                            label="Dark Mode" />
                        <FormControlLabel
                            onChange={handleLoadMoreOnscroll}
                            control={<MuiSwitch checked={loadMoreOnscroll} />}
                            label="Load more onScroll" />
                        <FormControlLabel
                            onChange={handleModeChange}
                            control={<MuiSwitch checked={apiMode === modes.real} />}
                            label="Use Real API" />
                    </RadioGroup>
                </FormControl>

            </DropDownMenu>
        </Box >
    );
}

export default FilterButton;