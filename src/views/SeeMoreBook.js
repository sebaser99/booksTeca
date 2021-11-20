import React from "react"
import {Link} from 'react-router-dom'
import {Typography} from '@mui/material';
import {Box} from '@mui/material';
import {CardContent, Button} from '@mui/material';


function SeeMoreBook({ tituloLista, seeMoreBook, handleClickDelete, handleOnclickEdit }){
  
    return(
        <>
            <h2 style={{textAlign: "center", textTransform: "uppercase"}}>{tituloLista}</h2>
            <div style={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
                <Box sx={{ minWidth: 275, width: 380,  border: 1, borderColor:"secondary", borderRadius: 2,  margin: 5}}>    
                    <CardContent sx={{padding: 3 }}> 
                        <Typography sx={{ fontSize: 14, paddingLeft: 2 }} color="text.secondary" gutterBottom>
                            Libro
                        </Typography>
                        <Typography variant="h5" sx={{ paddingLeft: 3 }} component="div" color="primary">
                            {seeMoreBook[0].title}
                        </Typography>
                        <Typography sx={{ mb: 1.5, paddingLeft: 2  } } color="text.secondary">
                            Autor
                        </Typography>
                        <Typography variant="h5" sx={{ paddingLeft: 3 }} color="secondary">
                            {seeMoreBook[0].author}
                        </Typography>
                    </CardContent>
                </Box>
                <div>
                    <Button  component={Link} to={`/`} variant="outlined" color="primary"  sx={{margin: 3}}>Atrás</Button>
                    <Button  component={Link} to={`/editbook/:id`}  variant="outlined" color="secondary" sx={{margin: 3}} 
                            name={seeMoreBook[0].id} onClick={handleOnclickEdit }>Editar</Button>
                    <Button variant="outlined" color="error" sx={{margin: 3}} name={seeMoreBook[0].id} onClick={handleClickDelete}>Eliminar</Button> 
                </div>
            </div>
        
       </>
          
    
    )
}

export {SeeMoreBook}