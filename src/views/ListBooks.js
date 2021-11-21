import React from 'react'
import {CardBookList} from './CardBookList'



function ListBooks({fetchBooks, tituloLista, handleClickLike, handleClickSeeMore}){

    return(
        
        <div >
            <h2 style={{textAlign: "center", textTransform: "uppercase"}}>{tituloLista}</h2>
            
            
            <CardBookList fetchBooks={fetchBooks} handleClickLike={handleClickLike} handleClickSeeMore={handleClickSeeMore}/>
                               
            
        </div>
    )
}

export {ListBooks}