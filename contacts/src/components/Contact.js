import * as React from 'react';
import {Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';

export default function Contact(contact) {
    return(
    <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
            {
                <Grid item key={contact} xs={12} sm={6} md={4}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <Typography gutterBottom variant="h5" component="h2">
                            Contact Name
                        </Typography>
                        <CardMedia
                        component="img"
                        sx={{
                            // 16:9 56.25%
                            pt: '10%',
                        }}
                        image="https://source.unsplash.com/random"
                        alt="avatar"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                        <Typography>
                            This is where the contact infos will go when this finished.
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Edit</Button>
                        <Button size="small">Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
            }
            </Grid>
        </Container>
    )
}