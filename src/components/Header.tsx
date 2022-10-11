import React from "react";
import { Button, Grid, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import About from "./About";
import Main from "./Main";

const Header = () => {
    return (
        <div className="header">
            <Grid container>
                <Grid item xs={12}>
                    <h1 className="title">
                        Dog Breeds Information <i className="fa-solid fa-dog" />
                    </h1>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    justifyContent="center"
                    alignContent="center"
                    spacing={10}
                >
                    <Grid item xs={2} justifyContent="center">
                        <Button>
                            <Link to="/" component={RouterLink} underline="none">
                                Graph Tool
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={2} justifyContent="center" justifyItems="center">
                        <Button>
                            <Link to="/statSearch" component={RouterLink} underline="none">
                                Top Five                                
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={2} justifyContent="center">
                        <Button>
                            <Link to="/about" component={RouterLink} underline="none">
                                About
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;
