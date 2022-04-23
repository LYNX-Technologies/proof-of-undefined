import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import MeditationImg from './assets/undraw_meditation.svg';
import RunningImg from './assets/undraw_running.svg';
import WalkingImg from './assets/undraw_walking.svg';

export default function Goals() {
  return (
    <div>
        <h1>Set Goals</h1>
        <Grid container spacing={2}>
            <Card sx={{ maxWidth: 345, m: 1 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                width="300"
                height="260"
                image={MeditationImg}
                alt="meditation"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    MEDITATION
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    STARTING 01/05/22
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    10 MINS X4 PER WEEK (4 WEEKS)
                    Recommended saving: 50 DAI
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    PLEDGE
                </Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, m: 1  }}>
            <CardActionArea>
                <CardMedia
                component="img"
                width="300"
                height="260"
                image={RunningImg}
                alt="runnning"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    RUNNING
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    STARTING 01/05/22
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    5K X3 PER WEEK (4 WEEKS)
                    Recommended saving: 0.05 ETH
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    PLEDGE
                </Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, m: 1}}>
            <CardActionArea>
                <CardMedia
                component="img"
                width="300"
                height="260"
                image={WalkingImg}
                alt="Steps"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    STEPS
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    STARTING 01/05/22
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    10K STEPS X5 PER WEEK (4 WEEKS)
                    Recommended saving: 50 DAI
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    PLEDGE
                </Button>
            </CardActions>
            </Card>
        </Grid>
    </div>
  );
}