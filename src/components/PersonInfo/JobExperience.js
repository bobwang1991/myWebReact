import React, { Component } from 'react';
import data from './../../data/data';

export default class JobExperience extends Component {
    constructor(props){
        super(props)
        this.state = {
            personalInfo: data.vitae[3]
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
                            return (
                                <div className="work fl" key={index}>
                                    <dl className="clearfix">
                                        <dt>就职年限：</dt>
                                        <dd>{value.workTime}</dd>
                                    </dl>
                                    <dl className="clearfix">
                                        <dt>公司名称：</dt>
                                        <dd>{value.companyName}</dd>
                                    </dl>
                                    <dl className="clearfix">
                                        <dt>公司类别和人数</dt>
                                        <dd>{value.companyType}</dd>
                                    </dl>
                                    <dl className="clearfix">
                                        <dt>工作描述</dt>
                                        <dd>{value.companyDesc}</dd>
                                    </dl>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}