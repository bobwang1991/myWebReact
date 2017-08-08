import React, { Component } from 'react';
import data from './../data/data';

export default class Top extends Component {
    constructor(props){
        super(props)
        this.state = {
            personInfo: data.vitae[0]
        }
    }
    render () {
        return (
            <div className="top">
                <div className="center">
                    <div className="personInfo">
                        <div className="txt fl">
                            姓名:<span>{this.state.personInfo.name}</span>
                        </div>
                        <div className="txt fl">
                            地区:<span>{this.state.personInfo.city}</span>
                        </div>
                        <div className="txt fl">
                            联系方式:<span>{this.state.personInfo.phone}</span>
                        </div>
                        <div className="txt fl">
                            email:<span>{this.state.personInfo.mail}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

