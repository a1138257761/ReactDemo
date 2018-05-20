import React,{Component} from 'react'
import '../assets/css/style.css'
import {NavLink} from 'react-router-dom'


class NavBar extends Component{
    render(){
        return(
            <header>
                <div className="top center">
                    <div className="left fl">
                        <ul>
                            <li><a href="http://www.mi.com/">小米商城</a></li>
                            <li>|</li>
                            <li><a href="">MIUI</a></li>
                            <li>|</li>
                            <li><a href="">米聊</a></li>
                            <li>|</li>
                            <li><a href="">游戏</a></li>
                            <li>|</li>
                            <li><a href="">多看阅读</a></li>
                            <li>|</li>
                            <li><a href="">云服务</a></li>
                            <li>|</li>
                            <li><a href="">金融</a></li>
                            <li>|</li>
                            <li><a href="">小米商城移动版</a></li>
                            <li>|</li>
                            <li><a href="">问题反馈</a></li>
                            <li>|</li>
                            <li><a href="">Select Region</a></li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                    <div className="right fr">
                        <div className="gouwuche fr"><li><NavLink to='/goodscar'>购物车</NavLink></li></div>
                        <div className="fr">
                            <ul>
                                <li><NavLink to='/login'>登录</NavLink></li>
                                <li>|</li>
                                <li><NavLink to='/reg'>注册</NavLink></li>
                                <li>|</li>
                                <li><a href="">消息通知</a></li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </header>
        )
    }
}

export default NavBar;