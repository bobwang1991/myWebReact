import React, { Component } from 'react';

export default class List extends Component {
    render () {
        return (
            <dl>
                <dt><img src={this.props.data.img} alt=""/></dt>
                <dd>
                    <div className="title">{this.props.data.title}</div>
                    <div className="authorTime clearfix">
                        <p className="author fl">{this.props.data.author}</p>
                        <p className="time fr">{this.props.data.time}</p>
                    </div>
                    <div className="desc">{this.props.data.desc}</div>
                    <a href={this.props.data.link} className="btn" target="_blank">点击进入</a>
                </dd>
            </dl>
        )
    }
}