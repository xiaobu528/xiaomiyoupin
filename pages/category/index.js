function showSubCategory(data){
	data.forEach(function(item){
		$(`
		 <li>
		 <a href="/pages/list/list.html?cid=${item.id}">
		 <img src="${item.avatar}" />
		 <span>${item.name}</span>
		 </a>
		 </li>
		`).appendTo("ul.category-sub");
	});
}
function showMainCategory(data){
	data.forEach(function(item){
		$(`
		<li data-id="${item.id}" data-avatar="${item.avatar}">
		<span>${item.name}</span>
		</li>`
		).click(function(){
			if($(this).hasClass("active"))return;
			$(this).add(`.right>.category-sub>li:eq(${$(this).index()})`).
			addClass("active").siblings(".active").removeClass("active");
		    $(".avatar").attr("src",$(this).attr("data-avatar"))
			$.myAjax({
				// global:false,  //去除loading
				url: "/category/list/" + $(this).attr("data-id"),     
				success: data => { 
					$("p.empty").toggleClass("show",data.length ===0);
					$("ul.category-sub").empty().toggleClass("show",data.length !==0);
					showSubCategory(data);
					console.log(data);
			}
		});
		}).appendTo("ul.category-main");
	  });
         //选项卡
		//   $("ul.category-main>li").click(function(){
		// 	if($(this).hasClass("active"))return;
		// 	$(this).add(`.right>.category-sub>li:eq(${$(this).index()})`).
		// 	addClass("active").siblings(".active").removeClass("active");
		//     $(".avatar").attr("src",$(this).attr("data-avatar"))
		// 	$.myAjax({
		// 		// global:false,  //去除loading
		// 		url: "/category/list/" + $(this).attr("data-id"),     
		// 		success: data => { 
		// 			$("p.empty").toggleClass("show",data.length ===0);
		// 			$("ul.category-sub").empty().toggleClass("show",data.length !==0);
		// 			showSubCategory(data);
		// 			console.log(data);
		// 	}
		// });
		// });
		}
//发送ajax请求向服务器请求一级分类的数据。
$.myAjax({
	url: "/category/list/0",  //请求的url地址
	  success: data => { //请求成功后的回调函数
		showMainCategory(data);
		$("ul.category-main>li").eq(0).trigger('click');//模拟事件
      }
});























