import React, { Component } from 'react';
import classes from './Layout.css'
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true})
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    };

    render () {
        return (
            <Aux>
                <Toolbar menuClicked={this.sideDrawerOpenHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.content}>{this.props.children}</main>
            </Aux>
        );

    }
};

export default Layout;