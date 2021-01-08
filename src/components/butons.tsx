import React from 'react';
import { Button, Typography, Card } from '@material-ui/core';
import theme from "../theme"
import { KeyboardArrowRight, KeyboardArrowLeft, Delete, Add } from '@material-ui/icons';

export default function Butons() {
  return (
    <Card>
      <Typography style={{ marginBottom: theme.spacing(1) }} color="textPrimary" variant="h6">
        Buttons
      </Typography>
      <Typography style={{ marginBottom: theme.spacing(1) }} color="textPrimary" variant="subtitle2">
        Primary
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-evenly", margin: "16px 0px" }}>
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="contained" color="primary" startIcon={<Delete />}>
          Contained icon
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", margin: "16px 0px" }}>
        <Button color="primary">
          Text
        </Button>
        <Button color="primary" startIcon={<Delete />}>
          Text icon
        </Button>
      </div>
      <Typography style={{ marginBottom: theme.spacing(1) }} color="textPrimary" variant="subtitle2">
        Secondary
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-evenly", margin: "16px 0px" }}>
        <Button color="secondary" startIcon={<KeyboardArrowLeft />}>
          Anterior
        </Button>
        <Button variant="contained" color="secondary" endIcon={<KeyboardArrowRight />}>
          Próximo
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", margin: "16px 0px" }}>
        <Button color="secondary" size="small">
          Text small
        </Button>
        <Button color="secondary" size="small" startIcon={<Add />}>
          Text icon small
        </Button>
      </div>
    </Card>
  )
}
