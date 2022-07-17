import React from "react";
import IBreed from '../dogBreed';

interface GraphProps {
    compare: string;
    breeds: IBreed[];
}
const Graph = (props: GraphProps) => {
  return (
    <div>
        <h1>Graph</h1>
        <h1>{props.compare}</h1>
    </div>
  )
}

export default Graph;