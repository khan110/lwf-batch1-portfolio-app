import Navbar from "./Navbar";
import React from "react";
import { Paper} from "@material-ui/core";
import Typed from "react-typed"
import "fontsource-roboto";
import Typography from '@material-ui/core/Typography';
import {Grid,Box, makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
 container:{
  position:"absolute",
 top: "50%",
 left:"50%",
transform: "translate(-50%, -50%)",
 width:"80vw",
 height:"140px",
 textalign:"center",
 zIndex: "1",
 color:"Aqua",
 
 
 }

})

export default function Home (){
  const classes = useStyles();
  return (
    <div>
      <Navbar />


      <Grid container direction="row" justify="center" alignItems="Center">
        <Grid item  md={12} xs={12}>
          <h1>
            <Paper  style={{borderRadious: "10px", opacity: ".8"}}elevation={24}>
              <Typography variant="h5" component="h2" align='center' color='primary'>
              My name is Umair, currently i am in training to become MERN Stack
              developer and my expertise and skills i learn so far are listed
              below.
              </Typography>
             
            </Paper>
          </h1>
        </Grid>
      </Grid>
          <Grid container className={classes.container}>
        <Grid  item md={12} xs={12}>
        <Paper style={{borderRadious: "10px", opacity: ".8"}}elevation={24}>
      <Typography variant="h2"  color="primary">
       
        <Typed strings={[ "Html Css Advance JavaScript, React and React Router, Material UI "]} typeSpeed ={40}
        backSpeed={40} />
      </Typography>
      </Paper>
      </Grid>
      </Grid>

    </div>
  );
}
