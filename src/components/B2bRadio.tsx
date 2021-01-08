import React from 'react';
import { Radio, SvgIcon } from '@material-ui/core';

function B2bRadioIcon() {
    return (
        <SvgIcon>
            <path
                d="M2.5,12a9.5,9.5 0 1,0 19,0a9.5,9.5 0 1,0 -19,0"
            />
            <path
                d="M3.5,12a8.5,8.5 0 1,0 17,0a8.5,8.5 0 1,0 -17,0"
                fill="#ffffff"
            />
        </SvgIcon>
    )
}

function B2bRadioCheckedIcon() {
    return (
        <SvgIcon>
            <path
                d="M2.5,12a9.5,9.5 0 1,0 19,0a9.5,9.5 0 1,0 -19,0"
                fill="#1B3C4D"
            />
            <path
                d="M3.5,12a8.5,8.5 0 1,0 17,0a8.5,8.5 0 1,0 -17,0"
                fill="#ffffff"
            />
            <path
                d="M6,12a6,6 0 1,0 12,0a6,6 0 1,0 -12,0"
                fill="#00BACC"
            />
        </SvgIcon>
    )
}


export default class B2bRadio extends React.Component {
    render() {
        return (
            <Radio {...this.props} icon={<B2bRadioIcon />} checkedIcon={<B2bRadioCheckedIcon />} />
        )
    }
}
