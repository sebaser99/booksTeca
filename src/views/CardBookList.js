import React from "react"
import {Link} from 'react-router-dom'
import {Typography} from '@mui/material';
import {Box} from '@mui/material';
import {CardContent, CardActions, Button} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Grid from '@mui/material/Grid';


function CardBookList({fetchBooks, handleClickLike}){
    return(
        <Grid container>
        {fetchBooks.map(book =>( 
            
            <>
                
                    <Grid item key={book.id} xs={12} sm={6} lg={4}>
                    <Box sx={{ minWidth: 275,   border: 1, borderColor:"secondary", borderRadius: 2,  margin: 5}}>    
                        <CardContent sx={{padding: 3 }}> 
                            <Typography sx={{ fontSize: 14, paddingLeft: 2 }} color="text.secondary" gutterBottom>
                                Libro
                            </Typography>
                            <Typography variant="h6" sx={{ paddingLeft: 3 }} component="div" color="primary">
                                {book.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5, paddingLeft: 2  } } color="text.secondary">
                                Autor
                            </Typography>
                            <Typography variant="h6" sx={{ paddingLeft: 3, color: "#000" }} >
                                {book.author}
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button size="small" component={Link} to={`/seemore/${book.id}`} name={book.id} variant="contained" 
                                    style={{marginTop: 15, 
                                    marginBottom: 10,
                                    marginLeft: '68%'}} >Ver más
                                </Button>
                        </CardActions>
                    </Box>
                    <div style={{display: "flex", paddingLeft: "30px", marginBottom:10}}>
                        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
                            {book.likes}
                        </Typography>
                        <Button name="like" value={book.id} onClick={handleClickLike}>
                            <ThumbUpIcon style={{fontSize: 40, display: "block", margin: 7 }} color={book.likes === 0 ? "disabled" : "primary"}/>
                        </Button>
                        <Button name="dislike" value={book.id} onClick={handleClickLike} >
                            <ThumbDownAltIcon  style={{fontSize: 40, display: "block", margin: 7}} color={book.dislikes === 0 ? "disabled" : "secondary"}/>
                        </Button>  
                        
                        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2}}>
                            {book.dislikes}
                        </Typography>
                    </div>     
                    </Grid>
                
                
             </> 
        )) }
        </Grid>  
    )
}

export {CardBookList}