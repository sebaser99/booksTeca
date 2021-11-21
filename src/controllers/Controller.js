import React, {useEffect, useState} from "react";
import { Route, Routes} from 'react-router-dom';
import {ListBooks} from '../views/ListBooks'
import {SeeMoreBook} from '../views/SeeMoreBook'
import {CssBaseline, Container} from '@mui/material';
import {Header} from '../views/Header'
import {NewBookForm} from '../views/NewBookForm'
import { EditBookForm } from "../views/EditBookForm";
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert'



function Controller(){  
    
    //estado con la respuesta del fetch donde vienen todos los libros
    const [fetchBooks, setFetchBooks] = useState([])
    //estado en el que me doy cuenta si se genera un cambio en los likes. lo declaro para que modifique el useEffect y vuelva a hacer fetch de todos los libros
    const [like, setLike] = useState([false])
    //estado donde voy a recoger el nuevo libro para pasarlo al fetch post de la función newbook
    const [newBook, setNewBook] = useState([])
    //estado que le va avisar al useEffect que se agregó un nuevo libro y debe volver a hacer el fecht get
    const [addeedNewBook, setAddeedNewBook] = useState([false])
    //aquí agrego el libro que voy a mostrar en detalle al presionar ver más
    const [seeMoreBook, setSeeMoreBook] = useState([])
     //aquí me doy cuenta si se ha eliminado un elemento
     const [deletedBook, setDeletedBook] = useState(false)
    //aquí me doy cuenta si se ha editado un elemento
     const [editedBook, setEditedBook] = useState(false)

    const urlApi = "http://localhost:4000/api/v1/books/";
    //instancio navigate para redireccionar al home
    let navigate = useNavigate()
    

    //función para hacer fetch(get) a todos los libros
    const getBooks = async(url) => {
        const urlFetch = url
        const response = await fetch(urlFetch)
        const resjson = await response.json()
        setFetchBooks(resjson)
    }

    //efecto para llamar la función getBooks. se activa al iniciar y cuando se modifica la variable de estado likes
    useEffect(()=>{
        getBooks(urlApi)
        
    }, [like, addeedNewBook, deletedBook, editedBook])

    //función para hacer fetch(post) a los likes 
     const setRating = async (id, el)=>{
        const url = `${urlApi}rating/${id}`
        const response = await fetch(url, {
            method: 'POST',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(el)
        })
        like === true ? setLike(false) : setLike(true)
    }
    //función que maneja el click al me gusta en CardBooksList y llama a setRating
    const handleClickLike = (e)=>{ 
        let ele;
        const id = e.target.value ? e.target.value : e.currentTarget.value
        if(e.target.name === "like" || e.currentTarget.name === "like" ){
            ele = { 
                like: true  
            }
        }else {
            ele = {
                like: false
            
            }
        }
        setRating(id, ele)  
    }

    //función para hacer fetch(post) para crear nuevo libro 
    const postNewBook = async (ele )=>{
        const response = await fetch(urlApi, {
            method: 'POST',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(ele)
        })
        const resjson = await response.json()
        console.log(resjson)
    }

    //recojo el value de los inputs del new book
    const handleChangeInputNewBook = e =>{
        setNewBook({
            ...newBook, 
            [e.target.name]: e.target.value
        })    
    }
    
    //Esta función se ejecuta cuando doy guardar en el form de new book y llama a la función postNewbook
    const handleSubmitNewBook = (e)=>{
        e.preventDefault()
        if((newBook.title === "" || !newBook.title) || (newBook.author === "" || !newBook.author)){
    
            alert("Todos los campos son obligatorios")
            return
        }else{
            postNewBook(newBook)
    
            setNewBook({
                title: '',
                author:''
            })
            addeedNewBook === true ? setAddeedNewBook(false) : setAddeedNewBook(true) 
            navigate('/')
        }
    }
    //esta función me permite ver más detalles del libro
    const handleClickSeeMore = (e)=>{
        console.log("seeMore")
        let id = e.target.name ? e.target.name : e.nativeEvent.name
        let singleBook = fetchBooks.filter(function (book) {
            return book.id === parseInt(id)
         
          });
        
          setSeeMoreBook(singleBook[0])
    }
  
  

    //BORRAR un libro
    const deleteBook = (id)=>{
        swal({
            title: "Eliminar",
            text: "¿Está seguro que desea eliminar este libro?",
            icon: "warning",
            buttons: ["No", "Sí"]
        }) 
        .then((willDelete) => {
                if (willDelete) {
                    fetch(urlApi + id, {
                        method: 'DELETE',    
                    }).then(response => console.log(response.json))
                    swal("El Libro ha sido borrado exitosamente!", {
                        icon: "success"})
                    deletedBook === true ? setDeletedBook(false) : setDeletedBook(true)
                    navigate('/')
                } else {
                    swal("El libro no ha sido borrado!");
                    return
                }
        })
    }

    //función para manejar el click al "delete"
    const handleClickDelete = (e)=>{
        let id = e.target.name ? e.target.name : e.nativeEvent.name
    
        deleteBook(id)
    }

    //función para Editar un libro
    const updateBook = async (id, ele)=>{
        debugger
        const response = await fetch(urlApi + id, {
            method: 'PUT',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(ele)
            
        })
    
        const resjson = await response.json()
        
     
        
    }
    // manejo el cambio en el input de los edit
    const handleChangeInputEditBook = (e)=>{
       
        setSeeMoreBook({
            ...seeMoreBook, 
            [e.target.name]: e.target.value
        }) 
    }

     // manejo el submit de los edit
     const handleSubmitEditBook = (e)=>{
               
            e.preventDefault()
            
            debugger
            let id = e.target.name ? e.target.name : e.nativeEvent.name
         
            if(seeMoreBook.title === ""  || seeMoreBook.author === "" ){
    
                alert("Todos los campos son obligatorios")
                return
            }else{
              
                updateBook(id, seeMoreBook)
        
                editedBook === true ? setEditedBook(false) : setEditedBook(true) 
                navigate('/')
            }

    }

    
    
  
    return(
        <React.Fragment>
            <CssBaseline />
                <Container>
                <Header />
                <Routes>
                    <Route path="/" element={<ListBooks tituloLista={"Listado de libros"} fetchBooks={fetchBooks} 
                            handleClickLike={handleClickLike} handleClickSeeMore={handleClickSeeMore} />}/>   

                    <Route path="/seemore/:id"  element={<SeeMoreBook seeMoreBook={seeMoreBook} tituloLista={"Detalles del Libro"}
                                handleClickDelete={handleClickDelete} 
                              />}/>
                           

                    <Route path="/newbook" element={<NewBookForm handleChangeInputNewBook={handleChangeInputNewBook} 
                           newBook={newBook} handleSubmitNewBook={handleSubmitNewBook} />}/>    

                    <Route path="/editbook/:id" element={<EditBookForm handleChangeInputEditBook={handleChangeInputEditBook} 
                            handleSubmitEditBook={handleSubmitEditBook}  seeMoreBook={seeMoreBook} />}/>              
                </Routes>
                </Container>
                
          
      </React.Fragment>
    )
}
 
export {Controller} 