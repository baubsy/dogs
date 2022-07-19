import React, { useEffect } from "react";
import IBreed from '../dogBreed';
import * as d3 from "d3";

interface GraphProps {
    compare: string;
    breeds: IBreed[];
}

const Graph = (props: GraphProps) => {

  const svg = d3
    .select("#bar-graph")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);
  const handleClick = () => {
    

    svg
    .selectAll("rect")
    .data(props.breeds)
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