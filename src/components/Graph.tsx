import React, { useEffect, useState } from "react";
import IBreed from '../dogBreed';
import * as d3 from "d3";

interface GraphProps {
    compare: string,
    breeds: IBreed[],
    units: string
}

const Graph = (props: GraphProps) => {
  const [modBreeds, setModBreeds] = useState<IBreed[]>([]);

  useEffect(() => {
    const moddedBreeds = props.breeds.map(breed => {
      const retBreed = {
        height: breed.height,
        avg_height: apiAvg(breed.height.imperial),
        name: breed.name,
        weight: breed.weight,
        avg_weight: apiAvg(breed.weight.imperial),
        avg_life_span: apiAvg(breed.life_span),
        life_span: breed.life_span
      }
      return retBreed
    })
    setModBreeds(moddedBreeds);
  }, [props.breeds])
  const svg = d3
    .select("#bar-graph")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  const apiAvg = (str: string) => {
    if(!str.includes('-')){
      return parseInt(str);
    }
    const arr = str.split('-');
    const retArr = arr.map(x => parseInt(x.replace(/[^0-9]/g,'')));
    return ((retArr[0] + retArr[1]) / 2);
  }
  const handleClick = () => {
    
    console.log(modBreeds);
    svg
    .selectAll("rect")
    .data(modBreeds)
    .enter()
      .append("rect")
      .attr("width", 50)
      .attr("height", 23)
      .attr("x", (d,i) => i * 60);
  }
  
  return (
    <div>
        <h1>Graph</h1>
        <h1>{props.compare}</h1>
        <button onClick={handleClick}>Graph test</button>
        <div id="bar-graph"/>
    </div>
  )
}

export default Graph;