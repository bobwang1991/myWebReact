import React, { Component } from 'react';

export default class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <div className="center">
                    <div className="qrChat">
                        <img src="http://bob1991-1253674698.cossh.myqcloud.com/personalWeb/qrChat.jpg" alt=""/>
                    </div>
                    <div className="server">服务热线：180-1718-7988（个人）服务时间9:00-19:00</div>
                    <div className="server">Copyright © 2015-2017 Bob 上海Bob出版社</div>
                </div>
            </div>
        )
    }
}