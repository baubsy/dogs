import React from "react";
import { Container } from "@mui/material";

const About = () => {
    return (
        <Container>
            <h1>About</h1>
            <p>
                This page was made using React, TypeScript, D3.js, Material UI,
                and data from TheDogAPI
            </p>
            <a href="https://github.com/baubsy/dogs">Project Repo</a>
        </Container>
    );
};

export default About;
