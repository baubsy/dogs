import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import About from "./About";
import Main from "./Main";

const Header = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Dog Breeds Comparison</h1>
                </Grid>
                <Grid container item xs={12} justifyContent="center" alignContent="center">
                    <Grid item xs={1}>
                      <Button><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></Button>
                    </Grid>
                    <Grid item xs={1}>
                    <Button><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;
