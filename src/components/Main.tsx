import React, { useEffect, useState } from "react";
import { Grid, Box, Container, Modal, Popper } from "@mui/material";
import Selection from "./Selection";
import BreedCard from "./BreedCard";
import IBreed from "../dogBreed";
import Graph from "./Graph";
import Header from "./Header";

const Main = () => {
    const [selectedBreeds, setSelectedBreeds] = useState<IBreed[]>([]);
    const [compare, setCompare] = useState("weight");
    const [units, setUnits] = useState("imperial");
    const [graphHidden, setGraphHidden] = useState(true);
    const [modalBreed, setModalBreed] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const logbreeds = () => {
        console.log(selectedBreeds);
    };
    //TODO selectedBreeds doesn't have the averages BreedCard uses and shows no stats
    const handleModal = (breedIndex: number) => {
        setModalBreed(breedIndex);
        setModalOpen(true);
    };
    return (
        <Container>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%, -50%)' }}>
                    <BreedCard breed={selectedBreeds[modalBreed]} />
                </Box>
            </Modal>

            <Box>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Graph
                            hidden={graphHidden}
                            setHidden={setGraphHidden}
                            compare={compare}
                            breeds={selectedBreeds}
                            units={units}
                            setModalBreed={handleModal}
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
                <button onClick={() => console.log(modalOpen)}>
                    Debug click
                </button>
            </Box>
        </Container>
    );
};

export default Main;
