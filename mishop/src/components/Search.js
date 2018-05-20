import React,{Component} from 'react'
import '../assets/css/style.css'

class Search extends Component{
    render(){
        return(
            <div className="banner_x center">
                <a href="./index.html" target="_blank">
                    <div className="logo fl"></div>
                </a>
                <a href="">
                    <div className="ad_top fl"></div>
                </a>
                <div className="nav fl">
                    <ul>
                        <li><a href="./liebiao.html" target="_blank">小米手机</a></li>
                        <li><a href="">红米</a></li>
                        <li><a href="">平板·笔记本</a></li>
                        <li><a href="">电视</a></li>
                        <li><a href="">盒子·影音</a></li>
                        <li><a href="">路由器</a></li>
                        <li><a href="">智能硬件</a></li>
                        <li><a href="">服务</a></li>
                        <li><a href="">社区</a></li>
                    </ul>
                </div>
                <div className="search fr">
                    <form action="" method="post">
                        <div className="text fl">
                            <input type="text" className="shuru" placeholder="小米6&nbsp;小米MIX现货"/>
                        </div>
                        <div className="submit fl">
                            <input type="submit" className="sousuo" value="搜索"/>
                        </div>
                        <div className="clear"></div>
                    </form>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default Search;