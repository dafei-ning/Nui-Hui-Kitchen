import React, { Component } from 'react';

import './Layout.css';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler =() => {
        const showSideDrawerCurrent = !this.state.showSideDrawer;
        this.setState({showSideDrawer: showSideDrawerCurrent});
    }

    render() {
        return (
            <Aux>
                <Toolbar Toggle={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggleHandler}/>
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>)
    }
};

export default Layout;