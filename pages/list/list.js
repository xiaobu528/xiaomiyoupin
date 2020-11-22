//全局变量
var cid = parseInt(window.location.search.slice(window.location.search.lastIndexOf("=")+1));
var searchName = "";  //表示当前用户输入的关键字
var orderDir = "asc";//表示当前排序的方向 
var orderCol = "price";//表示当前排序的列
var pageSize = 6; //每次向服务器拿多少条商品记录

var scroll = null;  //保存滚动对象
var hasMore = true;  //标识按当前条件查找商品还有没有更多
var isLoading = false;//标识是否处于ajax交互状态
(function(){
	$("i.rocket").click(function(){
		if(scroll) scroll.scrollTo(0,0,400);
		$(this).hide(0);
	});
})();
//显示模式切换
(function(){
	$("i.show-mode").click(function(){
		$(this).toggleClass("icon-card icon-list");
		$("ul.product-list").toggleClass("list card");
		orderDir = orderDir === "asc"? "desc":"asc";
		iniOrRefreshScroll();
	});
})();
//切换排序方向
(function(){
	$("i.order-dir").click(function(){
		if(isLoading){$.notice("你的操作太频繁了...");return;}
		$(this).toggleClass("icon-sort-asc icon-sort-desc");
		updateProductList();
	});
})();

//切换排序的列
(function(){
	$(".order-col").click(function(){
		if(isLoading){$.notice("你的操作太频繁了...");return;}
		if($(this).hasClass("active"))return;
		$(this).addClass("active").siblings(".active").removeClass("active");
		orderCol = $(this).attr("data-order-col");
		updateProductList();
	});
})();

//
updateProductList();
function updateProductList(isLoadMore = false){
	isLoading = true;         //进入loading状态
	if(!isLoadMore){
		if(scroll)scroll.scrollTo(0,0,0);  //如果不是加载更多，要让scroll重置
		$("i.rocket").hide();//如果不是加载更多，请求一批新的数据，返回顶部的火箭重置不显示，因为用户重头开始看。
		
		$("ul.product-list").empty();//如果不是加载更多，请求一批新的数据，清空ul.product-list
	} 
	$("p.info").text("加载中...");       //更新p.info显示文本
	setTimeout(function(){
		$.myAjax({
		global:false,
		type: "post",
		url: "/product/list",
		data: {
			name: searchName,
			cid,
			orderCol,
			orderDir,
			begin: $('ul.product-list>li').length,
			pageSize
		    },
		success: data => {
			isLoading = false;    //结束loading状态
			hasMore = data.length === pageSize; //更新全局变量hasMore
			data.forEach(product =>showProduct(product));//显示商品数据
			iniOrRefreshScroll();
			if(data.length === pageSize)        //更新p.info显示文本
			  $("p.info").text("上拉加载更多...");
			else if($("ul.product-list>li").length > 0)
			 $("p.info").text("已到达底部...");
			 else 
			 $("p.info").text("暂无相关信息，敬请期待...");
		
		}
	});
	},800);
	
}

function showProduct(product){
	$(`
	  <li>
	     <a href="/pages/detail/detail.html?cid=${product.id}">
		   <div class="img">
		      <img src="${product.avatar}" class="avatar" />
		   </div>
		   <div class="detail">
		      <div class="detail-top">
			    <p class="name">${product.name}</p>
				<span>${product.brief}</span>
			  </div>
			  <div class="detail-bottom">
			    <p class="price">￥${product.price}</p>
				<span class="sale">评论：${product.sale}条</span>
				<span class="rate">销量：${product.rate}</span>
			  </div>
		   </div>
		 </a>
	  </li>
	`).appendTo("ul.product-list");
	
}

//初始化或更新滚动对象
function iniOrRefreshScroll(){
	imagesLoaded($(".scroll")[0],function(){
		setTimeout(function(){
			if(scroll === null){
		    scroll = new IScroll($(".scroll")[0],{
			deceleration: 0.003,
			bounce:false,
			probeType: 2,
			click:true
		});
		var isTriggerLoadMore = false;   //标识用户的操作是否触发了加载更多
		
		scroll.on("scroll",function(){
			$("i.rocket").toggle(Math.abs(this.y)>= 100);
			// if(Math.abs(this.y)>= 100){
			// 	$("i.rocket").show();
			// }else {
			// 	$("i.rocket").hide();
			// }
			if(hasMore && !isLoading){      //如果可以加载更多而且当前没有处于loading状态
				if(this.y - this.maxScrollY === 0){   //如果上拉达到加载更多的临界点
					$("p.info").text("放手立即加载...");
				    isTriggerLoadMore = true;
				}else {                               //如果没有达到加载更多的临界点
					$("p.info").text("上拉加载更多...");
				    isTriggerLoadMore = false;
				}
			}
		});
		scroll.on("scrollEnd",function(){
			if(isTriggerLoadMore){
				isTriggerLoadMore = false;
				updateProductList(true);
			}
		});
	}
	else 
	        scroll.refresh();
		},20);
	});
	
	
}




