import React, { useEffect, useState } from 'react';
import dogsAPI from '../dogsAPI';

const Main = () => {
    const [breeds, setBreeds] = useState([]);
    
    useEffect(() => {
      getBreeds();
      
    }, [])
    const getBreeds = async () => {
      const response = await dogsAPI.get('/breeds');

      setBreeds(response.data);
      console.log(response.data);
    }

    const logBreeds = () => {
      console.log(breeds);
    }
  return (
    <div>
      <h1>setup</h1>
    </div>
  )
}

export default Main;