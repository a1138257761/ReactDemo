import React,{Component} from "react"
import '../assets/css/login.css'
import FootBar from './FootBar'
import $ from 'jquery'

class Reg extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };

    }

    // add(){}
    add=()=>{
        // this.setState({username:$('#username').val()})
        // this.setState({password:$('#password').val()})
        // console.log($('#username').val());
        fetch('http://localhost:3000/user', {
            method: 'post',
            body:JSON.stringify({username:$('#username').val(),password:$('#password').val(),type:0}),
            // mode: 'cors',
            credentials: 'credentials',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(
            res=>res.json()
        ).then(
            res=>console.log(res)
        )
    }

    render(){
        return(
            <div>

                    <div className="regist">
                        <div className="regist_center">
                            <div className="regist_top">
                                <div className="left fl">会员注册</div>
                                <div className="right fr"><a href="./index.html" target="_self">小米商城</a></div>
                                <div className="clear"></div>
                                <div className="xian center"></div>
                            </div>
                            <div className="regist_main center">
                                <div className="username">用&nbsp;&nbsp;户&nbsp;&nbsp;名:&nbsp;&nbsp;
                                    <input id='username' onChange={this.change} className="shurukuang" type="text" name="username" placeholder="请输入你的用户名" defaultValue={this.state.username}/><span>请不要输入汉字</span></div>
                                <div className="username">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;&nbsp;
                                    <input className="shurukuang" id='password' type="password" name="password" defaultValue={this.state.password} placeholder="请输入你的密码"/><span>请输入6位以上字符</span></div>

                                <div className="username">确认密码:&nbsp;&nbsp;<input className="shurukuang" type="password" name="repassword" placeholder="请确认你的密码"/><span>两次密码要输入一致哦</span>
                                </div>
                                <div className="username">手&nbsp;&nbsp;机&nbsp;&nbsp;号:&nbsp;&nbsp;<input
                                    className="shurukuang" type="text" name="tel"
                                    placeholder="请填写正确的手机号"/><span>填写下手机号吧，方便我们联系您！</span></div>
                                <div className="username">
                                    <div className="left fl">验&nbsp;&nbsp;证&nbsp;&nbsp;码:&nbsp;&nbsp;<input
                                        className="yanzhengma" type="text" name="username" placeholder="请输入验证码"/></div>
                                    <div className="right fl"><img src="../assets/image/yanzhengma.jpg" alt=''/></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="regist_submit">
                                <input className="submit" type="submit" name="submit" value="立即注册" onClick={this.add.bind(this)}/>
                            </div>

                        </div>
                    </div>

                <FootBar/>
            </div>

        )
    }
}

export default Reg;