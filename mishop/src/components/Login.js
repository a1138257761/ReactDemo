import React, {Component} from 'react';
import '../assets/css/login.css'
import {NavLink,Link} from 'react-router-dom'
import FootBar from './FootBar'
import $ from "jquery";
// import {hashHistory} from 'react-router'


let num = false;


class Login extends Component {
    login(){
        fetch('http://localhost:3000/user', {
            method: 'post',
            body:JSON.stringify({username:$('#username').val(),password:$('#password').val(),type:1}),
            // mode: 'cors',
            credentials: 'credentials',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(
            res=>res.json()
        ).then((res)=>{
            console.log(res.error)
            if(!res.error == 0){
                alert("登录失败")
                num = true;
                $('#submit').on('click',(ev)=>{
                    ev.preventDefault();
                })
                // hashHistory.push('/home')
            }else{
                alert('登录成功')
            }
        })
    }

    render() {
        return (
            <div>
                <div className="top center">
                    <div className="logo center">
                        <NavLink to='/home'><img src="../assets/image/mistore_logo.png" alt=""/></NavLink>
                    </div>
                </div>
                <form method="post" action="./login.php" className="form center">
                <div className="form">
                    <div className="login">
                        <div className="login_center">
                            <div className="login_top">
                                <div className="left fl">会员登录</div>
                                <div className="right fr">您还不是我们的会员？<NavLink to='/reg'>立即注册</NavLink>
                                </div>
                                <div className="clear"></div>
                                <div className="xian center"></div>
                            </div>
                            <div className="login_main center">
                                <div className="username">用户名:&nbsp;<input className="shurukuang" id="username" type="text" name="username" placeholder="请输入你的用户名"/>
                                </div>
                                <div className="username">密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;<input id="password" className="shurukuang" type="password" name="password" placeholder="请输入你的密码"/>
                                </div>
                                <div className="username">
                                    <div className="left fl">验证码:&nbsp;<input className="yanzhengma" type="text" name="username" placeholder="请输入验证码"/>
                                    </div>
                                    <div className="right fl"><img src="../assets/image/yanzhengma.jpg" alt=''/></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="login_submit">
                                {
                                    num == false &&
                                    <NavLink to='./home'><input className="submit" id='submit' type="button" name="submit" value="立即登录" onClick={this.login.bind(this)} /></NavLink>
                                }

                            </div>

                        </div>
                    </div>
                </div>
                </form>
                <FootBar/>
            </div>



        )
    }
}

export default Login;