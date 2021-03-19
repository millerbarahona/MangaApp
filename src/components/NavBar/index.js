import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    offset:theme.mixins.toolbar
  }))
  
export default function NavBar() {
  const estilos = useStyles()
  return (
    <div>
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <div className={estilos.offset}></div>
    </div>
  );
}
