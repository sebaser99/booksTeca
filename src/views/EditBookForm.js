import React, {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Button} from '@material-ui/core'
import {FormControl, InputLabel, Input} from "@material-ui/core"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function EditBookForm({handleChangeInputEditBook, handleSubmitEditBook, seeMoreBook, getOneBook }){
    const {id} = useParams();

    useEffect(()=>{
        getOneBook(id)
    }, [])
 

    return( 
        <Container maxWidth="sm" sx={{  display: "flex", flexDirection: "column"}} className="form-books" >
             <h2 style={{marginTop:"70px"}}>EDITA EL LIBRO</h2>
             
            <form style={{display: "flex", flexDirection: "column", margin:20, width: 500}} name={seeMoreBook.id} onSubmit={handleSubmitEditBook}>
            
                <FormControl >
                    <InputLabel forhtml="title">Título</InputLabel> 
                    <Input onChange={handleChangeInputEditBook} defaultValue={seeMoreBook.title} name="title" id="title" type="text" placeholder="Ingresa el nombre del libro" />
                </FormControl>
                <FormControl>
                    <InputLabel forhtml="author">Autor</InputLabel> 
                    <Input onChange={handleChangeInputEditBook}   defaultValue={seeMoreBook.author} name="author" id="author" type="text" placeholder="Ingresa el nombre del autor" />
                </FormControl>

                <Box sx={{marginRight: "auto", marginLeft: "auto", marginTop: "50px" }}>
               
                <Button  type="submit" color="primary" variant="contained" sx={{margin: 3, width: 200}}>Guardar</Button>
                </Box>   
                <Box sx={{marginRight: "auto", marginLeft: "auto", marginTop: "50px" }}>
               
                <Button  component={Link} to={`/seemore/${id}`}  variant="outlined" color="secondary"  >Cancelar</Button>
                </Box>  
            </form>
                
        </Container>
    )     
    
}

export {EditBookForm}