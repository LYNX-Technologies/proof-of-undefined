import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AuthorizeOuraButton from "./AuthorizeOuraButton";
import { useEffect, useState } from "react";


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
    <div style={{ alignContent: 'center', display: 'flex'}}>
      <Box sx={{ m: 1, width: 300, mt: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Connect Device</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={device}
            label="Device"
            onChange={handleChange}
          >
            <MenuItem value={10}>Apple Watch</MenuItem>
            <MenuItem value={20}>Oura Ring</MenuItem>
            <MenuItem value={30}>Fitbit</MenuItem>
            <MenuItem value={30}>Muse BCI</MenuItem>
          </Select>
        </FormControl>
        <div style={{ margin: '10px' }}>
          {!credentials ? <AuthorizeOuraButton /> : <h1>Here there be data</h1>}
        </div>
      </Box>
     </div>
  );
}
