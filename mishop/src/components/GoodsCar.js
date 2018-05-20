import React, {Component} from 'react';
import '../assets/css/style.css'
import FootBar from './FootBar'


class GoodsCar extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            detail:[],
            num:0
        };

    }

    componentDidMount(){
        this.state.list.map((val,index)=>{
            console.log(1)
            this.state.num+=this.state.detail[val-1].price
            this.setState({num:this.state.num})
            console.log(this.state.num)
        })
    }

    componentDidMount(){
        var str = document.cookie;
        let arr = [];
        var arr1 = str.split("; ");
        var newArr=[]
        for (var i=0; i<arr1.length;i++){
            newArr.push(arr1[i].split("="));
            arr.push(newArr[i][0])
        }
        this.state.list=arr;
        console.log(this.state.list);
        fetch('http://localhost:3000/list').then(
            res => res.json()
        ).then((data)=>{
            this.setState({detail:data})
            console.log(this.state.detail)
        });

    }

    render(){
        return(
            <div>
                <div className="banner_x center">
                    <a href="./index.html" target="_blank">
                        <div className="logo fl"></div>
                    </a>
                    <div className="wdgwc fl ml40">我的购物车</div>
                    <div className="wxts fl ml20">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
                    <div className="dlzc fr">
                        <ul>
                            <li><a href="./login.html" target="_blank">登录</a></li>
                            <li>|</li>
                            <li><a href="./register.html" target="_blank">注册</a></li>
                        </ul>

                    </div>
                    <div className="clear"></div>
                </div>
                <div className="xiantiao"></div>
                <div className="gwcxqbj">
                    <div className="gwcxd center">
                        <div className="top2 center">
                            <div className="sub_top fl">
                                <input type="checkbox" value="quanxuan" className="quanxuan"/>全选
                            </div>
                            <div className="sub_top fl">商品名称</div>
                            <div className="sub_top fl">单价</div>
                            <div className="sub_top fl">数量</div>
                            <div className="sub_top fl">小计</div>
                            <div className="sub_top fr">操作</div>
                            <div className="clear"></div>
                        </div>

                        {
                            this.state.list.map((val,index)=>{
                                return <div className="content2 center" key={index}>
                                    <div className="sub_content fl ">
                                        <input type="checkbox" value="quanxuan" className="quanxuan"/>
                                    </div>
                                    <div className="sub_content fl"><img src={this.state.detail[val-1].src} alt=''/></div>
                                    <div className="sub_content fl ft20">{this.state.detail[val-1].name}</div>
                                    <div className="sub_content fl ">{this.state.detail[val-1].price}元</div>
                                    <div className="sub_content fl">
                                        <input className="shuliang" type="number" defaultValue="1" step="1" min="1"/>
                                    </div>
                                    <div className="sub_content fl">{this.state.detail[val-1].price}元</div>
                                    <div className="sub_content fl"><a href="">×</a></div>
                                    <div className="clear"></div>
                                </div>
                            })
                        }

                    </div>
                    <div className="jiesuandan mt20 center">
                        <div className="jiesuan fr">
                            <div className="jiesuanjiage fl">合计（不含运费）：<span>{this.state.num}.00元</span></div>
                            <div className="jsanniu fr"><input className="jsan" type="submit" name="jiesuan"
                                                               value="去结算"/></div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>

                </div>
                <FootBar/>
            </div>
        )
    }
}

export default GoodsCar;