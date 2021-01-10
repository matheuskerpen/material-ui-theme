import { Card, Typography } from '@material-ui/core'
import React from 'react'
import theme from '../theme'

export default function Typographies():React.ReactElement {
    return (
        <Card>
            <Typography style={{ marginBottom: theme.spacing(2) }} color="textPrimary" variant="h5">
                TYPOGRAPHies
            </Typography>
            <Typography style={{ marginBottom: theme.spacing(1) }} variant="h1">
                H1: Tipography
            </Typography>
            <Typography style={{ marginBottom: theme.spacing(1), color: "#F23030" }} variant="h2">
                H2: Tipography
            </Typography>
            <Typography style={{ marginBottom: theme.spacing(1), color: "#F23030" }} variant="h3">
                H3: Tipography
            </Typography>
            <Typography style={{ marginBottom: theme.spacing(1) }} variant="h4">
                H4: Tipography
            </Typography>
            <Typography style={{ marginBottom: theme.spacing(1) }} variant="h5">
                H5: Tipography
            </Typography>
            <Typography style={{ marginBottom: theme.spacing(1) }} variant="h6">
                H6: Tipography
            </Typography>
            <Typography style={{ marginBottom: theme.spacing(1) }} variant="subtitle1">
                Subtitle1: Tipography
            </Typography>
            <Typography style={{ marginBottom: theme.spacing(1) }} variant="subtitle2">
                Subtitle2: Tipography
            </Typography>
            <Typography style={{ marginBottom: theme.spacing(1) }} variant="body1">
                body1: Tipography
            </Typography>
            <Typography style={{ marginBottom: theme.spacing(1) }} variant="body2">
                body2: Tipography
            </Typography>
            <Typography style={{ marginBottom: theme.spacing(1) }} variant="button">
                Button: Tipography
            </Typography>
        </Card>
    )
}
