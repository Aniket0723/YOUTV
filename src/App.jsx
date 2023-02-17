import { useEffect, useState } from "react";
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";


import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details"
import SearchDetails from "./pages/searchResult/SearchResult"
import Expolre from "./pages/explore/Explore";
import PageNotFound from './pages/404/PageNotFound'
import SearchResult from "./pages/searchResult/SearchResult";
function App() {
  const dispatch = useDispatch();
  const url= useSelector((state)=>state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url));
    });
  };
  return(
    <BrowserRouter>
    {<Header/>}
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:mediaType/:id" element={<Details/>}/>
    <Route path="/search/:query" element={<SearchResult/>}/>
    <Route path="/explore/:mediaType" element={<Expolre/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
 