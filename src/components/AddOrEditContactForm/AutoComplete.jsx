import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Autocomplete({ onChange, options, ...rest }) {
    return (
        <MuiAutocomplete
            onChange={(e, value) => onChange({ target: { value } })}
            options={options}
            renderInput={(params) => <TextField {...params} {...rest} />}
        />
    );
}
