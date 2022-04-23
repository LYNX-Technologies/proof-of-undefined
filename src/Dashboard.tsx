import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import OuraImg from "./assets/oura.png";

type Props = {
  date: string;
};

const MeditationCard = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
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

const MeditationColumn = () => {
  return (
    <Grid item xs={4}>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ paddingTop: "1rem" }}
      >
        Completed
      </Typography>
      <MeditationCard date={"Thursday 1:21 PM"} />
      <MeditationCard date={"Friday 10:34 AM"} />
    </Grid>
  );
};

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Grid container spacing={2} alignItems="start">
        <Grid item xs={8}>
          <Card>
            <Stack direction="column" justifyContent="start">
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ paddingTop: "1rem" }}
              >
                Goal
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

              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ paddingTop: "1rem" }}
              >
                Progress
              </Typography>
              <Typography variant="h4">2 / 4</Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ paddingTop: "1rem" }}
              >
                Money Staked
              </Typography>
              <Typography variant="h4">50 DAI</Typography>
            </Stack>
          </Card>
        </Grid>
        <MeditationColumn />
      </Grid>
    </div>
  );
}
