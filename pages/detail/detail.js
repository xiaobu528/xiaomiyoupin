
var cid = parseInt(window.location.search.slice(window.location.search.lastIndexOf("=")+1));
function showProductDetail(product){
	$(`
	  <span class="price">￥${product.price}<span>特价</span><img src="../../images/otherimgs/04.png" /></span>
	  <p class="name">${product.name}</p>
	  <span class="brief">${product.brief}</span>
	  <p class="p2">8月28日起恢复价格1999</p>
	  <p class="p3">进入电视会场>>></p>
	  <img src="../../images/otherimgs/05.png" />
	  <div class="div1"><span class="let">已选</span><span class="rig">1件</span><img src="../../images/otherimgs/012.png" class="img2"></div>
	  <div class="div1"><span class="let">送至</span><span class="rig">北京市 海淀区</span><img src="../../images/otherimgs/012.png" class="img2"></div>
	  <div class="div1"><span class="let">服务</span><span class="rig"><img src="../../images/otherimgs/013.png">满99包邮</span>
	  <span class="rig"><img src="../../images/otherimgs/013.png">小米自营</span>
	  <span class="rig"><img src="../../images/otherimgs/013.png">7天无理由</span>
	  <img src="../../images/otherimgs/012.png" class="img2"></div>
	  <div class="div2">
			<ul class="top">
				<li class="li1"><strong>用户评价（${product.rate}）</strong></li>
				<li class="li2">96%满意<img src="../../images/otherimgs/012.png" class="img2"></li>
			</ul>
	   <ul class="bottom">
			<li> 有图(33) </li>
			<li> 追评(2) </li>
			<li> 好评(94) </li>
			<li class="li3"> 性价比高(73) </li>
	   </ul>
	  </div>
	  <div class="rates">
			<ul class="hide-scroll">
				<li class="cc1">
					<div><img src="../../images/otherimgs/015.jpg" /><span>E**大</span></div>
					<p>价格合适，师傅热情，性价比高的很满意,推荐大家来看看！</p>
					<img src="../../images/otherimgs/016.png" />
				</li>
				<li class="cc2">
					<div><img src="../../images/otherimgs/017.jpg" /><span>孙*锡</span></div>
					<p>这电视很棒，用起来很好！我很喜欢！！！</p>
					<img src="../../images/otherimgs/016.png" />
				</li>
				<li class="cc3">
					<div><img src="../../images/otherimgs/018.png" /><span>？**？？</span></div>
					<p>这电视完美，画面清晰，推荐大家看一下！！</p>
					<img src="../../images/otherimgs/016.png" />
				</li>
			</ul>
	  </div>
	  
	  <span class="you"><span>为你推荐</span></span>
	  <ul class="for">
			<li><img src="../../images/otherimgs/021.png"><span>小吉迷你复古冰箱</span><p>￥1299起</p><li>
			<li><img src="../../images/otherimgs/021.png"><span>小吉迷你复古冰箱</span><p>￥1299起</p><li>
			<li><img src="../../images/otherimgs/021.png"><span>小吉迷你复古冰箱</span><p>￥1299起</p><li>
			<li><img src="../../images/otherimgs/021.png"><span>小吉迷你复古冰箱</span><p>￥1299起</p><li>
			<li><img src="../../images/otherimgs/021.png"><span>小吉迷你复古冰箱</span><p>￥1299起</p><li>
			<li><img src="../../images/otherimgs/021.png"><span>小吉迷你复古冰箱</span><p>￥1299起</p><li>
	  </ul>
	  <p class="xiao"><img src="../../images/otherimgs/001.jpg" /><span>小米</span></p>
	 
	  <div class="tab">
			 <ul class="tab-title">
				<li class="active"><span>商品参数</span></li>
				<li><span>商品详情</span></li>
				<li><span>安装服务</span></li>
				<li><span>常见问题</span></li>
			</ul>
			<ul class="tab-content">
				<li class="active">
					<img src="../../images/otherimgs/022.jpg">
					<img src="../../images/otherimgs/002.jpg">
					<img src="../../images/otherimgs/003.jpg">
				</li>
				<li>
					<img src="../../images/otherimgs/023.jpg">
					<img src="../../images/otherimgs/004.jpg">
					<img src="../../images/otherimgs/005.jpg">
				</li>
				<li>
					<img src="../../images/otherimgs/024.jpg">
				</li>
				<li>
					<img src="../../images/otherimgs/026.jpg">
				</li>
			   </ul>
		</div>
				
	
	`).appendTo(".page-content>.wrapper");
  var imgs = product.bannerImgs.split(",");
  console.log(imgs);
  // console.log(imgs1);
  imgs.forEach(function(item,i){
		$(`
  	       <div class="swiper-slide">
  		   <img src="${imgs[i]}">
  		  </div>
         `).appendTo(".swiper-wrapper");
 		});
		
		play();//必须是图片渲染出来才执行swiper,否则无法成功。
		tab();//详情选项卡
		tabTop();
		showTop();
}
//发送ajax展示详情数据
$.myAjax({
	url: `/product/model/${cid}`,
	success: data => {
		showProductDetail(data);
		// console.log(data);
		showMake(data);
	}
});

//选项卡
function tab(){
	$(".tab").each(function(i,tab){
		$("ul.tab-title>li").click(function(){
			if($(this).hasClass("active"))return;
			$(this).add(`ul.tab-content>li:eq(${$(this).index()})`).
			addClass("active").siblings(".active").removeClass("active");
		});
		});
}
	
//鼠标滑过轮播图
function play(){
	var mySwiper = new Swiper('.swiper-container',{
		         loop:true,    //是否无缝
		         speed: 1000,
		         getbCursor: true,
		         autoplay:{
		         	delay: 3000,      //切换时间间隔
		         	disableOnInteraction: false     //交互后自动播放
		         },
				 pagination: {
				 	clickable:true
				 }
				});	
               $(".swiper-container").onmouseover = function(){
               	  mySwiper.autoplay.stop();
               };
               $(".swiper-container").onmouseout = function(){
               	  mySwiper.autoplay.start();
               };
}


//给delete广告绑定点击事件
$(".delete").click(function(){
	$(".header").css("display","none");
});

//showMake点击加入购物车
function showMake(data){
	$(`
	  <img src="${data.avatar}">
	  <ul>
	     <li><span class="left">￥${data.price}</span><span class="right">有品秒杀</span></li>
		 <li>已选：<span class="count1"></span>件</li>
	  </ul>
	   <img src="../../images/otherimgs/03.png" class="delete1" />
	`).appendTo(".box1>.top1");
	 $(".top1>.delete1").click(function(){
	 $(".box1").css("display","none");
     });
	 checkCount();
}
//加入购物车的数量的加减
function checkCount(){
var count = 1;
$(".right>.count").text(count);
$(".box1>.top1>ul>li>span.count1").text(count);
$(".btn-decrease").click(function(){
	// $(".btn-increase").disabled = false;
	if(count===1)return;
	count = count-1;
	$(".right>.count").text(count);
	$(".box1>.top1>ul>li>span.count1").text(count);
});
$(".btn-increase").click(function(){
	// $(".btn-decrease").disabled = false;
	if(count===5)return;
	count = count+1;
	$(".right>.count").text(count);
	$(".box1>.top1>ul>li>span.count1").text(count);
});
}

//加入购物车
//点加入购物车
var userName = Cookies.get("user");
$(".right1").click(function(){
	 $(".box1").css("display","block");
	 $(".box1").css("height","400px");
	 // $(".box1").css("transition","1s");
	 
	//判断用户有没有登录,没登录跳转登录界面
	$(".box1>.make").click(function(){
		if(!sessionStorage.getItem("token")){  
		Cookies.set("backUrl",window.location.href);//将当前页面路径放入cookie,以便登录成功后跳转返回
		window.location.href = "/pages/login/login.html";//跳转登录界面
	  }
	//如果登录
		$.myAjax({
			url: "/cart/add",
			type: "post",
			data: {
				pid: cid,
				count: parseInt($(".right>.count").text()) 
			},
			success: data =>{
					$.notice("成功加入购物车！");
			}
		});
		$(".box1").css("display","none");
		$(".box1").css("height","0px");
	});
	
	});
//点立即购买
$(".right2").click(function(){
	 $(".box1").css("display","block");
	 $(".box1").css("height","400px");
	 // $(".box1").css("transition","1s");
	 
	//判断用户有没有登录,没登录跳转登录界面
	$(".box1>.make").click(function(){
		if(!sessionStorage.getItem("token")){  
		Cookies.set("backUrl",window.location.href);//将当前页面路径放入cookie,以便登录成功后跳转返回
		window.location.href = "/pages/login/login.html";//跳转登录界面
	  }
	//如果登录
		$.myAjax({
			url: "/cart/add",
			type: "post",
			data: {
				pid: cid,
				count: parseInt($(".right>.count").text()) 
			},
			success: data =>{
					$.notice("成功加入购物车！");
			}
		});
		$(".box1").css("display","none");
		$(".box1").css("height","0px");
	});
	
	});
	 
//样式改
function showTop(){
	console.log(666);
	 $(".wrapper").scroll(function(){
		 var h = $(".wrapper").scrollTop();
		 // console.log(h);
		 if(h>300){
			 $(".page-top-big").fadeIn(10);
			// $(".page-content>img.left").fadeOut(100);
			// $(".page-content>img.right").fadeOut(100);
			$(".page-content>img").css("display","none");
		 }
		 else{
			 $(".page-top-big").fadeOut(10);
			 
			 setTimeout(function(){
				 // $(".page-content>img.left").fadeIn(10);
			  //    $(".page-content>img.right").fadeIn(10);
				$(".page-content>img").css("display","block");
			 },10);
		
		 }
		 if(h>300&&h<700){
			 $(".page-top>ul>li.product").addClass("active");
			 $(".page-top>ul>li.product").siblings().removeClass("active");
		 }else if(h>700&&h<1030){
			 $(".page-top>ul>li.rate").addClass("active");
			 $(".page-top>ul>li.rate").siblings().removeClass("active");
		 }else if(h>1030&&h<1480){
			 $(".page-top>ul>li.say").addClass("active");
			 $(".page-top>ul>li.say").siblings().removeClass("active");
		 }else {
			 $(".page-top>ul>li.detail").addClass("active");
			 $(".page-top>ul>li.detail").siblings().removeClass("active");
		 }
	 });
}
//点击划动
function tabTop(){
	//商品
	$(".page-top>ul>li.product").click(function(){	
		$(".wrapper").animate({scrollTop: 340},500);
	 });
	//评论
	$(".page-top>ul>li.rate").click(function(){	
		$(".wrapper").animate({scrollTop: 710},500);
	 });
	 //推荐
	$(".page-top>ul>li.say").click(function(){
		$(".wrapper").animate({scrollTop: 1030},500);
	});
	//详情
	$(".page-top>ul>li.detail").click(function(){
		$(".wrapper").animate({scrollTop: 1480},500);
	});
}

			



