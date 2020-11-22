if(!sessionStorage.getItem("token")){
	Cookies.set('backUrl', window.location.href);
	window.location.href = 'backUrl|| "/pages/loginVue/loginVue.html"';
}

axios({
	method: "get",
	url: "/address/list",
	headers: {
		'Content-Type':"application/json",
	    "Authorization": sessionStorage.getItem('token')
	}
	
}).then(
      function(response){
	   if(response.status === 200){
		   switch(response.data.code){
			   case 200: 
					if(response.data.msg) notice(response.data.msg);
					
					console.log(response.data);
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
new Vue({
    el: "#root",
	data: {
		model: {
			id: 0,
			isDefault: 2,
			name: "",
			receiveDetail: "",
			receiveName: "",
			receivePhone: "",
			receiveRegion: ""
		}
	},
	methods: {
		
	}
});
