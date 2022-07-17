import React, { useEffect, useState } from 'react';
import dogsAPI from '../dogsAPI';
import { Autocomplete, TextField, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import IBreed from '../dogBreed';

interface SelectionProps {
  setSelectedBreeds: Function;
  setCompare: Function;
  compare: string;
}
const Selection = (props: SelectionProps) => {
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    
    
    useEffect(() => {
      getBreeds();
      
    }, [])
    const getBreeds = async () => {
      const response = await dogsAPI.get('/breeds');

      setBreeds(response.data);
      console.log(response.data);
    }
    
  return (
    <div>
      <h1>setup</h1>
      <Autocomplete 
        multiple 
        id="breeds" 
        options={breeds}
        getOptionLabel={(option => option.name)} 
        onChange = {(event, value) => props.setSelectedBreeds(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select Breeds to Compare"
          />
        )}
      />
      <FormControl>
        <FormLabel id="comp-radio-buttons-label">Compare: </FormLabel>
        <RadioGroup
          row
          aria-labelledby='comp-radio-buttons-label'
          value={props.compare}
          onChange={(event, value) => props.setCompare(value)}
          name="comp-radio-buttons"
        >
          <FormControlLabel value="weight" control={<Radio/>} label="Weight"/>
          <FormControlLabel value="height" control={<Radio/>} label="Height"/>
          <FormControlLabel value="lifespan" control={<Radio/>} label="Lifespan"/>

        </RadioGroup>
      </FormControl>
    </div>
  )
};

export default Selection;