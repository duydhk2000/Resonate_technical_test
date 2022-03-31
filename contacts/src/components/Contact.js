import * as React from 'react';
import {Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';

export default function Contact(contactList) {
    return(
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
            {
                <Grid item key={contactList.contact.id} xs={24} sm={12} md={8}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <Typography gutterBottom variant="h5" component="h2">
                            {contactList.contact.name}
                        </Typography>
                        <CardMedia
                        component="img"
                        sx={{
                            // 16:9 56.25%
                            pt: '10%',
                        }}
                        image={"https://source.unsplash.com/random/500x500/?face-" + contactList.contact.id}
                        alt="avatar"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                        <Typography>
                            Mobile: {contactList.contact.phone}
                        </Typography>
                        <Typography>
                            Email: {contactList.contact.email}
                        </Typography>
                        <Typography>
                            Address: {contactList.contact.address.suite}, {contactList.contact.address.street}, {contactList.contact.address.zipcode} {contactList.contact.address.city}
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