(function(){
	
	  $("input.btn-login-pwd").click(function(){
		  var name = $("input.name").val();
		  var pwd = $("input.pwd").val();
		  $.myAjax({
			  type: "post",
			  url: "/user/login_pwd",
			  data: {
			    name,
			    pwd
			  },
			  success: data => {
			  // console.log(data);
		      sessionStorage.setItem("token",data);
		      Cookies.set('user', name);
		      var backUrl = Cookies.get('backUrl');
		      //replace方式的跳转是退不回来的
		      window.location.replace(backUrl || 'pages/index/index.html');//后面的路径要改
			  
			  }
		  });
		 
	  });
  })();