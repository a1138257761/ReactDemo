import React, { Component } from 'react';
import NavBar from './NavBar'
import Search from './Search'
import FootBar from './FootBar'
import '../assets/js/cookie'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import asyncAction from '../store/asyncAction';
import DanPin from "./DanPin";

class Detail extends Component{
    constructor(){
        super();
        this.state={
            detail:{}
        }
    }

    componentDidMount(){
        let data = this.props.location.query.data[this.props.match.params.id-1];
        this.setState({detail:data})
    }

    //加入购物车的地方
    lookfor(){
        this.setCookie(this.props.match.params.id,this.props.match.params.id,10)
    }
    setCookie(name,value,t){
        var d = new Date();
        d.setDate(d.getDate()+t);
        document.cookie = name+"="+value+";expires=" + d;
    }




    render(){
       let data = this.props.location.query.data[this.props.match.params.id-1];
        return(
            <React.Fragment>
                <NavBar/>
                <Search/>
                <div className="xiangqing">
                    <div className="neirong w">
                        <div className="xiaomi6 fl">{this.state.detail.name}</div>
                        <nav className="fr">
                            <li><a href="">概述</a></li>
                            <li>|</li>
                            <li><a href="">变焦双摄</a></li>
                            <li>|</li>
                            <li><a href="">设计</a></li>
                            <li>|</li>
                            <li><a href="">参数</a></li>
                            <li>|</li>
                            <li><a href="">F码通道</a></li>
                            <li>|</li>
                            <li><a href="">用户评价</a></li>
                            <div className="clear"></div>
                        </nav>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="jieshao mt20 w">
                    <div className="left fl"><img src={this.state.detail.src} alt=''/></div>
                    <div className="right fr">
                        <div className="h3 ml20 mt20">{this.state.detail.name}</div>
                        <div className="jianjie mr40 ml20 mt10">{this.state.detail.content}</div>
                        <div className="jiage ml20 mt10">{this.state.detail.price}.00元</div>
                        <div className="ft20 ml20 mt20">选择版本</div>
                        <div className="xzbb ml20 mt10">
                            <div className="banben fl">
                                <a>
                                    <span>全网通版 6GB+64GB </span>
                                    <span>2499元</span>
                                </a>
                            </div>
                            <div className="banben fr">
                                <a>
                                    <span>全网通版 6GB+128GB</span>
                                    <span>2899元</span>
                                </a>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="ft20 ml20 mt20">选择颜色</div>
                        <div className="xzbb ml20 mt10">
                            <div className="banben">
                                <a>
                                    <span className="yuandian"></span>
                                    <span className="yanse">亮黑色</span>
                                </a>
                            </div>

                        </div>
                        <div className="xqxq mt20 ml20">
                            <div className="top1 mt10">
                                <div className="left1 fl">{this.state.detail.content}</div>
                                <div className="right1 fr">{this.state.detail.price}.00元</div>
                                <div className="clear"></div>
                            </div>
                            <div className="bot mt20 ft20 ftbc">总计：{this.state.detail.price}元</div>
                        </div>
                        <div className="xiadan ml20 mt20">
                            <input className="jrgwc" type="button" name="jrgwc" value="立即选购"/>
                            <NavLink to='/GoodsCar'><input className="jrgwc" type="button" name="jrgwc" value="加入购物车" onClick={this.lookfor.bind(this)} /></NavLink>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <FootBar/>
            </React.Fragment>
        )
    }
}


export default Detail;
