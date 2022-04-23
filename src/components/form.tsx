import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Form() {
  const [device, setDevice] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setDevice(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
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
      <Button variant="contained">Submit</Button>
    </Box>
  );
}