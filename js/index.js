/**
 * Created by jines on 2016/8/26.
 */
/*菜单动画*/
$(function () {
    $('#menu').click(function () {
        //获取菜单的高度
        var height=$('#dropdown').height();
        $("#dropdown").css({height:height,transition:'height 1s ease-in-out'});
        if(height<=0){
            $("#dropdown").css({height:'326'});
        }else{
            $("#dropdown").css({height:'0'});
        }
    });
})

//选择涂鸦
$(function () {
    var partnerList=[
        'images/partner_dxkh_airpal@1x.png',
        'images/partner_dxkh_beca@1x.png',
        'images/partner_dxkh_aby@1x.png',
        'images/partner_dxkh_ch@1x.png"',
        'images/partner_dxkh_mill@1x.png',
        'images/partner_dxkh_led@1x.png',
        'images/partner_yjhb_axk@1x.png',
        'images/partner_hzpt_aly@1x.png'];
    var partnerHtml='<image src="'+partnerList.join('"/><image src="')+'">';
    $('.list-partner').html(partnerHtml);
});

//产品与服务
$(function () {
    var dataProduct={list: [
        {info:[
            {name:'空调',img:'images/home_kt@1x.png'},
            {name:'取暖器',img:'images/home_qnq@1x.png'},
            {name:'智能灯',img:'images/home_d@1x.png'},
            {name:'智能插座',img:'images/home_cz@1x.png'},
            {name:'智能开关',img:'images/home_kg@1x.png'},
            {name:'集成吊顶',img:'images/home_jcdd@1x.png'}
        ]},
        {info:[
            {name:'冲奶机',img:'images/home_cnj@1x.png'},
            {name:'洗衣机',img:'images/home_xyj@1x.png'},
            {name:'风扇',img:'images/home_fs@1x.png'},
            {name:'壁炉',img:'images/home_bl@1x.png'},
            {name:'水暖毯',img:'images/home_snt@1x.png'},
            {name:'晾衣架',img:'images/home_lyj@1x.png'}
        ]},
        {info:[
            {name:'冲奶机',img:'images/home_cnj@1x.png'},
            {name:'洗衣机',img:'images/home_xyj@1x.png'},
            {name:'风扇',img:'images/home_fs@1x.png'},
            {name:'壁炉',img:'images/home_bl@1x.png'},
            {name:'水暖毯',img:'images/home_snt@1x.png'},
            {name:'晾衣架',img:'images/home_lyj@1x.png'}
        ]},
        {info:[
            {name:'冲奶机',img:'images/home_cnj@1x.png'},
            {name:'洗衣机',img:'images/home_xyj@1x.png'},
            {name:'风扇',img:'images/home_fs@1x.png'},
            {name:'壁炉',img:'images/home_bl@1x.png'},
            {name:'水暖毯',img:'images/home_snt@1x.png'},
            {name:'晾衣架',img:'images/home_lyj@1x.png'}
        ]},
        {info:[
            {name:'冲奶机',img:'images/home_cnj@1x.png'},
            {name:'洗衣机',img:'images/home_xyj@1x.png'},
            {name:'风扇',img:'images/home_fs@1x.png'},
            {name:'壁炉',img:'images/home_bl@1x.png'},
            {name:'水暖毯',img:'images/home_snt@1x.png'},
            {name:'晾衣架',img:'images/home_lyj@1x.png'}
        ]},
        {info:[
            {name:'冲奶机',img:'images/home_cnj@1x.png'},
            {name:'洗衣机',img:'images/home_xyj@1x.png'},
            {name:'风扇',img:'images/home_fs@1x.png'},
            {name:'壁炉',img:'images/home_bl@1x.png'},
            {name:'水暖毯',img:'images/home_snt@1x.png'},
            {name:'晾衣架',img:'images/home_lyj@1x.png'}
        ]}
    ]};
    var slideHtml=template('tempSlide',dataProduct);
    $('.section_3_slides').html(slideHtml);

    //图片轮播
    var width=1200;  //每次滑动的距离
    var slidesWidth=$(".section_3_slides").width();
    var index=0;//当前索引值
    var maxIndex=5;
    var $slides=$(".section_3_slides");
    //克隆第一个图片追加到列表最后
    $slides.find(".section_3_slide:first").clone().appendTo($slides);

    $(".swiper_prev").click(function () {
        if(index<=0){
            index=6;
          changeFirst();
        }
       setTimeout(function () {
           index--;
           changeNext();
       },0  );
    });
    //切换下一张
    $(".swiper_next").click(function () {
        if(index>=6){
           //移动到第一张
           index=0;
           //清除过渡 定位
            changeFirst();
        }
        setTimeout(function () {
            index++;
            changeNext();
        },0);
    });

   /* $('.swiper_pointer span').click(function () {
        index=$(this).index();
        changeNext();
        setPoint();
    });*/
    //移动到下一张
    function changeNext(){
        $(".section_3_slides").css({transition:'all 1s'});
        $(".section_3_slides").css({transform:'translate('+(-index*width)+'px)'})
    }
    //移动到第一张
    function changeFirst(){
        //清除过渡
        $(".section_3_slides").css({transition:'none'});
        //定位
        $(".section_3_slides").css({transform:'translateX('+(-index*width)+'px)'})
    }
    //设置原点高亮
    /*function setPoint(){
        console.log($('.swiper_pointer').eq(index));
        $('.swiper_pointer span').eq(index).addClass('now').siblings().removeClass('now');
    }*/
})

//合作伙伴
$(function () {
    var partnerList=[
        'images/partner_dxkh_aby@1x.png',
        'images/partner_hzpt_aly@1x.png',
        'images/partner_dxkh_beca@1x.png',
        'images/partner_dxkh_ch@1x.png"',
        'images/partner_dxkh_mill@1x.png',
        'images/partner_dxkh_shibei@1x.png']
    var partnerHtml='<div class="item"><image src="'+partnerList.join('"/></div><div class="item"><image src="')+'"></div>';
    $('.item-list').html(partnerHtml);
});

//涂鸦印象
$(function(){
  var partnerData={list:[
      {img:'images/anxinke_logo@1x.png',
       name:'赵同阳',
       company:'安信可科技',
       txt:'涂鸦科技是初创公司，但已经能让我感受到在云服务软硬件集成方面的专业热忱和创新灵活性…有着巨大的潜力，我很看好双方未来的合作。祝 2016 涂鸦科技更好！'
      },
      {img:'images/lexin_logo@1x.png',
          name:'张瑞安',
          company:'乐鑫科技',
          txt:'涂鸦科技是我们非常优秀的合作伙伴之一，合作出货量、项目协调以及客户反馈都让我们双方很有信心很满意！祝新的一年涂鸦市场份额翻倍！'
      },
      {img:'images/beca_logo@1x.png',
       name:'中国区总监 AdamJiang',
       company:'智利 Grupo Beca 集团',
       txt:'虽然是首次合作，但涂鸦同事诸多创新的流程思路、专业的产品解构、全情投入的服务意识令我们印象深刻。涂鸦智能云的全球部署及适配稳定性也给了我们很大的信心。祝涂鸦智能开拓更多市场，服务更多客户!'
      }
  ]}
    var partnerHtml=template('tempPartner',partnerData);
    $('.section_6-lists').html(partnerHtml);

    //滑动动画
    var $lists=$('.section_6-lists');
    var $lis=$lists.children('.section_6-list');
    var width=$lis.width();
    console.log(width);
    var $list_pointers=$('.list-pointer');
    var $points=$list_pointers.children('span');
    var index=1;
    //1、添加过渡
    var addTransition= function () {
        imgBox.style.transition="all 0.3s";
    }
    //2、清除过渡
    var removeTransition= function () {
        imgBox.style.transition="none";
    }
    //3、定位
    var setTransition= function (translateX) {
        imgBox.style.transform="translateX("+translateX+'px'+")";
    }

})

//涂鸦动态
$(function () {
    //获取a标签注册点击事件
    $(".news-img-list>ul>li a").click(function () {
        //改变图片的src属性
        var href=$(this).attr("href");
        $("#image_show").attr("src",href);
        //禁止a标签跳转
        return false;
    });
})

//咨询、版权
$(function () {
    //判断屏幕的宽度
    var width=$(window).width();
    var isMobile=width<769?true:false;
    if(isMobile){
        var str1='<p class="section_7-txt">400-159-4688</p><a href="#" class="section_7-qq">立即咨询</a>'
        var str2='<p class="copyright-txt">Copyright©2016 Tuya Inc. All rights reserved.<br/>浙ICP备14011795号</p>'
        $('.section_7-wrapper').html(str1);
        $('.copyright').html(str2);
    }
})

