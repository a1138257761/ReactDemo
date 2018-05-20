import React, { Component } from 'react';
import '../assets/css/pintuer.css'

class Error extends Component{
    render(){
        return(
            <React.Fragment>

                <div className="container" style={{marginTop:"%8"}}>
                    <div className="panel margin-big-top">
                        <div className="text-center">
                            <br/>
                            <h2 className="padding-top"><stong>404错误！抱歉您要找的页面不存在</stong></h2>
                            <div className="">
                                <div className="float-left">
                                    <img src="http://www.pintuer.com/images/ds-1.gif"/>
                                        <div className="alert"> 卧槽！页面不见了！</div>
                                </div>
                                <div className="float-right">
                                    <img src="http://www.pintuer.com/images/ds-2.png" width="260"/>
                                </div>
                            </div>
                            <div className="padding-big">
                                <a href="" className="button bg-yellow">返回首页</a>
                                <a href="" className="button">保证不打死管理员</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Error;