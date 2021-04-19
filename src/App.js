import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Card,TextField,Typography} from '@material-ui/core';


import './App.css';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
    background: 'linear-gradient(45deg, #49e37c 30%, #b7edc9 90%)',
    textAlign: 'center',
    color: blue,
    spacing: '200px',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        className={classes.background}
      >
        <Grid item xs={3} >
          <Card>
            <Typography variant="h4" noWrap>
              Welcome to
              H2OKT
            </Typography>


            <TextField label="User" defaultValue="" />
            <TextField label="Password" defaultValue="" />
          </Card>
        </Grid>      
      </Grid>
    </div>
  );
}

export default App;
