import React, { useEffect, useState } from "react";
import { Grid, Box, Container } from "@mui/material";
import Selection from "./Selection";
import IBreed from "../dogBreed";
import Graph from "./Graph";
import Header from "./Header";

const Main = () => {
    const [selectedBreeds, setSelectedBreeds] = useState<IBreed[]>([]);
    const [compare, setCompare] = useState("weight");
    const [units, setUnits] = useState("imperial");
    const [graphHidden, setGraphHidden] = useState(true);

    const logbreeds = () => {
        console.log(selectedBreeds);
    };

    return (
            <Box>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Graph
                            hidden={graphHidden}
                            setHidden={setGraphHidden}
                            compare={compare}
                            breeds={selectedBreeds}
                            units={units}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Selection
                            setSelectedBreeds={setSelectedBreeds}
                            compare={compare}
                            setCompare={setCompare}
                            selectedBreeds={selectedBreeds}
                            setGraphHidden={setGraphHidden}
                        />
                    </Grid>
                </Grid>
            </Box>     
    );
};

export default Main;
