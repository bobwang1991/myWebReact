import React, { Component } from 'react';
import data from './../../data/data';

export default class Person extends Component {
    constructor(props){
        super(props)
        this.state = {
            personInfo: data.vitae[0]
        }
    }
    render () {
        let title = this.props.title
        return (
            <div className="commonInfo clearfix">
                <div className="personalPic fl"><img src={this.state.personInfo.personImg} alt=""/></div>
                <div className="personalInfo fl">
                    <div className="pInfo-title colorTxt">{title}</div>
                    <dl className="pInfo-con fl">
                        <dt>姓名：</dt>
                        <dd>{this.state.personInfo.name}</dd>
                    </dl>
                    <dl className="pInfo-con fl">
                        <dt>性别：</dt>
                        <dd>{this.state.personInfo.sex}</dd>
                    </dl>
                    <dl className="pInfo-con fl">
                        <dt>出生年月：</dt>
                        <dd>{this.state.personInfo.birthDay}</dd>
                    </dl>
                    <dl className="pInfo-con fl">
                        <dt>居住地：</dt>
                        <dd>{this.state.personInfo.city}</dd>
                    </dl>
                    <dl className="pInfo-con fl">
                        <dt>工作年限</dt>
                        <dd>{this.state.personInfo.jobYear}</dd>
                    </dl>
                    <dl className="pInfo-con fl">
                        <dt>e-mail：</dt>
                        <dd>{this.state.personInfo.mail}</dd>
                    </dl>
                    <dl className="pInfo-con fl">
                        <dt>手机：</dt>
                        <dd>{this.state.personInfo.phone}</dd>
                    </dl>
                    <dl className="pInfo-con fl">
                        <dt>QQ：</dt>
                        <dd>{this.state.personInfo.qq}</dd>
                    </dl>
                    <dl className="pInfo-con long fl">
                        <dt>目前薪资：</dt>
                        <dd>{this.state.personInfo.money}</dd>
                    </dl>
                    <dl className="pInfo-con long fl">
                        <dt>个人主页：</dt>
                        <dd><a href={this.state.personInfo.personWebLink} target="_blank">{this.state.personInfo.personWebLink}</a></dd>
                    </dl>
                    <dl className="pInfo-con fl">
                        <dt>身高：</dt>
                        <dd>{this.state.personInfo.height}</dd>
                    </dl>
                </div>
            </div>
        )
    }
}