import React, { Component } from 'react';
import data from './../../data/data';
import ExperenceList from './ExperenceList';

export default class Training extends Component {
    constructor(props){
        super(props)
        this.state = {
            personalInfo: data.vitae[5]
        }
    }
    render () {
        let title = this.props.title
        return (
            <div className="jobExperience">
                <div className="pInfo-title colorTxt">{title}</div>
                <div className="experience-con border clearfix">
                    {
                        this.state.personalInfo.jobExpress.map(function(value,index) {
                            return <ExperenceList key={index} data={value}/>
                        })
                    }
                </div>
            </div>
        )
    }
}