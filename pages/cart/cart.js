//下拉滑出
// $(".content").toggle(
//   function(){
// 	$(".top").slideDown(1000);
//   },
//   function(){
//     $(".top").slideUp(1000);
//   }
//   );
  var userName = Cookies.get("user");
  if(!sessionStorage.token){
	Cookies.set("backUrl",window.location.href);
	window.location.href = "page/login/login.html";
}
//公共函数
function updateTotalAndAccount(){
	var total = 0, account = 0;
	$(".cart-list>tbody>tr").each(function(i,tr){
		if($(tr).attr("data-checked") === "1"){
		total += parseInt($(tr).attr("data-count"));
	    account += parseInt($(tr).attr("data-count")) * parseInt($(tr).attr("data-price"));
		}
	});
	$("span.account").text(account);
	Cookies.set("account",account);
	$("span.total").text(total);
}
//公共函数:更新复选框
function updateCheckboxAll(){
	 //找出所有未选中的购物记录tr
	$(".checkbox.all").toggleClass("checked",$('tbody>tr[data-checked="0"]').length === 0);
}
	
	//根据用户名找到用户购物车的商品信息并展示
	  $.myAjax({
		  type: "post",
		  url: "/cart/list",
		  success: data =>{
			  console.log(data);
			  showCart(data);
		  }
	  });
	

  function showCart(product){
	  if (product.length > 0)
		$('.cart-wrapper').addClass(' show') ;
	else
		$('.cart-empty').addClass(' show');
	  product.forEach(function(item){
		 $(`
			<tr data-id="${item.id}" data-checked="1" data-price="${item.price}" data-count="${item.count}" data-show="" >
				<td class="one"><i class="checkbox checked"></i></td>
				<td class="two">
					<img class="img2" src="${item.avatar}">
					<div>
					    <span class="name">${item.name}</span>
						<p class="three">
						<span class="price">￥${item.price}</span>
						<input type="button" value="-" class="btn-decrease" ${item.count === 1 ? "disabled" : ""} />
						<span class="count">${item.count}</span>
						<input type="button" value="+" class="btn-increase" ${item.count === 5 ? "disabled" : "" }/>	
						</p>
					</div>
				</td>
		   </tr>
	  `).appendTo(".cart-list>tbody");
	  // console.log(item.id); 
	 });  
	 add();//增加某条记录的购买数量
	 decrease();//减少某条记录
	 del();//删除记录的购买数量
	 check();//联动勾选
     updateTotalAndAccount();   
  }

            
		   
function add(){ 		
   //增加某条记录的购买数量
	  $(".btn-increase").click(function(){
			 console.log(666);
		  var $tr = $(this).closest("tr");
		  var count = parseInt($tr.attr("data-count"));
		  var id = parseInt($tr.attr("data-id"));
		  count++;
		  console.log(count);
		   $(this).prevAll("input.btn-decrease").attr("disabled",false);
			if(count === 5)$(this).attr("disabled",true);
			$(this).prevAll("span.count").text(count);
			$tr.attr("data-count",count);
			if($tr.attr("data-checked") === "1") updateTotalAndAccount();
		  //更新数据
		  $.myAjax({
			  type: "post",
			  url: "/cart/increase/" + id,
			  success: data => {
		         console.log("加1成功");
				  }
			});
		});		
	}

	
	function decrease(){
	//减少某条记录的购买数量
	$(".btn-decrease").click(function(){
		var $tr = $(this).closest("tr");
		var count = parseInt($tr.attr("data-count"));
		var id = parseInt($tr.attr("data-id"));
		count--;
		$(this).nextAll("input.btn-increase").attr("disabled",false);
		if(count === 1)$(this).attr("disabled",true);
		$(this).nextAll("span.count").text(count);
		$tr.attr("data-count",count);
		if($tr.attr("data-checked") === "1") updateTotalAndAccount();
		//数据更新
		 $.myAjax({
		  type: "post",
		  url: "/cart/decrease/" + id,  //虽然是数值，但是还是得+id
		  success: data => {
			 console.log("减1成功！");
		  }
		  });
	});	  
	}
		  
		//联动勾选
       function check(){
		   //行联动全选
		  $("tbody .checkbox").click(function(){
			  $(this).closest("tr").attr("data-checked",$(this).hasClass("checked")? "0" : "1");//改父亲
			  $(this).toggleClass("checked");
			 updateTotalAndAccount();
			 updateCheckboxAll();
		  });
		  //全选联动行
		  $(".checkbox.all").click(function(){    
			    $(this).toggleClass("checked");
				//下面开始是想找tbody>tr
				$("tbody>tr").attr("data-checked",$(this).hasClass("checked")? "1":"0").
				find(".checkbox").toggleClass("checked",$(this).hasClass("checked"));//从父亲改变到儿子改变
				updateTotalAndAccount();
		  });
	   }

function del(){
	//编辑和完成
	var num1 = [];
	var num2 = [];
$(".header-in>span.check").click(function(){
	
	$(this).toggleClass("active");
	if($(this).hasClass("active")){
		$(".footer").css("display","block");
	    $(".footer1").css("display","none");
		$(this).text("编辑");
	   
	   $('tbody>tr[data-show="1"]').attr("data-checked","1");
	   $('tbody>tr[data-show="1"]').find("i.checkbox").addClass("checked");
	   updateCheckboxAll();
		updateTotalAndAccount();
	}else{
		$(this).text("完成");
		$('tr[data-checked="0"]').attr("data-show","0");
		updateTotalAndAccount();
		updateCheckboxAll();
		$("span.total").text("");
		
		$("i.checkbox.checked").closest("tr").attr("data-show","1");
		$("i.checkbox.checked").closest("tr").attr("data-checked","0");
		$("i.checkbox.all.checked").removeClass("checked");
		$("i.checkbox.checked").removeClass("checked");
		// 把原本下面选中的保存下来然后还原
		$("span.total").text("");
		$(".footer").css("display","none");
		$(".footer1").css("display","block");
	    }
	  
});
    
	$(".delete").click(function(){
		$.confirm("确定要删？",function(){
			var ids = [];
		$("tbody>tr>td.one>i.checked").each(function(i,item){
			ids.push(parseInt($(this).closest("tr").attr("data-id")));
			$(this).closest("tr").remove();
		});
		console.log(ids);
		$.myAjax({
			type: "post",
			url: "/cart/remove",
			data: {
				ids
			},
			success: data=> {
				console.log("删除成功！！");
			}
		   });
		updateCheckboxAll();//和全选之间的联动
		});
	 });
		updateTotalAndAccount(); 
}

	 
 //结算
 (function(){
 	 $("button.settle").click(function(){
 		 var $checkedTrs = $('tbody>tr[data-checked="1"]');
 		  if($checkedTrs.length === 0){
 			  $.notice("傻了朋友？");return;
 		  }
 		  $.confirm("商品已经加入购物车，前往结算？",function(){
 			  var settleIds = "";
 			  $checkedTrs.each(function(i,tr){
 				  settleIds += $(this).attr("data-id") + ",";
 				  
 			  });
 			  settleIds = settleIds.slice(0,-1);
 			  Cookies.set("settle",settleIds);
 			  window.location.href = "/pages/order/order.html";
			  
 		  });
 	 });
 })();
 
  