import React, { Component } from 'react';
import './LayoutStyle.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state={
        showSideDrawer:false
    }

    sideDrawerHandler=()=>{
        this.setState({showSideDrawer:false})
    }
    drawerHandler=()=>{
        this.setState((prevState)=>{
            return {
                showSideDrawer:!prevState.showSideDrawer,
            }
        })
    }

    render() {
        return (
            <div>
                <Toolbar drawerClicked={this.drawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler}/>
                <main className='Content'>
                    {this.props.children}
                </main>
            </div>
        );
    }
}


export default Layout;