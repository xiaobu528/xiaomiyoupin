(function(){
	
	  $("input.btn-sign").click(function(){
		  var name = $("input.name").val();
		  var pwd = $("input.pwd").val();
		  var phone = $("input.phone").val();
		  $.myAjax({
			  type: "post",
			  url: "/user/register",
			  data: {
			    name,
			    pwd,
				phone
			  },
			  success: data => {
		         $.notice("注册成功！！")
			  }
		  });
		 window.location.replace("/pages/login2/login2.html");
	  });
  })();
  
  var form1 = $(".demo").Validform({
  	// tiptype: 2
  	tiptype: 3,
  	datatype: {
  		"zbc": /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/
  	}
  	
  });