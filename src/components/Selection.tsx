import React, { useEffect, useState, useCallback } from "react";
import dogsAPI from "../dogsAPI";
import {
    Grid,
    Autocomplete,
    TextField,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Button,
    Tooltip,
} from "@mui/material";
import IBreed from "../dogBreed";

interface SelectionProps {
    setSelectedBreeds: Function;
    setCompare: Function;
    setGraphHidden: Function;
    compare: string;
    selectedBreeds: IBreed[];
}
const Selection = (props: SelectionProps) => {
    const [breeds, setBreeds] = useState<IBreed[]>([]);
    const [disable, setDisable] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(true);
    const [buttonTooltip, setButtonTooltip] = useState(
        "Please select at least one breed"
    );

    useEffect(() => {
        if (props.selectedBreeds.length >= 5) {
            setDisable(true);
        } else {
            setDisable(false);
        }

        if (props.selectedBreeds.length === 0) {
            setButtonDisable(true);
            setButtonTooltip("Please select at least one breed");
        } else {
            setButtonDisable(false);
            setButtonTooltip("");
        }
    }, [props.selectedBreeds]);

    useEffect(() => {
        getBreeds();
    }, []);
    const getBreeds = async () => {
        const response = await dogsAPI.get("/breeds");
        setBreeds(response.data);
    };

    const checkDisable = useCallback(
        (option: IBreed) => disable && !props.selectedBreeds.includes(option),
        [disable, props.selectedBreeds]
    );
    const handleClick = () => {
        if (props.selectedBreeds.length > 0) {
            props.setGraphHidden(false);
        }
    };
    return (
        <div>
            <Grid container>
                <Grid item xs={8}>
                    <Autocomplete
                        getOptionDisabled={checkDisable}
                        multiple
                        id="breeds"
                        options={breeds}
                        getOptionLabel={(option) => option.name}
                        onChange={(event, value) =>
                            props.setSelectedBreeds(value)
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Select Breeds to Compare"
                            />
                        )}
                    />
                </Grid>
                <Tooltip title={buttonTooltip}>
                    <Grid item xs={4} style={{ display: "flex" }}>
                        <Button
                            disabled={buttonDisable}
                            onClick={handleClick}
                            variant="contained"
                        >
                            Compare
                        </Button>
                    </Grid>
                </Tooltip>
                <FormControl>
                    <FormLabel id="comp-radio-buttons-label">
                        Compare:{" "}
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="comp-radio-buttons-label"
                        value={props.compare}
                        onChange={(event, value) => props.setCompare(value)}
                        name="comp-radio-buttons"
                    >
                        <FormControlLabel
                            value="weight"
                            control={<Radio />}
                            label="Weight"
                        />
                        <FormControlLabel
                            value="height"
                            control={<Radio />}
                            label="Height"
                        />
                        <FormControlLabel
                            value="lifespan"
                            control={<Radio />}
                            label="Lifespan"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </div>
    );
};

export default Selection;
