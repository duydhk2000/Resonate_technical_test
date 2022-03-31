import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {useState, useEffect} from 'react';
import Contact from './Contact';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
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
        <div display="flex">
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                onChange = {(e)=>{e.preventDefault(); setSearchQuery(e.target.value)}} 
                className = "search" 
                placeholder = "Search Contacts"                 
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            {
        contacts ? 
            <div display="flex">
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
        </div>}
        </div>
    );
}

export default Gallery;