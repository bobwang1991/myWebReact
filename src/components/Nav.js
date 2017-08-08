import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import data from './../data/data';
import HomePage from './HomePage';
import VitaePage from './VitaePage';
import ProductList from './ProductList';

const Nav = () => (
    <Router>
        <div className="logoNav">
            <div className="navLogo clearfix">
                <div className="center">
                    <div className="logo fl">
                        <Link to="/"><img src="http://bob1991-1253674698.cossh.myqcloud.com/personalWeb/logo.png" alt=""/></Link>
                    </div>
                    <ul className="nav fl">
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/vitae">个人简历</Link></li>
                        <li><Link to="/webList">个人作品(PC)</Link></li>
                        <li><Link to="/videoList">个人作品(AE特效)</Link></li>
                    </ul>
                </div>
            </div>

            <div className="main">
                <Route exact path="/" component={Home}/>
                <Route path="/vitae" component={Vitae}/>
                <Route path="/webList" component={WebList}/>
                <Route path="/videoList" component={VideoList}/>
            </div>
        </div>
    </Router>
)

const Home = () => (
<div className="homePage">
    <HomePage/>
</div>
)

const Vitae = () => (
  <div className="homePage">
    <div className="center">
        <VitaePage bread="简历详情" title="个人简历"/>
    </div>
  </div>
)

class WebList extends Component {
    constructor(props){
        super(props)
        this.state = {
            webList: data.webList
        }
    }
    render() {
        return (
            <div className="homePage">
                <div className="center">
                    <ProductList title="PC个人项目" bread="个人作品(PC)" data={this.state.webList}/>
                </div>
            </div>
        )
    }
}

class VideoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            videoList: data.videoList
        }
    }
    render () {
        return (
            <div className="homePage">
                <div className="center">
                    <ProductList title="AE特效个人项目" bread="个人作品(AE)" data={this.state.videoList}/>
                </div>
            </div>
        )
    }
}

export default Nav;