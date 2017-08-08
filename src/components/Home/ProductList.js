import React, { Component } from 'react';

export default class ProductList extends Component {
    render () {
        let arr = []
        for(var i=0 ; i<3 ; i++) {
            arr.push(this.props.data[i])
        }
        return (
            <div className="pic">
                <ul>
                    {
                        arr.map(function(value,index){
                            return <li key={index}><a href={value.link} target="_blank"><img src={value.img} alt=""/></a></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}