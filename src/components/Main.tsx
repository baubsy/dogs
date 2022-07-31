import React, { useState } from "react";
import Selection from "./Selection";
import IBreed from "../dogBreed";
import Graph from "./Graph";
import { Grid, Box, Container } from "@mui/material";

const Main = () => {
    const [selectedBreeds, setSelectedBreeds] = useState<IBreed[]>([]);
    const [compare, setCompare] = useState("weight");
    const [units, setUnits] = useState("imperial");

    const logbreeds = () => {
        console.log(selectedBreeds);
        console.log(compare);
    };
    return (
        <Container>
            <Box>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={4}>
                        <button onClick={logbreeds}>test</button>
                    </Grid>
                    <Grid item xs={8}>
                        <Selection
                            setSelectedBreeds={setSelectedBreeds}
                            compare={compare}
                            setCompare={setCompare}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Graph
                            compare={compare}
                            breeds={selectedBreeds}
                            units={units}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Main;
