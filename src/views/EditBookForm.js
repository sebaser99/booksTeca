import React from 'react'
import {Button} from '@material-ui/core'
import {FormControl, InputLabel, Input} from "@material-ui/core"
import Container from '@mui/material/Container';

function EditBookForm({handleChangeInputEditBook, handleSubmitEditBook, seeMoreBook }){
    return( 
        <Container maxWidth="sm" sx={{  display: "flex", flexDirection: "column"}} className="form-books" >
             <h2 style={{marginTop:"70px"}}>EDITA EL LIBRO</h2>
            <form style={{display: "flex", flexDirection: "column", width: 500}} name={seeMoreBook.id} onSubmit={handleSubmitEditBook}>
                <FormControl >
                    <InputLabel forhtml="title">Título</InputLabel> 
                    <Input onChange={handleChangeInputEditBook} defaultValue={seeMoreBook.title} name="title" id="title" type="text" placeholder="Ingresa el nombre del libro" />
                </FormControl>
                <FormControl>
                    <InputLabel forhtml="author">Autor</InputLabel> 
                    <Input onChange={handleChangeInputEditBook}   defaultValue={seeMoreBook.author} name="author" id="author" type="text" placeholder="Ingresa el nombre del autor" />
                </FormControl>
                <div style={{marginTop: 30, marginRight: "auto", marginLeft: "auto"}}>
                <Button  type="submit" color="primary" variant="contained">Guardar</Button>
                </div>   
            </form>
        </Container>
    )     
    
}

export {EditBookForm}