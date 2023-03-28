import React from 'react';
import {Grid} from '@mui/material';
import Content from "./components/Content";
import NavApp from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Rightbar from './components/Rightbar';

function App() {
  return (
    <>
    <Grid >
      <Grid container >
        <Grid item md={4}>
      
          <Sidebar/>
        </Grid>

        <Grid item md={4}>
            <Content/>
        </Grid>
        
        <Grid item md={4}>
         <Rightbar/>
        </Grid>
      </Grid>
    </Grid>
    <NavApp/>
    </>
  );
}

export default App;
