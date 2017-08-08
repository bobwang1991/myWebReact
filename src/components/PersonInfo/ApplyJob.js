import React, { Component } from 'react';
import data from './../../data/data';

export default class ApplyJob extends Component {
    constructor(props){
        super(props)
        this.state = {
            personInfo: data.vitae[2]
        }
    }
    render () {
        let title = this.props.title
        return (
            <div className="jobIntension">
                <div className="pInfo-title colorTxt">{title}</div>
                <div className="job-con border">
                    <dl className="clearfix">
                        <dt>到岗时间：</dt>
                        <dd>{this.state.personInfo.workTime}</dd>
                    </dl>
                    <dl className="clearfix">
                        <dt>工作性质：</dt>
                        <dd>{this.state.personInfo.workType}</dd>
                    </dl>
                    <dl className="clearfix">
                        <dt>希望行业：</dt>
                        <dd>{this.state.personInfo.hopeJob}</dd>
                    </dl>
                    <dl className="clearfix">
                        <dt>目标地点：</dt>
                        <dd>{this.state.personInfo.city}</dd>
                    </dl>
                    <dl className="clearfix">
                        <dt>期望薪资</dt>
                        <dd>{this.state.personInfo.hopeMoney}</dd>
                    </dl>
                    <dl className="clearfix">
                        <dt>目标职能：</dt>
                        <dd>{this.state.personInfo.workThink}</dd>
                    </dl>
                    <dl className="clearfix">
                        <dt>求职状态：</dt>
                        <dd>{this.state.personInfo.stateJob}</dd>
                    </dl>
                </div>
            </div>
        )
    }
}