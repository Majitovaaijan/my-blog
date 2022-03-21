import React from 'react';
import AboutMe from "../AboutMe/AboutMe";
import PopularPosts from "../PopularPosts/PopularPosts";
import Tags from "../Tags/Tags";
import {popularPosts} from "../../constant";

const Sidebar = () => {
    return (
        <div className="w3-col l4">
           <AboutMe/>
            <PopularPosts/>
           <Tags/>
        </div>
    );
};

export default Sidebar;