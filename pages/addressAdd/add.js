//表单重置
$(".btn-add").click(function(){
	var form1 = $(".form1");
	form1[0].reset();
	});
//根据某个地址id获取某个地址的信息	
var id = Cookies.get("id");
if(id){
	$.myAjax({
	type: "get",
	url: "/address/model/" + id,
	success: data => {
		console.log(data);
		update(data);
	}
});	
//修改地址
function update(address){
	// console.log(address.receiveName);
	// $("input[name='receiveName']").attr("value",address.receiveName);
	 $("input[name='receiveName']").val(address.receiveName);
	 $("input[name='receivePhone']").val(address.receivePhone);
	 $("input[name='receiveRegion']").val(address.receiveRegion);
	 // regionPicker.set(address.receiveRegion);
	 $("input[name='receiveDetail']").val(address.receiveDetail);
	 
	 $(".btn-save").click(function(){
		 var form1 = $(".form1");
		 $.myAjax({
		 	type: "post",
		 	url: "/address/update",
		 	data: {
		 			id,
		 			receiveName:  $("input[name='receiveName']").val(),
		 			receivePhone: $("input[name='receivePhone']").val(),
					receiveRegion: $("input[name='receiveRegion']").val(),
		 			// receiveRegion: regionPicker.get(),
		 			receiveDetail: $("input[name='receiveDetail']").val()
		 		   },
		 			success: data => {
		 				console.log("修改成功！");
						window.location.replace("/pages/address/address.html");
		 			  }
		         });  
	 });
	 Cookies.remove("id");
}
}
//新增地址
    if(Cookies.get("add") === "666"){
		$(".btn-save").click(function(){
			$.myAjax({
			type: "post",
			url: "/address/add",
			data: {
				receiveName:  $("input[name='receiveName']").val(),
				receivePhone: $("input[name='receivePhone']").val(),
				receiveRegion: $("input[name='receiveRegion']").val(),
				// receiveRegion: regionPicker.get(),
				receiveDetail: $("input[name='receiveDetail']").val()
			},
			success: data => {
				console.log("新增成功！");
			   window.location.replace("/pages/address/address.html");
			}
		});
		});
		Cookies.remove("add");
	}

	

