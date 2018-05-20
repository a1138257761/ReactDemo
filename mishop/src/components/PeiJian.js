import React, { Component } from 'react';
import '../assets/css/style.css';
import {NavLink} from 'react-router-dom'

class PeiJian extends Component{
    render(){
        return(
            <div className="peijian w">
                <div className="biaoti center">配件</div>
                <div className="main center">
                    <div className="content">
                        <div className="remen fl"><img src="../assets/image/peijian1.jpg" alt=''/></div>
                        <div className="remen fl">
                            <div className="xinpin"><span>新品</span></div>
                            <div className="tu"><NavLink to='/detail/6?a=1&b=2'><img src="../assets/image/peijian2.jpg" alt=''/></NavLink></div>
                            <div className="miaoshu"><a href="">小米6 硅胶保护套</a></div>
                            <div className="jiage">49元</div>
                            <div className="pingjia">372人评价</div>
                            <div className="piao">
                                <a href="">
                                    <span>发货速度很快！很配小米6！</span>
                                    <span>来至于mi狼牙的评价</span>
                                </a>
                            </div>
                        </div>
                        <div className="remen fl">
                            <div className="xinpin"><span style={{background:"#fff"}}></span></div>
                            <div className="tu"><NavLink to='/detail/7?a=1&b=2'><img src="../assets/image/peijian3.jpg" alt=''/></NavLink></div>
                            <div className="miaoshu"><a href="">小米手机4c 小米4c 智能</a></div>
                            <div className="jiage">29元</div>
                            <div className="pingjia">372人评价</div>
                        </div>
                        <div className="remen fl">
                            <div className="xinpin"><span style={{background:"#f00"}}>享6折</span></div>
                            <div className="tu"><NavLink to='/detail/8?a=1&b=2'><img src="../assets/image/peijian4.jpg" alt=''/></NavLink></div>
                            <div className="miaoshu"><a href="">红米NOTE 4X 红米note4X</a></div>
                            <div className="jiage">19元</div>
                            <div className="pingjia">372人评价</div>
                            <div className="piao">
                                <a href="">
                                    <span>发货速度很快！很配小米6！</span>
                                    <span>来至于mi狼牙的评价</span>
                                </a>
                            </div>
                        </div>
                        <div className="remen fl">
                            <div className="xinpin"><span style={{background:"#fff"}}></span></div>
                            <div className="tu"><NavLink to='/detail/9?a=1&b=2'><img src="../assets/image/peijian5.jpg" alt=''/></NavLink></div>
                            <div className="miaoshu"><a href="">小米支架式自拍杆</a></div>
                            <div className="jiage">89元</div>
                            <div className="pingjia">372人评价</div>
                            <div className="piao">
                                <a href="">
                                    <span>发货速度很快！很配小米6！</span>
                                    <span>来至于mi狼牙的评价</span>
                                </a>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="content">
                        <div className="remen fl"><a href=""><img src="../assets/image/peijian6.png" alt=''/></a>
                        </div>
                        <div className="remen fl">
                            <div className="xinpin"><span style={{background:"#fff"}}></span></div>
                            <div className="tu"><NavLink to='/detail/10?a=1&b=2'><img src="../assets/image/peijian7.jpg" alt=''/></NavLink></div>
                            <div className="miaoshu"><a href="">小米指环支架</a></div>
                            <div className="jiage">19元</div>
                            <div className="pingjia">372人评价</div>
                            <div className="piao">
                                <a href="">
                                    <span>发货速度很快！很配小米6！</span>
                                    <span>来至于mi狼牙的评价</span>
                                </a>
                            </div>
                        </div>
                        <div className="remen fl">
                            <div className="xinpin"><span style={{background:"#fff"}}></span></div>
                            <div className="tu"><NavLink to='/detail/11?a=1&b=2'><img src="../assets/image/peijian8.jpg" alt=''/></NavLink></div>
                            <div className="miaoshu"><a href="">米家随身风扇</a></div>
                            <div className="jiage">19.9元</div>
                            <div className="pingjia">372人评价</div>
                        </div>
                        <div className="remen fl">
                            <div className="xinpin"><span style={{background:"#fff"}}></span></div>
                            <div className="tu"><NavLink to='/detail/12?a=1&b=2'><img src="../assets/image/peijian9.jpg" alt=''/></NavLink></div>
                            <div className="miaoshu"><a href="">红米4X 高透软胶保护套</a></div>
                            <div className="jiage">59元</div>
                            <div className="pingjia">775人评价</div>
                        </div>
                        <div className="remenlast fr">
                            <div className="hongmi"><a href=""><img src="../assets/image/hongmin4.png" alt=""/></a>
                            </div>
                            <div className="liulangengduo"><a href=""><img src="../assets/image/liulangengduo.png" alt=""/></a></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PeiJian;