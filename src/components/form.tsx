import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AuthorizeOuraButton from "./AuthorizeOuraButton";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Form() {
  const [device, setDevice] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setDevice(event.target.value as string);
  };

  const [credentials, setCredentials] = useState(null);

  //
  // Fetch the credentials in local storage if they exist.
  //
  useEffect(() => {
    const c = localStorage.getItem('oura_credentials')

    if (c) {
      return setCredentials(JSON.parse(c));
    }
  }, [])

  return (
    <div style={{ alignContent: 'center', margin: 'auto', width: '50%'}}>
        <Box sx={{ m: 1, mt: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Device</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={device}
            label="Device"
            onChange={handleChange}
          >
            <MenuItem value={1}>Apple Watch</MenuItem>
            <MenuItem value={2}>Oura Ring</MenuItem>
            <MenuItem value={3}>Fitbit</MenuItem>
            <MenuItem value={4}>Muse BCI</MenuItem>
          </Select>
        </FormControl>
        <div style={{ margin: '10px' }}>
          {!credentials ? <AuthorizeOuraButton /> : <h1>Connected</h1>}
        </div>
      </Box>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={daos}
        renderInput={(params) => <TextField {...params} label="DAO" />}
      />
       <div style={{ margin: '10px' }}>
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/goals"><Button variant="contained">Next</Button></Link>
       </div>
     </div>
  );
}

const daos = [
  { label: 'Aave'},
  { label: 'Dash'},
  { label: 'GitcoinDAO'},
  { label: 'MakerDAO'},
  { label: 'SuperRare'},
  { label: 'SushiSwap'},
  { label: 'Uniswap'},
  { label: 'VitaDao'},
  { label: 'Yuga Labs'},
  { label: '0x' }
]
