import React, { Component } from 'react';

export default class ExperenceList extends Component {
    render () {
        return (
            <div className="work fl">
                <dl className="clearfix">
                    <dt>教育年限：</dt>
                    <dd>{this.props.data.workTime}</dd>
                </dl>
                <dl className="clearfix">
                    <dt>学校名称：</dt>
                    <dd>{this.props.data.companyName}</dd>
                </dl>
                <dl className="clearfix">
                    <dt>专业描述</dt>
                    <dd>{this.props.data.companyDesc}</dd>
                </dl>
            </div>
        )
    }
}