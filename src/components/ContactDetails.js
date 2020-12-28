import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
}));

export default function ContactDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Navbar/>
      <Grid container spacing={6}>
        <Grid item xs={12} >
          <Paper  elavation={1}className={classes.paper}>
          <EmailIcon fontSize="small"  /> Umair_kh90@yahoo.com
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Paper className={classes.paper}xs={12}>    
          <LinkedInIcon fontSize="small"/> 
          <Button size="small" color="primary" href="https://www.linkedin.com/in/umair-ali-khan/">
          Linked in Account
          </Button>
        
        </Paper>
      
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Paper className={classes.paper} xs={12}>
          <GitHubIcon fontsize="small"/>
          <Button size="small" color="primary" href="https://github.com/khan110">Github Account</Button>
          </Paper>
        </Grid>
      </Grid>
      
    </div>
  );
}
