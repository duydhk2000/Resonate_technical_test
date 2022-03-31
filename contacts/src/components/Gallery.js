import * as React from 'react';
import {Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';
import Contact from './Contact';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Gallery() {
    return (
     <Contact contact = {cards[0]} />
    );
}
