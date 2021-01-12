import React from 'react';
import { ThemeProvider, Container, Typography, Card, Grid } from '@material-ui/core';
import MenuAppBar from "./components/AppBar";
import theme from "./theme"
import Butons from "./colections/butons";
import Typographies from "./colections/typographies";
import Inputs from "./colections/Inpupts";
import EnhancedTable from './components/table';

function App():React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      <Container style={{ padding: "24px 24px 48px"}}>
        <Typography style={{ marginBottom: theme.spacing(2) }} variant="h1">
          Design System
        </Typography>
        {/* GRID PRINCIPAL */}
        <Grid container spacing={1} md={12}>
          <Grid item md={6} sm={12}>
            {/* COLUNA 1 */}
            <Grid container spacing={1} sm={12} direction="column">
              <Grid item>
                <Butons/>
              </Grid>
              <Grid item>
                <Inputs/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sm={12}>
            {/* COLUNA 2 */}
            <Grid container spacing={1} sm={12} direction="column">
              <Grid item>
                <Typographies/>
              </Grid>
              <Grid item>
                <Card>
                  Something...
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div style={{marginTop: 8}}/>
        <EnhancedTable/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
