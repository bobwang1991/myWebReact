import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Person from './PersonInfo/Person';
import Evaluation from './PersonInfo/Evaluation';
import ApplyJob from './PersonInfo/ApplyJob';
import JobExperience from './PersonInfo/JobExperience';
import School from './PersonInfo/School';
import Training from './PersonInfo/Training';

export default class VitaePage extends Component {
    render () {
        var title = this.props.title
        var bread = this.props.bread
        return (
            <div className="Vitae">
                <div className="breadNav clearfix">
                    <Link to="/">首页</Link>
                    <span>&gt;&gt;</span>
                    <span>{bread}</span>
                </div>
                <div className="vitae">
                    <div className="box">
                        <div className="title">{title}</div>
                        <Person title="个人信息"/>
                        <div className="jobInfo">
                            <Evaluation title="自我评价"/>
                            <ApplyJob title="求职意向"/>
                            <JobExperience title="工作经验"/>
                            <School title="教育经历"/>
                            <Training title="培训经历"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}