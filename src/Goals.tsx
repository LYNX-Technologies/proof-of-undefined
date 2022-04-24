import * as React from 'react';
import { Modal, Box, Button, CardActionArea, CardActions, Card, Grid, CardContent, CardMedia, Typography, Slider} from '@mui/material';
import MeditationImg from './assets/undraw_meditation.svg';
import RunningImg from './assets/undraw_running.svg';
import WalkingImg from './assets/undraw_walking.svg';
import { useWallet } from './contexts/wallet';
import { approveDaiAccess, stakeDai } from './lib/stake';
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

enum StepName {
    first,
    second,
    third
};

function valuetext(value: number) {
    return `$DAI ${value}`;
}

export default function Goals() {
    const wallet = useWallet();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function stake(numberOfDays: number, amountOfEtherWithDecimal: number) {
        if (wallet.provider) {
            await stakeDai(wallet.provider, numberOfDays, amountOfEtherWithDecimal);
        }
    }

    async function approve(amount: number) {
        if (wallet.provider) {
            await approveDaiAccess(wallet.provider, amount);
        }
    }

    const [step, setStep] = React.useState<StepName>(StepName.first);

    function stepCounter() {
        switch (step) {
            case StepName.first:
                return <First/>;
            case StepName.second:
                return <Second/>
            case StepName.third:
                return <Third/>
            default:
                break;
        }
        return <div/>;
    }

    const First = () => {
        return (
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
                    min={10}
                    max={100}
                    getAriaValueText={valuetext}
                    step={10}
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
                <Button size="small" color="primary" onClick={() => setStep(StepName.second)}>
                    Next
                </Button>
            </Box>
        );
    }

    const Second = () => {
        return (
            <Box sx={style}>
                Do you approve access to use your DAI?
                <Button size="small" color="primary" onClick={async () => {await approve(1);setStep(StepName.third)}}>
                    Approve
                </Button>
            </Box>
        );
    } 

    const Third = () => {
        return (
            <Box sx={style}>
                Do you want to stake your DAI?
                <Button size="small" color="primary" onClick={() => stake(30, 5)}>
                    STAKE
                </Button>
            </Box>
        );
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
                    <p>Recommended saving: 50 DAI</p>
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
                    <p>Recommended saving: 50 DAI</p>
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
                    <p>Recommended saving: 50 DAI</p>
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
            {stepCounter()}
        </Modal>
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Dashboard"> <Button variant="contained">My Dashboard</Button> </Link>
    </div>
  );
}

const marks = [
    {
      value: 10,
      label: '10',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 60,
      label: '60',
    },
    {
      value: 70,
      label: '70',
    },
    {
      value: 80,
      label: '80',
    },
    {
      value: 90,
      label: '90',
    },
    {
      value: 100,
      label: '100',
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