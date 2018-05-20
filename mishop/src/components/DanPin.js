import React, { Component } from 'react';
// import '../assets/css/style.css'
import {NavLink} from 'react-router-dom'
import asyncAction from "../store/asyncAction";
import {connect} from "react-redux";



class DanPin extends Component{
    constructor(props){
        super(props)
        props.get('http://localhost:3000/list',{credentials:'include'});

    }

    render(){
        let {Product} = this.props;

        return(
            <div className="danpin center">
                <div className="biaoti center">小米明星单品</div>
                <div className="main center">
                    <div className="mingxing fl">
                        <div className="sub_mingxing"><NavLink to={{pathname:"/detail/1",query:{data:Product}}}><img src="../assets/image/pinpai1.png" alt=""/></NavLink>
                        </div>
                        <div className="pinpai"><a href="">小米MIX</a></div>
                        <div className="youhui">5月99日-21日享花呗12期分期免息</div>
                        <div className="jiage">3499元起</div>
                    </div>
                    <div className="mingxing fl">
                        <div className="sub_mingxing"><NavLink to='/detail/2?a=1&b=2'><img src="../assets/image/pinpai2.png" alt=""/></NavLink>
                        </div>
                        <div className="pinpai"><a href="">小米5s</a></div>
                        <div className="youhui">5月9日-10日，下单立减200元</div>
                        <div className="jiage">1999元</div>
                    </div>
                    <div className="mingxing fl">
                        <div className="sub_mingxing"><NavLink to='/detail/3?a=1&b=2'><img src="../assets/image/pinpai3.png" alt=""/></NavLink>
                        </div>
                        <div className="pinpai"><a href="">小米手机5 64GB</a></div>
                        <div className="youhui">5月9日-10日，下单立减100元</div>
                        <div className="jiage">1799元</div>
                    </div>
                    <div className="mingxing fl">
                        <div className="sub_mingxing"><NavLink to='/detail/4?a=1&b=2'><img src="../assets/image/pinpai4.png" alt=""/></NavLink>
                        </div>
                        <div className="pinpai"><a href="">小米电视3s 55英寸</a></div>
                        <div className="youhui">5月9日，下单立减200元</div>
                        <div className="jiage">3999元</div>
                    </div>
                    <div className="mingxing fl">
                        <div className="sub_mingxing"><NavLink to='/detail/5?a=1&b=2'><img src="../assets/image/pinpai5.png" alt=""/></NavLink>
                        </div>
                        <div className="pinpai"><a href="">小米笔记本</a></div>
                        <div className="youhui">更轻更薄，像杂志一样随身携带</div>
                        <div className="jiage">3599元起</div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    Product:state.Product
})
const mapDispatchToProps = dispatch => ({
    get:(url,cred)=>{asyncAction(dispatch,url,cred,'SHOW_HOME_DATA')}
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DanPin);
