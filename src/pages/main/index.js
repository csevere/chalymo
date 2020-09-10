import React, {Fragment} from "react"
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/navbar'

export default function Main() {
  return(
    <Fragment>
      <NavBar/>
      <Grid container direction="row" className="main">
        <Grid item></Grid>
        
      </Grid>
    </Fragment>
  ) 
}
