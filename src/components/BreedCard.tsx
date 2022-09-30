import React from "react";
import IBreed from "../dogBreed";
import { Card, CardContent, CardMedia } from "@mui/material";

interface CardProps {
    breed: IBreed
}

const BreedCard = (props: CardProps) => {
    return (
        <div>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    component="img"
                    height="140"
                    image= {props.breed.img}/>
            </Card>
        </div>
    );
};

export default BreedCard;
