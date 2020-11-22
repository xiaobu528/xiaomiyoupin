$(".bb2>ul>li>p.right").click(function(){
	
	if($(this).hasClass("checked")) return;
	$(this).addClass("checked");
	 $(this).closest("li").siblings().find("p.right").removeClass("checked");
	//find运用
});
 var orderId = Cookies.get("data");
 console.log(orderId);
 $.myAjax({
 	type: "get",
 	url: "/order/account/" + orderId,
 	success: data => {
 		console.log("666");
		console.log(data);
		$(".price").text(data);
		$(".account").text(data);
		// Cookies.remove("data");
 	}
 });
 $(".btn-add").click(function(){
	 $.myAjax({
	 	type: "get",
	 	url: "/order/pay/" + orderId,
	 	success: data => {
	 		console.log("购买成功！");
	 		// Cookies.remove("data");
	 	}
	 });
 });
 //倒计时
	 var interval;
 window.onload = function() { 
 	var d = new Date("1111/1/1,1:" + ":0" + ":0"); 
 	interval = setInterval(function() { 
 		var h = d.getHours();
 		var m = d.getMinutes(); 
 		var s = d.getSeconds();
 		h = h < 10 ? "0" + h : h; 
 		 m = m < 10 ? "0" + m : m;
 		  s = s < 10 ? "0" + s : s;
 		   time.innerHTML = h + ":" + m + ":" + s;
 			if (h == 0 && m == 0 && s == 0) { 
 				clearInterval(interval); 
 				// return;
				 window.location.replace("/pages/order_list/order_list.html");
 			} 
 			d.setSeconds(s - 1);
 		}, 1000);
 }
 
 