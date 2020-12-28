import React from 'react';
import { makeStyles, CardActions, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    maxHeight:350,
  
  },
  media: {
    height: 160,
    
  
  },
});

export default function MyCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imgSrc}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary" href={props.git}>
          Git Repo <GitHubIcon/>
        </Button>
        <Button size="small" color="primary"href={props.url}>
          Project URL  <HttpIcon fontSize="large"/>
        </Button>
      </CardActions>
     
    </Card>
  );
}
