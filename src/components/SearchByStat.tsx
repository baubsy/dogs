import React, { useEffect, useState } from "react";
import dogsAPI from "../dogsAPI";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    Grid,
    Box,
} from "@mui/material";
import BreedCard from "./BreedCard";
import useModdedBreeds from "../hooks/useModdedBreeds";

import IBreed from "../dogBreed";

const SearchByStat = () => {
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    const [selection, setSelection] = useState<String>("lightest");
    const [modBreeds, setModBreeds] = useState<IBreed[]>([]);
    const [listedBreeds, setListedBreeds] = useState<IBreed[]>([]);

    useEffect(() => {
        getBreeds();
    }, []);

   useModdedBreeds(breeds, setModBreeds);

    useEffect(() => {
        setListedBreeds([]);
        const breedArr: IBreed[] = [];

        modBreeds.map((breed) => {
            if (breedArr.length < 5) {
                breedArr.push(breed);
            } else {
                switch (selection) {
                    case "lightest":
                        for (let i = 0; i < breedArr.length; i++) {
                            if (breedArr[i]!.avg_weight! > breed!.avg_weight!) {
                                breedArr.splice(i, 1);
                                breedArr.push(breed);
                                break;
                            }
                        }
                        breedArr.sort((a, b) => a.avg_weight! - b.avg_weight!);
                        break;
                    case "heaviest":
                        for (let i = 0; i < breedArr.length; i++) {
                            if (breedArr[i]!.avg_weight! < breed!.avg_weight!) {
                                breedArr.splice(i, 1);
                                breedArr.push(breed);
                                break;
                            }
                        }
                        breedArr.sort((a, b) => a.avg_weight! - b.avg_weight!);
                        break;
                    case "shortest":
                        for (let i = 0; i < breedArr.length; i++) {
                            if (breedArr[i]!.avg_height! > breed!.avg_height!) {
                                breedArr.splice(i, 1);
                                breedArr.push(breed);
                                break;
                            }
                        }
                        breedArr.sort((a, b) => a.avg_height! - b.avg_height!);
                        break;
                    case "tallest":
                        for (let i = 0; i < breedArr.length; i++) {
                            if (breedArr[i]!.avg_height! < breed!.avg_height!) {
                                breedArr.splice(i, 1);
                                breedArr.push(breed);
                                break;
                            }
                        }
                        breedArr.sort((a, b) => a.avg_height! - b.avg_height!);
                        break;
                    case "lifespan":
                        for (let i = 0; i < breedArr.length; i++) {
                            if (
                                breedArr[i]!.avg_life_span! <
                                breed!.avg_life_span!
                            ) {
                                breedArr.splice(i, 1);
                                breedArr.push(breed);
                                break;
                            }
                        }
                        breedArr.sort((a, b) => a.avg_life_span! - b.avg_life_span!);
                        break;
                    default:
                        console.log("switch error");
                }
            }
        });
        setListedBreeds(breedArr);
    }, [selection, modBreeds]);

    const getBreeds = async () => {
        const response = await dogsAPI.get("/breeds");
        setBreeds(response.data);
    };
    const debugClick = () => {
        let dBreed: IBreed = modBreeds[0];
        modBreeds.map((mBreed) => {
            if (mBreed!.avg_weight! < dBreed!.avg_weight!) {
                dBreed = mBreed;
            }
        });
        console.log(listedBreeds);
        console.log(dBreed);
    };
    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <h1>Search by Stat</h1>
            </Grid>
            <Box alignItems="center" justifyContent="center">
                <FormControl className="formControl">
                    <FormLabel id="comp-radio-buttons-label">
                        Search By:{" "}
                    </FormLabel>
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
            </Box>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                {listedBreeds.map((breed) => (
                    <Grid item>
                        <BreedCard breed={breed} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default SearchByStat;
