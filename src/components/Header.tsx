import React from "react";
import { Button, Grid, Typography, Link } from "@mui/material";
import { Link as RouterLink, useHistory } from "react-router-dom";
import About from "./About";
import Main from "./Main";

const Header = () => {
    let history = useHistory();
    return (
        <div className="header">
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <h1 className="title">
                        Dog Breeds Information <i className="fa-solid fa-dog" />
                    </h1>
                </Grid>
                <Grid container item xs={12} spacing={10} justifyContent="center" whiteSpace="nowrap" textAlign="center">
                    <Grid item xs ={3}>
                        <Button onClick={() => history.push("/")}>
                            Graph Tool
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={() => history.push("/statsearch")}>
                            Top Five
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={() => history.push("/about")}>
                            About
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;
