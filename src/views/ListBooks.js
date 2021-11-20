import React from 'react'
import BoxGrid from '@mui/material/Box';
import {CardBookList} from './CardBookList'

function ListBooks({fetchBooks, tituloLista, handleClickLike, handleClickSeeMore}){

    return(
        
        <div >
            <h2 style={{textAlign: "center", textTransform: "uppercase"}}>{tituloLista}</h2>
              <BoxGrid
                sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 1,
                gridTemplateColumns: 'repeat(3, 1fr)',
                }} >
                <CardBookList fetchBooks={fetchBooks} handleClickLike={handleClickLike} handleClickSeeMore={handleClickSeeMore}/>
                      
            </BoxGrid>
        </div>
    )
}

export {ListBooks}