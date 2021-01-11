import { Card, Typography } from '@material-ui/core'
import React from 'react'
import theme from '../theme'

export default function Typographies():React.ReactElement {
    return (
        <Card>
            <Typography gutterBottom={true} color="textPrimary" variant="h5">
                TYPOGRAPHies
            </Typography>
            <Typography gutterBottom={true} variant="h1">
                H1: Tipography
            </Typography>
            <Typography gutterBottom={true} variant="h2">
                H2: Tipography
            </Typography>
            <Typography gutterBottom={true} variant="h3">
                H3: Tipography
            </Typography>
            <Typography gutterBottom={true} variant="h4">
                H4: Tipography
            </Typography>
            <Typography gutterBottom={true} variant="h5">
                H5: Tipography
            </Typography>
            <Typography gutterBottom={true} variant="h6">
                H6: Tipography
            </Typography>
            <Typography gutterBottom={true} variant="subtitle1">
                Subtitle1: Tipography
            </Typography>
            <Typography gutterBottom={true} variant="subtitle2">
                Subtitle2: Tipography
            </Typography>
            <Typography gutterBottom={true} variant="body1">
                body1: Tipography
            </Typography>
            <Typography gutterBottom={true} variant="body2">
                body2: Tipography
            </Typography>
            <Typography gutterBottom={true} variant="button">
                Button: Tipography
            </Typography>
        </Card>
    )
}
