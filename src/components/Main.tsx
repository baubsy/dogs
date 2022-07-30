import React, {useState} from "react";
import Selection from "./Selection";
import IBreed from "../dogBreed";
import Graph from "./Graph";

const Main = () => {
    const [selectedBreeds, setSelectedBreeds] = useState<IBreed[]>([]);
    const [compare, setCompare] = useState("weight");
    const [units, setUnits] = useState("imperial");
  
    const logbreeds  = () => {
      console.log(selectedBreeds);
      console.log(compare);
    }
    return (
        <div>
            <button onClick={logbreeds}>test</button>
            <Selection setSelectedBreeds={setSelectedBreeds} compare={compare} setCompare={setCompare}/>
            <Graph compare={compare} breeds={selectedBreeds} units={units}/>
        </div>
    )
};

export default Main;