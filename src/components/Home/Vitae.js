import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Vitae extends Component {
    render () {
        return (
            <div className="personForm">
                <div className="center">
                    <div className="title clearfix">
                        <h2>个人简历</h2>
                        <Link className="more" to="/vitae">显示全部</Link>
                    </div>
                    <div className="personForm-content">
                        <dl>
                            <dt><img src={this.props.data.personImg}/></dt>
                            <dd>
                                <p className="name">姓名：<span>{this.props.data.name}</span></p>
                                <p className="name">性别：<span>{this.props.data.sex}</span></p>
                                <p className="name">出生年月：<span>{this.props.data.birthDay}</span></p>
                                <p className="name">e-mail：<span>{this.props.data.mail}</span></p>
                                <p className="name">自我评价：</p>
                                <p className="name personal">
                                    {
                                        this.props.data1.contentArr.split('<br/>').map(function(value,index){
                                            return <span key={index}>{value}</span>
                                        })
                                    }
                                </p>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
}