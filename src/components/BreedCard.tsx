import React from "react";
import IBreed from "../dogBreed";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

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
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.breed.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{fontSize: 14}} align="left">
                        Average Height: {props.breed.avg_height} inches<br/>
                        Average Weight: {props.breed.avg_weight} pounds<br/>
                        Average Lifespan: {props.breed.avg_life_span} years
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default BreedCard;
