// (function(){
// 	var codes = ["A","B","C","D","E","F","G","H","1","2","3","4","5","6"];
// 	$("span.code").click(function(){
// 		var codeStr = "";
// 		for(var i = 1;i < 5; i++){
// 			codeStr += codes[Math.floor(Math.random()*codes.length)];
// 		}
// 		this.innerText = codeStr;
// 	});
// })();

//  (function(){
//   	  $(".btn-login-phone").click(function(){
// 		  var phone = document.querySelector("input.phone").value;
//   		  var code2 = document.querySelector("input.code2").value.trim();
		  
// 		  if(code2 === "获取验证码"||code2.toUpperCase()!== document.querySelector("span.code").innerText){
// 			  Message.notice("验证码错误！");
// 			  return;
// 		  }
// 		  //获取数据库的user表数据
// 		  $.myAjax({
			  
			  
// 		  });
// 		  //判断手机号是否存在
		  
//   		 //  var userList = JSON.parse(sessionStorage.getItem("data")).userList;
//   		 //    if(userList.some(function(item){return item.phone === phone;})){
//   			// 	Cookies.set('user', userList.find(function(item){return item.phone === phone;}));
//   			// 	var backUrl = Cookies.get('backUrl');
//   			// 	Cookies.remove('backUrl');
//   			// 	//replace方式的跳转是退不回来的
//   			// 	window.location.replace(backUrl || '../index/index.html');
//   			// }
//   			// else {
//   			// 	Message.notice("手机号不存在！");
//   			// }
// 	  });
//   })();


