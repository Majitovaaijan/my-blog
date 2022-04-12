import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import Main from "./pages/Main/Main";
import Article from "./pages/Article/Article";
import Test from"./pages/Test/Test"
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Goods from "./pages/Test/Goods";
import Basket from "./pages/Basket/Basket"


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='post/:id' element={<Article/>}/>
                <Route path='test' element={<Test/>}/>
                <Route path='goods' element={<Goods/>}/>
                <Route path='basket' element={<Basket/>}/>
            </Routes>
            <Toaster/>
        </BrowserRouter>
    );
};

export default App;
