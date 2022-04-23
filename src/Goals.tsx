import * as React from 'react';
import { Modal, Box, Button, CardActionArea, CardActions, Card, Grid, CardContent, CardMedia, Typography, Slider} from '@mui/material';
import MeditationImg from './assets/undraw_meditation.svg';
import RunningImg from './assets/undraw_running.svg';
import WalkingImg from './assets/undraw_walking.svg';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function valuetext(value: number) {
    return `$DAI ${value}`;
}

export default function Goals() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                <Button size="small" color="primary" onClick={handleOpen}>
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
                <Button size="small" color="primary" onClick={handleOpen}>
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
                <Button size="small" color="primary" onClick={handleOpen}>
                    PLEDGE
                </Button>
            </CardActions>
            </Card>
        </Grid>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose your pledge amount + length
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Amount($DAI)
          </Typography>
          <Box sx={{ width: 300 }}>
            <Slider
                aria-label=""
                defaultValue={50}
                getAriaValueText={valuetext}
                step={5}
                valueLabelDisplay="auto"
                marks={marks}
            />
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Length (weeks)
          </Typography>
          <Box sx={{ width: 300 }}>
            <Slider
                aria-label=""
                defaultValue={4}
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                marks={length}
            />
          </Box>
          <Button size="small" color="primary" onClick={handleOpen}>
            SUBMIT
        </Button>
        </Box>
      </Modal>
    </div>
  );
}

const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 25,
      label: '25',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 75,
      label: '75',
    },
    {
      value: 100,
      label: '100',
    },
  ];

  const length = [
    {
      value: 0,
      label: '2',
    },
    {
      value: 20,
      label: '4',
    },
    {
      value: 40,
      label: '6',
    },
    {
      value: 60,
      label: '8',
    },
    {
      value: 80,
      label: '10',
    },
    {
      value: 100,
      label: '12',
    }
  ];