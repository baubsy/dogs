import React, { useEffect, useState } from "react";
import dogsAPI from "../dogsAPI";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
} from "@mui/material";

import IBreed from "../dogBreed";

const SearchByStat = () => {
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    const [selection, setSelection] = useState<String>();
    useEffect(() => {
        getBreeds();
    }, []);
    const getBreeds = async () => {
        const response = await dogsAPI.get("/breeds");
        setBreeds(response.data);
    };
    return (
        <div>
            <h1>Search by Stat</h1>
            <FormControl>
                <FormLabel id="comp-radio-buttons-label">Search By: </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="comp-radio-buttons-label"
                    value={selection}
                    onChange={(event, value) => setSelection(value)}
                    name="comp-radio-buttons"
                >
                    <FormControlLabel
                        value="lightest"
                        control={<Radio />}
                        label="Lightest"
                    />
                    <FormControlLabel
                        value="heaviest"
                        control={<Radio />}
                        label="Heaviest"
                    />
                    <FormControlLabel
                        value="shortest"
                        control={<Radio />}
                        label="Shortest"
                    />
                    <FormControlLabel
                        value="tallest"
                        control={<Radio />}
                        label="Tallest"
                    />
                    <FormControlLabel
                        value="lifespan"
                        control={<Radio />}
                        label="Lifespan"
                    />
                </RadioGroup>
            </FormControl>
            <button onClick={() => console.log(breeds)}>Debug</button>
        </div>
    );
};

export default SearchByStat;
