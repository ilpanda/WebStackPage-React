import * as React from "react";
import $ from 'jquery';
import lozad from 'lozad'

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(document).ready(function () {
            //img lazy loaded
            const observer = lozad();
            observer.observe();

            $(document).on('click', '.has-sub', function () {
                var _this = $(this)
                if (!$(this).hasClass('expanded')) {
                    setTimeout(function () {
                        _this.find('ul').attr("style", "")
                    }, 300);

                } else {
                    $('.has-sub ul').each(function (id, ele) {
                        var _that = $(this)
                        if (_this.find('ul')[0] != ele) {
                            setTimeout(function () {
                                _that.attr("style", "")
                            }, 300);
                        }
                    })
                }
            })
            $('.user-info-menu .hidden-sm').click(function () {
                if ($('.sidebar-menu').hasClass('collapsed')) {
                    $('.has-sub.expanded > ul').attr("style", "")
                } else {
                    $('.has-sub.expanded > ul').show()
                }
            })
            $("#main-menu li ul li").click(function () {
                $(this).siblings('li').removeClass('active'); // 删除其他兄弟元素的样式
                $(this).addClass('active'); // 添加当前元素的样式
            });
            $("a.smooth").click(function (ev) {
                ev.preventDefault();

                // document.public_vars.$mainMenu.add(document.public_vars.$sidebarProfile).toggleClass('mobile-is-visible');
                // ps_destroy();
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 30
                }, {
                    duration: 500,
                    easing: "swing"
                });
            });
            return false;
        })

        var href = "";
        var pos = 0;
        $("a.smooth").click(function(e) {
            $("#main-menu li").each(function() {
                $(this).removeClass("active");
            });
            $(this).parent("li").addClass("active");
            e.preventDefault();
            href = $(this).attr("href");
            pos = $(href).position().top - 30;
        });
    }

    render() {
        return (<div className="page-container">
            <div className="sidebar-menu toggle-others fixed">
                <div className="sidebar-menu-inner">
                    <header className="logo-env">

                        <div className="logo">
                            <a href="index.html" className="logo-expanded">
                                <img src="/assets/images/logo@2x.png" width="100%" alt=""/>
                            </a>
                            <a href="index.html" className="logo-collapsed">
                                <img src="/assets/images/logo-collapsed@2x.png" width="40" alt=""/>
                            </a>
                        </div>
                        <div className="mobile-menu-toggle visible-xs">
                            <a href="#" data-toggle="user-info-menu">
                                <i className="linecons-cog"></i>
                            </a>
                            <a href="#" data-toggle="mobile-menu">
                                <i className="fa-bars"></i>
                            </a>
                        </div>
                    </header>
                    <ul id="main-menu" className="main-menu">
                        <li>
                            <a href="#常用推荐" className="smooth">
                                <i className="linecons-star"></i>
                                <span className="title">常用推荐</span>
                            </a>
                        </li>
                        <li>
                            <a href="#社区资讯" className="smooth">
                                <i className="linecons-doc"></i>
                                <span className="title">社区资讯</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="linecons-lightbulb"></i>
                                <span className="title">灵感采集</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="#发现产品" className="smooth">
                                        <span className="title">发现产品</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#界面灵感" className="smooth">
                                        <span className="title">界面灵感</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#网页灵感" className="smooth">
                                        <span className="title">网页灵感</span>
                                        <span className="label label-pink pull-right hidden-collapsed">Hot</span>
                                    </a>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a>
                                <i className="linecons-thumbs-up"></i>
                                <span className="title">素材资源</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="#图标素材" className="smooth">
                                        <span className="title">图标素材</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#LOGO设计" className="smooth">
                                        <span className="title">LOGO设计</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#平面素材" className="smooth">
                                        <span className="title">平面素材</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#UI资源" className="smooth">
                                        <span className="title">UI资源</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#Sketch资源" className="smooth">
                                        <span className="title">Sketch资源</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#字体资源" className="smooth">
                                        <span className="title">字体资源</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#Mockup" className="smooth">
                                        <span className="title">Mockup</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#摄影图库" className="smooth">
                                        <span className="title">摄影图库</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#PPT资源" className="smooth">
                                        <span className="title">PPT资源</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>
                                <i className="linecons-diamond"></i>
                                <span className="title">常用工具</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="#图形创意" className="smooth">
                                        <span className="title">图形创意</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#界面设计" className="smooth">
                                        <span className="title">界面设计</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#交互动效" className="smooth">
                                        <span className="title">交互动效</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#在线配色" className="smooth">
                                        <span className="title">在线配色</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#在线工具" className="smooth">
                                        <span className="title">在线工具</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#Chrome插件" className="smooth">
                                        <span className="title">Chrome插件</span>
                                    </a>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a>
                                <i className="linecons-pencil"></i>
                                <span className="title">学习教程</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="#设计规范" className="smooth">
                                        <span className="title">设计规范</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#视频教程" className="smooth">
                                        <span className="title">视频教程</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#设计文章" className="smooth">
                                        <span className="title">设计文章</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#设计电台" className="smooth">
                                        <span className="title">设计电台</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#交互设计" className="smooth">
                                        <span className="title">交互设计</span>
                                        <span className="label label-pink pull-right hidden-collapsed">Hot</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#UED团队" className="smooth">
                                <i className="linecons-user"></i>
                                <span className="title">UED团队</span>
                            </a>
                        </li>
                        <li>
                            <a href="about.html">
                                <i className="linecons-heart"></i>
                                <span className="tooltip-blue">关于本站</span>
                                <span className="label label-Primary pull-right hidden-collapsed">♥︎</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="main-content">
                <nav className="navbar user-info-navbar" role="navigation">


                    <ul className="user-info-menu left-links list-inline list-unstyled">
                        <li className="hidden-sm hidden-xs">
                            <a href="#" data-toggle="sidebar">
                                <i className="fa-bars"></i>
                            </a>
                        </li>
                        <li className="dropdown hover-line language-switcher">
                            <a href="../cn/index.html" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="/assets/images/flags/flag-cn.png" alt="flag-cn"/> Chinese
                            </a>
                            <ul className="dropdown-menu languages">
                                <li>
                                    <a href="../en/index.html">
                                        <img src="/assets/images/flags/flag-us.png" alt="flag-us"/> English
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="../cn/index.html">
                                        <img src="/assets/images/flags/flag-cn.png" alt="flag-cn"/> Chinese
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="user-info-menu right-links list-inline list-unstyled">
                        <li className="hidden-sm hidden-xs">
                            <a href="https://github.com/WebStackPage/WebStackPage.github.io" target="_blank">
                                <i className="fa-github"></i> GitHub
                            </a>
                        </li>
                    </ul>


                </nav>

                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="常用推荐"></i>常用推荐
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://dribbble.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://dribbble.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/dribbble.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Dribbble</strong>
                                    </a>
                                    <p className="overflowClip_2">全球UI设计师作品分享平台。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://behance.net/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://behance.net/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/behance.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Behance</strong>
                                    </a>
                                    <p className="overflowClip_2">Adobe旗下的设计师交流平台，来自世界各地的设计师在这里分享自己的作品。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.ui.cn/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.ui.cn/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uicn.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>UI中国</strong>
                                    </a>
                                    <p className="overflowClip_2">图形交互与界面设计交流、作品展示、学习平台。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.zcool.com.cn/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.zcool.com.cn/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/zcool.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>站酷</strong>
                                    </a>
                                    <p className="overflowClip_2">中国人气设计师互动平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.pinterest.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.pinterest.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/pinterest.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <span className="label label-info" data-toggle="tooltip" data-placement="left" title=""
                                      data-original-title="Hello I am a Tooltip"></span>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Pinterest</strong>
                                    </a>
                                    <p className="overflowClip_2">全球美图收藏采集站</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://huaban.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://huaban.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/huaban.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <span className="label label-info" data-toggle="tooltip" data-placement="left" title=""
                                      data-original-title="Hello I am a Tooltip"></span>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>花瓣</strong>
                                    </a>
                                    <p className="overflowClip_2">收集灵感,保存有用的素材</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://medium.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://medium.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/medium.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <span className="label label-info" data-toggle="tooltip" data-placement="left" title=""
                                      data-original-title="Hello I am a Tooltip"></span>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Medium</strong>
                                    </a>
                                    <p className="overflowClip_2">高质量设计文章</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.uisdc.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.uisdc.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uisdc.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <span className="label label-info" data-toggle="tooltip" data-placement="left" title=""
                                      data-original-title="Hello I am a Tooltip"></span>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>优设</strong>
                                    </a>
                                    <p className="overflowClip_2">设计师交流学习平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.producthunt.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.producthunt.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/producthunt.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <span className="label label-info" data-toggle="tooltip" data-placement="left" title=""
                                      data-original-title="Hello I am a Tooltip"></span>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Producthunt</strong>
                                    </a>
                                    <p className="overflowClip_2">发现新鲜有趣的产品</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.youtube.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.youtube.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/youtube.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <span className="label label-info" data-toggle="tooltip" data-placement="left" title=""
                                      data-original-title="Hello I am a Tooltip"></span>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Youtube</strong>
                                    </a>
                                    <p className="overflowClip_2">全球最大的学习分享平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.google.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.google.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/google.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <span className="label label-info" data-toggle="tooltip" data-placement="left" title=""
                                      data-original-title="Hello I am a Tooltip"></span>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Google</strong>
                                    </a>
                                    <p className="overflowClip_2">全球最大的UI学习分享平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="界面灵感"></i>推荐</h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.aliyun.com/minisite/goods?userCode=xtct5egx&share_source=copy_link', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://www.aliyun.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/aliyun.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>阿里云</strong>
                                    </a>
                                    <p className="overflowClip_2">点击领取2000元限量云产品优惠券</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.gulusucai.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.gulusucai.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/gulusucai.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>咕噜素材</strong>
                                    </a>
                                    <p className="overflowClip_2">质量很高的设计素材网站（推荐）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://xiyou4you.us/r/?s=13731627', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://xiyou4you.us">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/xiyou.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>西游-科学上网</strong>
                                    </a>
                                    <p className="overflowClip_2">优秀的科学上网（略贵，但是贼稳，点击注册领取优惠券）</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.shejizhoukan.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.shejizhoukan.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/shejizhoukan.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>设计周刊</strong>
                                    </a>
                                    <p className="overflowClip_2">最新设计资讯（每天更新）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.ziticangku.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.ziticangku.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/ziticangku.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>字体仓库</strong>
                                    </a>
                                    <p className="overflowClip_2">最全的免费商用字体库</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="社区资讯"></i>社区资讯
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.leiphone.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.leiphone.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/leiphone.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>雷锋网</strong>
                                    </a>
                                    <p className="overflowClip_2">人工智能和智能硬件领域的互联网科技媒体</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://36kr.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://36kr.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/36kr.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>36kr</strong>
                                    </a>
                                    <p className="overflowClip_2">创业资讯、科技新闻</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.digitaling.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.digitaling.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/digitaling.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>数英网</strong>
                                    </a>
                                    <p className="overflowClip_2">数字媒体及职业招聘网站</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.lieyunwang.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.lieyunwang.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/lieyunwang.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>猎云网</strong>
                                    </a>
                                    <p className="overflowClip_2">互联网创业项目推荐和创业创新资讯</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.woshipm.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.woshipm.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/woshipm.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>人人都是产品经理</strong>
                                    </a>
                                    <p className="overflowClip_2">产品经理、产品爱好者学习交流平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.zaodula.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.zaodula.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/zaodula.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>互联网早读课</strong>
                                    </a>
                                    <p className="overflowClip_2">互联网行业深度阅读与学习平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.chanpin100.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.chanpin100.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/chanpin100.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>产品壹佰</strong>
                                    </a>
                                    <p className="overflowClip_2">为产品经理爱好者提供最优质的产品资讯、原创内容和相关视频课程</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.pmcaff.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.pmcaff.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/pmcaff.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>PMCAFF</strong>
                                    </a>
                                    <p className="overflowClip_2">中国第一产品经理人气组织，专注于研究互联网产品</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.iyunying.org/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.iyunying.org/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/iyunying.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>爱运营</strong>
                                    </a>
                                    <p className="overflowClip_2">网站运营人员学习交流，专注于网站产品运营管理、淘宝运营。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.niaogebiji.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.niaogebiji.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/niaogebiji.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>鸟哥笔记</strong>
                                    </a>
                                    <p className="overflowClip_2">移动互联网第一干货平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.gtn9.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.gtn9.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/gtn9.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>古田路9号</strong>
                                    </a>
                                    <p className="overflowClip_2">国内专业品牌创意平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.uigreat.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.uigreat.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uigreat.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>优阁网</strong>
                                    </a>
                                    <p className="overflowClip_2">UI设计师学习交流社区</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="发现产品"></i>发现产品
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.producthunt.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.producthunt.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/producthunt.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <span className="label label-info" data-toggle="tooltip" data-placement="left" title=""
                                      data-original-title="Hello I am a Tooltip"></span>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Producthunt</strong>
                                    </a>
                                    <p className="overflowClip_2">发现新鲜有趣的产品</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://next.36kr.com/posts', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://next.36kr.com/posts">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/NEXT.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>NEXT</strong>
                                    </a>
                                    <p className="overflowClip_2">不错过任何一个新产品</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://sspai.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://sspai.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/sspai.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>少数派</strong>
                                    </a>
                                    <p className="overflowClip_2">高品质数字消费指南</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://liqi.io/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://liqi.io/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/liqi.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>利器</strong>
                                    </a>
                                    <p className="overflowClip_2">创造者和他们的工具</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://today.itjuzi.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://today.itjuzi.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/today.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Today</strong>
                                    </a>
                                    <p className="overflowClip_2">为身边的新产品喝彩</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://faxian.appinn.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://faxian.appinn.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/appinn.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>小众软件</strong>
                                    </a>
                                    <p className="overflowClip_2">在这里发现更多有趣的应用</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="界面灵感"></i>界面灵感
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.pttrns.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.pttrns.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Pttrns.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Pttrns</strong>
                                    </a>
                                    <p className="overflowClip_2">Check out the finest collection of design patterns,
                                        resources, mobile apps and inspiration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://collectui.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://collectui.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/CollectUI.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Collect UI</strong>
                                    </a>
                                    <p className="overflowClip_2">Daily inspiration collected from daily ui archive and
                                        beyond.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://ui.uigreat.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://ui.uigreat.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uiuigreat.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>UI uigreat</strong>
                                    </a>
                                    <p className="overflowClip_2">APP界面截图参考</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://androidniceties.tumblr.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://androidniceties.tumblr.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/AndroidNiceties.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Android Niceties</strong>
                                    </a>
                                    <p className="overflowClip_2">A collection of screenshots encompassing some of the
                                        most beautiful looking Android apps.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="网页灵感"></i>网页灵感
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.awwwards.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.awwwards.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/awwwards.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Awwwards</strong>
                                    </a>
                                    <p className="overflowClip_2">Awwwards are the Website Awards that recognize and
                                        promote the talent and effort of the best developers, designers and web agencies
                                        in the world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.cssdesignawards.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.cssdesignawards.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/CSSDesignAwards.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>CSS Design Awards</strong>
                                    </a>
                                    <p className="overflowClip_2">Website Awards & Inspiration - CSS Gallery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://thefwa.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://thefwa.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/fwa.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>The FWA</strong>
                                    </a>
                                    <p className="overflowClip_2">FWA - showcasing innovation every day since 2000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.ecommercefolio.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.ecommercefolio.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Ecommercefolio.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Ecommercefolio</strong>
                                    </a>
                                    <p className="overflowClip_2">Only the Best Ecommerce Design Inspiration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.lapa.ninja/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.lapa.ninja/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Lapa.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Lapa</strong>
                                    </a>
                                    <p className="overflowClip_2">The best landing page design inspiration from around
                                        the web.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://reeoo.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://reeoo.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/reeoo.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Reeoo</strong>
                                    </a>
                                    <p className="overflowClip_2">web design inspiration and website gallery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://designmunk.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://designmunk.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/designmunk.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Designmunk</strong>
                                    </a>
                                    <p className="overflowClip_2">Best Homepage Design Inspiration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://bestwebsite.gallery/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://bestwebsite.gallery/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/BWG.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Best Websites Gallery</strong>
                                    </a>
                                    <p className="overflowClip_2">Website Showcase Inspiration | Best Websites
                                        Gallery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.pages.xyz/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.pages.xyz/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/pages.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Pages</strong>
                                    </a>
                                    <p className="overflowClip_2">Curated directory of the best Pages</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://sitesee.co/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://sitesee.co/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/SiteSee.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>SiteSee</strong>
                                    </a>
                                    <p className="overflowClip_2">SiteSee is a curated gallery of beautiful, modern
                                        websites collections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.siteinspire.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.siteinspire.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/siteInspire.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Site Inspire</strong>
                                    </a>
                                    <p className="overflowClip_2">A CSS gallery and showcase of the best web design
                                        inspiration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://web.uedna.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://web.uedna.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/WebInspiration.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>WebInspiration</strong>
                                    </a>
                                    <p className="overflowClip_2">网页设计欣赏,全球顶级网页设计</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://navnav.co/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://navnav.co/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/navnav.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>navnav</strong>
                                    </a>
                                    <p className="overflowClip_2">A ton of CSS, jQuery, and JavaScript responsive
                                        navigation examples, demos, and tutorials from all over the web.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="图标素材"></i>图标素材
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.iconfinder.com', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.iconfinder.com">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Iconfinder.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Iconfinder</strong>
                                    </a>
                                    <p className="overflowClip_2">2,100,000+ free and premium vector icons.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.iconfont.cn/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.iconfont.cn/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/iconfont.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>iconfont</strong>
                                    </a>
                                    <p className="overflowClip_2">阿里巴巴矢量图标库</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://iconmonstr.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://iconmonstr.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/iconmonstr.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>iconmonstr</strong>
                                    </a>
                                    <p className="overflowClip_2">Free simple icons for your next project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.iconarchive.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.iconarchive.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/iconarchive.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Icon Archive</strong>
                                    </a>
                                    <p className="overflowClip_2">Search 590,912 free icons</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://findicons.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://findicons.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/FindIcons.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>FindIcons</strong>
                                    </a>
                                    <p className="overflowClip_2">Search through 300,000 free icons</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://icomoon.io/app/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://icomoon.io/app/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/IcoMoonApp.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>IcoMoonApp</strong>
                                    </a>
                                    <p className="overflowClip_2">Icon Font, SVG, PDF &amp; PNG Generator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.easyicon.net/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.easyicon.net/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/easyicon.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>easyicon</strong>
                                    </a>
                                    <p className="overflowClip_2">PNG、ICO、ICNS格式图标搜索、图标下载服务</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.flaticon.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.flaticon.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/flaticon.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>flaticon</strong>
                                    </a>
                                    <p className="overflowClip_2">634,000+ Free vector icons in SVG, PSD, PNG, EPS
                                        format or as ICON FONT.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://ui-cloud.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://ui-cloud.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/UICloud.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>UICloud</strong>
                                    </a>
                                    <p className="overflowClip_2">The largest user interface design database in the
                                        world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://material.io/icons/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://material.io/icons/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Materialicons.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Material icons</strong>
                                    </a>
                                    <p className="overflowClip_2">Access over 900 material system icons, available in a
                                        variety of sizes and densities, and as a web font.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('fontawesomeicon', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="fontawesomeicon">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/fontawesomeicon.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Font Awesome Icon</strong>
                                    </a>
                                    <p className="overflowClip_2">The complete set of 675 icons in Font Awesome</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://ionicons.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://ionicons.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/ionicons.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>ion icons</strong>
                                    </a>
                                    <p className="overflowClip_2">The premium icon font for Ionic Framework.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://simplelineicons.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://simplelineicons.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/simplelineicons.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Simpleline Icons</strong>
                                    </a>
                                    <p className="overflowClip_2">Simple line Icons pack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="LOGO设计"></i>LOGO设计
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.iconsfeed.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.iconsfeed.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/iconsfeed.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Iconsfeed</strong>
                                    </a>
                                    <p className="overflowClip_2">iOS icons gallery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://iosicongallery.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://iosicongallery.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/iosicongallery.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>iOS Icon Gallery</strong>
                                    </a>
                                    <p className="overflowClip_2">Showcasing beautiful icon designs from the iOS App
                                        Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://worldvectorlogo.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://worldvectorlogo.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/worldvectorlogo.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>World Vector Logo</strong>
                                    </a>
                                    <p className="overflowClip_2">Brand logos free to download</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://instantlogosearch.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://instantlogosearch.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/InstantLogoSearch.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Instant Logo Search</strong>
                                    </a>
                                    <p className="overflowClip_2">Search & download thousands of logos instantly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="平面素材"></i>平面素材
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.gulusucai.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.gulusucai.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/gulusucai.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>咕噜素材</strong>
                                    </a>
                                    <p className="overflowClip_2">质量很高的设计素材网站（良心推荐）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://wallhalla.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://wallhalla.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/wallhalla.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>wallhalla</strong>
                                    </a>
                                    <p className="overflowClip_2">Find awesome high quality wallpapers for desktop and
                                        mobile in one place.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://365psd.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://365psd.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/365PSD.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>365PSD</strong>
                                    </a>
                                    <p className="overflowClip_2">Free PSD &amp; Graphics, Illustrations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://medialoot.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://medialoot.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Medialoot.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Medialoot</strong>
                                    </a>
                                    <p className="overflowClip_2">Free &amp; Premium Design
                                        Resources &mdash; Medialoot</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.58pic.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.58pic.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/qiantu.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>千图网</strong>
                                    </a>
                                    <p className="overflowClip_2">专注免费设计素材下载的网站</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://588ku.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://588ku.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/qianku.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>千库网</strong>
                                    </a>
                                    <p className="overflowClip_2">免费png图片背景素材下载</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.ooopic.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.ooopic.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/wotu.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>我图网</strong>
                                    </a>
                                    <p className="overflowClip_2">我图网,提供图片素材及模板下载,专注正版设计作品交易</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://90sheji.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://90sheji.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/90sheji.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>90设计</strong>
                                    </a>
                                    <p className="overflowClip_2">电商设计（淘宝美工）千图免费淘宝素材库</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.nipic.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.nipic.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/nipic.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>昵图网</strong>
                                    </a>
                                    <p className="overflowClip_2">原创素材共享平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.lanrentuku.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.lanrentuku.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/lanrentuku.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>懒人图库</strong>
                                    </a>
                                    <p className="overflowClip_2">懒人图库专注于提供网页素材下载</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://so.ui001.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://so.ui001.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/sousucai.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>素材搜索</strong>
                                    </a>
                                    <p className="overflowClip_2">设计素材搜索聚合</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://psefan.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://psefan.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/psefan.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>PS饭团网</strong>
                                    </a>
                                    <p className="overflowClip_2">不一样的设计素材库！让自己的设计与众不同！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.sccnn.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.sccnn.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/sccnn.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>素材中国</strong>
                                    </a>
                                    <p className="overflowClip_2">免费素材共享平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.freepik.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.freepik.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/freepik.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>freepik</strong>
                                    </a>
                                    <p className="overflowClip_2">More than a million free vectors, PSD, photos and free
                                        icons.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="UI资源"></i>UI资源
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.gulusucai.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.gulusucai.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/gulusucai.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>咕噜素材</strong>
                                    </a>
                                    <p className="overflowClip_2">质量很高的设计素材网站（良心推荐）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://freebiesbug.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://freebiesbug.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/freebiesbug.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Freebiesbug</strong>
                                    </a>
                                    <p className="overflowClip_2">Hand-picked resources for web designer and developers,
                                        constantly updated.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://freebiesupply.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://freebiesupply.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/freebiesupply.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Freebie Supply</strong>
                                    </a>
                                    <p className="overflowClip_2">Free Resources For Designers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.yrucd.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.yrucd.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/yrucd.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>云瑞</strong>
                                    </a>
                                    <p className="overflowClip_2">优秀设计资源的分享网站</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://xituqu.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://xituqu.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/xituqu.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>稀土区</strong>
                                    </a>
                                    <p className="overflowClip_2">优质设计开发资源分享</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://ui8.net/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://ui8.net/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/ui8.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>ui8</strong>
                                    </a>
                                    <p className="overflowClip_2">UI Kits, Wireframe Kits, Templates, Icons and More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.uplabs.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.uplabs.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uplabs.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>uplabs</strong>
                                    </a>
                                    <p className="overflowClip_2">Daily resources for product designers & developers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.uikit.me/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.uikit.me/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uikitme.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>UIkit.me</strong>
                                    </a>
                                    <p className="overflowClip_2">最便捷新鲜的uikit资源下载网站</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.fribbble.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.fribbble.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Fribbble.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Fribbble</strong>
                                    </a>
                                    <p className="overflowClip_2">Free PSD files and other free design resources by
                                        Dribbblers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://principlerepo.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://principlerepo.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/PrincipleRepo.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>PrincipleRepo</strong>
                                    </a>
                                    <p className="overflowClip_2">Free, High Quality Principle Resources</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://designmodo.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://designmodo.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Designmodo.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Designmodo</strong>
                                    </a>
                                    <p className="overflowClip_2">Web Design Blog and Shop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="Sketch资源"></i>Sketch资源
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://sketchapp.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://sketchapp.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Sketch.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Sketch</strong>
                                    </a>
                                    <p className="overflowClip_2">The digital design toolkit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://utom.design/measure/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://utom.design/measure/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/SketchMeasure.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Sketch Measure</strong>
                                    </a>
                                    <p className="overflowClip_2">Friendly user interface offers you a more intuitive
                                        way of making marks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.sketchappsources.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.sketchappsources.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/sketchappsources.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Sketch App Sources</strong>
                                    </a>
                                    <p className="overflowClip_2">Free design resources and plugins - Icons, UI Kits,
                                        Wireframes, iOS, Android Templates for Sketch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.sketch.im/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.sketch.im/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/sketchIm.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Sketch.im</strong>
                                    </a>
                                    <p className="overflowClip_2">Sketch 相关资源汇聚</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://sketchhunt.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://sketchhunt.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/sketchhunt.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Sketch Hunt</strong>
                                    </a>
                                    <p className="overflowClip_2">Sketch Hunt is an independent blog sharing gems in
                                        learning, plugins &amp; design tools for fans of Sketch app.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.sketchcn.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.sketchcn.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/sketchcn.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Sketch中文网</strong>
                                    </a>
                                    <p className="overflowClip_2">分享最新的Sketch中文手册</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://awesome-sket.ch/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://awesome-sket.ch/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/AwesomeSketchPlugins.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Awesome Sketch Plugins</strong>
                                    </a>
                                    <p className="overflowClip_2">A collection of really useful Sketch plugins.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.sketchcasts.net/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.sketchcasts.net/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/sketchcasts.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Sketchcasts</strong>
                                    </a>
                                    <p className="overflowClip_2">Learn Sketch Train your design skills with a weekly
                                        video tutorial</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="字体资源"></i>字体资源
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.ziticangku.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.ziticangku.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/ziticangku.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>字体仓库</strong>
                                    </a>
                                    <p className="overflowClip_2">最全的免费商用字体库</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://fonts.google.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://fonts.google.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/googlefont.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Google Font</strong>
                                    </a>
                                    <p className="overflowClip_2">Making the web more beautiful, fast, and open through
                                        great typography</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://typekit.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://typekit.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/typekit.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Typekit</strong>
                                    </a>
                                    <p className="overflowClip_2">Quality fonts from the world’s best foundries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.foundertype.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.foundertype.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Fondertype.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>方正字库</strong>
                                    </a>
                                    <p className="overflowClip_2">方正字库官方网站</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://ziticq.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://ziticq.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/ziticq.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>字体传奇网</strong>
                                    </a>
                                    <p className="overflowClip_2">中国首个字体品牌设计师交流网</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.fontsquirrel.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.fontsquirrel.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/fontsquirrel.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Fontsquirrel</strong>
                                    </a>
                                    <p className="overflowClip_2">FREE fonts for graphic designers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.urbanfonts.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.urbanfonts.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/UrbanFonts.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Urban Fonts</strong>
                                    </a>
                                    <p className="overflowClip_2">Download Free Fonts and Free Dingbats.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.losttype.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.losttype.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/losttype.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Lost Type</strong>
                                    </a>
                                    <p className="overflowClip_2">Lost Type is a Collaborative Digital Type Foundry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://fonts2u.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://fonts2u.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/fonts2u.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>FONTS2U</strong>
                                    </a>
                                    <p className="overflowClip_2">Download free fonts for Windows and Macintosh.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.fontex.org/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.fontex.org/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/fontex.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Fontex</strong>
                                    </a>
                                    <p className="overflowClip_2">Free Fonts to Download + Premium Typefaces</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://fontm.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://fontm.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/FontM.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>FontM</strong>
                                    </a>
                                    <p className="overflowClip_2">Free Fonts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.myfonts.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.myfonts.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/MyFonts.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>My Fonts</strong>
                                    </a>
                                    <p className="overflowClip_2">Fonts for Print, Products & Screens</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.dafont.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.dafont.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/dafont.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Da Font</strong>
                                    </a>
                                    <p className="overflowClip_2">Archive of freely downloadable fonts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.onlinewebfonts.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.onlinewebfonts.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/OnlineWebFonts.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>OnlineWebFonts</strong>
                                    </a>
                                    <p className="overflowClip_2">WEB Free Fonts for Windows and Mac / Font free
                                        Download</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.abstractfonts.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.abstractfonts.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/abstractfonts.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Abstract Fonts</strong>
                                    </a>
                                    <p className="overflowClip_2">Abstract Fonts (13,866 free fonts)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="Mockup"></i>Mockup
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://mockup.zone/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://mockup.zone/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/MockupZone.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>MockupZone</strong>
                                    </a>
                                    <p className="overflowClip_2">Mockup Zone is an online store where you can find free
                                        and premium PSD mockup files to show your designs in a professional way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://dunnnk.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://dunnnk.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Dunnnk.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Dunnnk</strong>
                                    </a>
                                    <p className="overflowClip_2"> Generate Product Mockups For Free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.graphberry.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.graphberry.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/graphberry.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Graphberry</strong>
                                    </a>
                                    <p className="overflowClip_2">Free design resources, Mockups, PSD web templates,
                                        Icons</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://threed.io/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://threed.io/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/threed.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Threed</strong>
                                    </a>
                                    <p className="overflowClip_2">Generate 3D Mockups right in your Browser</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://free.lstore.graphics/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://free.lstore.graphics/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/mockupworld.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Mockup World</strong>
                                    </a>
                                    <p className="overflowClip_2">The best free Mockups from the Web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://free.lstore.graphics/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://free.lstore.graphics/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/lstore.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Lstore</strong>
                                    </a>
                                    <p className="overflowClip_2">Exclusive mindblowing freebies for designers and
                                        developers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.pixeden.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.pixeden.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/pixeden.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>pixeden</strong>
                                    </a>
                                    <p className="overflowClip_2">free web resources and graphic design templates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://forgraphictm.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://forgraphictm.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/forgraphictm.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>For Graphic TM</strong>
                                    </a>
                                    <p className="overflowClip_2">High Quality PSD Mockups for Graphic Designers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="摄影图库"></i>摄影图库
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://unsplash.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://unsplash.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/unsplash.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Unsplash</strong>
                                    </a>
                                    <p className="overflowClip_2">Beautiful, free photos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://visualhunt.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://visualhunt.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/visualhunt.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>visualhunt</strong>
                                    </a>
                                    <p className="overflowClip_2">100% Free High Quality Photos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://librestock.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://librestock.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/librestock.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>librestock</strong>
                                    </a>
                                    <p className="overflowClip_2">65,084 high quality do-what-ever-you-want stock
                                        photos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://pixabay.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://pixabay.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/pixabay.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>pixabay</strong>
                                    </a>
                                    <p className="overflowClip_2">可在任何地方使用的免费图片和视频</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.splitshire.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.splitshire.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/SplitShire.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>SplitShire</strong>
                                    </a>
                                    <p className="overflowClip_2">Free Stock Photos and Videos for commercial use.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://stocksnap.io/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://stocksnap.io/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/StockSnap.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>StockSnap</strong>
                                    </a>
                                    <p className="overflowClip_2">Beautiful free stock photos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://albumarium.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://albumarium.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/albumarium.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>albumarium</strong>
                                    </a>
                                    <p className="overflowClip_2">The best place to find & share beautiful images</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://myphotopack.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://myphotopack.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/myphotopack.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>myphotopack</strong>
                                    </a>
                                    <p className="overflowClip_2">A free photo pack just for you. Every month.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://notaselfie.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://notaselfie.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/notaselfie.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Notaselfie</strong>
                                    </a>
                                    <p className="overflowClip_2">Photos that happen along the way. You can use the
                                        images anyway you like. Have fun!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://papers.co/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://papers.co/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/papers.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>papers</strong>
                                    </a>
                                    <p className="overflowClip_2">Wallpapers Every Hour!Hand collected :)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://stokpic.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://stokpic.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/stokpic.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>stokpic</strong>
                                    </a>
                                    <p className="overflowClip_2">Free Stock Photos For Commercial Use</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://55mm.co/visuals', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://55mm.co/visuals">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/55mm.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>55mm</strong>
                                    </a>
                                    <p className="overflowClip_2">Use our FREE photos to tell your story! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://thestocks.im/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://thestocks.im/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/thestocks.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>thestocks</strong>
                                    </a>
                                    <p className="overflowClip_2">Use our FREE photos to tell your story! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://freenaturestock.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://freenaturestock.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/freenaturestock.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>freenaturestock</strong>
                                    </a>
                                    <p className="overflowClip_2">Exclusive mindblowing freebies for designers and
                                        developers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://negativespace.co/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://negativespace.co/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/negativespace.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>negativespace</strong>
                                    </a>
                                    <p className="overflowClip_2">Beautiful, High-Resolution Free Stock Photos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://gratisography.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://gratisography.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/gratisography.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>gratisography</strong>
                                    </a>
                                    <p className="overflowClip_2">Free high-resolution pictures you can use on your
                                        personal and commercial projects, free of copyright restrictions. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://imcreator.com/free', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://imcreator.com/free">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/imcreator.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>imcreator</strong>
                                    </a>
                                    <p className="overflowClip_2">A curated collection of free web design resources, all
                                        for commercial use.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.lifeofpix.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.lifeofpix.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/lifeofpix.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>lifeofpix</strong>
                                    </a>
                                    <p className="overflowClip_2">Free high resolution photography</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://skitterphoto.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://skitterphoto.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/skitterphoto.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>skitterphoto</strong>
                                    </a>
                                    <p className="overflowClip_2">Free Stock Photos for Creative Professionals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://mmtstock.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://mmtstock.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/mmtstock.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>mmtstock</strong>
                                    </a>
                                    <p className="overflowClip_2">Free photos for commercial use</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://skitterphoto.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://skitterphoto.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/skitterphoto.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>skitterphoto</strong>
                                    </a>
                                    <p className="overflowClip_2">a place to find, show and share public domain
                                        photos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://magdeleine.co/browse/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://magdeleine.co/browse/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/magdeleine.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>magdeleine</strong>
                                    </a>
                                    <p className="overflowClip_2">HAND-PICKED FREE PHOTOS FOR YOUR INSPIRATION</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://jeshoots.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://jeshoots.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/jeshoots.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>jeshoots</strong>
                                    </a>
                                    <p className="overflowClip_2">New Free Photos & Mockups in to your Inbox!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.hdwallpapers.net', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.hdwallpapers.net">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/hdwallpapers.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>hdwallpapers</strong>
                                    </a>
                                    <p className="overflowClip_2">High Definition Wallpapers & Desktop Backgrounds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://publicdomainarchive.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://publicdomainarchive.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/publicdomainarchive.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>publicdomainarchive</strong>
                                    </a>
                                    <p className="overflowClip_2">New 100% Free Stock Photos. Every. Single. Week.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="PPT资源"></i>PPT资源
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.officeplus.cn/Template/Home.shtml', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="http://www.officeplus.cn/Template/Home.shtml">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/officeplus.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>OfficePLUS</strong>
                                    </a>
                                    <p className="overflowClip_2">OfficePLUS，微软Office官方在线模板网站！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.ypppt.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.ypppt.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/ypppt.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>优品PPT</strong>
                                    </a>
                                    <p className="overflowClip_2">高质量的模版，而且还有PPT图表，PPT背景图等资源</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.pptplus.cn/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.pptplus.cn/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/pptplus.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>PPT+</strong>
                                    </a>
                                    <p className="overflowClip_2">PPT加直播、录制和分享—PPT+语音内容分享平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.pptmind.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.pptmind.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/pptmind.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>PPTMind</strong>
                                    </a>
                                    <p className="overflowClip_2">分享高端ppt模板与keynote模板的数字作品交易平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.tretars.com/ppt-templates', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="http://www.tretars.com/ppt-templates">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/tretars.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>tretars</strong>
                                    </a>
                                    <p className="overflowClip_2">The best free Mockups from the Web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://ppt.500d.me/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://ppt.500d.me/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/500d.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>5百丁</strong>
                                    </a>
                                    <p className="overflowClip_2">中国领先的PPT模板共享平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="图形创意"></i>图形创意
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.adobe.com/cn/products/photoshop.html', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://www.adobe.com/cn/products/photoshop.html">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/photoshop.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>photoshop</strong>
                                    </a>
                                    <p className="overflowClip_2">Photoshop不需要解释</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://affinity.serif.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://affinity.serif.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/AffinityDesigner.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Affinity Designer</strong>
                                    </a>
                                    <p className="overflowClip_2">专业创意软件</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.adobe.com/cn/products/illustrator/', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://www.adobe.com/cn/products/illustrator/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Illustrator.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Illustrator</strong>
                                    </a>
                                    <p className="overflowClip_2">矢量图形和插图。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.adobe.com/cn/products/indesign.html', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="http://www.adobe.com/cn/products/indesign.html">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/INDESIGN .png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>indesign</strong>
                                    </a>
                                    <p className="overflowClip_2">页面设计、布局和出版。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.maxon.net/en/products/cinema-4d/overview/', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://www.maxon.net/en/products/cinema-4d/overview/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/cinema4d.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>cinema-4d</strong>
                                    </a>
                                    <p className="overflowClip_2">Cinema 4D is the perfect package for all 3D artists
                                        who want to achieve breathtaking results fast and hassle-free.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.autodesk.com/products/3ds-max/overview', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://www.autodesk.com/products/3ds-max/overview">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/3dsmax.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>3ds-max</strong>
                                    </a>
                                    <p className="overflowClip_2">3D modeling, animation, and rendering software</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.blender.org/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.blender.org/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/blender.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Blender</strong>
                                    </a>
                                    <p className="overflowClip_2">Blender is the free and open source 3D creation
                                        suite.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="界面设计"></i>界面设计
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://sketchapp.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://sketchapp.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/sketchapp.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Sketch</strong>
                                    </a>
                                    <p className="overflowClip_2">The digital design toolkit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.adobe.com/products/xd.html', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="http://www.adobe.com/products/xd.html">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/ADOBEXDCC.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Adobe XD</strong>
                                    </a>
                                    <p className="overflowClip_2">Introducing Adobe XD. Design. Prototype.
                                        Experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.invisionapp.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.invisionapp.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/invisionapp.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>invisionapp</strong>
                                    </a>
                                    <p className="overflowClip_2">Powerful design prototyping tools</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://marvelapp.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://marvelapp.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/marvelapp.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>marvelapp</strong>
                                    </a>
                                    <p className="overflowClip_2">Simple design, prototyping and collaboration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://creative.adobe.com/zh-cn/products/download/muse', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://creative.adobe.com/zh-cn/products/download/muse">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/MuseCC.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Muse CC</strong>
                                    </a>
                                    <p className="overflowClip_2">无需利用编码即可进行网站设计。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.figma.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.figma.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/figma.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>figma</strong>
                                    </a>
                                    <p className="overflowClip_2">Design, prototype, and gather feedback all in one
                                        place with Figma.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="交互动效"></i>交互动效
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.adobe.com/cn/products/aftereffects/', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://www.adobe.com/cn/products/aftereffects/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/AdobeAfterEffectsCC.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Adobe After Effects CC</strong>
                                    </a>
                                    <p className="overflowClip_2">电影般的视觉效果和动态图形。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://principleformac.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://principleformac.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/principle.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>principle</strong>
                                    </a>
                                    <p className="overflowClip_2">Animate Your Ideas, Design Better Apps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.flinto.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.flinto.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/flinto.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>flinto</strong>
                                    </a>
                                    <p className="overflowClip_2">Flinto is a Mac app used by top designers around the
                                        world to create interactive and animated prototypes of their app designs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://framer.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://framer.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/framer.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>framer</strong>
                                    </a>
                                    <p className="overflowClip_2">Design everything from detailed icons to high-fidelity
                                        interactions—all in one place.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.protopie.cn/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.protopie.cn/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/protopie.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>ProtoPie</strong>
                                    </a>
                                    <p className="overflowClip_2">高保真交互原型设计</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="在线配色"></i>在线配色
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://khroma.co/generator/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://khroma.co/generator/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/khroma.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>khroma</strong>
                                    </a>
                                    <p className="overflowClip_2">Khroma is the fastest way to discover, search, and
                                        save color combos you'll want to use.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://uigradients.com', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://uigradients.com">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uigradients.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>uigradients</strong>
                                    </a>
                                    <p className="overflowClip_2">Beautiful colored gradients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://gradients.io/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://gradients.io/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/gradients.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>gradients</strong>
                                    </a>
                                    <p className="overflowClip_2">Curated gradients for designers and developers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://webkul.github.io/coolhue/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://webkul.github.io/coolhue/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Coolest.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Coolest</strong>
                                    </a>
                                    <p className="overflowClip_2">Coolest handpicked Gradient Hues for your next super ⚡
                                        amazing stuff</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://webgradients.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://webgradients.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/webgradients.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>webgradients</strong>
                                    </a>
                                    <p className="overflowClip_2">WebGradients is a free collection of 180 linear
                                        gradients that you can use as content backdrops in any part of your
                                        website. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.grabient.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.grabient.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/grabient.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>grabient</strong>
                                    </a>
                                    <p className="overflowClip_2">2017 Grabient by unfold</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.thedayscolor.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.thedayscolor.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/thedayscolor.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>thedayscolor</strong>
                                    </a>
                                    <p className="overflowClip_2">The daily color digest</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://flatuicolors.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://flatuicolors.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/flatuicolors.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>flatuicolors</strong>
                                    </a>
                                    <p className="overflowClip_2">Copy Paste Color Pallette from Flat UI Theme</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://coolors.co/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://coolors.co/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/coolors.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>coolors</strong>
                                    </a>
                                    <p className="overflowClip_2">The super fast color schemes generator!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.colorhunt.co/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.colorhunt.co/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/colorhunt.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>colorhunt</strong>
                                    </a>
                                    <p className="overflowClip_2">Beautiful Color Palettes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://color.adobe.com/zh/create/color-wheel', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://color.adobe.com/zh/create/color-wheel">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/AdobeColorCC.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Adobe Color CC</strong>
                                    </a>
                                    <p className="overflowClip_2">Create color schemes with the color wheel or browse
                                        thousands of color combinations from the Color community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.flatuicolorpicker.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.flatuicolorpicker.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/flatuicolorpicker.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>flatuicolorpicker</strong>
                                    </a>
                                    <p className="overflowClip_2">Best Flat Colors For UI Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://qrohlf.com/trianglify-generator/', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="http://qrohlf.com/trianglify-generator/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/trianglify.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>trianglify</strong>
                                    </a>
                                    <p className="overflowClip_2">Trianglify Generator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://klart.co/colors/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://klart.co/colors/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/klart.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>klart</strong>
                                    </a>
                                    <p className="overflowClip_2">Beautiful colors and designs to your inbox every
                                        week</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.vanschneider.com/colors', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.vanschneider.com/colors">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/vanschneider.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>vanschneider</strong>
                                    </a>
                                    <p className="overflowClip_2">Color Claim was created in 2012 by Tobias van
                                        Schneider with the goal to collect & combine unique colors for my future
                                        projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="在线工具"></i>在线工具
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://tinypng.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://tinypng.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/tinypng.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>tinypng</strong>
                                    </a>
                                    <p className="overflowClip_2">Optimize your images with a perfect balance in quality
                                        and file size.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://goqr.me/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://goqr.me/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/goqr.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>goqr</strong>
                                    </a>
                                    <p className="overflowClip_2">create QR codes for free (Logo, T-Shirt, vCard,
                                        EPS)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://ezgif.com', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://ezgif.com">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/ezgif.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>ezgif</strong>
                                    </a>
                                    <p className="overflowClip_2">simple online GIF maker and toolset for basic animated
                                        GIF editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://inloop.github.io/shadow4android/', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="http://inloop.github.io/shadow4android/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Android9patch.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Android 9 patch</strong>
                                    </a>
                                    <p className="overflowClip_2">Android 9-patch shadow generator fully customizable
                                        shadows</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://screensiz.es/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://screensiz.es/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/screensizes.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>screen sizes</strong>
                                    </a>
                                    <p className="overflowClip_2">Viewport Sizes and Pixel Densities for Popular
                                        Devices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://jakearchibald.github.io/svgomg/', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://jakearchibald.github.io/svgomg/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/svgomg.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>svgomg</strong>
                                    </a>
                                    <p className="overflowClip_2">SVG在线压缩平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.gaoding.com', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.gaoding.com">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/gaoding.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>稿定抠图</strong>
                                    </a>
                                    <p className="overflowClip_2">免费在线抠图软件,图片快速换背景-抠白底图</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="Chrome插件"></i>Chrome插件
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.wappalyzer.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.wappalyzer.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/wappalyzer.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>wappalyzer</strong>
                                    </a>
                                    <p className="overflowClip_2">Identify technology on websites</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://usepanda.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://usepanda.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/usepanda.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Panda</strong>
                                    </a>
                                    <p className="overflowClip_2">A smart news reader built for productivity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://sizzy.co/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://sizzy.co/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/sizzy.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>sizzy</strong>
                                    </a>
                                    <p className="overflowClip_2">A tool for developing responsive websites
                                        crazy-fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://csspeeper.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://csspeeper.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/csspeeper.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>csspeeper</strong>
                                    </a>
                                    <p className="overflowClip_2">Smart CSS viewer tailored for Designers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://insight.io/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://insight.io/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/insight.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>insight</strong>
                                    </a>
                                    <p className="overflowClip_2">IDE-like code search and navigation, on the cloud</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://mustsee.earth/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://mustsee.earth/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/mustsee.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>mustsee</strong>
                                    </a>
                                    <p className="overflowClip_2">Discover the world's most beautiful places at every
                                        opened tab.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="设计规范"></i>设计规范
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://designguidelines.co/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://designguidelines.co/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/designguidelines.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Design Guidelines</strong>
                                    </a>
                                    <p className="overflowClip_2">Design Guidelines &mdash; The way products are
                                        built.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://github.com/alexpate/awesome-design-systems', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://github.com/alexpate/awesome-design-systems">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/awesome_design_systems.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Awesome design systems</strong>
                                    </a>
                                    <p className="overflowClip_2"> A collection of awesome design systems</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://material.io/guidelines/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://material.io/guidelines/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/Material_Design.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Material Design</strong>
                                    </a>
                                    <p className="overflowClip_2">Introduction - Material Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://developer.apple.com/ios/human-interface-guidelines', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://developer.apple.com/ios/human-interface-guidelines">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/human_interface_guidelines.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Human Interface Guidelines</strong>
                                    </a>
                                    <p className="overflowClip_2">Human Interface Guidelines iOS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://viggoz.com/photoshopetiquette/', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="http://viggoz.com/photoshopetiquette/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/photoshopetiquette.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Photoshop Etiquette</strong>
                                    </a>
                                    <p className="overflowClip_2">PS礼仪-WEB设计指南</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="视频教程"></i>视频教程
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.photoshoplady.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.photoshoplady.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/PhotoshopLady.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Photoshop Lady</strong>
                                    </a>
                                    <p className="overflowClip_2">Your Favourite Photoshop Tutorials in One Place</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://doyoudo.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://doyoudo.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/doyoudo.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>doyoudo</strong>
                                    </a>
                                    <p className="overflowClip_2">创意设计软件学习平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.c945.com/web-ui-tutorial/', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="http://www.c945.com/web-ui-tutorial/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/web_ui_tutorial.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>没位道</strong>
                                    </a>
                                    <p className="overflowClip_2">WEB UI免费视频公开课</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.imooc.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.imooc.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/imooc.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>慕课网</strong>
                                    </a>
                                    <p className="overflowClip_2">程序员的梦工厂（有UI课程）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="设计文章"></i>设计文章
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.uisdc.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.uisdc.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uisdc.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>优设网</strong>
                                    </a>
                                    <p className="overflowClip_2">设计师交流学习平台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://webdesignledger.com', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://webdesignledger.com">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/webdesignledger.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Web Design Ledger</strong>
                                    </a>
                                    <p className="overflowClip_2">Web Design Blog</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://medium.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://medium.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/medium.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Medium</strong>
                                    </a>
                                    <p className="overflowClip_2">Read, write and share stories that matter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="设计电台"></i>设计电台
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://uxcoffee.co/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://uxcoffee.co/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uxcoffee.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>UX Coffee</strong>
                                    </a>
                                    <p className="overflowClip_2">《UX Coffee
                                        设计咖》是一档关于用户体验的播客节目。我们邀请来自硅谷和国内的学者和职人来聊聊「产品设计」、「用户体验」和「个人成长」。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://anyway.fm/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://anyway.fm/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/anyway.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Anyway.FM</strong>
                                    </a>
                                    <p className="overflowClip_2">设计杂谈 • UI 设计师 JJ 和 Leon 主播的设计播客</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.yineng.fm', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.yineng.fm">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/yineng.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>异能电台</strong>
                                    </a>
                                    <p className="overflowClip_2">将全宇宙设计师的故事讲给你听。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="交互设计"></i>交互设计
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://littlebigdetails.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://littlebigdetails.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/littlebigdetails.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Little Big Details</strong>
                                    </a>
                                    <p className="overflowClip_2">Little Big Details is a curated collection of the
                                        finer details of design, updated every day. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.smashingmagazine.com/category/user-experience', '_blank')}}
                             data-toggle="tooltip" data-placement="bottom" title=""
                             data-original-title="https://www.smashingmagazine.com/category/user-experience">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/smashingmagazine.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Smashing Magazine</strong>
                                    </a>
                                    <p className="overflowClip_2">Below you’ll find the best tips to take not only your
                                        UX design process but also the experiences you craft to the next level.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.nngroup.com/articles/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.nngroup.com/articles/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/nngroup.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>nngroup</strong>
                                    </a>
                                    <p className="overflowClip_2">Evidence-Based User Experience Research, Training, and
                                        Consulting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://boxesandarrows.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://boxesandarrows.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/boxesandarrows.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Boxes and Arrows</strong>
                                    </a>
                                    <p className="overflowClip_2">Boxes and Arrows is devoted to the practice,
                                        innovation, and discussion of design; including graphic design, interaction
                                        design, information architecture and the design of business. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://uxdesignweekly.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://uxdesignweekly.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uxdesignweekly.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>UX Design Weekly</strong>
                                    </a>
                                    <p className="overflowClip_2"> get a hand picked list of the best user experience
                                        design links every week. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://uxren.cn/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://uxren.cn/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uxren.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>UX Ren</strong>
                                    </a>
                                    <p className="overflowClip_2">用户体验人的专业社区</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://www.gulusucai.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://www.gulusucai.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/gulusucai.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>咕噜素材</strong>
                                    </a>
                                    <p className="overflowClip_2">质量很高的设计素材网站（良心推荐）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <h4 className="text-gray"><i className="linecons-tag" style={{marginRight: "7px"}} id="UED团队"></i>UED团队
                </h4>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://airbnb.design', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://airbnb.design">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/AirbnbDesign.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Airbnb Design</strong>
                                    </a>
                                    <p className="overflowClip_2">Airbnb Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://facebook.design/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://facebook.design/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/FacebookDesign.png"
                                         className="lozad img-circle" width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Facebook Design</strong>
                                    </a>
                                    <p className="overflowClip_2">Facebook Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://design.google/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://design.google/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/GoogleDesign.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Google Design</strong>
                                    </a>
                                    <p className="overflowClip_2">Google Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://eicodesign.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://eicodesign.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/eico.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>eico design</strong>
                                    </a>
                                    <p className="overflowClip_2">数字化咨询与产品专家</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.niceui.cn/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.niceui.cn/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/niceui.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>nice design</strong>
                                    </a>
                                    <p className="overflowClip_2">nicedesign奈思设计是领先的用户体验设计与互联网品牌建设公司</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://cdc.tencent.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://cdc.tencent.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/cdc.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>腾讯CDC</strong>
                                    </a>
                                    <p className="overflowClip_2">腾讯CDC关注于互联网视觉设计、交互设计、用户研究、前端开发。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://tgideas.qq.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://tgideas.qq.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/tgideas.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>TGideas</strong>
                                    </a>
                                    <p className="overflowClip_2">TGideas隶属于腾讯公司互动娱乐业务系统的专业推广类设计团队</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('https://isux.tencent.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="https://isux.tencent.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/isux.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>ISUX</strong>
                                    </a>
                                    <p className="overflowClip_2">腾讯社交用户体验设计部</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://mxd.tencent.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://mxd.tencent.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/mxd.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>MXD</strong>
                                    </a>
                                    <p className="overflowClip_2">腾讯MIG无线互联网事业群设计团队</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.aliued.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.aliued.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/aliued.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>Aliued</strong>
                                    </a>
                                    <p className="overflowClip_2">阿里巴巴国际UED团队</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://www.aliued.cn/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://www.aliued.cn/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/aliuedcn.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>U一点</strong>
                                    </a>
                                    <p className="overflowClip_2">阿里巴巴（中国站）用户体验设计部博客U一点设计 UED团队</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://uedc.163.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://uedc.163.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uedc.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>网易uedc</strong>
                                    </a>
                                    <p className="overflowClip_2">网易用户体验设计中心（User Experience Design Center）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://ued.baidu.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://ued.baidu.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/uedbaidu.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>百度用户体验中心</strong>
                                    </a>
                                    <p className="overflowClip_2">百度用户体验中心</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://jdc.jd.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://jdc.jd.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/jdc.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>京东设计中心</strong>
                                    </a>
                                    <p className="overflowClip_2">京东设计中心</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://eux.baidu.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://eux.baidu.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/euxbaidu.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>百度企业产品用户体验中心</strong>
                                    </a>
                                    <p className="overflowClip_2">百度企业产品用户体验中心</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="xe-widget xe-conversations box2 label-info"
                             onClick={()=>{window.open('http://ued.ctrip.com/', '_blank')}} data-toggle="tooltip"
                             data-placement="bottom" title="" data-original-title="http://ued.ctrip.com/">
                            <div className="xe-comment-entry">
                                <a className="xe-user-img">
                                    <img data-src="/assets/images/logos/ctrip.png" className="lozad img-circle"
                                         width="40"/>
                                </a>
                                <div className="xe-comment">
                                    <a href="#" className="xe-user-name overflowClip_1">
                                        <strong>携程设计委员会</strong>
                                    </a>
                                    <p className="overflowClip_2">携程设计委员会-Ctrip Design Committee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>


                <footer className="main-footer sticky footer-type-1">
                    <div className="footer-inner">
                        <div className="footer-text">
                            &copy; 2017-2020
                            <a href="../cn/about.html"><strong>WebStack</strong></a> design by <a
                            href="http://viggoz.com" target="_blank"><strong>Viggo</strong></a>
                        </div>
                        <div className="go-up">
                            <a href="#" rel="go-top">
                                <i className="fa-angle-up"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>)
    }

}

export default HomeComponent
