var userName = Cookies.get("user");
//定义一个选中的id
// var addressId = 0;
// if(Cookies.get("addressId")){
// 	addressId = parseInt(Cookies.get("addressId"));
// 	Cookies.remove("addressId");
// }
$(".news>i").click(function(){
	$(".news").css("display","none");
});
function showAddress(address){
	// address.forEach(function(item){
		$(`
		   <li data-id="${address.id}">
		   <div>
				<h3>${address.receiveName}</h3>
				${address.isDefault ? "<span>默认</span>" : ""}
		   </div>
		   <p>${address.receivePhone}</p>
		   <p><span>${address.receiveRegion}</span><span>${address.receiveDetail}</span></p>
		   </li>
		`).appendTo($(".address-wrapper>.left>.address-list"));
	// });
	
	
}
//获取某个id的地址的值
var id = Cookies.get("addressId");
if(id){
	$.myAjax({
	type: "get",
	url: "/address/model/" + id,
	success: data => {
		showAddress(data);
		Cookies.set("addressId1",data.id);
		Cookies.remove("addressId");
	}
        });			
}else {
	//获取其默认地址
	$.myAjax({
		type: "get",
		url: "/address/get_default",
		success: data => {
			showAddress(data);
			Cookies.set("addressId1",data.id);
		}
	       });
}


//商品清单
 $.myAjax({
		  type: "post",
		  url: "/cart/list",
		  success: data =>{
			  console.log(data);
			  showList(data);
		  }
	  });

function showList(product){
	product.forEach(function(item){
	 $(`
	   <ul>
	    <li><img src="${item.avatar}" /></li>
			<li class="right">
				<ul>
				  <li class="a1">${item.name}</li>
				  <li class="a2"><span class="left">${item.price}</span><span class="right"><i class="iconfont icon-chenghao"></i>${item.count}</span></li>
				  <li class="a3">7天无理由退货</li>
				</ul>
			</li>
	   </ul>
	 `).appendTo(".order-content");
	});
	var account = Cookies.get("account");
	$(".two>.top>.right>span").text(account);
	$(".account").text(account);
}
var account = Cookies.get("account");
var addressId = Cookies.get("addressId1");
console.log(account);
console.log(addressId);
//生成订单
var ids = Cookies.get("settle");
// if(!ids) window.location.replace("../index/index.html");
ids = ids.split(",").map(function(item){return parseInt(item);});
console.log(ids);

$(".btn-confirm").click(function(){
	//所有的收货地址
	$.myAjax({
		type: "get",
		url: "/address/list",
		success: data => {
			if(data.length === 0){
				$.alert("请添加地址！！");
			}
		}
	});
		
	$.myAjax({
		type: "post",
		url: "/order/confirm",
		data: {
			ids,
			account,
			addressId
		},
		success: data => {
			console.log("生成订单成功");
		    console.log(data);
			Cookies.set("data",data);
		}
	});
	// Cookies.remove("settle");
	 window.location.replace("/pages/pay/pay.html");
});
