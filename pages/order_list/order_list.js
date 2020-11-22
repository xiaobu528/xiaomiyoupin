 //选项卡
 $(".tab").each(function(i,tab){
  			$("ul.tab-title>li").click(function(){
  				if($(this).hasClass("active"))return;
  				$(this).add(`ul.tab-content>li:eq(${$(this).index()})`).
  				addClass("active").siblings(".active").removeClass("active");
  			});
  			});
//填数据
//全部订单
$.myAjax({
	type: "get",
	url: "/order/list_all",
	success: data => {
		// console.log(data);
		showAllOrder(data);
	}
});
var product = [];
var product1 = [];
var product2 = [];
var id = 0;
function showAllOrder(data){
	if(data.length > 0){
		$(".empty").css("display","none");
	}
	else {
		$(".list").css("display","none");
	}
	data.forEach(function(item){
		$(`
		<li class="li1" data-id="${item.orderId}">
			<div class="order-top">
				<img src="../../images/otherimgs/068.png" />
				<span>小米自营</span>
				<p>${item.pay === 0 ? "待付款" : "已支付" }</p>
			</div>
			<ul class="detail">
			
			</ul>
			<div class="first">
				<p>共<span class="c1"></span>件商品，总金额：￥<span class="c2">${item.account}</span>.00</p>
			</div>
			<div class="second">
				<p>删除订单</p>
				<a href="">再次购买</a>
			</div>
	   </li>
	  
	`).appendTo(".list");
	// console.log(item.details);
    product.push(item.details);
	});
	console.log(product);
	var num = 0;
	var num1 = 0;
	var nums = [];
	var nums1 = [];
	product.forEach(function(item2,i){
		item2.forEach(function(item3){
			$(`
				  <li>
						<img src="${item3.avatar}" />
						<p>${item3.name}</p>
						<ul>
					   <li>￥${item3.price}</li>
					   <li><i class="iconfont icon-chenghao"></i><span>${item3.count}</span></li>
						</ul>
				  </li>
				`).appendTo($("ul.list>li.li1").eq(i).find(".detail"));
			}); 
	     });
		//插入每个订单的商品数量
		product.forEach(function(item4){
			item4.forEach(function(item5){
			num = num + item5.count;
			});
			nums.push(num);
		});
		console.log(nums);
		nums1.push(nums[0]);
		for(var i = 1; i< nums.length; i++){
			nums1.push(nums[i] - nums[i-1]);
		}
		console.log(nums1);
		nums1.forEach(function(item,i){
			$(".list>li span.c1").eq(i).text(item);
		});
	   removeOrder();//删除
}

	

//已付款的订单
$.myAjax({
	type: "get",
	url: "/order/list_pay",
	success: data => {
		// console.log(data);
		showPayOrder(data);
	
	}
});
function showPayOrder(data){
	if(data.length > 0){
		$(".empty2").css("display","none");
	}
	else {
		$(".list2").css("display","none");
	}
	data.forEach(function(item){
		$(`
		<li class="li1" data-id="${item.orderId}">
					<div class="order-top">
						<img src="../../images/otherimgs/068.png" />
						<span>小米自营</span>
						<p>${item.pay === 0 ? "待付款" : "已支付" }</p>
					</div>
					<ul class="detail">
					
					</ul>
					<div class="first">
						<p>共<span class="c1"></span>件商品，总金额：￥<span class="c2">${item.account}</span>.00</p>
					</div>
					<div class="second">
						<p>删除订单</p>
						<a href="">再次购买</a>
					</div>
		</li>
	  
	`).appendTo(".list2");
	product1.push(item.details);
	});
	// console.log(product1);
	var num = 0;
	var num1 = 0;
	var nums = [];
	var nums1 = [];
	product1.forEach(function(item2,i){
		item2.forEach(function(item3){
			$(`
				  <li>
						<img src="${item3.avatar}" />
						<p>${item3.name}</p>
						<ul>
					   <li>￥${item3.price}</li>
					   <li><i class="iconfont icon-chenghao"></i>${item3.count}</li>
						</ul>
				  </li>
				`).appendTo($("ul.list2>li.li1").eq(i).find(".detail"));
			});
	     });
	  //插入每个订单的商品数量
	  product1.forEach(function(item4){
	  	item4.forEach(function(item5){
	  	num = num + item5.count;
	  	});
	  	nums.push(num);
	  });
	  console.log(nums);
	  nums1.push(nums[0]);
	  for(var i = 1; i< nums.length; i++){
	  	nums1.push(nums[i] - nums[i-1]);
	  }
	  console.log(nums1);
	  nums1.forEach(function(item,i){
	  	$(".list2>li span.c1").eq(i).text(item);
	  });
		 removeOrder();//删除
}
//未付款
$.myAjax({
	type: "get",
	url: "/order/list_unpay",
	success: data => {
		// console.log(data);
		showUnpayOrder(data);
	}
});
function showUnpayOrder(data){
	if(data.length > 0){
		$(".empty1").css("display","none");
	}
	else {
		$(".list1").css("display","none");
	}
	data.forEach(function(item){
		$(`
		<li class="li1" data-id="${item.orderId}">
					<div class="order-top">
						<img src="../../images/otherimgs/068.png" />
						<span>小米自营</span>
						<p>${item.pay === 0 ? "待付款" : "已支付" }</p>
					</div>
					<ul class="detail">
					
					</ul>
					<div class="first">
						<p>共<span class="c1"></span>件商品，总金额：￥<span class="c2">${item.account}</span>.00</p>
					</div>
					<div class="second">
						<p>删除订单</p>
						<a href="/pages/detail/detail.html">再次购买</a>
					</div>
		</li>
	  
	`).appendTo(".list1");
	product2.push(item.details);
	});
	// console.log(product2);
	var num = 0;
	var num1 = 0;
	var nums = [];
	var nums1 = [];
	product2.forEach(function(item2,i){
		item2.forEach(function(item3){
			$(`
				  <li>
						<img src="${item3.avatar}" />
						<p>${item3.name}</p>
						<ul>
					   <li>￥${item3.price}</li>
					   <li><i class="iconfont icon-chenghao"></i>${item3.count}</li>
						</ul>
				  </li>
				`).appendTo($("ul.list1>li.li1").eq(i).find(".detail"));
			});
	     });
		 //插入每个订单的商品数量
		 product2.forEach(function(item4){
		 	item4.forEach(function(item5){
		 	num = num + item5.count;
		 	});
		 	nums.push(num);
		 });
		 console.log(nums);
		 nums1.push(nums[0]);
		 for(var i = 1; i< nums.length; i++){
		 	nums1.push(nums[i] - nums[i-1]);
		 }
		 console.log(nums1);
		 nums1.forEach(function(item,i){
		 	$(".list1>li span.c1").eq(i).text(item);
		 });
		 removeOrder();//删除
}

//删除订单
function removeOrder(){
	$(".li1>.second>p").click(function(){
	var orderId = $(this).closest("li").attr("data-id");
	// console.log(orderId);
	$.myAjax({
	type: "get",
	url: "/order/remove/" + orderId,
	success: data => {
		console.log("删除成功");
		window.location.reload();
		$.notice("删除成功！！");
	}
	});
});
}


