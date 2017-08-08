import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProductList from './ProductList';

export default class ShowList extends Component {
    render () {
        let title = this.props.title
        let more = this.props.more
        return (
            <div className="personProductWeb">
                <div className="center">
                    <div className="title clearfix">
                        <h2>{title}</h2>
                        <Link className="more" to={more}>更多</Link>
                    </div>
                    <div className="bannerProduct">
                        <ProductList data={this.props.data}/>
                    </div>
                </div>
            </div>
        )
    }
}