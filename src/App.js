import React from 'react';
import Header from "./components/Header/Header";
import BlogEntries from "./components/BlogEntries/BlogEntries";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import "./index.css";

const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth:"1400px"}}>
                <Header/>
                <div className="w3-row">
                   <BlogEntries/>
                   <Sidebar/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default App;
