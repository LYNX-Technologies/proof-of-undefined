import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import OuraImg from "./assets/oura.png";

type Props = {
  date: string;
};

const MeditationCard = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "0.5rem" }}>
      <CardContent>
        <img
          src={OuraImg}
          alt="Oura"
          width={24}
          height={24}
          style={{
            float: "right",
          }}
        />
        <Typography gutterBottom variant="h5" component="div">
          10 min meditation
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {props.date}
        </Typography>
      </CardContent>
    </Card>
  );
};

const MeditationColumn1 = () => {
  return (
    <Grid item xs={4}>
      <Stack>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ paddingTop: "1rem" }}
        >
          Completed
        </Typography>
        <Card sx={{ maxWidth: 345, marginBottom: "0.5rem" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              N/A
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Grid>
  );
};

const MeditationColumn2 = () => {
  return (
    <Grid item xs={4}>
      <Stack>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ paddingTop: "1rem" }}
        >
          Completed
        </Typography>
        <MeditationCard date={"Thursday 1:21 PM"} />
        <MeditationCard date={"Friday 10:34 AM"} />
      </Stack>
    </Grid>
  );
};

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Grid container spacing={2} alignItems="start">
        <Grid item xs={8}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ paddingTop: "1rem" }}
          >
            Goal
          </Typography>
          <Card sx={{ paddingBottom: "2rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ paddingTop: "1rem" }}
                >
                  Type
                </Typography>
                <Typography variant="h4">Meditation</Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ paddingTop: "1rem" }}
                >
                  Time Left
                </Typography>
                <Typography variant="h4">28 days</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ paddingTop: "1rem" }}
                >
                  Progress
                </Typography>
                <Typography variant="h4">0 / 4</Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ paddingTop: "1rem" }}
                >
                  Money Staked
                </Typography>
                <Typography variant="h4">0.05 ETH</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <MeditationColumn1 />
        <Grid item xs={8}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ paddingTop: "1rem" }}
          >
            Goal
          </Typography>
          <Card sx={{ paddingBottom: "2rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ paddingTop: "1rem" }}
                >
                  Type
                </Typography>
                <Typography variant="h4">Meditation</Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ paddingTop: "1rem" }}
                >
                  Time Left
                </Typography>
                <Typography variant="h4">2 days</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ paddingTop: "1rem" }}
                >
                  Progress
                </Typography>
                <Typography variant="h4">2 / 5</Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ paddingTop: "1rem" }}
                >
                  Money Staked
                </Typography>
                <Typography variant="h4">0.03 ETH</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <MeditationColumn2 />
      </Grid>
    </div>
  );
}
