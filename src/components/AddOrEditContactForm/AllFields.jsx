import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import FormField from './FormField';
import FormGroup from './FormGroup';
import Autocomplete from './AutoComplete';

const Gender = () => (
    <FormField
        name="gender"
        label="Gender"
        options={['Male', 'Female']}
        InputComponent={Autocomplete} />
);

const Title = () => (
    <FormField
        name="name.title"
        label="Tile"
        options={["Mr", "Ms", "Mrs", "Monsieur", "Miss", "Madame", "Mademoiselle"]}
        InputComponent={Autocomplete} />
)


function AddOrEditContactForm() {

    return (
        <>
            <Typography>All fields are required</Typography>
            <Typography variant='h6' pt={2}>Personal Info</Typography>

            <FormGroup>
                <Title />
                <FormField label="First name" name="name.first" />
                <FormField label="Last name" name="name.last" />
            </FormGroup>

            <FormGroup>
                <Gender />
                <FormField name="dob" label="Date of birth" type="date" />
            </FormGroup>

            <FormGroup>
                <FormField label="Mobile number" name="phone" />
                <FormField label="Email" name="email" />
            </FormGroup>

            <Divider sx={{ mt: 2 }} />

            <Typography variant='h6' pt={2}>Address Details</Typography>

            <FormGroup>
                <FormField label="Country" name="location.country" />
                <FormField label="City" name="location.city" />
            </FormGroup>

            <FormField label="State" name="location.state" />

            <FormGroup>
                <FormField label="Street number" name="location.street.number" type="number" />
                <FormField label="Street name" name="location.street.name" />
            </FormGroup>
        </>
    );
}

export default AddOrEditContactForm;