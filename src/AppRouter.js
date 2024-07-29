import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ArtArtist from './ArtArtist';
import Home from './Home';
import ViewArt from './ViewArt';


function AppRouter() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addart' element={<ArtArtist />} />
        <Route path='/viewart' element={<ViewArt />} />
    </Routes>
</Router>
  )
}

export default AppRouter
