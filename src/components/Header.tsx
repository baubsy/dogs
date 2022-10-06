import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
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
                >
                    <Grid item xs={1}>
                        <Button>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Typography variant="subtitle2">
                                    Graph Comparison
                                </Typography>
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button>
                            <Link
                                to="/statSearch"
                                style={{ textDecoration: "none" }}
                            >
                                <Typography variant="subtitle2">
                                    Top Dogs by Stat
                                </Typography>
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button>
                            <Link
                                to="/about"
                                style={{ textDecoration: "none" }}
                            >
                                <Typography variant="subtitle2">
                                    About
                                </Typography>
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;
