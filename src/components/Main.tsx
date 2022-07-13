import React, { useEffect, useState } from 'react';
import dogsAPI from '../dogsAPI';
import { Autocomplete, TextField } from '@mui/material';

interface IBreed {
  name: string;
}

const Main = () => {
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    const [selectedBreeds, setSelectedBreeds] = useState<IBreed[]>([]);
    
    useEffect(() => {
      getBreeds();
      
    }, [])
    const getBreeds = async () => {
      const response = await dogsAPI.get('/breeds');

      setBreeds(response.data);
      console.log(response.data);
    }

    const logBreeds = () => {
      console.log(selectedBreeds);
    }
  return (
    <div>
      <h1>setup</h1>
      <button onClick={logBreeds}>log</button>
      <Autocomplete 
        multiple 
        id="breeds" 
        options={breeds}
        getOptionLabel={(option => option.name)} 
        onChange = {(event, value) => setSelectedBreeds(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select Breeds to Compare"
          />
        )}
      />
    </div>
  )
};

export default Main;