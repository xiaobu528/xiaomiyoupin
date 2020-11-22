// $(".delete").click(function(){
// 	$(".page-header").css("display","none");
// });
// var userName = Cookies.get("user");
// if(!sessionStorage.getItem("token")){
// 	Cookies.set('backUrl', window.location.href);
// 	window.location.href = '/pages/login2/login2.html';
// }
// //定义一个选中的id
// // var addressId = 0;
// // if(Cookies.get("addressId")){
// // 	addressId = parseInt(Cookies.get("addressId"));
// // 	Cookies.remove("addressId");
// // }
// $.myAjax({
// 	type: "get",
// 	url: "/address/list",
// 	success: data => {
// 		console.log("取地址成功！");
// 		console.log(data);
// 		showAddress(data);
// 	}
// });
// function showAddress(address){
// 	if(address.length === 0){
// 		$(".address-empty").css("display","block");
// 	}
// 	    $(".list").css("display","block");
		
//     // 渲染地址
// 	address.forEach(function(item){
// 		$(`
// 		<li class="bottom" data-id="${item.id}" data-isDefault="${item.isDefault}">
// 		 <i class="checkbox"></i>
// 		 <div class="middle">
// 		    <div class="middle1">
// 			    <span>${item.receiveName}</span>
// 			    <a href="javascript:void(0)" data-id="${item.id}" class="btn-default${item.isDefault ? ' default' : '' }"></a>
// 				<p>${item.receivePhone}</p>
// 			</div>
// 		    <div class="middle2">
// 			  <span class="left">${item.receiveRegion}</span>
// 			  <span>${item.receiveDetail}</span>
// 			</div>
// 		 </div>
// 		  <div class="right">
// 				<img src="../../images/otherimgs/083.png" data-id="${item.id}" class="btn-update checked" />
// 				<img src="../../images/otherimgs/03.png" data-id="${item.id}" class="btn-remove"/>
// 		  </div>
// 		</li>
// 		`).appendTo(".list>.address-list");
// 		// if(addressId ===0 && item.isDefault) addressId = item.id;//谁是默认地址谁默认选中
// 		$('ul.address-list>li[data-isDefault=1]').addClass("select");	
// 		$("ul.address-list>li").click(function(){
// 			if($(this).hasClass("select"))return;
// 				$(this).siblings(".select").removeClass("select");
// 				$(this).addClass("select");
// 				var addressId = parseInt($(this).attr("data-id"));
// 				Cookies.set("addressId",addressId);
// 				window.location.replace("/pages/order/order.html");
// 		});
// 	});
// 	//绑定各种点击事件
// 	setDefault(address);//设置默认地址
// 	remove(address);//删除
// 	click();//修改
// 	add();//新增
// }


// //表单重置
// // $(".btn-add").click(function(){
// // 	var form1 = $(".form1");
// // 	form1[0].reset();
// // 	});
	
// //设为默认地址(已实现)
// function setDefault(address){
// 	$('.address-list>li>div>a').click(function(e){
// 			  //如果点击的是设置默认地址
// 			  if($(e.target).hasClass("btn-default")){
// 				  if($(e.target).hasClass("default")) return;//如果已经是默认不响应
// 				  var id = 0;
// 				  address.forEach(function(item){
// 					  if(item.name === userName){
// 						  item.isDefault = item.id === parseInt($(e.target).attr("data-id"));
// 						  id = item.id;
// 					  }
// 				  });
// 				  $(".btn-default").each(function(i,item){
// 					  $(this).removeClass("default");
// 				  });
// 				  $(e.target).addClass("default");
// 				  $.notice("默认地址设置成功！");
// 			  }
			  
// 			$.myAjax({
// 				type: "get",
// 				url: "/address/set_default/" + id,
// 				success: data => {
// 				console.log("默认地址设置成功！");
// 					}
// 				});  
//         });
// }
// //修改地址
// function click(){
// 	$(".btn-update").click(function(){
// 	window.location.replace("/pages/addressAdd/add.html");
// 	var id = parseInt($(this).attr("data-id"));
// 	Cookies.set("id",id);
// });
// }
// //新增地址
// function add(){
// 	$(".btn-add").click(function(){
// 		window.location.replace("/pages/addressAdd/add.html");
// 		Cookies.set("add",666);
// 	});
// }

// //删除地址(实现)
// function remove(address){
// 	$(".btn-remove").click(function(){
// 	   //如果点击的是删除按钮
// 	   var id = parseInt($(this).attr("data-id"));
// 	   $(this).closest("li").remove();
// 	   if($(".address-list>li").length === 0){
// 		   $(this).closest("ul").removeClass("show");
// 		   $(".address-empty").addClass("show");
// 		  }
		  
// 		  //删除地址
// 	    $.myAjax({
// 	    	type: "get",
// 	    	url: "/address/remove/" + id,
// 	    	success: data => {
// 	    		console.log("删除成功！！");
// 	    	}
// 	       });
		  
// 		});  	 
// }

// // if(Cookies.get("isFromOrderConfirm")){
// // 			Cookies.remove("isFromOrderConfirm");
// // 			Cookies.set("addressId",address.id);
// // 			window.location.replace("../order/order.html");
// // 		}else{
// // 			window.location.href = window.location.href;
// // 		}

		   
	
	
	
	$(".delete").click(function(){
		$(".page-header").css("display","none");
	});
	var userName = Cookies.get("user");
	if(!sessionStorage.getItem("token")){
		Cookies.set('backUrl', window.location.href);
		window.location.href = '/pages/login2/login2.html';
	}
	
	$.myAjax({
		type: "get",
		url: "/address/list",
		success: data => {
			console.log("取地址成功！");
			console.log(data);
			showAddress(data);
		}
	});
	var container = [];
	function showAddress(address){
		if(address.length === 0){
			$(".address-empty").css("display","block");
		}
		    $(".list").css("display","block");
			
	    // 渲染地址
		address.forEach(function(item){
			$(`
			<li class="bottom" data-id="${item.id}" data-isDefault="${item.isDefault}">
			 <i class="checkbox"></i>
			 <div class="middle">
			    <div class="middle1">
				    <span>${item.receiveName}</span>
				    <a href="javascript:void(0)" data-id="${item.id}" class="btn-default${item.isDefault ? ' default' : '' }"></a>
					<p>${item.receivePhone}</p>
				</div>
			    <div class="middle2">
				  <span class="left">${item.receiveRegion}</span>
				  <span>${item.receiveDetail}</span>
				</div>
			 </div>
			  <div class="right">
					<img src="../../images/otherimgs/083.png" data-id="${item.id}" class="btn-update checked" />
			  </div>
			  <i class="delete">删除</i>
			</li>
			`).appendTo(".list>.address-list");
			// if(addressId ===0 && item.isDefault) addressId = item.id;//谁是默认地址谁默认选中
			$('ul.address-list>li[data-isDefault=1]').addClass("select");	
			$("ul.address-list>li>i.checkbox").click(function(){
				if($(this).closest("li").hasClass("select"))return;
					$(this).closest("li").siblings(".select").removeClass("select");
					$(this).closest("li").addClass("select");
					var addressId = parseInt($(this).closest("li").attr("data-id"));
					Cookies.set("addressId",addressId);
					window.location.replace("/pages/order/order.html");
			});
		});
	    container = document.querySelectorAll('.address-list>li');
		console.log(container);
		//绑定各种点击事件
		setDefault(address);//设置默认地址
		remove(address);//删除
		click();//修改
		add();//新增
	}
	
		
	//设为默认地址(已实现)
	function setDefault(address){
		$('.address-list>li>.middle>.middle1>a').click(function(e){
				  //如果点击的是设置默认地址
				  if($(e.target).hasClass("btn-default")){
					  if($(e.target).hasClass("default")) return;//如果已经是默认不响应
					  var id = 0;
					  
					  id = parseInt($(e.target).attr("data-id"));
					  console.log(parseInt($(e.target).attr("data-id")));
					  // $(".address-list>li[data-isDefault=id]").siblings(".select").removeClass("select");
					  $(".address-list>li[data-isDefault=1]").addClass("select");
					  $(".btn-default").each(function(i,item){
						  $(this).removeClass("default");
					  });
					  $(e.target).addClass("default");
					  $.notice("默认地址设置成功！");
				  }
				  
				$.myAjax({
					type: "get",
					url: "/address/set_default/" + id,
					success: data => {
					console.log("默认地址设置成功！");
		              window.location.reload();
						}
					});  
	        });
	}
	//修改地址
	function click(){
		$(".btn-update").click(function(){
		window.location.replace("/pages/addressAdd/add.html");
		var id = parseInt($(this).attr("data-id"));
		Cookies.set("id",id);
	});
	}
	//新增地址
	function add(){
		$(".btn-add").click(function(){
			window.location.replace("/pages/addressAdd/add.html");
			Cookies.set("add",666);
		});
	}
	
	//删除地址(实现)
	function remove(address){
		$(".delete").click(function(){
		   //如果点击的是删除按钮
		   var id = parseInt($(this).closest("li").attr("data-id"));
		   $(this).closest("li").remove();
		   if($(".address-list>li").length === 0){
			   $(this).closest("ul").removeClass("show");
			   $(".address-empty").addClass("show");
			  }
			  
			  //删除地址
		    $.myAjax({
		    	type: "get",
		    	url: "/address/remove/" + id,
		    	success: data => {
		    		console.log("删除成功！！");
		    	}
		       });
			  
			});  	 
	}
	
	
//计算根节点HTML的字体大小
function resizeRoot(){
	var deviceWidth = document.documentElement.clientWidth,
	num = 750,
	num1 = num / 100;
 if(deviceWidth > num){
	deviceWidth = num; 
 }
	document.documentElement.style.fontSize = deviceWidth / num1 + "px";
}
//根节点HTML的字体大小初始化
	resizeRoot();

window.onresize = function(){
	resizeRoot();
};	


// //侧滑显示删除按钮
// var expansion = null; //是否存在展开的list
// // var container = document.querySelectorAll('.address-list>li');
// // console.log(container);
// for(var i = 0; i < container.length; i++){ 
// 	var x, y, X, Y, swipeX, swipeY;
// 	container[i].addEventListener('touchstart', function(event) {
// 		x = event.changedTouches[0].pageX;
// 		y = event.changedTouches[0].pageY;
// 		swipeX = true;
// 		swipeY = true ;
//   if(expansion){ //判断是否展开，如果展开则收起
// 		expansion.className = "";
//   }  
//  });
//  container[i].addEventListener('touchmove', function(event){
  
//   X = event.changedTouches[0].pageX;
//   Y = event.changedTouches[0].pageY;  
//   // 左右滑动
//   if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0){
//    // 阻止事件冒泡
//    event.stopPropagation();
//    if(X - x > 10){ //右滑
// 		event.preventDefault();
// 		this.className = ""; //右滑收起
//    }
//    if(x - X > 10){ //左滑
// 		event.preventDefault();
// 		this.className = "swipeleft"; //左滑展开
// 		expansion = this;
// 		}
// 		swipeY = false;
// 	}
//   // 上下滑动
//   if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
// 		swipeX = false;
// 		}  
// 	});
// }
	
		
		
		
		
		
		
		
		
	
	
	
	
	
	
	
	
	
	





