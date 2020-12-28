import React from 'react'
import Navbar from './Navbar'
import Grid from "@material-ui/core/Grid";
import Project1 from "../images/pro.png"
import MyCard from "./MyCard";
import "fontsource-roboto";



export default function Project() {
    return (
        <div>
            <Navbar/>
          
     

      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid item xs={12} md={4} >
          <MyCard
            title="Portfolio Project"
            desc="i use React, React router and Material UI and Firebase in this project"
            imgSrc={Project1}
            git="https://github.com/khan110/lwf-batch1-portfolio-app"
            url="https://port-app-83470.web.app"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <MyCard
            title="JavaScript ES6"
            desc="knowledge of ES6 syntax let, const , spread operator, loops, destrucuring(array, object), arrow functions, array and object extensions, Fetch API"
            imgSrc="https://www.avibeweb.com/images/blog/javascript-logo-thembnail.jpg"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <MyCard
            title="React.JS"
            desc="kowledge of React Functional components, React Hooks,Api Requests, React Router"
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3G-JuvtI8fUHeCfyH4g8d3Lxuyt3QMMmcFg&usqp=CAU"
          />
        </Grid>
      </Grid>
        </div>
    )
}
