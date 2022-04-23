import * as React from 'react';
import { Modal, Box, Button, CardActionArea, CardActions, Card, Grid, CardContent, CardMedia, Typography, Slider} from '@mui/material';
import MeditationImg from './assets/undraw_meditation.svg';
import RunningImg from './assets/undraw_running.svg';
import WalkingImg from './assets/undraw_walking.svg';
import { useWallet } from './contexts/wallet';
import { stakeEthereum } from './lib/stake';
import { Link } from 'react-router-dom';

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
    const wallet = useWallet();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function submitChallenge(numberOfDays: number, amountOfEtherWithDecimal: number) {
        if (wallet.provider) {
            await stakeEthereum(wallet.provider, numberOfDays, amountOfEtherWithDecimal);
        }
    }


  return (
    <div>
        <h1>Set Goals</h1>
        <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
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
                    STARTING 23/04/22
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p>10 MINS X4 PER WEEK (4 WEEKS)</p>
                    <p>Recommended saving: 0.05 ETH</p>
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
                    STARTING 28/04/22
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p>5K X3 PER WEEK (4 WEEKS)</p>
                    <p>Recommended saving: 0.05 ETH</p>
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
                    <p>10K STEPS X5 PER WEEK (4 WEEKS)</p>
                    <p>Recommended saving: 0.05 ETH</p>
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
                defaultValue={0.05}
                min={0.03}
                max={0.11}
                getAriaValueText={valuetext}
                step={0.01}
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
                min={2}
                max={12}
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                marks={length}
            />
          </Box>
          <Button size="small" color="primary" onClick={() => submitChallenge(30, 0.05)}>
            SUBMIT
          </Button>
        </Box>
      </Modal>
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Dashboard"> <Button variant="contained">My Dashboard</Button> </Link>
    </div>
  );
}

const marks = [
    {
      value: 0.03,
      label: '0.03',
    },
    {
      value: 0.05,
      label: '0.05',
    },
    {
      value: 0.07,
      label: '0.07',
    },
    {
      value: 0.09,
      label: '0.09',
    },
    {
      value: 0.11,
      label: '0.11',
    },
  ];

  const length = [
    {
      value: 2,
      label: '2',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 6,
      label: '6',
    },
    {
      value: 8,
      label: '8',
    },
    {
      value: 10,
      label: '10',
    },
    {
      value: 12,
      label: '12',
    }
  ];