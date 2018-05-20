import React, { Component } from 'react';

import NavBar from './NavBar'
import Search from './Search'
import Banner from './Banner'
import DanPin from './DanPin'
import PeiJian from './PeiJian'
import FootBar from './FootBar'



class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Search/>
                <Banner/>
                <DanPin/>
                <PeiJian/>
                <FootBar/>
            </React.Fragment>
        );
    }
}

export default Home;