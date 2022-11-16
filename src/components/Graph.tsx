import React, { useEffect, useState, useRef } from "react";
import IBreed from "../dogBreed";
import * as d3 from "d3";
import BarChart from "../barChart";
import { Grid, Box } from "@mui/material";
import useModdedBreeds from "../hooks/useModdedBreeds";

interface GraphProps {
    compare: string;
    breeds: IBreed[];
    units: string;
    hidden: boolean;
    setHidden: Function;
    setModalBreed: Function;
}

const Graph = (props: GraphProps) => {
    const [modBreeds, setModBreeds] = useState<IBreed[]>([]);
    const [breedChart, setBreedChart] = useState<any>(null);
    const svgRef = useRef<HTMLDivElement>(null);
    const [title, setTitle] = useState(" Average Weight");

    useModdedBreeds(props.breeds, setModBreeds);

    useEffect(() => {
        if (props.compare === "height") {
            const chart = BarChart(
                modBreeds,
                {
                    x: (d) => d.name,
                    y: (d) => d.avg_height,
                    title: "values",
                    xDomain: d3.groupSort(
                        modBreeds,
                        ([d]) => d.name,
                        (d) => d.name
                    ),
                    yFormat: "f",
                    yLabel: "Inches",
                    width: 500,
                    height: 500,
                    color: "#A8926C",
                    yDomain: undefined,
                },
                props.setModalBreed
            );
            setTitle("Average Height");
            setBreedChart(chart);
        } else if (props.compare === "weight") {
            const chart = BarChart(
                modBreeds,
                {
                    x: (d) => d.name,
                    y: (d) => d.avg_weight,
                    xDomain: d3.groupSort(
                        modBreeds,
                        ([d]) => d.name,
                        (d) => d.name
                    ),
                    yFormat: "f",
                    yLabel: "Pounds",
                    width: 500,
                    height: 500,
                    color: "#A8926C",
                    title: "values",
                    yDomain: undefined,
                },
                props.setModalBreed
            );
            setTitle("Average Weight");
            setBreedChart(chart);
        } else if (props.compare === "lifespan") {
            const chart = BarChart(
                modBreeds,
                {
                    x: (d) => d.name,
                    y: (d) => d.avg_life_span,
                    xDomain: d3.groupSort(
                        modBreeds,
                        ([d]) => d.name,
                        (d) => d.name
                    ),
                    yFormat: "f",
                    yLabel: "Years",
                    width: 500,
                    height: 500,
                    color: "#A8926C",
                    title: "values",
                    yDomain: undefined,
                },
                props.setModalBreed
            );
            setTitle("Average Lifespan");
            setBreedChart(chart);
        }
    }, [props.compare]);

    useEffect(() => {
        chartUpdate();
    }, [breedChart]);

    useEffect(() => {
        if (props.breeds.length === 0) {
            props.setHidden(true);
        }
    }, [props.breeds]);

    useEffect(() => {
        if (modBreeds.length > 0) {
            const chart = BarChart(
                modBreeds,
                {
                    x: (d) => d.name,
                    y: (d) => d.avg_weight,
                    xDomain: d3.groupSort(
                        modBreeds,
                        ([d]) => d.name,
                        (d) => d.name
                    ),
                    yFormat: "f",
                    yLabel: "Pounds",
                    width: 500,
                    height: 500,
                    color: "#A8926C",
                    title: "values",
                    yDomain: undefined,
                },
                props.setModalBreed
            );
            setBreedChart(chart);
        }
    }, [modBreeds]);

    const chartUpdate = () => {
        if (svgRef.current != null) {
            const svg = d3.select(svgRef.current);
            svg.selectAll("*").remove();
            if (breedChart != null) {
                svg.node()?.appendChild(breedChart);
            }
        }
    };

    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <h1>Graph Comparison Tool</h1>
            </Grid>
            <Grid item xs={12} justifyContent="center" alignItems="center">
                <h1 hidden={props.hidden}>{title}</h1>
            </Grid>
            <Grid
                container
                item
                xs={12}
                alignItems="center"
                justifyContent="center"
            >
                <div hidden={props.hidden} ref={svgRef} />
            </Grid>
        </Grid>
    );
};

export default Graph;
