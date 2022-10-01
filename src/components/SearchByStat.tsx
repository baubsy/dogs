import React, { useEffect, useState } from "react";
import dogsAPI from "../dogsAPI";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    Grid,
} from "@mui/material";
import BreedCard from "./BreedCard";

import IBreed from "../dogBreed";

const SearchByStat = () => {
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    const [selection, setSelection] = useState<String>("heaviest");
    const [modBreeds, setModBreeds] = useState<IBreed[]>([]);
    const [listedBreeds, setListedBreeds] = useState<IBreed[]>([]);

    useEffect(() => {
        getBreeds();
    }, []);
    useEffect(() => {
        const moddedBreeds = breeds.map((breed) => {
            const retBreed = {
                height: breed.height,
                avg_height: apiAvg(breed.height.imperial),
                name: breed.name,
                weight: breed.weight,
                avg_weight: apiAvg(breed.weight.imperial),
                avg_life_span: apiAvg(breed.life_span),
                life_span: breed.life_span,
                img: breed.image!.url!,
            };
            return retBreed;
        });
        setModBreeds(moddedBreeds);
    }, [breeds]);

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
                        break;
                    case "heaviest":
                        for (let i = 0; i < breedArr.length; i++) {
                            if (breedArr[i]!.avg_weight! < breed!.avg_weight!) {
                                breedArr.splice(i, 1);
                                breedArr.push(breed);
                                break;
                            }
                        }
                        break;
                    case "shortest":
                        for (let i = 0; i < breedArr.length; i++) {
                            if (breedArr[i]!.avg_height! > breed!.avg_height!) {
                                breedArr.splice(i, 1);
                                breedArr.push(breed);
                                break;
                            }
                        }
                        break;
                    case "tallest":
                        for (let i = 0; i < breedArr.length; i++) {
                            if (breedArr[i]!.avg_height! < breed!.avg_height!) {
                                breedArr.splice(i, 1);
                                breedArr.push(breed);
                                break;
                            }
                        }
                        break;
                    case "lifespan":
                        for (let i = 0; i < breedArr.length; i++) {
                            if (breedArr[i]!.avg_life_span! < breed!.avg_life_span!) {
                                breedArr.splice(i, 1);
                                breedArr.push(breed);
                                break;
                            }
                        }
                        break;
                    default:
                        console.log("switch error");
                }
            }
        });
        setListedBreeds(breedArr);
    }, [selection]);

    const apiAvg = (str: string) => {
        if (!str.includes("-")) {
            return parseInt(str);
        }
        const arr = str.split("-");
        const retArr = arr.map((x) => parseFloat(x.replace(/[^0-9.]/g, "")));
        return (retArr[0] + retArr[1]) / 2;
    };
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
            <button onClick={() => debugClick()}>Debug</button>
            <Grid container spacing={2}>
                {listedBreeds.map((breed) => (
                    <Grid item>
                        <BreedCard breed={breed} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default SearchByStat;
