import React, { Component } from 'react';
import data from './../../data/data';

export default class Evaluation extends Component {
    constructor(props){
        super(props)
        this.state = {
            personInfo: data.vitae[1]
        }
    }
    render () {
        let title = this.props.title
        return (
            <div  className="personalAppraisal">
                <div className="pInfo-title colorTxt">{title}</div>
                <div className="pA-con border">
                    {
                        this.state.personInfo.contentArr.split('<br/>').map(function(value,index){
                            return <p key={index}>{value}</p>
                        })
                    }
                </div>
            </div>
        )
    }
}