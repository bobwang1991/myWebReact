import React, { Component } from 'react';
import data from './../data/data';
import ShowList from './Home/ShowList';
import Vitae from './Home/Vitae';

export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            person: data.vitae[0],
            evaluation: data.vitae[1],
            prodcutWeb: data.webList,
            productVideo: data.videoList
        }
    }
    render () {
        return (
            <div className="Home">
                <ShowList title="个人作品展示PC端" more="/webList" data={this.state.prodcutWeb}/>
                <ShowList title="个人作品展示AE特效" more="/videoList" data={this.state.productVideo}/>
                <Vitae data={this.state.person} data1={this.state.evaluation}/>
            </div>
        )
    }
}