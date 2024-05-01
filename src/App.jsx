import React from "react"
import { Routes,Route } from "react-router-dom"

import './App.css'
import LandingPage from "./stores/Pages/LandingPage"
import KitchenPage from "./stores/Pages/KitchenPage"
import MobilePage from "./stores/Pages/MobilePage"
import ComputerPage from "./stores/Pages/ComputerPage"
import WatchPage from "./stores/Pages/WatchPage"
import MenWearPage from "./stores/Pages/MenWearPage"
import WomanWearPage from "./stores/Pages/WomanWearPage"
import FurniturePage from "./stores/Pages/FurniturePage"
import AcPage from "./stores/Pages/AcPage"
import MobileSingle from "./stores/singles/MobileSingle"
import UserCart from "./stores/UserCart"
import FridgePage from "./stores/Pages/FridgePage"
import ComputerSingle from "./stores/singles/ComputerSingle"
import FurnitureSingle from "./stores/singles/FurnitureSingle"
import KitchenSingle from "./stores/singles/KitchenSingle"
import AcSingle from "./stores/singles/AcSinglePage"
import MenSingle from "./stores/singles/MenSingle"
import WatchSingle from "./stores/singles/WatchSingle"
import WomanSingle from "./stores/singles/WomanSingle"
import FridgeSingle from "./stores/singles/FridgeSingle"
import BooksPage from "./stores/Pages/BooksPage"
import SpeakersPage from "./stores/Pages/SpeakersPage"
import TVPage from "./stores/Pages/TVPage"
import BookSingle from "./stores/singles/BookSingle"
import SpeakerSingle from "./stores/singles/SpeakerSingle"
import TVSingle from "./stores/singles/TVSingle"





const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element = { <LandingPage />}/>
      <Route path= '/kitchen' element = {<KitchenPage />} />
      <Route path='/mobiles' element= {<MobilePage />} />
      <Route path='/computers' element= {<ComputerPage />} />
      <Route path='/watch' element= {<WatchPage />} />
      <Route path='/fridge' element={<FridgePage />} />
      <Route path='/men' element= {<MenWearPage />} /> 
      <Route path='/woman' element= {<WomanWearPage />} />             
      <Route path='/furniture' element= {<FurniturePage />} />             
      <Route path='/ac' element= {<AcPage />} />             
         <Route path='/mobiles/:id' element = {<MobileSingle />} />
    <Route path='/cart' element = {<UserCart />} />
    <Route path='/ac/:id' element = {<AcSingle />} />
    <Route path='/computers/:id' element = {<ComputerSingle />} />
    <Route path='/furniture/:id' element = {<FurnitureSingle />} />
    <Route path='/kitchen/:id' element = {<KitchenSingle />} />
    <Route path='/men/:id' element = {<MenSingle />} />
    <Route path='/watch/:id' element = {<WatchSingle />} />
    <Route path='/woman/:id' element = {<WomanSingle />} />
    <Route path='/fridge/:id' element = {<FridgeSingle />} />
    <Route path='/books' element= {<BooksPage />} />
    <Route path='/speakers' element= {<SpeakersPage />} />
    <Route path='/tvs' element= {<TVPage />} />
    <Route path='/books/:id' element = {<BookSingle />} />
    <Route path='/speakers/:id' element = {<SpeakerSingle />} />
    <Route path='/tvs/:id' element = {<TVSingle />} />
    </Routes>
  </div>
  )
}

export default App
