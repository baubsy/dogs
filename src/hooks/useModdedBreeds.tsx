import React, {useEffect, useState} from "react";
import IBreed from "../dogBreed";

const useModdedBreeds = (breeds: IBreed[]) => {
    const [moddedBreeds, setModdedBreeds] = useState<IBreed[]>([]);

    const apiAvg = (str: string) => {
        if (!str.includes("-")) {
            return parseInt(str);
        }
        const arr = str.split("-");
        const retArr = arr.map((x) => parseFloat(x.replace(/[^0-9.]/g, "")));
        return (retArr[0] + retArr[1]) / 2;
    };
    useEffect(() => {
        const mBreeds = breeds.map((breed) => {
            const retBreed = {
                height: breed.height,
                avg_height: apiAvg(breed.height.imperial),
                name: breed.name,
                weight: breed.weight,
                avg_weight: apiAvg(breed.weight.imperial),
                avg_life_span: apiAvg(breed.life_span),
                life_span: breed.life_span,
                img: breed.image!.url!,
                image: breed.image!
            };
            return retBreed;
        });
        setModdedBreeds(mBreeds);
    }, [breeds])
    
    return moddedBreeds;
};

export default useModdedBreeds;