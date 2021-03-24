import React from 'react'
import Spinner from '../../components/Spinner'
import ListOfAnimes from '../../components/ListOfAnimes'
import {useAnimes} from '../../hooks/useAnimes'
import NavBar from "../../components/NavBar/index";
import '../../components/ListOfAnimes/estilos.css'

export default function SearchResults ({params}){
    const {title} = params
    const {loading, animes} = useAnimes({title})
    const tipo='anime'
    
    return <>
    <NavBar position="static" estado={tipo}/>
      {loading
        ?<Spinner className='mt-2 mx'/>
        :<ListOfAnimes  animes={animes}/>}
    </>
}