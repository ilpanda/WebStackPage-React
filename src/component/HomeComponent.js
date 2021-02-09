import * as React from "react";
import $ from 'jquery';
import lozad from 'lozad'

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.data = [{
            "id": "常用推荐",
            "title": "常用推荐",
            "rows": [[
                {title: "Dribbble", desc: "全球UI设计师作品分享平台。", url: "https://dribbble.com/", imgName: "dribbble.png",},
                {title: "Behance", desc: "Adobe旗下的设计师交流平台。", url: "https://behance.net/", imgName: "behance.png",},
                {title: "UI中国", desc: "图形交互与界面设计交流、作品展示、学习平台。", url: "http://www.ui.cn/", imgName: "uicn.png",},
                {title: "站酷", desc: "中国人气设计师互动平台。", url: "http://www.zcool.com.cn/", imgName: "zcool.png",}
            ],

                [
                    {
                        title: "Pinterest",
                        desc: "全球美图收藏采集站。",
                        url: "https://www.pinterest.com/",
                        imgName: "pinterest.png",
                    },
                    {title: "花瓣", desc: "收集灵感,保存有用的素材。", url: "http://huaban.com/", imgName: "huaban.png",},
                    {title: "Medium", desc: "高质量设计文章。", url: "https://medium.com/", imgName: "medium.png",},
                    {title: "优设", desc: "设计师交流学习平台。", url: "http://www.uisdc.com/", imgName: "uisdc.png",}
                ],
                [
                    {
                        title: "Producthunt",
                        desc: "发现新鲜有趣的产品。",
                        url: "https://www.producthunt.com",
                        imgName: "producthunt.png",
                    },
                    {title: "Youtube", desc: "全球最大的学习分享平台。", url: "http://youtube.com/", imgName: "youtube.png",},
                    {title: "Google", desc: "全球最大的UI学习分享平台。", url: "https://google.com/", imgName: "google.png",},
                ]]
        }, {
            "id": "界面灵感",
            "title": "推荐",
            "rows": [
                [
                    {
                        title: "阿里云",
                        desc: "点击领取2000元限量云产品优惠券。",
                        url: 'https://www.aliyun.com/minisite/goods?userCode=xtct5egx&share_source=copy_link',
                        imgName: "aliyun.png",
                    },
                    {title: "咕噜素材", desc: "质量很高的设计素材网站（推荐）", url: "https://gulusucai.com/", imgName: "gulusucai.png",},
                    {
                        title: "西游-科学上网",
                        desc: "优秀的科学上网（略贵，但是贼稳，点击注册领取优惠券）",
                        url: "https://xiyou4you.us/r/?s=13731627",
                        imgName: "xiyou.png",
                    },
                    {
                        title: "设计周刊",
                        desc: "最新设计资讯（每天更新）",
                        url: "https://www.shejizhoukan.com/",
                        imgName: "shejizhoukan.png",
                    }
                ],
                [
                    {
                        title: "字体仓库",
                        desc: "最全的免费商用字体库。",
                        url: 'https://www.ziticangku.com/',
                        imgName: "ziticangku.png",
                    },
                ],
            ]
        }, {
            "id": "社区资讯",
            "title": "社区资讯",
            "rows": [
                [
                    {
                        title: "雷锋网",
                        desc: "人工智能和智能硬件领域的互联网科技媒体",
                        url: 'https://www.leiphone.com/',
                        imgName: "leiphone.png",
                    },
                    {title: "36kr", desc: "创业资讯、科技新闻", url: "http://36kr.com/", imgName: "36kr.png",},
                    {title: "数英网", desc: "数字媒体及职业招聘网站", url: "https://www.digitaling.com/", imgName: "digitaling.png",},
                    {
                        title: "猎云网",
                        desc: "互联网创业项目推荐和创业创新资讯",
                        url: "http://www.lieyunwang.com/",
                        imgName: "lieyunwang.png",
                    }
                ],
                [
                    {
                        title: "人人都是产品经理",
                        desc: "产品经理、产品爱好者学习交流平台。",
                        url: 'http://www.woshipm.com/',
                        imgName: "woshipm.png",
                    },
                    {title: "互联网早读课", desc: "互联网行业深度阅读与学习平台", url: 'https://www.zaodula.com/', imgName: "zaodula.png",},
                    {
                        title: "产品壹佰",
                        desc: "为产品经理爱好者提供最优质的产品资讯、原创内容和相关视频课程",
                        url: 'http://www.chanpin100.com/',
                        imgName: "chanpin100.png",
                    },
                    {
                        title: "PMCAFF",
                        desc: "中国第一产品经理人气组织，专注于研究互联网产品",
                        url: 'http://www.pmcaff.com/',
                        imgName: "pmcaff.png",
                    },
                ],
                [
                    {
                        title: "爱运营",
                        desc: "网站运营人员学习交流，专注于网站产品运营管理、淘宝运营。",
                        url: 'http://www.iyunying.org/',
                        imgName: "iyunying.png",
                    },
                    {title: "鸟哥笔记", desc: "移动互联网第一干货平台", url: 'http://www.niaogebiji.com/', imgName: "niaogebiji.png",},
                    {title: "古田路9号", desc: "国内专业品牌创意平台", url: 'http://www.gtn9.com/', imgName: "gtn9.png",},
                    {title: "优阁网", desc: "UI设计师学习交流社区", url: 'http://www.uigreat.com/', imgName: "uigreat.png",},
                    // {title: "", desc: "", url:'', imgName: ".png",},
                ],

            ]
        }, {
            "id": "发现产品",
            "title": "发现产品",
            "rows": [
                [
                    {
                        title: "Producthunt",
                        desc: "发现新鲜有趣的产品",
                        url: 'https://www.producthunt.com/',
                        imgName: "producthunt.png",
                    },
                    {title: "NEXT", desc: "不错过任何一个新产品", url: 'http://next.36kr.com/posts', imgName: "NEXT.png",},
                    {title: "少数派", desc: "高品质数字消费指南", url: 'https://sspai.com/', imgName: "sspai.png",},
                    {title: "利器", desc: "创造者和他们的工具", url: 'http://liqi.io/', imgName: "liqi.png",},
                ],
                [
                    {title: "Today", desc: "为身边的新产品喝彩", url: 'http://today.itjuzi.com/', imgName: "today.png",},
                    {title: "小众软件", desc: "在这里发现更多有趣的应用", url: 'https://faxian.appinn.com', imgName: "appinn.png",},
                ]
            ]
        }, {
            "id": "界面灵感",
            "title": "界面灵感",
            "rows": [
                [
                    {
                        title: "Pttrns",
                        desc: "Check out the finest collection of design patterns,resources, mobile apps and inspiration",
                        url: 'https://www.pttrns.com/',
                        imgName: "Pttrns.png",
                    },
                    {
                        title: "Collect UI",
                        desc: "Daily inspiration collected from daily ui archive andbeyond.",
                        url: 'http://collectui.com/',
                        imgName: "CollectUI.png",
                    },
                    {title: "UI uigreat", desc: "APP界面截图参考", url: 'http://ui.uigreat.com/', imgName: "uiuigreat.png",},
                    {
                        title: "Android Niceties",
                        desc: "A collection of screenshots encompassing some of themost beautiful looking Android apps.",
                        url: 'http://androidniceties.tumblr.com',
                        imgName: "AndroidNiceties.png",
                    },
                ]
            ]
        }, {
            "id": "网页灵感",
            "title": "网页灵感",
            "rows": [
                [
                    {
                        title: "Awwwards",
                        desc: "Awwwards are the Website Awards that recognize andpromote the talent and effort of the best developers, designers and web agencies\n" +
                            "in the world.",
                        url: 'https://www.awwwards.com/',
                        imgName: "awwwards.png",
                    },
                    {
                        title: "CSS Design Awards",
                        desc: "Website Awards & Inspiration - CSS Gallery",
                        url: 'https://www.cssdesignawards.com/',
                        imgName: "CSSDesignAwards.png",
                    },
                    {
                        title: "The FWA",
                        desc: "FWA - showcasing innovation every day since 2000",
                        url: 'https://thefwa.com/',
                        imgName: "fwa.png",
                    },
                    {
                        title: "Ecommercefolio",
                        desc: "Only the Best Ecommerce Design Inspiration",
                        url: 'http://www.ecommercefolio.com/',
                        imgName: "Ecommercefolio.png",
                    },
                ],
                [
                    {
                        title: "Lapa", desc: "The best landing page design inspiration from around\n" +
                            "the web.", url: 'http://www.lapa.ninja/', imgName: "Lapa.png",
                    },
                    {
                        title: "Reeoo",
                        desc: "web design inspiration and website gallery",
                        url: 'http://reeoo.com/',
                        imgName: "reeoo.png",
                    },
                    {
                        title: "Designmunk",
                        desc: "Best Homepage Design Inspiration",
                        url: 'https://designmunk.com/',
                        imgName: "designmunk.png",
                    },
                    {
                        title: "Best Websites Gallery", desc: "Website Showcase Inspiration | Best Websites\n" +
                            "Gallery", url: 'https://bestwebsite.gallery/', imgName: "BWG.png",
                    },
                ], [
                    {
                        title: "Pages",
                        desc: "Curated directory of the best Pages",
                        url: 'http://www.pages.xyz/',
                        imgName: "pages.png",
                    },
                    {
                        title: "SiteSee", desc: "SiteSee is a curated gallery of beautiful, modern\n" +
                            "websites collections.", url: 'https://sitesee.co/', imgName: "SiteSee.png.png",
                    },
                    {
                        title: "Site Inspire",
                        desc: "A CSS gallery and showcase of the best web design inspiration",
                        url: 'https://www.siteinspire.com/',
                        imgName: "siteInspire.png",
                    },
                    {
                        title: "WebInspiration",
                        desc: "网页设计欣赏,全球顶级网页设计",
                        url: 'http://web.uedna.com/',
                        imgName: "WebInspiration.png",
                    },
                ], [
                    {
                        title: "navnav",
                        desc: "A ton of CSS, jQuery, and JavaScript responsive " +
                            " navigation examples, demos, and tutorials from all over the web.",
                        url: 'http://navnav.co/',
                        imgName: "navnav.png",
                    },
                ]
            ]
        }, {
            "id": "图标素材",
            "title": "图标素材",
            "rows": [
                [
                    {
                        title: "Iconfinder",
                        desc: "2,100,000+ free and premium vector icons.",
                        url: 'https://www.iconfinder.com',
                        imgName: "Iconfinder.png",
                    },
                    {title: "iconfont", desc: "阿里巴巴矢量图标库", url: 'http://www.iconfont.cn/', imgName: "iconfont.png",},
                    {
                        title: "iconmonstr",
                        desc: "Free simple icons for your next project",
                        url: 'https://iconmonstr.com',
                        imgName: "iconmonstr.png",
                    },
                    {
                        title: "Icon Archive",
                        desc: "Search 590,912 free icons",
                        url: 'http://www.iconarchive.com/',
                        imgName: "iconarchive.png",
                    },
                ],
                [
                    {
                        title: "FindIcons",
                        desc: "Search through 300,000 free icons",
                        url: 'https://findicons.com',
                        imgName: "FindIcons.png",
                    },
                    {
                        title: "IcoMoonApp",
                        desc: "Icon Font, SVG, PDF &amp; PNG Generator",
                        url: 'https://icomoon.io/app/',
                        imgName: "IcoMoonApp.png",
                    },
                    {
                        title: "easyicon",
                        desc: "PNG、ICO、ICNS格式图标搜索、图标下载服务",
                        url: 'http://www.easyicon.net/',
                        imgName: "easyicon.png",
                    },
                    {
                        title: "flaticon", desc: "634,000+ Free vector icons in SVG, PSD, PNG, EPS " +
                            "format or as ICON FONT.", url: 'https://www.flaticon.com', imgName: "flaticon.png",
                    },
                ], [
                    {
                        title: "UICloud", desc: "The largest user interface design database in the " +
                            "world.", url: 'http://ui-cloud.com/', imgName: "UICloud.png",
                    },
                    {
                        title: "Material icons",
                        desc: "Access over 900 material system icons, available in a " +
                            "variety of sizes and densities, and as a web font.",
                        url: 'https://material.io/icons/',
                        imgName: "Materialicons.png",
                    },
                    {
                        title: "Font Awesome Icon",
                        desc: "The complete set of 675 icons in Font Awesome",
                        url: 'fontawesomeicon',
                        imgName: "fontawesomeicon.png",
                    },
                    {
                        title: "ion icons",
                        desc: "The premium icon font for Ionic Framework.",
                        url: 'http://ionicons.com/',
                        imgName: "ionicons.png",
                    },
                ], [
                    {
                        title: "Simpleline Icons",
                        desc: "Simple line Icons pack",
                        url: 'http://simplelineicons.com/',
                        imgName: "simplelineicons.png",
                    },
                ]
            ]
        }, {
            "id": "LOGO设计",
            "title": "LOGO设计",
            "rows": [
                [
                    {
                        title: "Iconsfeed",
                        desc: "iOS icons gallery",
                        url: 'http://www.iconsfeed.com/',
                        imgName: "iconsfeed.png",
                    },
                    {
                        title: "iOS Icon Gallery", desc: "Showcasing beautiful icon designs from the iOS App " +
                            "Store", url: 'http://iosicongallery.com', imgName: "iosicongallery.png",
                    },
                    {
                        title: "World Vector Logo",
                        desc: "Brand logos free to download",
                        url: 'https://worldvectorlogo.com/',
                        imgName: "worldvectorlogo.png",
                    },
                    {
                        title: "Instant Logo Search",
                        desc: "Search & download thousands of logos instantly",
                        url: 'http://instantlogosearch.com/',
                        imgName: "instantlogosearch.png",
                    },
                ]
            ]
        }, {
            "id": "平面素材",
            "title": "平面素材",
            "rows": [
                [
                    {
                        title: "咕噜素材",
                        desc: "质量很高的设计素材网站（良心推荐）",
                        url: 'https://www.gulusucai.com/',
                        imgName: "gulusucai.png",
                    },
                    {
                        title: "wallhalla", desc: "Find awesome high quality wallpapers for desktop and " +
                            "mobile in one place.", url: 'https://wallhalla.com/', imgName: "wallhalla.png",
                    },
                    {
                        title: "365PSD",
                        desc: "Free PSD &amp; Graphics, Illustrations",
                        url: 'https://365psd.com/',
                        imgName: "365PSD.png",
                    },
                    {
                        title: "Medialoot", desc: "Free &amp; Premium Design \n" +
                            "Resources &mdash; Medialoot", url: 'https://medialoot.com/', imgName: "Medialoot.png",
                    },
                ],
                [
                    {title: "千图网", desc: "专注免费设计素材下载的网站", url: 'http://www.58pic.com', imgName: "qiantu.png",},
                    {title: "千库网", desc: "免费png图片背景素材下载", url: 'http://588ku.com/', imgName: "qianku.png",},
                    {
                        title: "我图网",
                        desc: "我图网,提供图片素材及模板下载,专注正版设计作品交易",
                        url: 'http://www.ooopic.com',
                        imgName: "wotu.png",
                    },
                    {title: "90设计", desc: "电商设计（淘宝美工）千图免费淘宝素材库", url: 'http://90sheji.com/', imgName: "90sheji.png",},
                ],
                [
                    {title: "昵图网", desc: "原创素材共享平台", url: 'http://www.nipic.com/', imgName: "nipic.png",},
                    {title: "懒人图库", desc: "懒人图库专注于提供网页素材下载", url: 'http://www.lanrentuku.com', imgName: ".png",},
                    {title: "素材搜索", desc: "设计素材搜索聚合", url: 'http://so.ui001.com/', imgName: "sousucai.png",},
                    {title: "PS饭团网", desc: "不一样的设计素材库！让自己的设计与众不同！", url: 'http://psefan.com/', imgName: "psefan.png",},
                ],
                [
                    {title: "素材中国", desc: "免费素材共享平台", url: 'http://www.sccnn.com/', imgName: "sccnn.png",},
                    {
                        title: "freepik", desc: "More than a million free vectors, PSD, photos and free " +
                            "icons.", url: 'https://www.freepik.com', imgName: "freepik.png",
                    },
                ]
            ]
        }, {
            "id": "UI资源",
            "title": "UI资源",
            "rows": [
                [
                    {
                        title: "Freebiesbug", desc: "Hand-picked resources for web designer and developers, " +
                            "constantly updated.", url: 'https://freebiesbug.com/', imgName: "freebiesbug.png",
                    },
                    {
                        title: "Freebie Supply",
                        desc: "Free Resources For Designers",
                        url: 'https://freebiesupply.com/',
                        imgName: "freebiesupply.png",
                    },
                    {title: "云瑞", desc: "优秀设计资源的分享网站", url: 'https://www.yrucd.com', imgName: "yrucd.png",},
                    {title: "稀土区", desc: "优质设计开发资源分享", url: 'https://xituqu.com/', imgName: "xituqu.png",},
                ],
                [
                    {
                        title: "ui8",
                        desc: "UI Kits, Wireframe Kits, Templates, Icons and More",
                        url: 'https://ui8.net',
                        imgName: "ui8.png",
                    },
                    {
                        title: "uplabs",
                        desc: "Daily resources for product designers & developers",
                        url: 'https://www.uplabs.com',
                        imgName: "uplabs.png",
                    },
                    {title: "UIkit.me", desc: "最便捷新鲜的uikit资源下载网站", url: 'http://www.uikit.me', imgName: "uikitme.png",},
                    {
                        title: "Fribbble", desc: "Free PSD files and other free design resources by " +
                            "Dribbblers.", url: 'http://www.fribbble.com/', imgName: "Fribbble.png",
                    },
                ],
                [
                    {
                        title: "PrincipleRepo",
                        desc: "Free, High Quality Principle Resources",
                        url: 'http://principlerepo.com/',
                        imgName: "PrincipleRepo.png",
                    },
                    {
                        title: "Designmodo",
                        desc: "Web Design Blog and Shop",
                        url: 'https://designmodo.com',
                        imgName: "Designmodo.png",
                    },
                ]
            ]
        }, {
            "id": "在线配色",
            "title": "在线配色",
            "rows": [
                [
                    {
                        title: "khroma",
                        desc: "Khroma is the fastest way to discover, search, and " +
                            "save color combos you'll want to use.",
                        url: 'http://khroma.co/generator/',
                        imgName: "khroma.png",
                    },
                    {
                        title: "uigradients",
                        desc: "Beautiful colored gradients",
                        url: 'https://uigradients.com',
                        imgName: "uigradients.png",
                    },
                    {
                        title: "gradients",
                        desc: "Curated gradients for designers and developers",
                        url: 'http://gradients.io/',
                        imgName: "gradients.png",
                    },
                    {
                        title: "Coolest", desc: "Coolest handpicked Gradient Hues for your next super ⚡ " +
                            "amazing stuff", url: 'https://webkul.github.io/coolhue/', imgName: "Coolest.png",
                    },
                ],
                [
                    {
                        title: "webgradients", desc: "WebGradients is a free collection of 180 linear " +
                            "gradients that you can use as content backdrops in any part of your " +
                            "website. ", url: 'https://webgradients.com', imgName: "webgradients.png",
                    },
                    {
                        title: "grabient",
                        desc: "2017 Grabient by unfold",
                        url: 'https://www.grabient.com/',
                        imgName: "grabient.png",
                    },
                    {
                        title: "thedayscolor",
                        desc: "The daily color digest",
                        url: 'http://www.thedayscolor.com/',
                        imgName: "thedayscolor.png",
                    },
                    {
                        title: "flatuicolors",
                        desc: "Copy Paste Color Pallette from Flat UI Theme",
                        url: 'http://flatuicolors.com',
                        imgName: "flatuicolors.png",
                    },
                ], [
                    {
                        title: "coolors",
                        desc: "The super fast color schemes generator!",
                        url: 'https://coolors.co/',
                        imgName: "coolors.png",
                    },
                    {
                        title: "colorhunt",
                        desc: "Beautiful Color Palettes",
                        url: 'http://www.colorhunt.co/',
                        imgName: "colorhunt.png",
                    },
                    {
                        title: "Adobe Color CC",
                        desc: "Create color schemes with the color wheel or browse " +
                            "thousands of color combinations from the Color community.",
                        url: 'https://color.adobe.com/zh/create/color-wheel',
                        imgName: "AdobeColorCC.png",
                    },
                    {
                        title: "flatuicolorpicker",
                        desc: "Best Flat Colors For UI Design",
                        url: 'http://www.flatuicolorpicker.com',
                        imgName: "flatuicolorpicker.png",
                    },
                ], [
                    {
                        title: "trianglify",
                        desc: "Trianglify Generator",
                        url: 'http://qrohlf.com/trianglify-generator/',
                        imgName: "trianglify.png",
                    },
                    {
                        title: "klart", desc: "Beautiful colors and designs to your inbox every " +
                            "week", url: 'https://klart.co/colors/', imgName: "klart.png",
                    },
                    {
                        title: "vanschneider", desc: "Color Claim was created in 2012 by Tobias van " +
                            "Schneider with the goal to collect & combine unique colors for my future " +
                            "projects.", url: 'http://www.vanschneider.com/colors', imgName: "vanschneider.png",
                    }
                ],
            ]
        }, {
            "id": "Chrome插件",
            "title": "Chrome插件",
            "rows": [
                [
                    {
                        title: "wappalyzer",
                        desc: "Identify technology on websites",
                        url: 'https://www.wappalyzer.com',
                        imgName: "wappalyzer.png",
                    },
                    {
                        title: "Panda",
                        desc: "A smart news reader built for productivity.",
                        url: 'http://usepanda.com',
                        imgName: "usepanda.png",
                    },
                    {
                        title: "sizzy", desc: "A tool for developing responsive websites " +
                            " crazy-fast", url: 'https://sizzy.co/', imgName: "sizzy.png",
                    },
                    {
                        title: "csspeeper",
                        desc: "Smart CSS viewer tailored for Designers.",
                        url: 'https://csspeeper.com',
                        imgName: "csspeeper.png",
                    },
                ],
                [
                    {
                        title: "insight",
                        desc: "IDE-like code search and navigation, on the cloud",
                        url: 'http://insight.io/',
                        imgName: "insight.png",
                    },
                    {
                        title: "mustsee", desc: "Discover the world's most beautiful places at every " +
                            "opened tab.", url: 'http://mustsee.earth/', imgName: "mustsee.png",
                    },
                ]
            ]
        }


        ]
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
        $("a.smooth").click(function (e) {
            $("#main-menu li").each(function () {
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
                    <div style={{display: "flex", justifyContent: "center"}}>

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

                    </div>

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
                                    <a href="#字体资源" className="smooth">
                                        <span className="title">字体资源</span>
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
                                    <a href="#在线配色" className="smooth">
                                        <span className="title">在线配色</span>
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


                {
                    this.data.map((data, index) =>
                        <React.Fragment>
                            <h4 className="text-gray">
                                <i className="linecons-tag" style={{marginRight: "7px"}} id={data.id}></i>{data.title}
                            </h4>
                            {data.rows.map((row, index) =>
                                <div className="row">
                                    {row.map((item) =>
                                        <div className="col-sm-3" key={item.title}>
                                            <div className="xe-widget xe-conversations box2 label-info"
                                                 onClick={() => {
                                                     window.open(item.url, '_blank')
                                                 }} data-toggle="tooltip"
                                                 data-placement="bottom" title="" data-original-title="https://dribbble.com/">
                                                <div className="xe-comment-entry">
                                                    <a className="xe-user-img">
                                                        <img data-src={"/assets/images/logos/" + item.imgName} className="lozad img-circle"
                                                             width="40"/>
                                                    </a>
                                                    <div className="xe-comment">
                                                        <a href="#" className="xe-user-name overflowClip_1">
                                                            <strong>{item.title}</strong>
                                                        </a>
                                                        <p className="overflowClip_2">{item.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>)}
                            <br/>
                        </React.Fragment>)
                }
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
