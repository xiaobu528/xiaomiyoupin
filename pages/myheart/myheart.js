if(!sessionStorage.getItem("token")){
	 $(".page-header>span").text("请登录");
	 $(".page-header>img").attr("src","../../images/otherimgs/067.png");
	 $(".hang9>.go-out").css("display","none");
	 $(".page-header>a").click(function(){
	 Cookies.set("backUrl",window.location.href);//将当前页面路径放入cookie,以便登录成功后跳转返回
	 window.location.href = "/pages/login2/login2.html";//跳转登录界面
	 });
	 
}else {
	$(".page-header>a").css("display","none");
	$(".page-header>span").text("2017204859");
	$(".page-header>.avatar").attr("src",'../../images/otherimgs/523.jpg');
	$(".hang9>.go-out").css("display","block");
}
	
	$(".hang9>.go-out").click(function(){
		sessionStorage.removeItem("token");
		window.location.reload();
	});