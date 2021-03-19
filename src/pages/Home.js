import React, { useState } from "react";
import ListOfAnimes from "../components/ListOfAnimes/index";
import Spinner from "../components/Spinner/index";
import NavBar from '../components/NavBar/index'
import {useAnimes} from "../hooks/useAnimes";
import {TextField, makeStyles} from '@material-ui/core'
import CameraOutlinedIcon from '@material-ui/icons/CameraOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';




export default function Home() {
  const [title, setTitle] = useState("");
  const { loading, animes } = useAnimes({title});

  const handleChange = (evt) => {
    setTitle(evt.target.value);
  };
  return <div className="container mx-auto">
    <NavBar position="static"/>
    <div >    
    <TextField id="standard-basic"  onChange={handleChange} className="mx-auto"  InputProps={{
            startAdornment: <InputAdornment position="start"><CameraOutlinedIcon className="" color="action"/> </InputAdornment>,
          }}/>
    </div>
    {loading? <Spinner/> : <ListOfAnimes animes={animes} />}
  </div>;
}
