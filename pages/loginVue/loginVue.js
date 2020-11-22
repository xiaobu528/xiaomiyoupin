    new Vue({
    		   el: "#root",
    		   data: {
    			   model: {
    				   name: "",
    				   pwd: ""
    			   }
    		   },
			   methods: {
				login: function(){
					   axios({
				method: "post",
				url: "/user/login_pwd",
				headers: {'Content-Type':"application/json"},
				data: JSON.stringify({
					// name: "zhangsan",
					// pwd: "123"
					name: this.model.name,
					pwd: this.model.pwd
				})
			}).then(
			   function(response){
				   if(response.status === 200){
					   switch(response.data.code){
						   case 200: 1
						        if(response.data.msg) notice(response.data.msg);
								sessionStorage.setItem("token",response.data.data); 
								console.log(response.data);
								console.log("登录成功！！");
								break;
						   case 401:
						   case 404:
						   case 199:
						   case 500:
						   default: 
						   if(response.data.msg) alert(response.data.msg);
						   break;
					   }
				   }
			   },
			   function(error){
				   alert(error);
					}
				);
			 }
		}
    });
    	
     