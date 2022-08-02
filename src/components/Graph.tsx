import React, { useEffect, useState, useRef } from "react";
import IBreed from "../dogBreed";
import * as d3 from "d3";
import BarChart from "../barChart";
import { Grid, Box } from "@mui/material";

interface GraphProps {
    compare: string,
    breeds: IBreed[],
    units: string,
    hidden: boolean,
    setHidden: Function;
}

const Graph = (props: GraphProps) => {
    const [modBreeds, setModBreeds] = useState<IBreed[]>([]);
    const [breedChart, setBreedChart] = useState<any>(null);
    const svgRef = useRef<HTMLDivElement>(null);
    const [title, setTitle] = useState("Weight")

    useEffect(() => {
        if (props.compare === "height") {
            const chart = BarChart(modBreeds, {
                x: (d) => d.name,
                y: (d) => d.avg_height,
                xDomain: d3.groupSort(
                    modBreeds,
                    ([d]) => d.name,
                    (d) => d.name
                ),
                yFormat: "f",
                yLabel: "Inches",
                width: 500,
                height: 500,
                color: "steelblue",
                title: "Dog Breeds",
                yDomain: undefined,
            });
            setBreedChart(chart);
        } else if (props.compare === "weight") {
            const chart = BarChart(modBreeds, {
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
                color: "steelblue",
                title: "Dog Breeds",
                yDomain: undefined,
            });
            setBreedChart(chart);
        } else if (props.compare === "lifespan") {
            const chart = BarChart(modBreeds, {
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
                color: "steelblue",
                title: "Dog Breeds",
                yDomain: undefined,
            });
            setBreedChart(chart);
        }
        //chartUpdate();
    }, [props.compare]);

    useEffect(() => {
      chartUpdate();
    }, [breedChart])
    useEffect(() => {
        const moddedBreeds = props.breeds.map((breed) => {
            const retBreed = {
                height: breed.height,
                avg_height: apiAvg(breed.height.imperial),
                name: breed.name,
                weight: breed.weight,
                avg_weight: apiAvg(breed.weight.imperial),
                avg_life_span: apiAvg(breed.life_span),
                life_span: breed.life_span,
            };
            return retBreed;
        });
        setModBreeds(moddedBreeds);
    }, [props.breeds]);

    useEffect(() => {
        if (modBreeds.length > 0) {
            const chart = BarChart(modBreeds, {
                x: (d) => d.name,
                y: (d) => d.avg_weight,
                xDomain: d3.groupSort(
                    modBreeds,
                    ([d]) => d.name,
                    (d) => d.name
                ),
                yFormat: "f",
                yLabel: "Pounds",
                width: 100 * modBreeds.length,
                height: 500,
                color: "steelblue",
                title: "Dog Breeds",
                yDomain: undefined,
            });
            setBreedChart(chart);
        }
    }, [modBreeds]);

    const apiAvg = (str: string) => {
        if (!str.includes("-")) {
            return parseInt(str);
        }
        const arr = str.split("-");
        const retArr = arr.map((x) => parseFloat(x.replace(/[^0-9.]/g, "")));
        return (retArr[0] + retArr[1]) / 2;
    };
    const chartUpdate = () => {
      if(svgRef.current != null){
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();
        if(breedChart != null){
          svg.node()?.appendChild(breedChart);
        };
      }
        
       
    };
    const handleClick = () => {
        console.log(modBreeds);
        //const svg = d3.select(svgRef.current).node().appendChild(breedChart);
        props.setHidden(!props.hidden);
    };

    return (
        <Grid container alignItems="center" justifyContent="center">
            <h1>Graph</h1>
            <h1>{title}</h1>
            <button onClick={handleClick}>Graph test</button>
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
