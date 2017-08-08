import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import List from './productList/List';

export default class VideoListPage extends Component {
    constructor(props){
        super(props)
    }
    render () {
        var title = this.props.title
        var bread = this.props.bread
        return (
            <div className="List">
                <div className="breadNav clearfix">
                    <Link to="/">首页</Link>
                    <span>&gt;&gt;</span>
                    <span>{bread}</span>
                </div>
                <div className="list">
                    <div className="moreList">
                        <div className="titleHead">{title}</div>
                        <div className="moreContent clearfix">
                            {
                                this.props.data.map(function(value,index){
                                    return <List key={index} data={value}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}