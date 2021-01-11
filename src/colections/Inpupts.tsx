import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Card, FormControlLabel, TextField, Typography, Switch, RadioGroup, Checkbox } from '@material-ui/core';
import B2bRadio from "../components/B2bRadio";
import CheckboxesTags from '../components/ComboxMultiCheckbox';

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
]  

export default function Inputs(): React.ReactElement {
    const [value, setValue] = React.useState('female');

    const handleChangeRadioGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const [state, setState] = React.useState({
        default: true,
        disabled: true,
    });

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Card>
            <Typography variant="h5" color="textPrimary">Inputs</Typography>
            <TextField label="Text input" placeholder="Placeholder" fullWidth={true} />
            <TextField label="Text input" placeholder="Placeholder" fullWidth={true} disabled />
            <TextField multiline rows={4} label="Text area" placeholder="Placeholder" fullWidth={true} />
            <TextField multiline rows={4} label="Text area" placeholder="Placeholder" fullWidth={true} disabled />
            <TextField select label="Select" fullWidth={true} />
            <TextField select label="Select" fullWidth={true} disabled />
            <Autocomplete
                options={top100Films}
                getOptionLabel={(option:any) => option.title}
                renderInput={(params:any) => <TextField fullWidth={true} {...params} label="Combo box" />}
            />
            <CheckboxesTags />
            <FormControlLabel control={<Switch />} label="Switch" />
            <FormControlLabel control={<Switch />} label="Switch" disabled />
            <FormControlLabel control={<Switch checked={true} />} label="Switch" disabled />
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadioGroup}>
                <FormControlLabel value="female" control={<B2bRadio />} label="hey" />
                <FormControlLabel value="other" control={<B2bRadio />} label="Other" />
                <FormControlLabel value="disabled" disabled control={<B2bRadio />} label="(Disabled option)" />
            </RadioGroup>
            <FormControlLabel
                control={<Checkbox checked={state.default} onChange={handleChangeCheckbox} name="default" />}
                label="Default"
            />
            <FormControlLabel
                control={<Checkbox checked={state.disabled} onChange={handleChangeCheckbox} name="disabled" />}
                label="Disabled"
                disabled={true}
            />
        </Card>
    )
}
