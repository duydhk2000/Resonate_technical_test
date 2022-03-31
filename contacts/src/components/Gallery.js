import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';
import Contact from './Contact';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Gallery() {
    const [selected, setSelected] = useState(null)
    const [contacts, setContacts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    var currIndex = "";

    useEffect(() => {
        async function getData(){
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setContacts(data.sort(alphabetical)));
        }
        getData();
    }, []);

    function alphabetical(x, y){
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
    }

    return (
        contacts ? 
            <div>
                {
                    contacts.filter(
                        con => searchQuery ? 
                            con.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            con.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            con.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            con.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            con.company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            con.address.city.toLowerCase().includes(searchQuery.toLowerCase()) 
                        : 
                            contacts
                        ).map((c,i) => {
                            if (c.name.charAt(0).toLowerCase() !== currIndex) {
                                currIndex = c.name.charAt(0).toLowerCase();
                                return (
                                    <div key = {i}>
                                        <h1 style = {{width:"100%", textAlign:"left"}}>{c.name.charAt(0)}</h1>
                                        <Contact contact ={c} selected = {selected === c}/>
                                    </div>
                                )
                            } else {
                                return(
                                    <div key = {i}>
                                        <Contact contact ={c} selected = {selected === c}/> 
                                    </div>
                                )
                            }
                    })
                }
            </div>
        :
        <div>
            Loading:
        </div>
    );
}

export default Gallery;