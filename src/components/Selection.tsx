import React, { useEffect, useState, useCallback } from 'react';
import dogsAPI from '../dogsAPI';
import { Autocomplete, TextField, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import IBreed from '../dogBreed';

interface SelectionProps {
  setSelectedBreeds: Function,
  setCompare: Function,
  compare: string,
  selectedBreeds: IBreed[];
}
const Selection = (props: SelectionProps) => {
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    const [disable, setDisable] = useState(false);
    
    useEffect(() => {
      if(props.selectedBreeds.length >= 5){
        setDisable(true);
      } else{
        setDisable(false);
      }
    }, [props.selectedBreeds])
    
    useEffect(() => {
      getBreeds();
      
    }, [])
    const getBreeds = async () => {
      const response = await dogsAPI.get('/breeds');
      setBreeds(response.data);
    }
    
    const checkDisable = useCallback((option:IBreed) => disable && !props.selectedBreeds.includes(option), [disable, props.selectedBreeds])
  return (
    <div>
      <h1>setup</h1>
      <Autocomplete
        getOptionDisabled={checkDisable} 
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