import React from 'react'
import {Button} from '@material-ui/core'
import {FormControl, InputLabel, Input} from "@material-ui/core"
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';

function NewBookForm({handleChangeInputNewBook, handleSubmitNewBook }){
    return( 
        <Container maxWidth="sm" sx={{  display: "flex", flexDirection: "column"}} className="form-books" >
             <h2 style={{marginTop:"70px"}}>ADICIONA UN LIBRO</h2>
            <form style={{display: "flex", flexDirection: "column", width: 500}} onSubmit={handleSubmitNewBook}>
                <FormControl >
                    <InputLabel forhtml="title">Título</InputLabel> 
                    <Input onChange={handleChangeInputNewBook} name="title" id="title" type="text" placeholder="Ingresa el nombre del libro" />
                </FormControl>
                <FormControl>
                    <InputLabel forhtml="author">Autor</InputLabel> 
                    <Input onChange={handleChangeInputNewBook}  name="author" id="author" type="text" placeholder="Ingresa el nombre del autor" />
                </FormControl>
                <Box sx={{marginRight: "auto", marginLeft: "auto", marginTop: "50px" }}>
                <Button  type="submit" color="primary" variant="contained">Guardar</Button>
                </Box>
                <Box sx={{marginRight: "auto", marginLeft: "auto", marginTop: "50px" }}>
                <Button  component={Link} to={`/`}  variant="outlined" color="secondary"  >Cancelar</Button>
                </Box>
            </form>
            
        </Container>
    )     
    
}

export {NewBookForm}