import React from 'react';
import { Card, FormControlLabel, TextField, Typography, Switch, RadioGroup, Radio, Checkbox } from '@material-ui/core';
import B2bRadio from "./B2bRadio";

export default function Inputs() {
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
            <Typography variant="h6" color="textPrimary">Inputs</Typography>
            <TextField placeholder="Placeholder" label="Text input" fullWidth={true} />
            <TextField label="Text input" fullWidth={true} disabled />
            <TextField select label="Select" fullWidth={true} />
            <TextField select label="Select" fullWidth={true} disabled />
            <FormControlLabel control={<Switch />} label="Switch" />
            <FormControlLabel control={<Switch />} label="Switch" disabled />
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
